import { useState, type FormEvent, type ReactNode } from "react";
import { Alert, Badge, Button, Input } from "../../components";

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  meta?: string;
  badge?: string;
}

export interface SearchInterfaceProps {
  results?: SearchResult[];
  onSearch?: (query: string) => void | Promise<void>;
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
  placeholder?: string;
  renderResult?: (result: SearchResult) => ReactNode;
}

export function SearchInterface({
  results = [],
  onSearch,
  loading = false,
  error,
  emptyMessage = "No results found.",
  placeholder = "Search...",
  renderResult,
}: SearchInterfaceProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSearch?.(query.trim());
  };

  return (
    <section className="w-full max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3"
        role="search"
      >
        <div className="min-w-0 flex-1">
          <Input
            aria-label="Search"
            placeholder={placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            disabled={loading}
          />
        </div>
        <Button type="submit" loading={loading} disabled={!query.trim()}>
          Search
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" title="Search failed" className="mt-6">
          {error}
        </Alert>
      )}

      {!loading && !error && results.length === 0 && (
        <div className="mt-ds-4 rounded-ds-md border border-ds-border p-ds-8 text-center">
          <p className="text-sm text-ds-muted">{emptyMessage}</p>
        </div>
      )}

      {loading && (
        <p
          className="mt-ds-4 rounded-ds-md border border-ds-border p-ds-8 text-center"
          aria-live="polite"
        >
          <span className="text-sm text-ds-muted">Searching...</span>
        </p>
      )}

      {!loading && !error && results.length > 0 && (
        <ul
          className="mt-6 divide-y divide-ds-border overflow-hidden rounded-ds-md border border-ds-border"
          aria-label="Search results"
        >
          {results.map((result) => (
            <li key={result.id} className="p-4">
              {renderResult ? (
                renderResult(result)
              ) : (
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium text-ds-foreground">
                      {result.title}
                    </h3>
                    {result.badge && (
                      <Badge variant="brand">{result.badge}</Badge>
                    )}
                  </div>
                  {result.description && (
                    <p className="mt-1 text-sm text-ds-muted">
                      {result.description}
                    </p>
                  )}
                  {result.meta && (
                    <p className="mt-2 text-xs text-ds-muted">{result.meta}</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
