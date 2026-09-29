import { readFile } from "node:fs/promises";
import { checkAdherence } from "./adherence";

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

  const tokenCompliance =
    adherenceViolations.filter((violation) =>
      violation.file.endsWith(fixture.path.split("/").pop() ?? ""),
    ).length === 0;

  const componentComposition = source.includes("<Button");

  const interactionSemantics = !/<div[\s\S]*onClick=/.test(source);

  const accessibilityContract = interactionSemantics && componentComposition;

  const checks = [
    {
      name: "Token compliance",
      passed: tokenCompliance,
    },
    {
      name: "Component composition",
      passed: componentComposition,
    },
    {
      name: "Interaction semantics",
      passed: interactionSemantics,
    },
    {
      name: "Accessibility contract",
      passed: accessibilityContract,
    },
  ];

  const passed = checks.filter((check) => check.passed).length;
  const total = checks.length;

  console.log(`\n${fixture.name}\n`);

  for (const check of checks) {
    console.log(`${check.passed ? "✓" : "✕"} ${check.name}`);
  }

  console.log(`\nResult: ${passed}/${total} contracts preserved.`);

  if (fixture.expectedToPass && passed !== total) {
    process.exitCode = 1;
  }

  if (!fixture.expectedToPass && passed === total) {
    process.exitCode = 1;
  }
}
