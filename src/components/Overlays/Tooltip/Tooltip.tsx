import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../../lib/cn";

type Side = "top" | "bottom" | "left" | "right";

interface TooltipContextValue {
  open: boolean;
  contentId: string;
  side: Side;
  openTooltip: () => void;
  closeTooltip: () => void;
}

const TooltipContext = createContext<TooltipContextValue | null>(null);

function useTooltipContext() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("Tooltip components must be used within <Tooltip>.");
  }
  return context;
}

export interface TooltipProps {
  children: ReactNode;
  side?: Side;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Tooltip({
  children,
  side = "top",
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: TooltipProps) {
  const id = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const open = controlledOpen ?? internalOpen;

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const setOpen = (next: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  };

  const openTooltip = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const closeTooltip = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <TooltipContext.Provider
      value={{
        open,
        contentId: `${id}-content`,
        side,
        openTooltip,
        closeTooltip,
      }}
    >
      {/* inline-block keeps the positioning box tight to the trigger */}
      <div className="relative inline-block">{children}</div>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({
  className,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const { open, contentId, openTooltip, closeTooltip } = useTooltipContext();

  return (
    <button
      {...props}
      type="button"
      aria-describedby={open ? contentId : undefined}
      className={cn(
        "inline-flex items-center justify-center",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ds-primary focus-visible:ring-offset-2",
        className,
      )}
      onMouseEnter={(event) => {
        openTooltip();
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        closeTooltip();
        onMouseLeave?.(event);
      }}
      onFocus={(event) => {
        openTooltip();
        onFocus?.(event);
      }}
      onBlur={(event) => {
        closeTooltip();
        onBlur?.(event);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeTooltip();
        }
        onKeyDown?.(event);
      }}
    />
  );
}

const sideClasses: Record<Side, string> = {
  top: "bottom-full left-1/2 mb-1.5 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-1.5 -translate-x-1/2",
  left: "right-full top-1/2 mr-1.5 -translate-y-1/2",
  right: "left-full top-1/2 ml-1.5 -translate-y-1/2",
};

export function TooltipContent({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { open, contentId, side, openTooltip, closeTooltip } =
    useTooltipContext();

  if (!open) return null;

  return (
    <div
      {...props}
      id={contentId}
      role="tooltip"
      className={cn(
        "absolute z-50 w-max max-w-xs",
        "pointer-events-none",
        sideClasses[side],
      )}
      onMouseEnter={(event) => {
        openTooltip();
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        closeTooltip();
        onMouseLeave?.(event);
      }}
    >
      <div
        className={cn(
          "pointer-events-auto",
          "rounded-ds-sm bg-ds-foreground px-3 py-2",
          "text-xs font-medium text-ds-background shadow-md",
          "whitespace-nowrap",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
