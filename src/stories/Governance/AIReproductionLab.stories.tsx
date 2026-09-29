import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Badge, Button, Card } from "../../components";

const meta = {
  title: "Governance/AI Reproduction Lab",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Evaluation: Story = {
  render: () => (
    <Card className="w-full max-w-3xl" header="AI reproduction evaluation">
      <div className="space-y-ds-6">
        <div>
          <p className="text-sm font-medium text-ds-foreground">Scenario</p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            An AI system was asked to reproduce a Burgundy interface from a
            visual reference. The result looks plausible but violates several
            system contracts.
          </p>
        </div>

        <div className="rounded-ds-md border border-ds-border p-ds-6">
          <div className="flex items-center justify-between gap-ds-4">
            <div>
              <p className="font-medium text-ds-foreground">Account settings</p>

              <p className="mt-ds-1 text-sm text-ds-muted">
                Review your account configuration.
              </p>
            </div>

            <Badge variant="warning">AI generated</Badge>
          </div>

          <div className="mt-ds-6 flex flex-wrap gap-ds-3">
            {/* These areIntentional AI reproduction errors. */}
            <button className="rounded-[7px] bg-[#800020] px-[13px] py-[11px] text-white">
              Save changes
            </button>

            <button className="rounded-[6px] border border-[#d6d6d2] px-[15px] py-[9px]">
              Cancel
            </button>
          </div>
        </div>

        <Alert variant="destructive" title="Reproduction failed adherence">
          The implementation is visually plausible but does not preserve
          Burgundy's design-system contracts.
        </Alert>

        <div className="grid gap-ds-3 sm:grid-cols-2">
          <EvaluationItem label="Visual structure" status="Pass" />
          <EvaluationItem label="Token usage" status="Fail" />
          <EvaluationItem label="Component reuse" status="Fail" />
          <EvaluationItem label="Accessibility contract" status="Fail" />
          <EvaluationItem label="Variant contract" status="Fail" />
          <EvaluationItem label="Adherence rules" status="Fail" />
        </div>

        <div className="rounded-ds-md border border-ds-border bg-ds-muted/10 p-ds-4">
          <p className="text-sm font-medium text-ds-foreground">
            Evaluation principle
          </p>

          <p className="mt-ds-1 text-sm leading-6 text-ds-muted">
            A successful AI reproduction is not merely visually similar. It must
            reproduce the system's tokens, component contracts, accessibility
            behavior, and supported variants.
          </p>
        </div>

        <div className="flex flex-wrap gap-ds-3">
          <Button variant="primary">Correct implementation</Button>
          <Button variant="outline">View violations</Button>
        </div>
      </div>
    </Card>
  ),
};

function EvaluationItem({
  label,
  status,
}: {
  label: string;
  status: "Pass" | "Fail";
}) {
  const passed = status === "Pass";

  return (
    <div className="flex items-center justify-between gap-ds-4 rounded-ds-md border border-ds-border p-ds-4">
      <span className="text-sm text-ds-foreground">{label}</span>

      <Badge variant={passed ? "success" : "destructive"}>{status}</Badge>
    </div>
  );
}
