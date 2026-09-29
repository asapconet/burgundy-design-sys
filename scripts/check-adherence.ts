import { checkAdherence } from "./adherence";

const violations = await checkAdherence("src/components");

if (violations.length > 0) {
  console.error("\nDesign-system adherence violations:\n");

  for (const violation of violations) {
    console.error(
      `❌ ${violation.file}:${violation.line} — ${violation.rule}: "${violation.value}" — ${violation.message}`,
    );
  }

  console.error(`\n${violations.length} violation(s) found.\n`);
  process.exit(1);
}

console.log("✓ Design-system adherence check passed.");
