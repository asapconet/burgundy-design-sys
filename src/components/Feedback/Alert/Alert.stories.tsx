import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Your changes have been saved successfully.",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Changes saved",
    children: "Your profile has been updated successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Trial ending soon",
    children: "Your trial expires in 3 days.",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Something went wrong",
    children: "We couldn't save your changes. Please try again.",
  },
};
