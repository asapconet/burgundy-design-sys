import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Continue",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Cancel",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Learn more",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Saving",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: "→",
    children: "Continue",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: "→",
    children: "Continue",
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    "aria-label": "Continue",
    children: "→",
  },
};
