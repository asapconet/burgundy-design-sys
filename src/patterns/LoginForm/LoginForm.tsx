import { Alert, Button, Checkbox, Input } from "../../components";
import { useState, type FormEvent, type ReactNode } from "react";

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginFormProps {
  onSubmit?: (values: LoginFormValues) => void | Promise<void>;
  loading?: boolean;
  error?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  footer?: ReactNode;
}

export function LoginForm({
  onSubmit,
  loading = false,
  error,
  title = "Sign in",
  description = "Enter your details to access your account.",
  submitLabel = "Sign in",
  footer,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valid = true;

    if (!email.trim()) {
      setEmailError("Enter your email address.");
      valid = false;
    } else {
      setEmailError(undefined);
    }

    if (!password) {
      setPasswordError("Enter your password.");
      valid = false;
    } else {
      setPasswordError(undefined);
    }

    if (!valid) {
      return;
    }

    await onSubmit?.({
      email,
      password,
      rememberMe,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-ds-foreground">{title}</h2>

        <p className="mt-2 text-sm text-ds-muted">{description}</p>
      </div>

      {error && (
        <Alert variant="destructive" title="Unable to sign in" className="mb-6">
          {error}
        </Alert>
      )}

      <div className="space-y-4">
        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={emailError}
          required
          disabled={loading}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={passwordError}
          required
          disabled={loading}
        />

        <Checkbox
          label="Remember me"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
          disabled={loading}
        />

        <Button type="submit" className="w-full" loading={loading}>
          {submitLabel}
        </Button>
      </div>

      {footer && (
        <div className="mt-6 text-center text-sm text-ds-muted">{footer}</div>
      )}
    </form>
  );
}
