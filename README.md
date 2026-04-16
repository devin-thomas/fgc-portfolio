# Lil Gohan / Devin Thomas Brand Site

Premium single-page personal brand site for Devin Thomas, known as Lil Gohan. The build is designed to feel like a luxury esports broadcast package crossed with a modern editorial landing page: cinematic, polished, responsive, and easy to maintain.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GitHub Pages

## Project Structure

```text
.
├─ public/
│  ├─ favicon/
│  └─ media/
│     ├─ 2xko/
│     ├─ brand/
│     ├─ og/
│     └─ photos/
├─ src/
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ media/
│  │  ├─ sections/
│  │  └─ ui/
│  ├─ content/
│  ├─ hooks/
│  ├─ lib/
│  └─ styles/
├─ PLAN.md
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Setup

1. Install Node.js 20 or newer.
2. Install dependencies:

```bash
npm install
```

## Local Development

Start the dev server:

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Production Build

Create a production build:

```bash
npm run build
```

The output is generated in `dist/`.

Create the committed GitHub Pages build:

```bash
npm run build:pages
```

That output is generated in `docs/`.

## GitHub Pages Deployment

This repo is configured for GitHub Pages using branch publishing from `main` and the `/docs` folder.

1. Run the Pages build:

```bash
npm run build:pages
```

2. Commit the updated `docs/` output.
3. Push to `main`.
4. In the GitHub repository, open `Settings > Pages`.
5. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
6. Set `Branch` to `main` and `Folder` to `/docs`.
7. GitHub will publish directly from the committed `docs/` output.

Notes:

- `vite.config.ts` uses `base: "./"` so the build works correctly on GitHub Pages project sites.
- No router is used, so no extra SPA rewrite setup is required.

## Customizing Content

### Text, CTAs, brand details, and platform links

Edit:

- `src/content/siteContent.ts`

This file controls:

- brand name, alias, handle, affiliation, and role
- hero copy and CTA labels
- about/work/highlights copy
- platform cards
- contact details
- footer note

### Featured videos, combo embeds, and gallery items

Edit:

- `src/content/mediaCatalog.ts`

This file controls:

- featured commentary clips
- combo spotlight sources
- gallery images
- local asset references used throughout the site

### Colors, typography, and theme tokens

Edit:

- `src/styles/tokens.css`

This file defines:

- dark mode and light mode color systems
- typography tokens
- shared shadow and background values

### Shared visual language and utility classes

Edit:

- `src/styles/globals.css`

This file controls:

- panel treatments
- clip-path surfaces
- background grid/noise helpers
- global spacing helpers
- focus and motion defaults

## Customizing Images and Assets

Website-ready assets live in:

- `public/media/photos`
- `public/media/2xko`
- `public/media/brand`
- `public/media/og`

To swap an image:

1. Replace the file in `public/media/...`, or add a new one there.
2. Update the matching asset path in `src/content/mediaCatalog.ts`.

Raw source packs were intentionally left untouched in `beginning assets/`. The site only uses a curated subset copied into `public/media/`.

## Editing Sections

Main sections live in:

- `src/components/sections/HeroStage.tsx`
- `src/components/sections/FeaturedReel.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/WorkGrid.tsx`
- `src/components/sections/HighlightsBand.tsx`
- `src/components/sections/ComboSpotlight.tsx`
- `src/components/sections/GalleryMosaic.tsx`
- `src/components/sections/PlatformGrid.tsx`
- `src/components/sections/ContactBand.tsx`

Shared shell and utilities live in:

- `src/components/layout`
- `src/components/media`
- `src/components/ui`
- `src/hooks`
- `src/lib`

## Accessibility and Performance Notes

- Theme preference is persisted to local storage.
- `prefers-reduced-motion` is respected globally.
- YouTube clips use a lite embed pattern so iframes only load after interaction.
- The X embed lazy-loads and falls back to a direct-link card if the widget does not hydrate.
- Gallery images support keyboard dismissal and arrow navigation in the lightbox.

## Maintenance Workflow

For day-to-day updates, the usual edits are:

1. Update copy or links in `src/content/siteContent.ts`.
2. Swap media entries in `src/content/mediaCatalog.ts`.
3. Replace image assets in `public/media/`.
4. Run `npm run build` to verify nothing broke.

## Available Source Material

The local workspace still includes the original planning and source asset folders:

- `PLAN.md`
- `beginning assets/`

`PLAN.md` is included in the repo as planning context. The `beginning assets/` folder is intentionally kept local and ignored by git because it is a large raw source dump, not the publishable website asset set.

The public site intentionally excludes roadmap PDFs, NDA folders, stream alert files, and meme sound effects.
