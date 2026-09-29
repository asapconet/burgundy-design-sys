import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

function TestDialog() {
  return (
    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>

      <DialogContent>
        <DialogTitle>Delete account</DialogTitle>

        <DialogDescription>This action cannot be undone.</DialogDescription>

        <DialogClose>Cancel</DialogClose>
      </DialogContent>
    </Dialog>
  );
}

describe("Dialog", () => {
  it("is closed initially", () => {
    render(<TestDialog />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens when triggered", async () => {
    const user = userEvent.setup();

    render(<TestDialog />);

    await user.click(screen.getByRole("button", { name: "Open dialog" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Delete account" }),
    ).toBeInTheDocument();
  });

  it("closes with the close button", async () => {
    const user = userEvent.setup();

    render(<TestDialog />);

    await user.click(screen.getByRole("button", { name: "Open dialog" }));

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes with Escape", async () => {
    const user = userEvent.setup();

    render(<TestDialog />);

    await user.click(screen.getByRole("button", { name: "Open dialog" }));

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("provides accessible labelling", async () => {
    const user = userEvent.setup();

    render(<TestDialog />);

    await user.click(screen.getByRole("button", { name: "Open dialog" }));

    const dialog = screen.getByRole("dialog");

    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleName("Delete account");
    expect(dialog).toHaveAccessibleDescription("This action cannot be undone.");
  });
});
