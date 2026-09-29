import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its content", () => {
    render(<Button>Save changes</Button>);

    expect(
      screen.getByRole("button", { name: "Save changes" }),
    ).toBeInTheDocument();
  });

  it("supports variants", () => {
    render(<Button variant="destructive">Delete</Button>);

    expect(screen.getByRole("button", { name: "Delete" })).toHaveClass(
      "bg-ds-destructive",
    );
  });

  it("disables itself while loading", () => {
    render(<Button loading>Saving</Button>);

    const button = screen.getByRole("button", { name: "Saving" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("supports disabled state", () => {
    render(<Button disabled>Submit</Button>);

    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });
});
