import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import "./Badge.scss";

const badgeVariants = cva("badge", {
  variants: {
    variant: {
      neutral: "badge--neutral",
      brand: "badge--brand",
      success: "badge--success",
      warning: "badge--warning",
      destructive: "badge--destructive",
      info: "badge--info",
    },

    size: {
      sm: "badge--sm",
      md: "badge--md",
      lg: "badge--lg",
    },
  },

  defaultVariants: {
    variant: "neutral",
    size: "md",
  },
});

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  icon?: ReactNode;
}

export function Badge({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: BadgeProps) {
  const classes = badgeVariants({
    variant,
    size,
    className,
  });

  return (
    <span className={classes} {...props}>
      {icon && (
        <span className="badge__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      <span className="badge__content">{children}</span>
    </span>
  );
}
