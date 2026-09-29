import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Button, Card } from "../components";

const meta = {
  title: "Governance/Adherence Lab",
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

        <Alert variant="success" title="Adherence passed">
          Uses semantic tokens and a documented component variant.
        </Alert>
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
            This implementation intentionally bypasses the Burgundy token
            system.
          </p>
        </div>

        <button className="rounded-[7px] bg-[#800020] px-[13px] py-[11px] text-white">
          Save changes
        </button>

        <Alert variant="destructive" title="Adherence failed">
          Detected raw color, pixel values, and arbitrary Tailwind values.
        </Alert>
      </div>
    </Card>
  ),
};
