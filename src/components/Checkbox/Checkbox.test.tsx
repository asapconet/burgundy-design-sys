import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("associates the label with the checkbox", () => {
    render(<Checkbox label="Accept terms" />);

    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("supports descriptions", () => {
    render(
      <Checkbox label="Accept terms" description="You agree to our terms." />,
    );

    expect(screen.getByLabelText("Accept terms")).toHaveAccessibleDescription(
      "You agree to our terms.",
    );
  });

  it("exposes validation errors", () => {
    render(
      <Checkbox label="Accept terms" error="You must accept the terms." />,
    );

    const checkbox = screen.getByLabelText("Accept terms");

    expect(checkbox).toHaveAttribute("aria-invalid", "true");
    expect(checkbox).toHaveAccessibleDescription("You must accept the terms.");
    expect(screen.getByRole("alert")).toHaveTextContent(
      "You must accept the terms.",
    );
  });

  it("supports checked state", () => {
    render(<Checkbox label="Accept terms" defaultChecked />);

    expect(screen.getByLabelText("Accept terms")).toBeChecked();
  });

  it("supports disabled state", () => {
    render(<Checkbox label="Accept terms" disabled />);

    expect(screen.getByLabelText("Accept terms")).toBeDisabled();
  });

  it("supports required state", () => {
    render(<Checkbox label="Accept terms" required />);

    expect(
      screen.getByLabelText("Accept terms", { exact: false }),
    ).toBeRequired();
  });
});
