import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    label: "Accept terms and conditions",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    description: "You agree to our terms and privacy policy.",
  },
};

export const WithError: Story = {
  args: {
    error: "You must accept the terms.",
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
