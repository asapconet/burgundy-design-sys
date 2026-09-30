# Burgundy

> A token-driven React design system built for consistent, accessible, and AI-readable UI.

Burgundy is a self-directed design-system engineering project focused on building and evaluating a production-minded component system for both human and AI-assisted development.

The project explores how design-system decisions can be made explicit, enforced through tooling, and validated as interfaces evolve.

## What Burgundy Demonstrates

Burgundy focuses on four areas:

- **Token-driven foundations** — primitive and semantic tokens with a Style Dictionary pipeline.
- **Component contracts** — reusable React components with explicit variants, states, and accessibility behavior.
- **Design-system governance** — automated adherence checks and deliberate critique scenarios.
- **AI-ready development** — rules and benchmarks for evaluating whether AI-generated UI actually follows the system.

## Architecture

```text
Primitive Tokens
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
Product Patterns
```

## Stack

- React
- TypeScript
- Tailwind CSS
- Style Dictionary
- Class Variance Authority
- Storybook
- Vitest
- Testing Library
- Bun

## Components

Burgundy currently includes:

- Button
- Input
- Select
- Checkbox
- Radio
- Badge
- Avatar
- Card
- Alert
- Tabs
- Tooltip
- Dialog

Components are designed around explicit contracts for:

- variants
- sizes
- states
- accessibility
- loading behavior
- validation behavior
- keyboard interaction

The goal is not to maximize component count, but to demonstrate consistent component architecture and behavior.

## Patterns

The component primitives are composed into realistic product interfaces:

- LoginForm
- SearchInterface
- SettingsPanel

Patterns intentionally consume existing Burgundy primitives rather than recreating component behavior.

## Design Tokens

Burgundy separates primitive design decisions from semantic UI roles.

```text
Primitive Tokens
      ↓
Semantic Tokens
      ↓
CSS Variables
      ↓
Tailwind Utilities
      ↓
Components
```

Examples of semantic tokens include:

```text
ds-primary
ds-primary-hover
ds-primary-active
ds-background
ds-foreground
ds-border
ds-muted
ds-success
ds-warning
ds-info
ds-destructive
```

This allows underlying visual values to evolve without requiring every component to be rewritten.

## Governance

Burgundy treats design-system adherence as an engineering concern rather than relying solely on visual review.

The repository includes automated checks for common violations such as:

- raw colors
- raw pixel values
- arbitrary Tailwind values

For example:

```tsx
className = "bg-[#800020] p-[13px] rounded-[7px]";
```

is intentionally considered non-compliant.

The expected implementation instead consumes Burgundy tokens and existing component contracts.

### Adherence Lab

Storybook includes an **Adherence Lab** containing both compliant and intentionally non-compliant implementations.

The lab demonstrates how violations can be identified and explained rather than simply detected.

### Critique Lab

The **Critique Lab** presents common design-system failures such as:

- token drift
- semantic-token misuse
- component bypass
- accessibility regressions

Each example explains what is wrong, why it matters, and what the system expects instead.

## AI-Assisted UI

Burgundy treats AI-generated UI as another implementation surface that must follow the same design-system contracts as human-written code.

### AI Design-System Rules

The repository defines explicit rules covering:

- token usage
- semantic styling
- component composition
- accessibility
- component contracts
- avoiding arbitrary values
- preserving the token pipeline
- validating generated UI

See:

`docs/ai/design-system-rules.md`

### AI Reproduction Benchmark

Burgundy also evaluates AI-generated implementations against explicit design-system contracts:

- token compliance
- component composition
- interaction semantics
- accessibility contract

The benchmark contains both a deliberately non-compliant AI reproduction and a corrected implementation.

```text
AI-generated reproduction   → 0/4 contracts preserved
Corrected reproduction      → 4/4 contracts preserved
```

The goal is to make AI adherence measurable rather than relying only on visual similarity.

See:

`docs/ai/reproduction-benchmark.md`

## Accessibility

Accessibility is treated as part of the component contract rather than an additional layer added after implementation.

Components include behavior for:

- accessible labels
- focus states
- keyboard interaction
- validation states
- disabled states
- loading states
- ARIA relationships
- dialog semantics
- tooltip semantics

Accessibility behavior is validated through component tests where appropriate.

## Development

Install dependencies:

```bash
bun install
```

Build design tokens:

```bash
bun run tokens
```

Run tests:

```bash
bun run test
```

Run the adherence checker:

```bash
bun run adherence
```

Run the AI reproduction benchmark:

```bash
bun run ai:benchmark
```

Build the application:

```bash
bun run build
```

Start Storybook:

```bash
bun run storybook
```

## Definition of Done

A UI implementation is considered complete when:

- visual decisions use Burgundy tokens
- existing components are reused where appropriate
- component contracts are explicit
- accessibility behavior is preserved
- important states are represented
- tests pass
- adherence checks pass
- Storybook documentation exists

## Project Status

Burgundy is a self-directed design-system engineering project demonstrating:

- token architecture
- component architecture
- reusable product patterns
- accessibility
- automated testing
- design-system governance
- Storybook documentation
- AI-assisted UI evaluation

The project is intentionally focused on demonstrating the engineering practices behind a design system rather than maximizing the number of components.
