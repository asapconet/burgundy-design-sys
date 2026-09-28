import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import "./Button.scss";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      primary: "button--primary",
      secondary: "button--secondary",
      outline: "button--outline",
      ghost: "button--ghost",
      destructive: "button--destructive",
      link: "button--link",
    },

    size: {
      sm: "button--sm",
      md: "button--md",
      lg: "button--lg",
      icon: "button--icon",
    },

    loading: {
      true: "button--loading",
      false: "",
    },
  },

  compoundVariants: [
    {
      variant: "link",
      loading: true,
      className: "button--link-loading",
    },
  ],

  defaultVariants: {
    variant: "primary",
    size: "md",
    loading: false,
  },
});

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const classes = buttonVariants({
    variant,
    size,
    loading,
    className,
  });

  return (
    <button
      className={classes}
      disabled={disabled || loading || undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <span className="button__spinner" aria-hidden="true" />}

      {!loading && leftIcon && (
        <span className="button__icon" aria-hidden="true">
          {leftIcon}
        </span>
      )}

      <span className="button__content">{children}</span>

      {!loading && rightIcon && (
        <span className="button__icon" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
