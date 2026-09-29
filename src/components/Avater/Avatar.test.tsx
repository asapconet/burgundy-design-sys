import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders fallback initials", () => {
    render(<Avatar fallback="Aaron asap" />);

    expect(screen.getByText("AA")).toBeInTheDocument();
  });

  it("renders an image", () => {
    render(<Avatar src="/avatar.jpg" alt="Aaron asap" />);

    expect(screen.getByRole("img", { name: "Aaron asap" })).toBeInTheDocument();
  });

  it("supports sizes", () => {
    render(<Avatar fallback="AA" size="lg" />);

    expect(screen.getByText("AA")).toHaveClass("text-base");
  });

  it("supports status", () => {
    render(<Avatar fallback="AA" status="online" />);

    expect(screen.getByLabelText("Status: online")).toBeInTheDocument();
  });

  it("supports icon fallback", () => {
    render(<Avatar icon={<span data-testid="user-icon">U</span>} />);

    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
  });

  it("renders custom class names", () => {
    render(<Avatar fallback="AA" className="custom-avatar" />);

    expect(screen.getByText("AA").parentElement).toHaveClass("custom-avatar");
  });
});
