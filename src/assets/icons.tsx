import { cn } from "../lib/cn";

export const ChevronDown = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const PersonIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-3/5", className)}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 21c.8-4.1 3.6-6 8-6s7.2 1.9 8 6" fill="currentColor" />
    </svg>
  );
};
