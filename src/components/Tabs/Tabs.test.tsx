import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, it, vi } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

function TestTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="account">Account settings</TabsContent>

      <TabsContent value="security">Security settings</TabsContent>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("renders the active tab", () => {
    render(<TestTabs />);

    expect(screen.getByRole("tab", { name: "Account" })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    expect(screen.getByRole("tabpanel")).toHaveTextContent("Account settings");
  });

  it("changes the active tab", async () => {
    const user = userEvent.setup();

    render(<TestTabs />);

    await user.click(screen.getByRole("tab", { name: "Security" }));

    expect(screen.getByRole("tab", { name: "Security" })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    expect(screen.getByRole("tabpanel")).toHaveTextContent("Security settings");
  });

  it("does not render inactive content", () => {
    render(<TestTabs />);

    expect(screen.queryByText("Security settings")).not.toBeInTheDocument();
  });

  it("supports controlled state", async () => {
    const onValueChange = vi.fn();

    render(
      <Tabs value="account" onValueChange={onValueChange}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account">Account settings</TabsContent>
      </Tabs>,
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole("tab", { name: "Security" }));

    expect(onValueChange).toHaveBeenCalledWith("security");
  });

  it("associates triggers with their panels", () => {
    render(<TestTabs />);

    const trigger = screen.getByRole("tab", {
      name: "Account",
    });

    const panel = screen.getByRole("tabpanel");

    expect(trigger).toHaveAttribute("aria-controls", panel.id);

    expect(panel).toHaveAttribute("aria-labelledby", trigger.id);
  });
});
