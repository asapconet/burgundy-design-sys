import {
  createContext,
  useContext,
  useId,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../lib/cn";

interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used within <Tabs>.");
  }

  return context;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
}

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className,
  ...props
}: TabsProps) {
  const generatedId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const value = controlledValue ?? internalValue;

  const setValue = (nextValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <TabsContext.Provider
      value={{
        value,
        setValue,
        baseId: generatedId,
      }}
    >
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center gap-1",
        "border-b border-ds-border",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

export function TabsTrigger({
  value,
  children,
  className,
  ...props
}: TabsTriggerProps) {
  const { value: selectedValue, setValue, baseId } = useTabsContext();

  const isActive = selectedValue === value;
  const triggerId = `${baseId}-trigger-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  return (
    <button
      {...props}
      id={triggerId}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setValue(value)}
      className={cn(
        "relative px-4 py-2 text-sm font-medium",
        "text-ds-muted transition-colors",
        "hover:text-ds-foreground",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ds-primary focus-visible:ring-offset-2",
        "after:absolute after:inset-x-0 after:bottom-px",
        "after:h-0.5 after:origin-center after:transition-transform",
        "after:scale-x-0 after:bg-ds-primary",
        "aria-selected:text-ds-primary",
        "aria-selected:after:scale-x-100",
        className,
      )}
    >
      {children}
    </button>
  );
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export function TabsContent({
  value,
  children,
  className,
  ...props
}: TabsContentProps) {
  const { value: selectedValue, baseId } = useTabsContext();

  const isActive = selectedValue === value;
  const triggerId = `${baseId}-trigger-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  if (!isActive) {
    return null;
  }

  return (
    <div
      {...props}
      id={panelId}
      role="tabpanel"
      aria-labelledby={triggerId}
      tabIndex={0}
      className={cn(
        "pt-4 text-sm text-ds-foreground",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ds-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
