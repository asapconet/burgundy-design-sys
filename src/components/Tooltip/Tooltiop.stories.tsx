import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger className="rounded-ds-md border border-ds-border px-4 py-2 text-sm">
        Hover or focus me
      </TooltipTrigger>

      <TooltipContent>Helpful information appears here.</TooltipContent>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger className="rounded-ds-md border border-ds-border px-4 py-2 text-sm">
        Product information
      </TooltipTrigger>

      <TooltipContent>
        This explains additional information about the product.
      </TooltipContent>
    </Tooltip>
  ),
};
