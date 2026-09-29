# Burgundy

> A token-driven React design system built for consistent, accessible, and AI-readable UI.

## Why Burgundy?

Burgundy explores how a modern design system can remain consistent when UI is produced by both humans and AI-assisted workflows.

The system combines:

- design tokens
- Style Dictionary
- Tailwind CSS
- CVA
- React + TypeScript
- Storybook
- automated component tests
- design-system adherence checks
- AI-readable generation rules

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

## Components

Button, Input, Select, Checkbox, Radio, Badge, Avatar, Card, Alert, Tabs, Tooltip, Dialog

## Patterns

LoginForm, SearchInterface, SettingsPanel

## Governance

Burgundy includes an adherence checker that detects common design-system violations such as:

- raw colors
- raw pixel values
- arbitrary Tailwind values

Intentional violations are maintained in the Adherence Lab to demonstrate how the system identifies non-compliant implementations.

## AI-ready design rules

The repository includes machine-readable guidance for AI-assisted UI generation. The rules define:

- token usage
- semantic styling
- component composition
- accessibility expectations
- component contracts
- adherence requirements

See [`docs/ai/design-system-rules.md`](./docs/ai/design-system-rules.md).

## Development

```bash
bun install
bun run tokens
bun run test
bun run adherence
bun run build
bun run storybook
```

## Status

Burgundy is a self-directed design-system engineering project focused on demonstrating token architecture, component implementation, accessibility, testing, documentation, and AI-assisted UI governance.
