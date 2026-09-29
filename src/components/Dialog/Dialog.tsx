import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../lib/cn";

interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  titleId: string;
  descriptionId: string;
}

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("Dialog components must be used within <Dialog>.");
  }

  return context;
}

export interface DialogProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dialog({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: DialogProps) {
  const id = useId();
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const open = controlledOpen ?? internalOpen;

  const setOpen = (nextOpen: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
        titleId: `${id}-title`,
        descriptionId: `${id}-description`,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useDialogContext();

  return (
    <button
      {...props}
      type="button"
      onClick={() => setOpen(true)}
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-ds-md px-4 py-2 text-sm font-medium",
        "bg-ds-primary text-ds-primary-foreground",
        "hover:bg-ds-primary-hover",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ds-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </button>
  );
}

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function DialogContent({
  children,
  className,
  ...props
}: DialogContentProps) {
  const { open, setOpen, titleId, descriptionId } = useDialogContext();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <div
        className="absolute inset-0 bg-ds-foreground/50"
        aria-hidden="true"
      />

      <div
        {...props}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={cn(
          "relative z-10 w-full max-w-lg",
          "rounded-ds-lg border border-ds-border",
          "bg-ds-background text-ds-foreground",
          "p-6 shadow-lg",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  const { titleId } = useDialogContext();

  return (
    <h2
      {...props}
      id={titleId}
      className={cn("text-lg font-semibold text-ds-foreground", className)}
    >
      {children}
    </h2>
  );
}

export function DialogDescription({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  const { descriptionId } = useDialogContext();

  return (
    <p
      {...props}
      id={descriptionId}
      className={cn("mt-2 text-sm text-ds-muted", className)}
    >
      {children}
    </p>
  );
}

export function DialogClose({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useDialogContext();

  return (
    <button
      {...props}
      type="button"
      onClick={() => setOpen(false)}
      className={cn(
        "rounded-ds-md border border-ds-border",
        "px-4 py-2 text-sm font-medium",
        "hover:bg-ds-muted/10",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ds-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </button>
  );
}
