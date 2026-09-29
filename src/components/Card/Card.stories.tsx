import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../Button/Button";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    interactive: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p>
        This is a simple card containing content without a header or footer.
      </p>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    header: (
      <div>
        <strong>Account settings</strong>
        <p>Manage your account preferences.</p>
      </div>
    ),
    children: <p>Update your preferences and account information.</p>,
  },
};

export const WithFooter: Story = {
  args: {
    children: <p>Card content with an action area below.</p>,
    footer: <Button>Save changes</Button>,
  },
};

export const Complete: Story = {
  args: {
    header: (
      <div>
        <strong>Account settings</strong>
        <p>Manage your account preferences.</p>
      </div>
    ),
    children: (
      <p>Update your preferences and account information from this panel.</p>
    ),
    footer: (
      <div>
        <Button variant="secondary">Cancel</Button>
        <Button>Save changes</Button>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    tabIndex: 0,
    role: "button",
    children: (
      <div>
        <strong>View project</strong>
        <button
          onClick={() => alert("Project details opened!")}
          className="flex flex-col items-center "
        >
          Click to open the project details.
        </button>
      </div>
    ),
  },
};
