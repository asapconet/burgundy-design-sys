import { describe, expect, it } from "vitest";
import { evaluateReproduction } from "./ai-benchmark";

describe("AI reproduction benchmark", () => {
  it("rejects an AI reproduction that violates the design system", () => {
    const source = `
      <section className="rounded-[10px] bg-[#ffffff] p-[13px]">
        <button className="bg-[#800020]">Save changes</button>
        <div onClick={() => undefined}>Advanced settings</div>
      </section>
    `;

    const result = evaluateReproduction(source, 5);

    expect(result.passed).toBe(0);
    expect(result.total).toBe(4);
    expect(result.checks.every((check) => !check.passed)).toBe(true);
  });

  it("accepts a corrected reproduction", () => {
    const source = `
      <section className="rounded-ds-lg bg-ds-background p-ds-4">
        <Button>Save changes</Button>
        <Button variant="ghost">Advanced settings</Button>
      </section>
    `;

    const result = evaluateReproduction(source, 0);

    expect(result.passed).toBe(4);
    expect(result.total).toBe(4);
    expect(result.checks.every((check) => check.passed)).toBe(true);
  });

  it("fails token compliance independently", () => {
    const source = `
      <section>
        <Button>Save changes</Button>
      </section>
    `;

    const result = evaluateReproduction(source, 1);

    expect(result.checks[0]).toEqual({
      name: "Token compliance",
      passed: false,
    });

    expect(result.checks[1].passed).toBe(true);
    expect(result.checks[2].passed).toBe(true);
    expect(result.checks[3].passed).toBe(true);
  });

  it("fails interaction semantics independently", () => {
    const source = `
      <section>
        <Button>Save changes</Button>
        <div onClick={() => undefined}>Advanced settings</div>
      </section>
    `;

    const result = evaluateReproduction(source, 0);

    expect(result.checks[0].passed).toBe(true);
    expect(result.checks[1].passed).toBe(true);
    expect(result.checks[2].passed).toBe(false);
    expect(result.checks[3].passed).toBe(false);
  });
});
