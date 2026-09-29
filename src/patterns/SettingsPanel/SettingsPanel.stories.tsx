import type { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsPanel } from "./SettingsPanel";

const meta = {
  title: "Patterns/SettingsPanel",
  component: SettingsPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SettingsPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValues: {
      displayName: "ASAP",
      email: "asap@example.com",
      theme: "system",
      productUpdates: true,
      securityAlerts: true,
      language: "en",
    },
  },
};

export const DarkTheme: Story = {
  args: {
    initialValues: {
      displayName: "ASAP",
      email: "asap@example.com",
      theme: "dark",
      productUpdates: true,
      securityAlerts: false,
      language: "en",
    },
  },
};

export const ErrorState: Story = {
  args: {
    initialValues: {
      displayName: "ASAP",
      email: "asap@example.com",
    },
    error: "We couldn't save your settings. Please try again.",
  },
};

export const Loading: Story = {
  args: {
    initialValues: {
      displayName: "ASAP",
      email: "asap@example.com",
    },
    loading: true,
  },
};

export const Validation: Story = {
  args: {
    initialValues: {
      displayName: "",
      email: "",
    },
  },
};
