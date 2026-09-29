import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap font-medium",
    "transition-colors duration-150",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-ds-primary",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-ds-primary text-ds-primary-foreground hover:bg-ds-primary-hover active:bg-ds-primary-active",

        secondary:
          "bg-ds-background text-ds-foreground border border-ds-border hover:bg-ds-muted",

        outline:
          "border border-ds-border bg-transparent text-ds-foreground hover:bg-ds-muted",

        ghost: "bg-transparent text-ds-foreground hover:bg-ds-muted",

        destructive: "bg-ds-destructive text-white hover:opacity-90",

        link: "bg-transparent text-ds-primary underline-offset-4 hover:underline",
      },

      size: {
        sm: "h-8 rounded-ds-sm px-3 text-sm",
        md: "h-10 rounded-ds-md px-4 text-sm",
        lg: "h-12 rounded-ds-md px-6 text-base",
        icon: "size-10 rounded-ds-md",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  variant,
  size,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}

      {!loading && leftIcon}

      {children}

      {!loading && rightIcon}
    </button>
  );
}
