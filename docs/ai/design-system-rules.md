# Burgundy Design System — AI Rules

Burgundy is a token-driven React design system.

When generating or modifying UI, follow these rules.

---

## 1. Use design tokens

Never introduce raw design values when an existing Burgundy token exists.

### Do

```tsx
<Button variant="primary">Save</Button>
```

```tsx
className = "bg-ds-primary text-ds-primary-foreground";
```

### Don't

```tsx
className = "bg-[#800020]";
```

```tsx
className = "p-[13px]";
```

```tsx
className = "rounded-[7px]";
```

---

## 2. Use semantic tokens in components

Components should consume semantic tokens rather than primitive color values.

Prefer:

- `ds-primary`
- `ds-background`
- `ds-foreground`
- `ds-border`
- `ds-muted`
- `ds-destructive`
- `ds-success`
- `ds-warning`
- `ds-info`

Do not reference primitive color values directly inside components.

---

## 3. Use component variants

When a component needs a supported visual variation, use its existing variant API.

Prefer:

```tsx
<Button variant="secondary" size="lg">
  Continue
</Button>
```

Do not create one-off styling to reproduce an existing variant.

---

## 4. Extend before duplicating

Before creating a new component:

1. Check whether an existing Burgundy component already solves the problem.
2. Check whether an existing variant can support the requirement.
3. If not, extend the existing component API when the behavior belongs to that component.
4. Create a new component only when the behavior represents a distinct UI primitive.

---

## 5. Preserve accessibility

Generated components must preserve:

- accessible names
- label associations
- keyboard interaction
- visible focus states
- disabled states
- validation states
- appropriate ARIA attributes

Accessibility behavior is part of the component contract.

---

## 6. Preserve component contracts

Do not silently change:

- variant names
- size names
- prop behavior
- loading behavior
- accessibility behavior
- token references

If a contract must change, update the component tests and documentation with it.

---

## 7. Avoid arbitrary values

Do not introduce arbitrary Tailwind values such as:

```tsx
p-[13px]
gap-[17px]
rounded-[7px]
bg-[#800020]
```

Use Burgundy's tokenized utilities instead.

---

## 8. Follow the token architecture

The source of truth is:

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
```

Do not bypass this pipeline.

---

## 9. Validate before completion

Before considering a UI implementation complete, run:

```bash
bun run test
bun run adherence
```

Both checks must pass.

A component that visually matches the design but violates Burgundy's token or component contracts is considered non-compliant.
