import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    fallback: "Aaron asap",
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Image: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=12",
    alt: "Aaron asap",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" fallback="AA" />
      <Avatar size="md" fallback="AA" />
      <Avatar size="lg" fallback="AA" />
      <Avatar size="xl" fallback="AA" />
    </div>
  ),
};

export const Online: Story = {
  args: {
    status: "online",
  },
};

export const Away: Story = {
  args: {
    status: "away",
  },
};

export const Busy: Story = {
  args: {
    status: "busy",
  },
};

export const Offline: Story = {
  args: {
    status: "offline",
  },
};

export const PersonFallback: Story = {
  render: () => <Avatar fallback={undefined} />,
};
