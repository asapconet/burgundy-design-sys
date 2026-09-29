import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Introduction",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="min-h-screen bg-ds-background px-ds-6 py-ds-12 text-ds-foreground">
      <article className="mx-auto max-w-3xl">
        <div className="mb-ds-12">
          <p className="mb-ds-3 text-sm font-medium text-ds-primary">
            BURGUNDY DESIGN SYSTEM
          </p>

          <h1 className="text-4xl font-semibold tracking-tight">Burgundy</h1>

          <p className="mt-ds-4 max-w-2xl text-lg text-ds-muted">
            A token-driven React design system built for consistent, accessible,
            and AI-readable UI.
          </p>
        </div>

        <section className="space-y-ds-6">
          <div>
            <h2 className="text-xl font-semibold">Architecture</h2>

            <pre className="mt-ds-3 overflow-x-auto rounded-ds-md border border-ds-border bg-ds-muted/10 p-ds-4 text-sm">
              {`Primitive Tokens
      ↓
Semantic Tokens
      ↓
Style Dictionary
      ↓
CSS Variables
      ↓
Tailwind Theme
      ↓
React + CVA
      ↓
Storybook
      ↓
Product Patterns`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Design principles</h2>

            <div className="mt-ds-4 space-y-ds-4">
              <div>
                <h3 className="font-medium">Tokens are the source of truth</h3>
                <p className="mt-ds-1 text-sm text-ds-muted">
                  Components consume semantic tokens rather than hard-coded
                  visual values.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Components own behavior</h3>
                <p className="mt-ds-1 text-sm text-ds-muted">
                  Component contracts include states, accessibility, interaction
                  behavior, and variants.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Patterns compose primitives</h3>
                <p className="mt-ds-1 text-sm text-ds-muted">
                  Product-level patterns reuse Burgundy components instead of
                  recreating their behavior.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Compliance is testable</h3>
                <p className="mt-ds-1 text-sm text-ds-muted">
                  Automated tests and adherence checks detect regressions and
                  non-compliant UI.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">AI-ready UI</h2>

            <p className="mt-ds-2 text-sm leading-6 text-ds-muted">
              Burgundy defines explicit rules for AI-assisted UI generation so
              generated implementations remain within the system's tokens,
              component contracts, and accessibility expectations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What to explore</h2>

            <ul className="mt-ds-3 space-y-ds-2 text-sm text-ds-muted">
              <li>
                <strong className="text-ds-foreground">Foundations</strong> —
                colors, typography, spacing, and radius.
              </li>
              <li>
                <strong className="text-ds-foreground">Components</strong> —
                variants, states, accessibility, and interaction.
              </li>
              <li>
                <strong className="text-ds-foreground">Patterns</strong> —
                realistic interfaces composed from primitives.
              </li>
              <li>
                <strong className="text-ds-foreground">Governance</strong> —
                adherence and validation examples.
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  ),
};
