import { useId, type InputHTMLAttributes, type ReactNode } from "react";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  description?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  inputSize?: "sm" | "md" | "lg";
}

export function Input({
  id,
  label,
  description,
  error,
  leftIcon,
  rightIcon,
  inputSize = "md",
  className,
  required,
  disabled,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;

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
          htmlFor={inputId}
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
            className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-ds-muted"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          className={[
            "w-full rounded-ds-md border bg-ds-background",
            "text-ds-foreground placeholder:text-ds-muted",
            "outline-none transition-colors",
            "border-ds-border",
            "focus:border-ds-primary focus:ring-2 focus:ring-ds-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "aria-[invalid]:border-ds-destructive",
            "aria-[invalid]:focus:ring-ds-destructive/20",
            sizes[inputSize],
            leftIcon ? "pl-10" : "",
            rightIcon ? "pr-10" : "",
            className ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-invalid={error ? true : undefined}
          aria-errormessage={error ? errorId : undefined}
          aria-describedby={describedBy}
          disabled={disabled}
          required={required}
          {...props}
        />

        {rightIcon && (
          <span
            className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-ds-muted"
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}
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
