import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: ReactNode;
  description?: string;
  error?: string;
}

export function Radio({
  id,
  label,
  description,
  error,
  className,
  disabled,
  required,
  ...props
}: RadioProps) {
  const generatedId = useId();
  const radioId = id ?? generatedId;
  const descriptionId = `${radioId}-description`;
  const errorId = `${radioId}-error`;

  const describedBy =
    [description ? descriptionId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex items-start gap-3">
        <input
          {...props}
          id={radioId}
          type="radio"
          disabled={disabled}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "mt-0.5 size-4 shrink-0 appearance-none rounded-full",
            "border border-ds-border bg-ds-background",
            "transition-colors",
            "checked:border-ds-radio-checked checked:border-ds-primary",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-ds-primary focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "aria-[invalid]:border-ds-destructive",
            className,
          )}
        />

        {label && (
          <label
            htmlFor={radioId}
            className={cn(
              "text-sm text-ds-foreground",
              disabled && "cursor-not-allowed opacity-50",
            )}
          >
            {label}
            {required && (
              <span className="ml-1 text-ds-destructive" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
      </div>

      {description && (
        <p id={descriptionId} className="ml-7 text-sm text-ds-muted">
          {description}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          className="ml-7 text-sm text-ds-destructive"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
