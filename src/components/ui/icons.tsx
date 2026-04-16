import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
};

export const SunIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="4.2" {...baseProps} />
    <path d="M12 2.5v2.6M12 18.9v2.6M4.22 4.22l1.84 1.84M17.94 17.94l1.84 1.84M2.5 12h2.6M18.9 12h2.6M4.22 19.78l1.84-1.84M17.94 6.06l1.84-1.84" {...baseProps} />
  </svg>
);

export const MoonIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M20 14.2A8.3 8.3 0 0 1 9.8 4 8.9 8.9 0 1 0 20 14.2Z"
      {...baseProps}
    />
  </svg>
);

export const ArrowUpRightIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M7 17 17 7M8.5 7H17v8.5" {...baseProps} />
  </svg>
);

export const PlayIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="m8 6 10 6-10 6V6Z" fill="currentColor" stroke="none" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M3 6.5h18v11H3z" {...baseProps} />
    <path d="m4.5 8 7.5 5.5L19.5 8" {...baseProps} />
  </svg>
);

export const XIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M5 4h4.2l3.36 4.82L16.7 4H19l-5.45 6.22L20 20h-4.2l-3.8-5.45L7.3 20H5l5.8-6.63L5 4Z" fill="currentColor" stroke="none" />
  </svg>
);

export const TwitchIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M5 4h15v10.5L15.5 19H11l-2.4 2.5v-2.5H5V4Z" {...baseProps} />
    <path d="M9 8v4M14 8v4" {...baseProps} />
  </svg>
);

export const YouTubeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M21 12c0 2.7-.32 4.35-.7 5.33a2.7 2.7 0 0 1-1.6 1.6C17.72 19.3 16.07 19.6 12 19.6s-5.72-.3-6.7-.67a2.7 2.7 0 0 1-1.6-1.6C3.32 16.35 3 14.7 3 12s.32-4.35.7-5.33A2.7 2.7 0 0 1 5.3 5.07C6.28 4.7 7.93 4.4 12 4.4s5.72.3 6.7.67a2.7 2.7 0 0 1 1.6 1.6c.38.98.7 2.63.7 5.33Z"
      {...baseProps}
    />
    <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
  </svg>
);

export const BracketIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M5 5h5v4H5zM14 5h5v4h-5zM9.5 9v3H14M5 15h5v4H5zM14 15h5v4h-5zM14 12v3H9.5" {...baseProps} />
  </svg>
);

export const DiscordIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M7 7.2c2-1 4-.9 5-.9s3 0 5 .9c1 1.5 1.8 3.3 2 5.5-.7 1.1-1.6 2.1-2.8 3-.8-.4-1.3-.7-2-.9l.5-1c-.6.2-1.6.5-2.7.5s-2.1-.3-2.7-.5l.5 1c-.7.2-1.2.5-2 .9-1.2-.9-2-1.9-2.8-3 .2-2.2 1-4 2-5.5Z"
      {...baseProps}
    />
    <path d="M9.4 12.2h.01M14.6 12.2h.01" {...baseProps} />
  </svg>
);

export const ShuffleIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M16 4h4v4M4 18l5.5-5.5M13.5 10.5 17 7h3M4 6l13 13h3" {...baseProps} />
  </svg>
);

export const ChevronLeftIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="m15 5-7 7 7 7" {...baseProps} />
  </svg>
);

export const ChevronRightIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="m9 5 7 7-7 7" {...baseProps} />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M6 6l12 12M18 6 6 18" {...baseProps} />
  </svg>
);
