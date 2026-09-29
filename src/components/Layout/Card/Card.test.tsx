import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders content", () => {
    render(<Card>Account details</Card>);

    expect(screen.getByText("Account details")).toBeInTheDocument();
  });

  it("renders header and footer", () => {
    render(
      <Card header="Settings" footer="Actions">
        Content
      </Card>,
    );

    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("supports interactive styling", () => {
    render(<Card interactive>Project</Card>);

    expect(screen.getByText("Project").parentElement).toHaveClass(
      "cursor-pointer",
    );
  });
});
