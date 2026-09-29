import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-ds-full font-medium",
  {
    variants: {
      variant: {
        neutral: "bg-ds-muted/20 text-ds-foreground",
        brand: "bg-ds-primary/10 text-ds-primary",
        success: "bg-ds-success/10 text-ds-success",
        warning: "bg-ds-warning/10 text-ds-warning",
        destructive: "bg-ds-destructive/10 text-ds-destructive",
        info: "bg-ds-info/10 text-ds-info",
      },

      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-sm",
      },
    },

    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  icon?: ReactNode;
}

export function Badge({
  variant,
  size,
  icon,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
