import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components";

const meta = {
  title: "Governance/Overview",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const System: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl gap-ds-4 md:grid-cols-3">
      <Card header="Tokens">
        <p className="text-sm text-ds-muted">
          Centralized visual decisions flow through semantic tokens.
        </p>
      </Card>

      <Card header="Contracts">
        <p className="text-sm text-ds-muted">
          Components define explicit behavior, variants, and accessibility
          expectations.
        </p>
      </Card>

      <Card header="Validation">
        <p className="text-sm text-ds-muted">
          Tests and adherence checks catch regressions and non-compliant UI.
        </p>
      </Card>
    </div>
  ),
};
