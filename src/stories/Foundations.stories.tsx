import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Overview",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Color: Story = {
  render: () => (
    <div className="grid max-w-3xl grid-cols-2 gap-ds-4 md:grid-cols-4">
      <div className="rounded-ds-md bg-ds-primary p-ds-6 text-ds-primary-foreground">
        Primary
      </div>

      <div className="rounded-ds-md bg-ds-success p-ds-6 text-white">
        Success
      </div>

      <div className="rounded-ds-md bg-ds-warning p-ds-6 text-white">
        Warning
      </div>

      <div className="rounded-ds-md bg-ds-destructive p-ds-6 text-white">
        Destructive
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="max-w-3xl space-y-ds-6">
      <div>
        <p className="text-sm text-ds-muted">Heading</p>
        <h1 className="text-4xl font-semibold text-ds-foreground">
          Build consistent interfaces.
        </h1>
      </div>

      <div>
        <p className="text-sm text-ds-muted">Body</p>
        <p className="text-base text-ds-foreground">
          Burgundy provides a shared visual language through tokens, components,
          and documented interaction contracts.
        </p>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="space-y-ds-4">
      <div className="flex items-center gap-ds-4">
        <div className="size-ds-1 rounded-ds-sm bg-ds-primary" />
        <span className="text-sm text-ds-muted">space-1</span>
      </div>

      <div className="flex items-center gap-ds-4">
        <div className="size-ds-2 rounded-ds-sm bg-ds-primary" />
        <span className="text-sm text-ds-muted">space-2</span>
      </div>

      <div className="flex items-center gap-ds-4">
        <div className="size-ds-4 rounded-ds-sm bg-ds-primary" />
        <span className="text-sm text-ds-muted">space-4</span>
      </div>

      <div className="flex items-center gap-ds-4">
        <div className="size-ds-6 rounded-ds-sm bg-ds-primary" />
        <span className="text-sm text-ds-muted">space-6</span>
      </div>

      <div className="flex items-center gap-ds-4">
        <div className="size-ds-8 rounded-ds-sm bg-ds-primary" />
        <span className="text-sm text-ds-muted">space-8</span>
      </div>
    </div>
  ),
};
