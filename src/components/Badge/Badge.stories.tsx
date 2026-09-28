import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    children: "Draft",
  },
};

export const Brand: Story = {
  args: {
    variant: "brand",
    children: "Featured",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Active",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Pending",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Failed",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Information",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    variant: "success",
    children: "Active",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "brand",
    children: "Featured",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "success",
    icon: "✓",
    children: "Verified",
  },
};
