# Accessibility

Accessibility is part of the Burgundy component contract. Components should remain usable through keyboard, assistive technology, and different interaction states.

## Component requirements

### Button

- an accessible name
- visible focus
- disabled behavior
- loading state when applicable

Loading buttons expose:

```html
aria-busy="true"
```

### Input

- label association
- description association
- validation state
- error messaging
- disabled state

Validation uses:

```html
aria-invalid="true" aria-describedby="..." aria-errormessage="..."
```

### Select

- native select semantics
- label association
- keyboard behavior
- validation state
- disabled behavior

The underlying native select remains responsible for option interaction.

### Checkbox

- native checkbox semantics
- label association
- checked state
- disabled state
- validation messaging

### Radio

Radio groups use native radio semantics and maintain:

- shared name
- selected state
- keyboard interaction
- visible focus

### Dialog

- `role="dialog"`
- `aria-modal="true"`
- accessible title
- accessible description
- Escape-to-close behavior
- backdrop dismissal where appropriate

### Tooltip

- exposes content through tooltip semantics
- appears on focus as well as pointer interaction
- maintains a visible focus state
- avoids obscuring the trigger unnecessarily

## Accessibility principle

Visual similarity is not sufficient. A component is complete only when its interaction and accessibility behavior are also correct.
