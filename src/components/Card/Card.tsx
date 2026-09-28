import type { HTMLAttributes, ReactNode } from "react";

import "./Card.scss";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
  interactive?: boolean;
}

export function Card({
  header,
  footer,
  interactive = false,
  children,
  className,
  ...props
}: CardProps) {
  const classes = ["card", interactive && "card--interactive", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {header && <div className="card__header">{header}</div>}

      <div className="card__content">{children}</div>

      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
}
