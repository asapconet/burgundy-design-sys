import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";

const meta = {
  title: "Components/Forms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "plan",
    label: "Pro",
  },
};

export const Checked: Story = {
  args: {
    name: "plan",
    label: "Pro",
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    name: "plan",
    label: "Pro",
    description: "For professional users.",
  },
};

export const WithError: Story = {
  args: {
    name: "plan",
    label: "Pro",
    error: "Please select a plan.",
  },
};

export const Required: Story = {
  args: {
    name: "plan",
    label: "Pro",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "plan",
    label: "Pro",
    disabled: true,
  },
};
