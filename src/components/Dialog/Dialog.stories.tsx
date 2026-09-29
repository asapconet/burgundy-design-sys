import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const meta = {
  title: "Components/Dialog",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>

      <DialogContent>
        <DialogTitle>Delete account</DialogTitle>

        <DialogDescription>
          This action cannot be undone. Your account and all associated data
          will be permanently removed.
        </DialogDescription>

        <div className="mt-6 flex justify-end gap-3">
          <DialogClose>Cancel</DialogClose>

          <button
            type="button"
            className="rounded-ds-md bg-ds-destructive px-4 py-2 text-sm font-medium text-ds-primary-foreground"
          >
            Delete account
          </button>
        </div>
      </DialogContent>
    </Dialog>
  ),
};
