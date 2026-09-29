import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  it("associates the label with the select", () => {
    render(
      <Select label="Country">
        <option value="ng">Nigeria</option>
      </Select>,
    );

    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });

  it("supports descriptions", () => {
    render(
      <Select label="Country" description="Select your current country.">
        <option value="ng">Nigeria</option>
      </Select>,
    );

    expect(screen.getByLabelText("Country")).toHaveAccessibleDescription(
      "Select your current country.",
    );
  });

  it("exposes validation errors", () => {
    render(
      <Select label="Country" error="Please select a country.">
        <option value="ng">Nigeria</option>
      </Select>,
    );

    const select = screen.getByLabelText("Country");

    expect(select).toHaveAttribute("aria-invalid", "true");
    expect(select).toHaveAccessibleDescription("Please select a country.");
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please select a country.",
    );
  });

  it("supports required selects", () => {
    render(
      <Select label="Country" required>
        <option value="ng">Nigeria</option>
      </Select>,
    );

    expect(screen.getByLabelText("Country", { exact: false })).toBeRequired();
  });

  it("supports disabled selects", () => {
    render(
      <Select label="Country" disabled>
        <option value="ng">Nigeria</option>
      </Select>,
    );

    expect(screen.getByLabelText("Country")).toBeDisabled();
  });

  it("supports placeholders", () => {
    render(
      <Select label="Country" placeholder="Choose a country">
        <option value="ng">Nigeria</option>
      </Select>,
    );

    expect(
      screen.getByRole("option", { name: "Choose a country" }),
    ).toBeInTheDocument();
  });
});
