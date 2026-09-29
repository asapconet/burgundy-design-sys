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
      <div className="space-y-ds-4">
        <div>
          <p className="text-sm font-medium text-ds-foreground">Save changes</p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            Uses Burgundy's existing component and token contracts.
          </p>
        </div>

        <Button variant="primary">Save changes</Button>

        <div className="rounded-ds-md border border-ds-success bg-ds-success/10 p-ds-4">
          <p className="text-sm font-medium text-ds-success">
            ✓ Adherence passed
          </p>

          <p className="mt-ds-1 text-sm text-ds-foreground">
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
      <div className="space-y-ds-4">
        <div>
          <p className="text-sm font-medium text-ds-foreground">
            AI-generated reproduction
          </p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            Intentionally bypasses Burgundy's token and component contracts.
          </p>
        </div>

        {/* Intentional violations for the Adherence Lab. */}
        <button className="rounded-[7px] bg-[#800020] px-[13px] py-[11px] text-white">
          Save changes
        </button>

        <div className="rounded-ds-md border border-ds-destructive bg-ds-destructive/10 p-ds-4">
          <p className="text-sm font-medium text-ds-destructive">
            ✕ Adherence failed
          </p>

          <p className="mt-ds-1 text-sm text-ds-foreground">
            Detected design-system violations:
          </p>

          <ul className="mt-ds-2 list-disc space-y-1 pl-5 text-sm text-ds-foreground">
            <li>Raw color: #800020</li>
            <li>Arbitrary radius: 7px</li>
            <li>Arbitrary spacing: 13px / 11px</li>
            <li>Bypasses the Button component contract</li>
          </ul>
        </div>
      </div>
    </Card>
  ),
};
