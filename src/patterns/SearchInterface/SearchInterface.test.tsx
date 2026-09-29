import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SearchInterface, type SearchResult } from "./SearchInterface";

const results: SearchResult[] = [
  {
    id: "1",
    title: "Design tokens",
    description: "Foundations for consistent UI.",
    meta: "Documentation",
    badge: "Core",
  },
  {
    id: "2",
    title: "Button",
    description: "Primary interaction primitive.",
    meta: "Component",
  },
];

describe("SearchInterface", () => {
  it("renders the search interface", () => {
    render(<SearchInterface />);

    expect(screen.getByRole("search")).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: "Search",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Search",
      }),
    ).toBeDisabled();
  });

  it("submits the trimmed query", async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();

    render(<SearchInterface onSearch={onSearch} />);

    await user.type(
      screen.getByRole("textbox", {
        name: "Search",
      }),
      "  tokens  ",
    );

    await user.click(
      screen.getByRole("button", {
        name: "Search",
      }),
    );

    expect(onSearch).toHaveBeenCalledWith("tokens");
  });

  it("renders results", () => {
    render(<SearchInterface results={results} />);

    expect(
      screen.getByRole("heading", {
        name: "Design tokens",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Foundations for consistent UI."),
    ).toBeInTheDocument();

    expect(screen.getByText("Core")).toBeInTheDocument();
  });

  it("renders the empty state", () => {
    render(
      <SearchInterface
        results={[]}
        emptyMessage="Nothing matched your search."
      />,
    );

    expect(
      screen.getByText("Nothing matched your search."),
    ).toBeInTheDocument();
  });

  it("renders the loading state", () => {
    render(<SearchInterface loading />);

    expect(screen.getByText("Searching...")).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: "Search",
      }),
    ).toBeDisabled();
  });

  it("renders the error state", () => {
    render(<SearchInterface error="Something went wrong." />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Something went wrong.",
    );
  });

  it("supports custom result rendering", () => {
    render(
      <SearchInterface
        results={[results[0]]}
        renderResult={(result) => <div>Custom: {result.title}</div>}
      />,
    );

    expect(screen.getByText("Custom: Design tokens")).toBeInTheDocument();
  });
});
