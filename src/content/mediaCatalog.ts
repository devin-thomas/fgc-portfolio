import type { ComboItem, GalleryImage, VideoItem } from "./types";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const mediaAssets = {
  heroPortrait: withBase("media/photos/devin-hero.webp"),
  motion01: withBase("media/photos/devin-motion-01.webp"),
  motion02: withBase("media/photos/devin-motion-02.webp"),
  synergyMark: withBase("media/brand/synergy-mark.png"),
  ekkoKeyArt: withBase("media/2xko/ekko-key-art.webp"),
  ekkoOverlay: withBase("media/2xko/ekko-overlay.webp"),
  ogImage: withBase("media/og/og-image.jpg"),
};

export const featuredVideos: VideoItem[] = [
  {
    title: "Hikari (EK/YA) vs Zando (VI/WW)",
    url: "https://www.youtube.com/watch?v=G0jmX2W7Uww",
    context: "Featured Commentary / Challenger Replay",
    description:
      "A clean, matchup-aware call built around pace, team composition, and moment-to-moment clarity.",
  },
  {
    title: "Heapski (IL/EK) vs Linz (JX/WW)",
    url: "https://www.youtube.com/watch?v=YLKYG52mRI8",
    context: "2XKO Commentary / Replay Breakdown",
    description:
      "Shows a more analytical delivery style that keeps the set readable without flattening the energy.",
  },
  {
    title: "Tapion (IL/EK) vs Canix (IL/AH)",
    url: "https://www.youtube.com/watch?v=dOorPrfUG1Q",
    context: "2XKO Commentary / Match Read",
    description:
      "Balances competitor perspective with viewer-friendly explanation, especially around pressure and routing.",
  },
];

export const comboSpotlightItems: ComboItem[] = [
  {
    title: "My first Twitter combo",
    url: "https://x.com/Gohan__FGC/status/2043764786102489274#m",
    type: "x",
    label: "Combo Spotlight / X",
    description:
      "A timeline-first combo clip that leans into style, routing, and a little bit of impractical fun.",
    fallbackText:
      "My favorite combo that no longer works due to the vi changes. My first Twitter combo! #2XKO_Ekko #2XKO_Vi",
  },
  {
    title: "Blitzcrank 1876 DMG Combo",
    url: "https://www.youtube.com/watch?v=28MUOaplxU8",
    type: "youtube",
    label: "Combo Spotlight / YouTube",
    description:
      "A flashy combo post that belongs in the personality lane of the site rather than the core commentary reel.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: mediaAssets.heroPortrait,
    alt: "Editorial portrait of Devin Thomas smiling in a dark venue setting.",
    caption: "Flash portraiture with a nightlife feel and a broadcast-ready sense of presence.",
    orientation: "portrait",
  },
  {
    src: mediaAssets.motion01,
    alt: "Side profile image of Devin Thomas under warm motion-blur lights.",
    caption: "Warm motion blur reinforces the cinematic, over-engineered art direction.",
    orientation: "landscape",
  },
  {
    src: mediaAssets.motion02,
    alt: "Portrait of Devin Thomas adjusting his hat under streaked golden lights.",
    caption: "A looser frame that keeps the gallery human and stylish rather than overly polished.",
    orientation: "landscape",
  },
];
