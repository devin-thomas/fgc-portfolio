import type { NavItem } from "../../content/types";

interface SectionRailProps {
  navItems: NavItem[];
  activeSection: string;
}

export const SectionRail = ({ navItems, activeSection }: SectionRailProps) => (
  <nav
    aria-label="Section progress"
    className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
  >
    <ol className="pointer-events-auto flex flex-col gap-3">
      {navItems.map((item, index) => {
        const isActive = item.id === activeSection;

        return (
          <li key={item.id} className="flex justify-end">
            <a
              href={`#${item.id}`}
              className={`group flex items-center gap-3 rounded-full pr-3 pl-2 py-2 transition ${
                isActive ? "bg-white/10" : "bg-transparent hover:bg-white/6"
              }`}
            >
              <span
                className={`h-px w-10 transition ${
                  isActive ? "bg-accent" : "bg-line group-hover:bg-line-strong"
                }`}
              />
              <span className="font-condensed text-sm uppercase tracking-[0.24em] text-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-condensed text-sm uppercase tracking-[0.24em] ${
                  isActive ? "text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  </nav>
);
