import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-ds-full bg-ds-muted text-ds-foreground",
  {
    variants: {
      size: {
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const statusVariants = cva(
  "absolute bottom-0 right-0 rounded-ds-full border-2 border-ds-background",
  {
    variants: {
      status: {
        online: "bg-ds-success",
        away: "bg-ds-warning",
        busy: "bg-ds-destructive",
        offline: "bg-ds-muted",
      },
      size: {
        sm: "size-2.5",
        md: "size-3",
        lg: "size-3.5",
        xl: "size-4",
      },
    },
    defaultVariants: {
      status: "offline",
      size: "md",
    },
  },
);

export interface AvatarProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  status?: VariantProps<typeof statusVariants>["status"];
  icon?: ReactNode;
}

export function Avatar({
  src,
  alt = "",
  fallback,
  status,
  icon,
  size,
  className,
  ...props
}: AvatarProps) {
  const initials = fallback?.slice(0, 2).toUpperCase();

  return (
    <div className={cn(avatarVariants({ size, className }))} {...props}>
      {src ? (
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : icon ? (
        <span aria-hidden="true">{icon}</span>
      ) : (
        <span aria-hidden={!alt}>{initials}</span>
      )}

      {status && (
        <span
          className={cn(statusVariants({ status, size }))}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}
