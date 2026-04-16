import { siteContent } from "../../content/siteContent";
import type { NavItem, ThemeMode } from "../../content/types";
import { ThemeToggle } from "../ui/ThemeToggle";

interface SiteHeaderProps {
  navItems: NavItem[];
  activeSection: string;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const SiteHeader = ({
  navItems,
  activeSection,
  theme,
  onToggleTheme,
}: SiteHeaderProps) => (
  <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
    <div className="container-frame">
      <div className="chrome-panel flex flex-col gap-4 px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
        <a href="#hero" className="min-w-0">
          <p className="data-kicker mb-1">{siteContent.brand.name}</p>
          <div className="flex flex-wrap items-end gap-2">
            <span className="font-display text-xl font-semibold tracking-[-0.04em] text-ink sm:text-2xl">
              {siteContent.brand.alias}
            </span>
            <span className="pb-0.5 text-sm text-muted">{siteContent.brand.handle}</span>
          </div>
        </a>

        <div className="flex min-w-0 items-center gap-3">
          <nav
            aria-label="Section navigation"
            className="hide-scrollbar min-w-0 flex-1 overflow-x-auto"
          >
            <ul className="flex items-center gap-2 whitespace-nowrap">
              {navItems.map((item) => {
                const isActive = item.id === activeSection;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`inline-flex rounded-full px-3 py-2 text-sm font-medium ${
                        isActive
                          ? "bg-accent text-bg"
                          : "text-muted hover:bg-white/6 hover:text-ink"
                      }`}
                    >
                      {item.shortLabel ?? item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-line-strong hover:bg-white/6 md:inline-flex"
          >
            Book
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </div>
  </header>
);
