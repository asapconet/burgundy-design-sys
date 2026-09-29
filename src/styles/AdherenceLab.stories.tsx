import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";

const meta = {
  title: "Governance/Adherence Lab",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Compliant: Story = {
  render: () => (
    <Card className="max-w-lg" header="Compliant implementation">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-ds-foreground">Save changes</p>
          <p className="mt-1 text-sm text-ds-muted">
            Uses Burgundy's existing component and token contracts.
          </p>
        </div>

        <Button variant="primary">Save changes</Button>

        <div className="rounded-ds-md border border-ds-success bg-ds-success/10 p-4">
          <p className="text-sm font-medium text-ds-success">
            ✓ Adherence passed
          </p>
          <p className="mt-1 text-sm text-ds-foreground">
            Uses semantic tokens and a documented component variant.
          </p>
        </div>
      </div>
    </Card>
  ),
};

export const NonCompliant: Story = {
  render: () => (
    <Card className="max-w-lg" header="Non-compliant implementation">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-ds-foreground">
            AI-generated reproduction
          </p>
          <p className="mt-1 text-sm text-ds-muted">
            This implementation bypasses the Burgundy token system.
          </p>
        </div>

        <button className="rounded-[7px] bg-[#800020] px-[13px] py-[11px] text-white">
          Save changes
        </button>

        <div className="rounded-ds-md border border-ds-destructive bg-ds-destructive/10 p-4">
          <p className="text-sm font-medium text-ds-destructive">
            ✕ Adherence failed
          </p>
          <p className="mt-1 text-sm text-ds-foreground">
            Detected raw color, pixel values, and arbitrary Tailwind values.
          </p>
        </div>
      </div>
    </Card>
  ),
};
