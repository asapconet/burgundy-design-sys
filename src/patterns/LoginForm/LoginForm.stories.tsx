import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoginForm } from "./LoginForm";

const meta = {
  title: "Patterns/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: "Invalid email or password. Please try again.",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const CustomContent: Story = {
  args: {
    title: "Welcome back",
    description: "Sign in to continue to your workspace.",
    submitLabel: "Continue",
  },
};
