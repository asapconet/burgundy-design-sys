import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  it("renders the login form", () => {
    render(<LoginForm />);

    expect(
      screen.getByRole("heading", {
        name: "Sign in",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: "Email",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Password", { exact: false }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Sign in",
      }),
    ).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.click(
      screen.getByRole("button", {
        name: "Sign in",
      }),
    );

    expect(screen.getByText("Enter your email address.")).toBeInTheDocument();

    expect(screen.getByText("Enter your password.")).toBeInTheDocument();
  });

  it("submits valid values", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<LoginForm onSubmit={onSubmit} />);

    await user.type(
      screen.getByRole("textbox", {
        name: "Email",
      }),
      "user@example.com",
    );

    await user.type(
      screen.getByLabelText("Password", { exact: false }),
      "password123",
    );

    await user.click(screen.getByLabelText("Remember me"));

    await user.click(
      screen.getByRole("button", {
        name: "Sign in",
      }),
    );

    expect(onSubmit).toHaveBeenCalledWith({
      email: "user@example.com",
      password: "password123",
      rememberMe: true,
    });
  });

  it("shows a server error", () => {
    render(<LoginForm error="Invalid email or password." />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Invalid email or password.",
    );
  });

  it("disables fields while loading", () => {
    render(<LoginForm loading />);

    expect(
      screen.getByRole("textbox", {
        name: "Email",
      }),
    ).toBeDisabled();

    expect(screen.getByLabelText("Password", { exact: false })).toBeDisabled();

    expect(screen.getByLabelText("Remember me")).toBeDisabled();

    expect(
      screen.getByRole("button", {
        name: "Sign in",
      }),
    ).toBeDisabled();
  });

  it("supports custom content", () => {
    render(
      <LoginForm
        title="Welcome back"
        description="Continue to your workspace."
        submitLabel="Continue"
        footer={<a href="/forgot-password">Forgot password?</a>}
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: "Welcome back",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Continue",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Forgot password?",
      }),
    ).toBeInTheDocument();
  });
});
