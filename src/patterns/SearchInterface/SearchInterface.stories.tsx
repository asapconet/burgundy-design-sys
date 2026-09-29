import type { Meta, StoryObj } from "@storybook/react-vite";
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
    badge: "Component",
  },
  {
    id: "3",
    title: "Accessibility",
    description: "Interaction and accessibility guidelines.",
    meta: "Guidelines",
  },
];

const meta = {
  title: "Patterns/SearchInterface",
  component: SearchInterface,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInterface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    results,
  },
};

export const Empty: Story = {
  args: {
    results: [],
    emptyMessage: "No components matched your search.",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const ErrorState: Story = {
  args: {
    error: "The search service is temporarily unavailable.",
  },
};

export const CustomResults: Story = {
  args: {
    results,
    renderResult: (result) => (
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-ds-foreground">{result.title}</p>
          <p className="mt-1 text-sm text-ds-muted">{result.description}</p>
        </div>

        <span className="text-xs text-ds-muted">{result.meta}</span>
      </div>
    ),
  },
};
