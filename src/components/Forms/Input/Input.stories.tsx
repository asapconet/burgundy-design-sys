import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input";

const meta = {
  title: "Components/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Password",
    type: "password",
    description: "Must contain at least 8 characters.",
  },
};

export const Required: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Email address",
    value: "not-an-email",
    error: "Please enter a valid email address.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Search",
    inputSize: "sm",
    placeholder: "Search...",
  },
};

export const Large: Story = {
  args: {
    label: "Search",
    inputSize: "lg",
    placeholder: "Search...",
  },
};

export const WithIcons: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    leftIcon: "⌕",
    rightIcon: "×",
  },
};
