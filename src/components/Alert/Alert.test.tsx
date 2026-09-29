import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders its content", () => {
    render(<Alert>Something happened.</Alert>);

    expect(screen.getByRole("alert")).toHaveTextContent("Something happened.");
  });

  it("renders a title", () => {
    render(<Alert title="Something went wrong">Please try again later.</Alert>);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    expect(screen.getByText("Please try again later.")).toBeInTheDocument();
  });

  it("supports variants", () => {
    render(<Alert variant="success">Saved successfully.</Alert>);

    expect(screen.getByRole("alert")).toHaveClass(
      "border-ds-success",
      "bg-ds-success/10",
    );
  });

  it("supports warning alerts", () => {
    render(<Alert variant="warning">Your trial ends soon.</Alert>);

    expect(screen.getByRole("alert")).toHaveClass("border-ds-warning");
  });

  it("supports destructive alerts", () => {
    render(<Alert variant="destructive">Request failed.</Alert>);

    expect(screen.getByRole("alert")).toHaveClass("border-ds-destructive");
  });

  it("renders decorative icons", () => {
    render(<Alert icon={<span data-testid="icon">!</span>}>Warning</Alert>);

    expect(screen.getByTestId("icon").parentElement).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
