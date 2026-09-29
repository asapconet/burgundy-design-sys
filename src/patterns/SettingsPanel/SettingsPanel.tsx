import { useState, type FormEvent } from "react";
import {
  Alert,
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
} from "../../components";

export interface SettingsValues {
  displayName: string;
  email: string;
  theme: "system" | "light" | "dark";
  productUpdates: boolean;
  securityAlerts: boolean;
  language: string;
}

export interface SettingsPanelProps {
  initialValues?: Partial<SettingsValues>;
  onSave?: (values: SettingsValues) => void | Promise<void>;
  loading?: boolean;
  error?: string;
}

const defaultValues: SettingsValues = {
  displayName: "",
  email: "",
  theme: "system",
  productUpdates: true,
  securityAlerts: true,
  language: "en",
};

export function SettingsPanel({
  initialValues,
  onSave,
  loading = false,
  error,
}: SettingsPanelProps) {
  const [values, setValues] = useState<SettingsValues>({
    ...defaultValues,
    ...initialValues,
  });

  const [displayNameError, setDisplayNameError] = useState<string>();
  const [emailError, setEmailError] = useState<string>();

  const updateValue = <K extends keyof SettingsValues>(
    key: K,
    value: SettingsValues[K],
  ) => {
    setValues((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let valid = true;

    if (!values.displayName.trim()) {
      setDisplayNameError("Enter your display name.");
      valid = false;
    } else {
      setDisplayNameError(undefined);
    }

    if (!values.email.trim()) {
      setEmailError("Enter your email address.");
      valid = false;
    } else {
      setEmailError(undefined);
    }

    if (!valid) return;

    await onSave?.(values);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl" noValidate>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-ds-foreground">
          Profile settings
        </h2>

        <p className="mt-2 text-sm text-ds-muted">
          Manage your account preferences.
        </p>
      </div>

      {error && (
        <Alert
          variant="destructive"
          title="Unable to save settings"
          className="mb-6"
        >
          {error}
        </Alert>
      )}

      <div className="space-y-6">
        <Input
          label="Display name"
          name="displayName"
          value={values.displayName}
          onChange={(event) => updateValue("displayName", event.target.value)}
          error={displayNameError}
          disabled={loading}
          required
        />

        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          error={emailError}
          disabled={loading}
          required
        />

        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-ds-foreground">
            Theme
          </legend>

          <div className="flex flex-wrap gap-4">
            <Radio
              name="theme"
              value="system"
              label="System"
              checked={values.theme === "system"}
              onChange={() => updateValue("theme", "system")}
              disabled={loading}
            />

            <Radio
              name="theme"
              value="light"
              label="Light"
              checked={values.theme === "light"}
              onChange={() => updateValue("theme", "light")}
              disabled={loading}
            />

            <Radio
              name="theme"
              value="dark"
              label="Dark"
              checked={values.theme === "dark"}
              onChange={() => updateValue("theme", "dark")}
              disabled={loading}
            />
          </div>
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-ds-foreground">
            Notifications
          </legend>

          <div className="space-y-3">
            <Checkbox
              label="Product updates"
              checked={values.productUpdates}
              onChange={(event) =>
                updateValue("productUpdates", event.target.checked)
              }
              disabled={loading}
            />

            <Checkbox
              label="Security alerts"
              checked={values.securityAlerts}
              onChange={(event) =>
                updateValue("securityAlerts", event.target.checked)
              }
              disabled={loading}
            />
          </div>
        </fieldset>

        <Select
          label="Language"
          value={values.language}
          onChange={(event) => updateValue("language", event.target.value)}
          disabled={loading}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </Select>

        <div className="flex justify-end border-t border-ds-border pt-6">
          <Button type="submit" loading={loading}>
            Save changes
          </Button>
        </div>
      </div>
    </form>
  );
}
