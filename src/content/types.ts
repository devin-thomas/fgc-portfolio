export type ThemeMode = "dark" | "light";

export interface NavItem {
  id: string;
  label: string;
  shortLabel?: string;
}

export interface ActionLink {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  external?: boolean;
}

export interface HeroStat {
  label: string;
  value: string;
  note: string;
}

export interface EditorialCard {
  label: string;
  title: string;
  body: string;
}

export interface WorkPillar {
  title: string;
  eyebrow: string;
  body: string;
}

export interface HighlightItem {
  label: string;
  value: string;
  note: string;
}

export interface PlatformLink {
  label: string;
  href: string;
  handle: string;
  note: string;
  kind: "x" | "twitch" | "youtube" | "startgg" | "discord" | "email";
  group: string;
  external?: boolean;
}

export interface VideoItem {
  title: string;
  url: string;
  context: string;
  description: string;
}

export interface ComboItem {
  title: string;
  url: string;
  type: "youtube" | "x";
  label: string;
  description: string;
  fallbackText?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  orientation: "portrait" | "landscape";
}

export interface SeoContent {
  title: string;
  description: string;
  image: string;
}

export interface SiteContent {
  seo: SeoContent;
  brand: {
    name: string;
    alias: string;
    handle: string;
    affiliation: string;
    role: string;
    aspiration: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    deck: string;
    proofChips: string[];
    stats: HeroStat[];
    primaryCta: ActionLink;
    secondaryCta: ActionLink;
    sideNote: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    cards: EditorialCard[];
  };
  work: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: WorkPillar[];
  };
  highlights: {
    eyebrow: string;
    title: string;
    body: string;
    items: HighlightItem[];
  };
  clips: {
    eyebrow: string;
    title: string;
    body: string;
  };
  comboSpotlight: {
    eyebrow: string;
    title: string;
    body: string;
    helper: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    body: string;
  };
  platforms: {
    eyebrow: string;
    title: string;
    body: string;
    links: PlatformLink[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    discord: string;
    xUrl: string;
  };
  footerNote: string;
}
