import type { InputHTMLAttributes, ReactNode } from "react";

import "./Input.scss";

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
  required,
  disabled,
  leftIcon,
  rightIcon,
  inputSize = "md",
  ...props
}: InputProps) {
  const inputId = id ?? crypto.randomUUID();

  const descriptionId = description ? `${inputId}-description` : undefined;

  const errorId = error ? `${inputId}-error` : undefined;

  const describedBy =
    [descriptionId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="input-field">
      {label && (
        <label className="input-field__label" htmlFor={inputId}>
          {label}

          {required && (
            <span className="input-field__required" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {description && (
        <span id={descriptionId} className="input-field__description">
          {description}
        </span>
      )}

      <div
        className={[
          "input-field__control",
          `input-field__control--${inputSize}`,
          error && "input-field__control--error",
          disabled && "input-field__control--disabled",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {leftIcon && (
          <span className="input-field__icon" aria-hidden="true">
            {leftIcon}
          </span>
        )}

        <input
          {...props}
          id={inputId}
          required={required}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />

        {rightIcon && (
          <span className="input-field__icon" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <span id={errorId} className="input-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
