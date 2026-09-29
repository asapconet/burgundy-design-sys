import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

function TestTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>Help</TooltipTrigger>
      <TooltipContent>Helpful information</TooltipContent>
    </Tooltip>
  );
}

describe("Tooltip", () => {
  it("does not render content initially", () => {
    render(<TestTooltip />);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("opens on focus", async () => {
    const user = userEvent.setup();
    render(<TestTooltip />);

    await user.tab();

    expect(screen.getByRole("tooltip")).toHaveTextContent(
      "Helpful information",
    );
  });

  it("opens on hover", async () => {
    const user = userEvent.setup();
    render(<TestTooltip />);

    await user.hover(screen.getByRole("button", { name: "Help" }));

    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("closes when focus leaves", async () => {
    const user = userEvent.setup();
    render(
      <>
        <TestTooltip />
        <button>Outside</button>
      </>,
    );

    await user.tab();
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    await user.tab();

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(<TestTooltip />);

    await user.tab();
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  it("supports controlled state", () => {
    render(
      <Tooltip open>
        <TooltipTrigger>Help</TooltipTrigger>
        <TooltipContent>Helpful information</TooltipContent>
      </Tooltip>,
    );

    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("respects side prop", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip side="bottom">
        <TooltipTrigger>Help</TooltipTrigger>
        <TooltipContent>Helpful information</TooltipContent>
      </Tooltip>,
    );

    await user.hover(screen.getByRole("button", { name: "Help" }));

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip.className).toMatch(/top-full/);
  });
});
