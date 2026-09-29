import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
  interactive?: boolean;
}

export function Card({
  header,
  footer,
  interactive = false,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-ds-lg",
        "border border-ds-border",
        "bg-ds-background text-ds-foreground",
        interactive &&
          "cursor-pointer transition-[border-color,box-shadow] duration-150 hover:border-ds-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-ds-primary focus-visible:outline-offset-2",
        className,
      )}
      {...props}
    >
      {header && (
        <div className="border-b border-ds-border px-6 py-4">{header}</div>
      )}

      <div className="p-6">{children}</div>

      {footer && (
        <div className="border-t border-ds-border px-6 py-4">{footer}</div>
      )}
    </div>
  );
}
