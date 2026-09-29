# Burgundy Design System

Burgundy is a token-driven React design system built around reusable components, semantic design tokens, accessibility, and enforceable UI conventions.

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

The token pipeline is the source of truth for visual decisions.

## Principles

### 1. Tokens before values

Use Burgundy tokens instead of introducing visual values directly.

```tsx
className = "bg-ds-primary text-ds-primary-foreground";
```

Avoid:

```tsx
className = "bg-[#800020]";
```

### 2. Semantic tokens in components

Components should consume semantic tokens, for example:

```text
ds-primary
ds-background
ds-foreground
ds-border
ds-muted
ds-success
ds-warning
ds-destructive
```

Primitive values belong in the token layer, not inside component implementations.

### 3. Variants over one-off styling

When a component already supports a visual variation, use its variant API.

```tsx
<Button variant="secondary" size="lg">
  Continue
</Button>
```

Don't recreate an existing variant with custom classes.

### 4. Components define behavior

A component is more than its visual appearance. Its contract includes:

- props
- states
- accessibility
- keyboard behavior
- loading behavior
- validation behavior
- interaction states

Changes to these contracts should be reflected in tests and documentation.

### 5. Patterns compose components

Patterns solve recurring product-level problems by composing existing primitives.

Examples: `LoginForm`, `SearchInterface`, `SettingsPanel`.

Patterns should not duplicate component behavior.

## Development

```bash
bun install            # install dependencies
bun run tokens         # build tokens
bun run test           # run tests
bun run adherence      # run the adherence checker
bun run build          # build the application
bun run storybook      # start Storybook
```

## Adding a token

When an existing token does not represent a legitimate design value:

1. Add the primitive token.
2. Add a semantic token when appropriate.
3. Run the Style Dictionary build.
4. Expose the token through the Tailwind theme.
5. Use the resulting semantic utility in components.
6. Add or update tests where behavior changes.

Do not bypass the token pipeline with arbitrary values.

## Adding a component

Before creating a component:

1. Check whether an existing component solves the problem.
2. Check whether an existing variant can support it.
3. Extend an existing component when the behavior belongs there.
4. Create a new primitive only when the UI behavior is genuinely distinct.

Every primitive should have:

```text
Component
Story
Tests
```

## Definition of done

A UI implementation is complete when:

- visual decisions use Burgundy tokens
- component contracts are explicit
- accessibility behavior is preserved
- important states are represented
- tests pass
- adherence passes
- Storybook documentation exists
