import { mediaAssets } from "./mediaCatalog";
import type { NavItem, SiteContent } from "./types";

export const navItems: NavItem[] = [
  { id: "hero", label: "Hero", shortLabel: "Intro" },
  { id: "clips", label: "Clips" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "highlights", label: "Highlights" },
  { id: "combo", label: "Combos" },
  { id: "gallery", label: "Gallery" },
  { id: "platforms", label: "Platforms" },
  { id: "contact", label: "Contact" },
];

export const siteContent: SiteContent = {
  seo: {
    title: "Devin Thomas | Lil Gohan",
    description:
      "A premium personal brand site for Devin Thomas, known as Lil Gohan — commentator, media team member, and an emerging 2XKO broadcast voice.",
    image: mediaAssets.ogImage,
  },
  brand: {
    name: "Devin Thomas",
    alias: "Lil Gohan",
    handle: "@Gohan__FGC",
    affiliation: "SynergyFGC",
    role: "Commentator and Media Team Member",
    aspiration: "Professional commentator / caster for 2XKO and adjacent fighting games",
  },
  hero: {
    eyebrow: "Commentary / Media / FGC",
    headline: "Sharp commentary for the next era of 2XKO.",
    deck:
      "I’m Devin Thomas, better known as Lil Gohan. I’m part of the media team at SynergyFGC, building a serious public-facing brand around commentary, match analysis, production-minded polish, and a voice that feels right for high-stakes fighting game coverage.",
    proofChips: [
      "SynergyFGC media team",
      "2XKO focus",
      "Melee roots",
    ],
    stats: [
      {
        label: "Now",
        value: "Commentary + media with SynergyFGC",
        note: "Growing a sharper public-facing presence with broadcast-ready intent.",
      },
      {
        label: "Focus",
        value: "2XKO and adjacent fighting games",
        note: "Competitive reads, clean pacing, and strong viewer translation.",
      },
      {
        label: "Available for",
        value: "Commentary, analysis, and production support",
        note: "Best fit for events, recaps, showcases, and scene-facing media work.",
      },
    ],
    primaryCta: {
      label: "Watch Featured Commentary",
      href: "#clips",
      variant: "primary",
    },
    secondaryCta: {
      label: "Book Commentary / Media",
      href: "#contact",
      variant: "secondary",
    },
    sideNote:
      "Built to read as polished, articulate, competitive, and community-rooted from the first screen.",
  },
  clips: {
    eyebrow: "Featured Commentary / Clips",
    title: "Real match coverage comes before any brand story.",
    body:
      "The page leads with proof. These clips are here to show how I think on mic: readable calls, grounded analysis, and enough personality to keep the broadcast alive without turning it into noise.",
  },
  about: {
    eyebrow: "About",
    title: "An FGC media presence with competitive context and on-camera discipline.",
    body:
      "I’m currently part of the SynergyFGC media team, building toward long-term commentary work around 2XKO and the wider fighting game space. My background in Super Smash Bros. Melee shaped how I listen to a set, how I read adaptation, and how I talk about momentum without losing the audience. What I care about most is clarity: making the match easier to follow, making the players sound understood, and making the broadcast feel more intentional. The goal is a brand that feels serious enough for production leads, approachable enough for the community, and polished enough to keep growing with the opportunities ahead.",
    cards: [
      {
        label: "Now",
        title: "Commentary with a media-builder mindset",
        body: "I’m not just thinking about the line read. I’m thinking about the total presentation and how every piece lands together.",
      },
      {
        label: "Approach",
        title: "Readable, analytical, and audience-first",
        body: "The strongest call is one that helps the room understand what matters without sounding over-written or over-performed.",
      },
      {
        label: "Direction",
        title: "Positioned for 2XKO’s next wave",
        body: "I’m building a brand that can grow from community coverage into bigger desks, casts, and media opportunities over time.",
      },
    ],
  },
  work: {
    eyebrow: "Media / Work",
    title: "The value isn’t limited to the mic.",
    body:
      "This site should read like a serious media profile: commentary first, but backed by production awareness, tournament support, and a sense of taste that helps the whole presentation feel stronger.",
    pillars: [
      {
        eyebrow: "01 / Commentary",
        title: "Play-by-play and color with clean pacing",
        body: "Calls that stay legible, match the energy of the set, and know when to speed up or get out of the way.",
      },
      {
        eyebrow: "02 / Analysis",
        title: "Competitive reads that stay viewer-friendly",
        body: "Matchup context, adaptation, routing, and momentum translated into something the audience can actually use.",
      },
      {
        eyebrow: "03 / Production",
        title: "Broadcast-aware support",
        body: "A commentary voice that understands overlays, segments, clip flow, pacing, and the realities of live media work.",
      },
      {
        eyebrow: "04 / Tournament Ops",
        title: "Event-facing reliability",
        body: "Comfortable contributing to the broader tournament ecosystem, not just showing up for a headset moment.",
      },
      {
        eyebrow: "05 / Brand Building",
        title: "Community-facing presence with taste",
        body: "Social-first polish, media identity, and a stronger public-facing package for collaborations and future opportunities.",
      },
    ],
  },
  highlights: {
    eyebrow: "Highlights",
    title: "Credibility shown through positioning, focus, and presentation.",
    body:
      "The goal here is not to inflate a resume. It’s to make the brand shape clear for people deciding whether they want to work together.",
    items: [
      {
        label: "Affiliation",
        value: "SynergyFGC",
        note: "Active media team involvement with a polished community-facing identity.",
      },
      {
        label: "Primary Focus",
        value: "2XKO",
        note: "Building toward professional commentary in the scene most central to the long-term goal.",
      },
      {
        label: "Roots",
        value: "Super Smash Bros. Melee",
        note: "A background that sharpened patience, adaptation reads, and set-to-set storytelling.",
      },
      {
        label: "Style",
        value: "Articulate + analytical",
        note: "Professional without sounding corporate, competitive without sounding self-important.",
      },
      {
        label: "Strength",
        value: "On-camera polish",
        note: "A site and personal brand designed to inspire confidence before the first conversation even happens.",
      },
      {
        label: "Fit",
        value: "Community to broadcast",
        note: "Comfortable in grassroots spaces while clearly aiming toward bigger desks and cleaner productions.",
      },
    ],
  },
  comboSpotlight: {
    eyebrow: "Combo Spotlight",
    title: "Not every clip needs to be practical to be fun.",
    body:
      "This section is here on purpose. It keeps some personality in the build, shows the timeline energy around the brand, and adds a lighter layer without confusing it for the professional reel.",
    helper:
      "A random combo loads each time this section appears, with a manual shuffle if you want another one.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Photo treatment matters when the brand is public-facing.",
    body:
      "The gallery stays tight and editorial. It should feel curated, not like a camera roll dump, and it should reinforce the premium tone of the site.",
  },
  platforms: {
    eyebrow: "Links / Platforms",
    title: "Everything important, without making people hunt for it.",
    body:
      "Centralized links for personal platforms, competition profile, and SynergyFGC channels so social traffic can move quickly from discovery to deeper context.",
    links: [
      {
        label: "X / Twitter",
        href: "https://x.com/Gohan__FGC",
        handle: "@Gohan__FGC",
        note: "The fastest way to see the public-facing brand in motion.",
        kind: "x",
        group: "Personal",
        external: true,
      },
      {
        label: "Twitch",
        href: "https://twitch.tv/itsLilGohan",
        handle: "@itsLilGohan",
        note: "Live-facing home for streams, commentary energy, and audience presence.",
        kind: "twitch",
        group: "Personal",
        external: true,
      },
      {
        label: "YouTube",
        href: "https://youtube.com/@LilGohanGaming",
        handle: "@LilGohanGaming",
        note: "Where commentary uploads and featured clips can live long-term.",
        kind: "youtube",
        group: "Personal",
        external: true,
      },
      {
        label: "start.gg",
        href: "https://www.start.gg/user/57400186",
        handle: "Competition profile",
        note: "Secondary profile context tied to competitive roots and event presence.",
        kind: "startgg",
        group: "Personal",
        external: true,
      },
      {
        label: "SynergyFGC YouTube",
        href: "https://www.youtube.com/@SynergyFGC",
        handle: "@SynergyFGC",
        note: "Team-facing media ecosystem and broader content context.",
        kind: "youtube",
        group: "Team",
        external: true,
      },
      {
        label: "SynergyFGC X",
        href: "https://x.com/synergyfgc",
        handle: "@synergyfgc",
        note: "Public-facing team account and ongoing org activity.",
        kind: "x",
        group: "Team",
        external: true,
      },
    ],
  },
  contact: {
    eyebrow: "Contact / Call-to-Action",
    title: "Open for the right commentary and media opportunities.",
    body:
      "If you’re putting together an event, a show, a content package, or a desk that needs a clean voice and a polished presence, email is the best place to start. Discord and X are there for quick follow-up.",
    email: "its.lil.gohan@gmail.com",
    discord: "@lil.gohan",
    xUrl: "https://x.com/Gohan__FGC",
  },
  footerNote:
    "Devin Thomas / Lil Gohan — commentator, media team member, and a brand built for the next era of fighting game coverage.",
};
