import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("associates the label with the radio", () => {
    render(<Radio name="plan" label="Pro" />);

    expect(screen.getByLabelText("Pro")).toBeInTheDocument();
  });

  it("supports descriptions", () => {
    render(
      <Radio name="plan" label="Pro" description="For professional users." />,
    );

    expect(screen.getByLabelText("Pro")).toHaveAccessibleDescription(
      "For professional users.",
    );
  });

  it("exposes validation errors", () => {
    render(<Radio name="plan" label="Pro" error="Please select a plan." />);

    const radio = screen.getByLabelText("Pro");

    expect(radio).toHaveAttribute("aria-invalid", "true");
    expect(radio).toHaveAccessibleDescription("Please select a plan.");
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please select a plan.",
    );
  });

  it("supports checked state", () => {
    render(<Radio name="plan" label="Pro" defaultChecked />);

    expect(screen.getByLabelText("Pro")).toBeChecked();
  });

  it("supports disabled state", () => {
    render(<Radio name="plan" label="Pro" disabled />);

    expect(screen.getByLabelText("Pro")).toBeDisabled();
  });

  it("supports required state", () => {
    render(<Radio name="plan" label="Pro" required />);

    expect(screen.getByLabelText("Pro", { exact: false })).toBeRequired();
  });
});
