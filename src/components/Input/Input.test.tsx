import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("associates the label with the input", () => {
    render(<Input label="Email" />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("supports descriptions", () => {
    render(<Input label="Email" description="We'll never share your email." />);

    const input = screen.getByLabelText("Email");

    expect(input).toHaveAccessibleDescription("We'll never share your email.");
  });

  it("exposes validation errors", () => {
    render(<Input label="Email" error="Please enter a valid email." />);

    const input = screen.getByLabelText("Email");

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Please enter a valid email.");

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please enter a valid email.",
    );
  });

  it("supports description and error together", () => {
    render(
      <Input
        label="Email"
        description="Use your work email."
        error="Email is required."
      />,
    );

    const input = screen.getByLabelText("Email");

    expect(input).toHaveAccessibleDescription(
      "Use your work email. Email is required.",
    );
  });

  it("supports required inputs", () => {
    render(<Input label="Email" required />);

    const input = screen.getByLabelText("Email", { exact: false });

    expect(input).toBeRequired();
  });

  it("supports disabled inputs", () => {
    render(<Input label="Email" disabled />);

    expect(screen.getByLabelText("Email")).toBeDisabled();
  });
});
