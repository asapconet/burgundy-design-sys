import { useId, type SelectHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { ChevronDown } from "../../assets/icons";

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  leftIcon?: ReactNode;
  selectSize?: "sm" | "md" | "lg";
}

export function Select({
  id,
  label,
  description,
  error,
  placeholder,
  leftIcon,
  selectSize = "md",
  className,
  required,
  disabled,
  children,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const descriptionId = `${selectId}-description`;
  const errorId = `${selectId}-error`;

  const describedBy =
    [description ? descriptionId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-3 text-sm",
    lg: "h-12 px-4 text-base",
  };

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-ds-foreground"
        >
          {label}
          {required && (
            <span className="ml-1 text-ds-destructive" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span
            className="pointer-events-none absolute inset-y-0 left-3 z-10 flex items-center text-ds-muted"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}

        <select
          id={selectId}
          className={cn(
            "w-full appearance-none rounded-ds-md border bg-ds-background",
            "text-ds-foreground outline-none transition-colors",
            "border-ds-border",
            "focus:border-ds-primary focus:ring-2 focus:ring-ds-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "aria-[invalid]:border-ds-destructive",
            "aria-[invalid]:focus:ring-2 aria-[invalid]:focus:ring-ds-destructive/20",
            "pr-10",
            sizes[selectSize],
            leftIcon && "pl-10",
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          disabled={disabled}
          required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>

        <span
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-ds-muted"
          aria-hidden="true"
        >
          <ChevronDown className="size-4" />
        </span>
      </div>

      {description && (
        <p id={descriptionId} className="text-sm text-ds-muted">
          {description}
        </p>
      )}

      {error && (
        <p id={errorId} className="text-sm text-ds-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
