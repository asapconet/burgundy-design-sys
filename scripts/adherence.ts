import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

export interface AdherenceViolation {
  file: string;
  line: number;
  rule: string;
  value: string;
  message: string;
}

const rules = [
  {
    name: "raw color",
    pattern: /#[0-9a-fA-F]{3,8}/g,
    message: "Use a design token instead of a raw hex color.",
  },
  {
    name: "raw pixel value",
    pattern: /\b\d+px\b/g,
    message: "Use a design token instead of a raw pixel value.",
  },
  {
    name: "arbitrary Tailwind value",
    pattern: /\b(?:bg|text|border|rounded|p|px|py|m|mx|my|gap|w|h)-\[[^\]]+\]/g,
    message: "Use a design token instead of an arbitrary Tailwind value.",
  },
];

async function getComponentFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getComponentFiles(path)));
      continue;
    }

    if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(path);
    }
  }

  return files;
}

export async function checkAdherence(
  directory: string,
): Promise<AdherenceViolation[]> {
  const files = await getComponentFiles(directory);
  const violations: AdherenceViolation[] = [];

  for (const file of files) {
    const content = await readFile(file, "utf8");
    const relativePath = relative(process.cwd(), file);

    for (const rule of rules) {
      for (const match of content.matchAll(rule.pattern)) {
        const index = match.index ?? 0;
        const line = content.slice(0, index).split("\n").length;

        violations.push({
          file: relativePath,
          line,
          rule: rule.name,
          value: match[0],
          message: rule.message,
        });
      }
    }
  }

  return violations;
}
