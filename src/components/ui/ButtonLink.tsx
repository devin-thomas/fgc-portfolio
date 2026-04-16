import type { AnchorHTMLAttributes, ReactNode } from "react";

const stylesByVariant = {
  primary:
    "bg-accent text-bg shadow-[0_18px_40px_rgba(102,221,231,0.22)] hover:-translate-y-0.5 hover:brightness-105",
  secondary:
    "bg-white/4 text-ink ring-1 ring-inset ring-line-strong hover:-translate-y-0.5 hover:bg-white/8",
  ghost:
    "bg-transparent text-muted ring-1 ring-inset ring-line hover:text-ink hover:ring-line-strong",
} as const;

export const buttonLinkClassName = (variant: keyof typeof stylesByVariant) =>
  `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 ${stylesByVariant[variant]}`;

interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: keyof typeof stylesByVariant;
  icon?: ReactNode;
  external?: boolean;
}

export const ButtonLink = ({
  href,
  variant = "primary",
  icon,
  external,
  children,
  className = "",
  ...rest
}: ButtonLinkProps) => (
  <a
    href={href}
    className={`${buttonLinkClassName(variant)} ${className}`.trim()}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    {...rest}
  >
    <span>{children}</span>
    {icon}
  </a>
);
