import { describe, expect, it } from "vitest";
import { checkAdherence } from "./adherence";

describe("design-system adherence", () => {
  it("passes for compliant components", async () => {
    const violations = await checkAdherence("src/components");

    expect(violations).toEqual([]);
  });

  it("detects design-system violations", async () => {
    const violations = await checkAdherence("scripts/fixtures");

    expect(violations).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          rule: "raw color",
          value: "#800020",
        }),
        expect.objectContaining({
          rule: "raw pixel value",
          value: "7px",
        }),
        expect.objectContaining({
          rule: "arbitrary Tailwind value",
          value: "rounded-[7px]",
        }),
      ]),
    );
  });
});
