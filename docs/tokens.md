# Burgundy Tokens

Burgundy separates raw design values from the semantic values consumed by UI.

## Token layers

### Primitive tokens

Primitive tokens represent raw design decisions.

```text
color.brand.500
color.neutral.900
space.4
radius.md
```

They should generally not be referenced directly by components.

### Semantic tokens

Semantic tokens describe the purpose of a value.

```text
color.primary
color.background
color.foreground
color.border
color.destructive
color.success
```

Components consume semantic tokens because semantic names communicate intent.

```tsx
className = "bg-ds-primary";
```

is more resilient than:

```tsx
className = "bg-[#800020]";
```

A semantic token can change its underlying value without requiring every component to change.

## Color

The current Burgundy brand scale is based around the Burgundy primary color.

| Token                   | Purpose                               |
| ----------------------- | ------------------------------------- |
| `ds-primary`            | Primary actions and brand emphasis    |
| `ds-primary-hover`      | Hover state for primary actions       |
| `ds-primary-active`     | Active state for primary actions      |
| `ds-primary-foreground` | Content displayed on primary surfaces |
| `ds-background`         | Default application surface           |
| `ds-foreground`         | Primary content                       |
| `ds-border`             | Borders and dividers                  |
| `ds-muted`              | Secondary/muted content               |
| `ds-success`            | Successful states                     |
| `ds-warning`            | Warning states                        |
| `ds-info`               | Informational states                  |
| `ds-destructive`        | Errors and destructive actions        |

## Spacing

```text
1   → 4px
2   → 8px
3   → 12px
4   → 16px
5   → 20px
6   → 24px
8   → 32px
10  → 40px
12  → 48px
16  → 64px
20  → 80px
24  → 96px
```

Use tokenized spacing utilities rather than arbitrary values.

## Radius

```text
none  sm  md  lg  xl  full
```

Components should use the semantic Burgundy radius utilities.

## Typography

Burgundy uses a sans-serif system based on Inter.

Type scale:

```text
xs  sm  md  lg  xl  2xl  3xl  4xl  5xl
```

Line-height roles:

```text
tight  heading  body
```

## Changing tokens

Token changes are system-level changes. Before changing an existing token:

1. Check which components consume it.
2. Consider the impact on existing states.
3. Run the full test suite.
4. Run adherence validation.
5. Review affected Storybook stories.
