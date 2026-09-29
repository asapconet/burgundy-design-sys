import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/cn";

const alertVariants = cva("flex w-full gap-3 rounded-ds-md border p-4", {
  variants: {
    variant: {
      info: "border-ds-info bg-ds-info/10",
      success: "border-ds-success bg-ds-success/10",
      warning: "border-ds-warning bg-ds-warning/10",
      destructive: "border-ds-destructive bg-ds-destructive/10",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string;
  icon?: ReactNode;
}

export function Alert({
  variant,
  title,
  icon,
  children,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    >
      {icon && (
        <span
          className={cn(
            "mt-0.5 shrink-0",
            variant === "info" && "text-ds-info",
            variant === "success" && "text-ds-success",
            variant === "warning" && "text-ds-warning",
            variant === "destructive" && "text-ds-destructive",
          )}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      <div className="min-w-0">
        {title && (
          <p
            className={cn(
              "text-sm font-semibold",
              variant === "info" && "text-ds-info",
              variant === "success" && "text-ds-success",
              variant === "warning" && "text-ds-warning",
              variant === "destructive" && "text-ds-destructive",
            )}
          >
            {title}
          </p>
        )}

        <div className="text-sm text-ds-foreground">{children}</div>
      </div>
    </div>
  );
}
