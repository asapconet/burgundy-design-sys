import { readFile } from "node:fs/promises";
import { checkAdherence } from "./adherence";

export interface BenchmarkCheck {
  name: string;
  passed: boolean;
}

export interface BenchmarkResult {
  checks: BenchmarkCheck[];
  passed: number;
  total: number;
}

export function evaluateReproduction(
  source: string,
  adherenceViolationCount: number,
): BenchmarkResult {
  const checks: BenchmarkCheck[] = [
    {
      name: "Token compliance",
      passed: adherenceViolationCount === 0,
    },
    {
      name: "Component composition",
      passed: source.includes("<Button"),
    },
    {
      name: "Interaction semantics",
      passed: !/<div[\s\S]*onClick=/.test(source),
    },
    {
      name: "Accessibility contract",
      passed: !/<div[\s\S]*onClick=/.test(source) && source.includes("<Button"),
    },
  ];

  return {
    checks,
    passed: checks.filter((check) => check.passed).length,
    total: checks.length,
  };
}

const fixtures = [
  {
    name: "AI-generated reproduction",
    path: "scripts/fixtures/ai-generated/AccountSettings.tsx",
    expectedToPass: false,
  },
  {
    name: "Corrected reproduction",
    path: "scripts/fixtures/ai-generated/AccountSettings.fixed.tsx",
    expectedToPass: true,
  },
];

for (const fixture of fixtures) {
  const source = await readFile(fixture.path, "utf8");

  const directory = fixture.path.slice(0, fixture.path.lastIndexOf("/"));

  const adherenceViolations = await checkAdherence(directory);

  const fileName = fixture.path.split("/").pop() ?? "";

  const fileViolations = adherenceViolations.filter((violation) =>
    violation.file.endsWith(fileName),
  );

  const result = evaluateReproduction(source, fileViolations.length);

  console.log(`\n${fixture.name}\n`);

  for (const check of result.checks) {
    console.log(`${check.passed ? "✓" : "✕"} ${check.name}`);
  }

  console.log(
    `\nResult: ${result.passed}/${result.total} contracts preserved.`,
  );

  if (fixture.expectedToPass && result.passed !== result.total) {
    process.exitCode = 1;
  }

  if (!fixture.expectedToPass && result.passed === result.total) {
    process.exitCode = 1;
  }
}
