import type { PropsWithChildren } from "react";
import type { NavItem, ThemeMode } from "../../content/types";
import { SectionRail } from "./SectionRail";
import { SiteHeader } from "./SiteHeader";

interface AppShellProps extends PropsWithChildren {
  navItems: NavItem[];
  activeSection: string;
  theme: ThemeMode;
  onToggleTheme: () => void;
  jsonLd: string;
}

export const AppShell = ({
  navItems,
  activeSection,
  theme,
  onToggleTheme,
  jsonLd,
  children,
}: AppShellProps) => (
  <div className="relative min-h-screen overflow-x-clip bg-bg text-ink">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
    <a
      href="#hero"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
    >
      Skip to content
    </a>

    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(102,221,231,0.15),transparent_24%),radial-gradient(circle_at_82%_10%,rgba(209,122,242,0.18),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(182,137,85,0.09),transparent_30%)]" />
      <div className="subtle-grid absolute inset-x-0 top-0 h-[68vh] opacity-25" />
      <div className="absolute left-[-12rem] top-[18rem] h-96 w-96 rounded-full bg-accent-soft blur-3xl" />
      <div className="absolute right-[-12rem] top-0 h-[30rem] w-[30rem] rounded-full bg-glow/20 blur-3xl" />
    </div>

    <SiteHeader
      navItems={navItems}
      activeSection={activeSection}
      theme={theme}
      onToggleTheme={onToggleTheme}
    />
    <SectionRail navItems={navItems} activeSection={activeSection} />

    <main>{children}</main>
  </div>
);
