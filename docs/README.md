# Burgundy Documentation

Burgundy documentation covers the system's architecture, usage conventions, tokens, accessibility requirements, and AI-assisted UI rules.

## Documentation

### Getting Started

[Getting Started](./getting-started.md)

Introduces the system architecture, development workflow, component conventions, and definition of done.

### Tokens

[Tokens](./tokens.md)

Documents the primitive and semantic token architecture, spacing, typography, color, radius, and token-change workflow.

### Accessibility

[Accessibility](./accessibility.md)

Defines the accessibility expectations that form part of Burgundy's component contracts.

### AI Design-System Rules

[AI Design-System Rules](./ai/design-system-rules.md)

Defines the rules AI-assisted implementations should follow when generating or modifying Burgundy UI.

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
React Components
      ↓
Patterns
      ↓
Product UI
```

## Governance

Burgundy uses several mechanisms to keep implementations consistent:

### Design tokens

Visual decisions are centralized rather than duplicated throughout components.

### Component contracts

Components define explicit behavior through their props, variants, states, accessibility requirements, and tests.

### Automated testing

Vitest and Testing Library validate component behavior.

### Adherence validation

The adherence checker detects common violations such as raw colors, raw pixel values, and arbitrary Tailwind values.

### Storybook

Storybook provides an interactive representation of components, foundations, patterns, and governance examples.

### AI-readable rules

The AI rules document provides explicit constraints for AI-assisted UI generation.

### AI Design-System Rules

[AI Design-System Rules](./ai/design-system-rules.md)

Defines the rules AI-assisted implementations should follow when generating or modifying Burgundy UI.

### AI Reproduction Benchmark

[AI Reproduction Benchmark](./ai/reproduction-benchmark.md)

Documents how Burgundy evaluates AI-generated UI against token, component, interaction, and accessibility contracts.

## Guiding principle

> The goal is to make the correct implementation the easiest implementation.

A developer or AI system should be able to understand:

1. What visual decisions already exist.
2. Which component should be reused.
3. Which variants are supported.
4. Which tokens should be consumed.
5. Which accessibility behaviors are required.
6. How to validate the resulting implementation.
