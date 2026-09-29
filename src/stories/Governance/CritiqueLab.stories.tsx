import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Button, Card } from "../../components";

const meta = {
  title: "Governance/Critique Lab",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TokenDrift: Story = {
  render: () => (
    <Card className="max-w-2xl" header="Token drift">
      <div className="space-y-ds-6">
        <div>
          <p className="text-sm font-medium text-ds-foreground">Problem</p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            The implementation introduces a radius that does not exist in
            Burgundy's token system.
          </p>
        </div>

        <div className="rounded-[10px] border border-ds-border p-ds-4">
          <p className="text-sm text-ds-foreground">
            Custom radius implementation
          </p>
        </div>

        <Alert variant="warning" title="Why this matters">
          Burgundy defines a controlled radius scale. Introducing a new value
          creates visual drift and expands the system's implicit vocabulary
          without a documented design decision.
        </Alert>

        <div>
          <p className="text-sm font-medium text-ds-foreground">
            Correct principle
          </p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            Use an existing semantic token. If a new radius is genuinely
            required, add it to the token system rather than introducing an
            arbitrary value inside a component.
          </p>
        </div>
      </div>
    </Card>
  ),
};

export const SemanticTokenMisuse: Story = {
  render: () => (
    <Card className="max-w-2xl" header="Semantic-token misuse">
      <div className="space-y-ds-6">
        <div>
          <p className="text-sm font-medium text-ds-foreground">Problem</p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            A component consumes a primitive color directly instead of
            expressing the UI role through a semantic token.
          </p>
        </div>

        <div className="rounded-ds-md border border-ds-border p-ds-4">
          <p className="text-sm font-medium text-red-600">Payment failed</p>
        </div>

        <Alert variant="warning" title="Why this matters">
          Primitive values describe what a color is. Semantic tokens describe
          what the color means. Components should consume the semantic role so
          the visual system can evolve without requiring individual components
          to be rewritten.
        </Alert>

        <div>
          <p className="text-sm font-medium text-ds-foreground">
            Correct principle
          </p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            Use Burgundy's semantic destructive role when communicating an error
            or destructive state.
          </p>
        </div>
      </div>
    </Card>
  ),
};

export const ComponentBypass: Story = {
  render: () => (
    <Card className="max-w-2xl" header="Component bypass">
      <div className="space-y-ds-6">
        <div>
          <p className="text-sm font-medium text-ds-foreground">Problem</p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            An engineer recreates Button styling instead of using the existing
            Button primitive.
          </p>
        </div>

        <button className="rounded-ds-md bg-ds-primary px-ds-4 py-ds-2 text-sm font-medium text-ds-primary-foreground">
          Save changes
        </button>

        <Alert variant="warning" title="Why this matters">
          The implementation may look correct, but it bypasses Button's
          established contract for variants, focus behavior, disabled behavior,
          loading state, and future system changes.
        </Alert>

        <div>
          <p className="text-sm font-medium text-ds-foreground">
            Correct principle
          </p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            Reuse the existing primitive when the interaction and behavior
            already belong to a Burgundy component.
          </p>
        </div>

        <Button variant="primary">Save changes</Button>
      </div>
    </Card>
  ),
};

export const AccessibilityRegression: Story = {
  render: () => (
    <Card className="max-w-2xl" header="Accessibility regression">
      <div className="space-y-ds-6">
        <div>
          <p className="text-sm font-medium text-ds-foreground">Problem</p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            An interaction is implemented on a non-interactive element.
          </p>
        </div>

        <div
          className="cursor-pointer rounded-ds-md border border-ds-border p-ds-4 text-sm text-ds-foreground"
          onClick={() => undefined}
        >
          Open settings
        </div>

        <Alert variant="destructive" title="Why this matters">
          A clickable div does not provide the native keyboard behavior,
          semantics, or interaction expectations of a button. A visually correct
          implementation can therefore introduce an accessibility regression.
        </Alert>

        <div>
          <p className="text-sm font-medium text-ds-foreground">
            Correct principle
          </p>

          <p className="mt-ds-1 text-sm text-ds-muted">
            Use an appropriate interactive primitive and preserve its keyboard,
            focus, and semantic behavior.
          </p>
        </div>

        <Button variant="secondary">Open settings</Button>
      </div>
    </Card>
  ),
};
