import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders its content", () => {
    render(<Badge>Active</Badge>);

    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("supports variants", () => {
    render(<Badge variant="success">Success</Badge>);

    expect(screen.getByText("Success")).toHaveClass("bg-ds-success/10");
  });

  it("renders icons as decorative content", () => {
    render(<Badge icon={<span data-testid="icon">✓</span>}>Complete</Badge>);

    expect(screen.getByTestId("icon").parentElement).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
