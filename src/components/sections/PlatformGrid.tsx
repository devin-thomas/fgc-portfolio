import { mediaAssets } from "../../content/mediaCatalog";
import { siteContent } from "../../content/siteContent";
import type { PlatformLink } from "../../content/types";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import {
  ArrowUpRightIcon,
  BracketIcon,
  TwitchIcon,
  XIcon,
  YouTubeIcon,
} from "../ui/icons";

const getPlatformIcon = (kind: PlatformLink["kind"]) => {
  switch (kind) {
    case "x":
      return <XIcon className="h-5 w-5" />;
    case "twitch":
      return <TwitchIcon className="h-5 w-5" />;
    case "youtube":
      return <YouTubeIcon className="h-5 w-5" />;
    case "startgg":
      return <BracketIcon className="h-5 w-5" />;
    default:
      return <ArrowUpRightIcon className="h-5 w-5" />;
  }
};

export const PlatformGrid = () => (
  <section id="platforms" className="section-shell">
    <div className="container-frame">
      <SectionHeading
        eyebrow={siteContent.platforms.eyebrow}
        title={siteContent.platforms.title}
        body={siteContent.platforms.body}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.platforms.links.map((link, index) => (
          <Reveal key={link.href} delay={0.05 + index * 0.04}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="chrome-panel block h-full px-6 py-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  {getPlatformIcon(link.kind)}
                </div>
                {link.group === "Team" ? (
                  <img
                    src={mediaAssets.synergyMark}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 object-contain opacity-35"
                  />
                ) : (
                  <span className="data-kicker pt-2">{link.group}</span>
                )}
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-ink">
                {link.label}
              </h3>
              <p className="mt-2 text-sm font-medium text-soft">{link.handle}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{link.note}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <span>Open link</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
