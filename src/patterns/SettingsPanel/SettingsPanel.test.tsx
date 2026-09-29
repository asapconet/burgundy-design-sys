import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SettingsPanel } from "./SettingsPanel";

describe("SettingsPanel", () => {
  it("renders the settings form", () => {
    render(<SettingsPanel />);

    expect(
      screen.getByRole("heading", { name: "Profile settings" }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Display name", { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Email", { exact: false }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("System")).toBeInTheDocument();
    expect(screen.getByLabelText("Product updates")).toBeInTheDocument();
    expect(screen.getByLabelText("Security alerts")).toBeInTheDocument();
    expect(screen.getByLabelText("Language")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Save changes" }),
    ).toBeInTheDocument();
  });

  it("uses initial values", () => {
    render(
      <SettingsPanel
        initialValues={{
          displayName: "ASAP",
          email: "asap@example.com",
          theme: "dark",
          productUpdates: false,
          securityAlerts: true,
          language: "fr",
        }}
      />,
    );

    expect(screen.getByLabelText("Display name", { exact: false })).toHaveValue(
      "ASAP",
    );

    expect(screen.getByLabelText("Email", { exact: false })).toHaveValue(
      "asap@example.com",
    );

    expect(screen.getByLabelText("Dark")).toBeChecked();
    expect(screen.getByLabelText("Product updates")).not.toBeChecked();
    expect(screen.getByLabelText("Security alerts")).toBeChecked();
    expect(screen.getByLabelText("Language")).toHaveValue("fr");
  });

  it("validates required fields", async () => {
    const user = userEvent.setup();

    render(<SettingsPanel />);

    await user.click(screen.getByRole("button", { name: "Save changes" }));

    expect(screen.getByText("Enter your display name.")).toBeInTheDocument();

    expect(screen.getByText("Enter your email address.")).toBeInTheDocument();
  });

  it("submits the current settings", async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();

    render(
      <SettingsPanel
        initialValues={{
          displayName: "ASAP",
          email: "asap@example.com",
        }}
        onSave={onSave}
      />,
    );

    await user.click(screen.getByLabelText("Dark"));
    await user.click(screen.getByLabelText("Product updates"));
    await user.selectOptions(screen.getByLabelText("Language"), "fr");

    await user.click(screen.getByRole("button", { name: "Save changes" }));

    expect(onSave).toHaveBeenCalledWith({
      displayName: "ASAP",
      email: "asap@example.com",
      theme: "dark",
      productUpdates: false,
      securityAlerts: true,
      language: "fr",
    });
  });

  it("does not submit when validation fails", async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();

    render(<SettingsPanel onSave={onSave} />);

    await user.click(screen.getByRole("button", { name: "Save changes" }));

    expect(onSave).not.toHaveBeenCalled();
  });

  it("shows a server error", () => {
    render(<SettingsPanel error="Something went wrong. Please try again." />);

    expect(screen.getByRole("alert")).toBeInTheDocument();

    expect(screen.getByText("Unable to save settings")).toBeInTheDocument();

    expect(
      screen.getByText("Something went wrong. Please try again."),
    ).toBeInTheDocument();
  });

  it("disables the form while loading", () => {
    render(
      <SettingsPanel
        loading
        initialValues={{
          displayName: "ASAP",
          email: "asap@example.com",
        }}
      />,
    );

    expect(
      screen.getByLabelText("Display name", { exact: false }),
    ).toBeDisabled();

    expect(screen.getByLabelText("Email", { exact: false })).toBeDisabled();

    expect(screen.getByLabelText("Dark")).toBeDisabled();
    expect(screen.getByLabelText("Product updates")).toBeDisabled();
    expect(screen.getByLabelText("Language")).toBeDisabled();

    expect(screen.getByRole("button", { name: "Save changes" })).toBeDisabled();
  });
});
