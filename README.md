# Burgundy

> A token-driven React design system built for consistent, accessible, and AI-readable UI.

Burgundy is a self-directed design-system engineering project exploring how a modern component system can remain consistent across human and AI-assisted UI development.

The system focuses on four areas:

- Token-driven visual foundations
- Reusable React component contracts
- Automated adherence and accessibility checks
- AI-readable design-system rules

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

## Patterns

The component primitives are composed into realistic product interfaces:

- LoginForm
- SearchInterface
- SettingsPanel

Patterns are intentionally built from existing Burgundy primitives rather than duplicating component behavior.

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

This allows the underlying visual values to change without requiring every component to be rewritten.

## Governance

Burgundy treats design-system adherence as an engineering concern.

The repository includes automated checks for common violations such as:

- raw colors
- raw pixel values
- arbitrary Tailwind values

For example, this is intentionally considered non-compliant:

```tsx
className = "bg-[#800020] p-[13px] rounded-[7px]";
```

while the system expects tokenized utilities and component variants.

The repository also includes an **Adherence Lab** in Storybook containing intentional compliant and non-compliant implementations.

### AI reproduction benchmark

Burgundy also evaluates AI-generated implementations against explicit design-system contracts:

- token compliance
- component composition
- interaction semantics
- accessibility contract

The benchmark includes both a deliberately non-compliant AI reproduction and a corrected implementation.

The expected result is:

````text
AI-generated reproduction   → 0/4 contracts preserved
Corrected reproduction      → 4/4 contracts preserved

## AI-ready design rules

Burgundy includes explicit guidance for AI-assisted UI generation.

The rules cover:

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

## Development

Install dependencies:

```bash
bun install
````

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

Burgundy is a self-directed design-system engineering project focused on demonstrating:

- token architecture
- component implementation
- reusable patterns
- accessibility
- automated testing
- design-system governance
- Storybook documentation
- AI-assisted UI consistency

The project is intentionally focused on demonstrating the engineering practices behind a design system rather than maximizing the number of components.
