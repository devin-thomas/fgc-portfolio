1. Product summary
- Title: Premium single-page personal brand site for Devin Thomas / "Lil Gohan"
- Purpose: Present Devin as a polished FGC media personality and rising 2XKO commentator, not as a software portfolio owner and not as a generic streamer page.
- Audience: FGC orgs, TOs, media leads, commentators, collaborators, viewers arriving from Twitter/X, and anyone vetting professionalism quickly.
- Conversion goal: Make visitors immediately understand who he is, trust his brand taste and on-camera credibility, watch real commentary proof, then either contact/book him or follow his platforms.

2. Creative direction
- Visual style: Dark, cinematic, broadcast-inspired editorial design with asymmetrical framing, sharp panel edges, restrained metallic accents, layered grids, and one strong character-art presence anchored by Ekko.
- Motion philosophy: Use motion like a show package, not like a toy. The hero gets the biggest reveal; the rest of the page uses controlled wipes, mask reveals, card drift, and hover sheen rather than constant bouncing or looping gimmicks.
- Typography direction: Use `Sora` for primary headlines/body and `Barlow Condensed` for labels, section tags, and broadcast-style metadata. Avoid any code-like or terminal-inspired type treatment.
- Color system: Default dark mode uses near-black, gunmetal, warm bone text, muted gold, and Ekko cyan as the main accent; use magenta only as a hairline/glow accent sourced from Ekko art, not as the dominant brand color. Optional light mode uses warm stone/ivory, charcoal, muted teal, and bronze.
- Imagery / photo treatment: Devin’s portrait photography is the human anchor and should be cropped editorially with preserved flash/grain, soft vignette, and controlled contrast. Official 2XKO Ekko art appears as a secondary masked layer, never overpowering Devin’s own image.
- How the design should feel:
- Like a premium esports broadcast opener translated into a personal homepage
- Stylish and serious, never cartoonish
- Built for immediate trust from low-context social traffic
- Over-engineered in composition and motion, restrained in UI chrome
- Community-rooted but clearly ready for bigger stages

3. Information architecture
- Recommended page structure: Single scrolling page with sticky top navigation, desktop-only section rail/progress indicator, and anchor links for quick jumps.
- Ordered list of sections:
1. `Hero`: Establish full identity fast with `Devin Thomas`, `Lil Gohan`, `@Gohan__FGC`, current affiliation, current focus, and two clear CTAs.
2. `Featured Commentary / Clips`: Show three real YouTube commentary videos immediately after the hero so credibility is earned before the visitor commits to reading.
3. `About`: Explain the role, voice, scene background, SynergyFGC affiliation, 2XKO direction, and Melee roots in a concise editorial bio.
4. `Media / Work`: Translate strengths into clear collaborator-facing value: commentary, analysis, production support, tournament ops, and community-facing media presence.
5. `Highlights`: Present qualitative proof without fake metrics using label-value blocks for affiliation, scene focus, competitive background, and brand strengths.
6. `Combo Spotlight`: Add personality with one randomized combo embed from the mixed X/YouTube pool in `stuff.txt`, clearly separated from the professional reel so it reads as flavor, not proof-of-work.
7. `Gallery`: Use a curated editorial collage of Devin’s supplied images to reinforce identity and visual polish.
8. `Links / Platforms`: Centralize personal and team destinations: X, Twitch, YouTube, start.gg, SynergyFGC YouTube, and SynergyFGC X.
9. `Contact / CTA`: End with booking-oriented language, email-first contact, copyable Discord handle, and X DM as a secondary contact path.
- What each section must communicate: The page must answer, in order, `who is this`, `are they legit on camera`, `what lane are they building in`, `what can they contribute`, `what makes their brand distinct`, and `how do I reach them`.
- Why this structure fits the audience and click-through behavior from social media: X bio traffic is impatient and low-context, so the page should front-load identity, visual quality, and proof. Visitors can decide within seconds whether to watch clips, open links, or contact; deeper narrative and gallery content comes only after that first impression is secured.

4. Content strategy
- Recommended copy tone: First-person in the main site, concise and articulate, FGC-literate without insider overload, confident without self-mythologizing, and polished without sounding corporate.
- Hero headline direction: Recommended headline is `Sharp commentary for the next era of 2XKO.` Supporting deck should mention SynergyFGC, on-camera presence, competitive insight, and production-aware polish.
- Bio direction: Keep the main bio to roughly 120 to 160 words. It should state current role at SynergyFGC, ambition toward professional 2XKO commentary, roots in Melee, and the mix of analysis, personality, and media taste that defines the brand.
- CTA strategy: Primary CTA in the hero should be `Watch Featured Commentary`. Secondary CTA should be `Book Commentary / Media`. Footer CTA should push `Email Devin` first, `Copy Discord` second, and `DM on X` third.
- Suggestions for handling sparse early-stage content without making the site feel empty: Use a curated reel instead of a full archive, qualitative highlight blocks instead of invented stats, strong photo-led compositions instead of placeholder cards, and a `Now / Focus / Available for` treatment instead of fake resume inflation. Hide any section fields that are unpopulated rather than rendering empty shells.
- Content exclusions: Do not expose the business roadmap PDF, NDA folders, meme sound effects, or stream alert files on the public site. They are internal source material, not portfolio content.

5. Technical architecture
- Final recommended stack: Vite + React + TypeScript + Tailwind CSS + Framer Motion, with no router, no CMS, no backend, and no heavy media/embed wrapper libraries.
- Rationale for the stack: It keeps the build static, GitHub Pages friendly, easy to maintain, animation-capable, and flexible enough to grow without introducing operational complexity.
- Folder structure:
```text
/
  public/
    media/
      photos/
      brand/
      2xko/
      posters/
      og/
    favicon/
  src/
    components/
      layout/
      sections/
      media/
      ui/
    content/
      siteContent.ts
      mediaCatalog.ts
    hooks/
      useActiveSection.ts
      useThemeMode.ts
    lib/
      embeds.ts
    styles/
      globals.css
      tokens.css
    App.tsx
    main.tsx
  .github/workflows/deploy.yml
  README.md
```
- Component architecture: `AppShell`, `SiteHeader`, `SectionRail`, `ThemeToggle`, `SectionHeading`, `HeroStage`, `FeaturedReel`, `AboutSection`, `WorkGrid`, `HighlightsBand`, `ComboSpotlight`, `GalleryMosaic`, `GalleryLightbox`, `PlatformGrid`, `ContactBand`, `LiteYouTubeEmbed`, and `XEmbed`.
- Content/config strategy for easy editing: Keep all editable copy, links, roles, CTAs, and section visibility in `siteContent.ts`; keep videos, combo items, gallery entries, and art references in `mediaCatalog.ts`. Navigation should be generated from config so sections can be added or hidden without hand-editing multiple files.
- Public APIs / interfaces / types: Define typed content models for `ThemeMode`, `NavItem`, `WorkPillar`, `HighlightItem`, `PlatformLink`, `VideoItem`, `ComboItem`, `GalleryImage`, and `SiteContent`. There are no external data APIs in v1.
- Asset handling strategy: Leave raw source packs in `beginning assets/` untouched; create optimized website-ready derivatives in `public/media/`. Use AVIF/WebP for photos where possible, PNG for transparent official art, and inline SVG React components for UI icons. Use only approved external-use 2XKO art. Ekko is the only hero character; if any secondary character accents appear later, use available art in this priority order: Illaoi, Caitlyn, Vi, Yasuo, Ahri. Do not source Warwick externally for v1 because he is not present in the provided pack.
- Animation strategy: Use Framer Motion with `LazyMotion`, intersection-based reveal triggers, hero parallax, restrained hover tilt on desktop, and crossfades for the combo/video swaps. No WebGL, no Three.js, no autoplay hero video, and no motion that blocks scrolling or readability.
- GitHub Pages deployment approach: Configure Vite with a relative `base: './'` so the site works on project pages without routing issues. Deploy through a GitHub Actions Pages workflow that builds `dist` and publishes it automatically. Add static social metadata and JSON-LD `Person` schema in the app shell or `index.html`.

6. UX and accessibility requirements
- Responsive behavior: Mobile gets a stacked hero, single-column reel/cards, softened background art, and persistent top-nav CTA access. Tablet shifts to two columns. Desktop uses the full asymmetrical composition, section rail, and richer hover states.
- Keyboard/focus states: Every interactive element must have a visible focus state, the gallery lightbox must support keyboard navigation and `Esc`, theme toggle must be reachable and labeled, and copy-to-clipboard actions must announce success textually.
- Contrast expectations: Body text must meet WCAG AA contrast, decorative glow cannot be required for legibility, and light mode must be fully designed rather than simple inversion.
- Motion accessibility considerations: Respect `prefers-reduced-motion` by disabling parallax, heavy stagger chains, hover tilt, and flashy combo transitions. Reduced-motion mode should keep only essential opacity/position changes.
- Performance guardrails: No iframes above the fold on initial load, lazy-mount YouTube and X embeds when near viewport, lazy-load below-the-fold imagery, keep hero image weight controlled for mobile, keep fonts to two families, and target strong Lighthouse scores without sacrificing the visual system.
- Embed resilience: If X widgets fail to hydrate, the site must fall back to a styled card with copy and a direct link to the post rather than leaving a broken blank box.

7. Implementation checklist
1. Scaffold a fresh Vite React TypeScript app and install only Tailwind CSS and Framer Motion as core UI dependencies.
2. Establish design tokens, theme variables, global layout rules, font loading, and dark/light mode architecture.
3. Create typed content/config files and populate them with the provided profile details, links, video URLs, and combo sources from `stuff.txt`.
4. Curate and optimize production-ready assets from the raw `beginning assets` folders into clean `public/media` directories.
5. Build the shared shell: sticky header, anchor navigation, section rail, section wrapper, and theme toggle.
6. Build the hero with portrait-first composition, Ekko secondary art layer, proof chips, and primary/secondary CTAs.
7. Implement the `Featured Commentary / Clips` section with custom lite YouTube cards so videos do not load until interacted with.
8. Implement `About`, `Media / Work`, and `Highlights` using reusable card and panel systems driven entirely by config data.
9. Implement `ComboSpotlight` so it randomly selects one item from the mixed combo pool on hard page load, supports both X and YouTube item types, and includes a manual shuffle control.
10. Build the gallery mosaic and accessible lightbox using the supplied images only.
11. Build the links/platform grid and contact band, including copyable Discord handle and booking-oriented mailto links.
12. Add metadata, favicon, OG image, JSON-LD `Person` schema, and polished empty/fallback states.
13. QA responsiveness, keyboard behavior, reduced-motion behavior, contrast, lazy-loading, and asset budgets.
14. Add GitHub Actions deployment and write a README covering local dev, content updates, asset swapping, and GitHub Pages setup.

8. Final build brief
- Build a single-page premium personal brand site for `Devin Thomas / Lil Gohan` that feels like a luxury esports broadcast package crossed with a modern editorial landing page.
- Default to dark mode, but include a real persistent light-mode toggle from day one using CSS variables and local storage.
- Make Devin the primary visual subject in the hero and use official Ekko art as the only featured character layer in that composition.
- Place `Featured Commentary / Clips` immediately after the hero using the three supplied YouTube commentary links as the core proof-of-work.
- Structure the page as: Hero, Featured Commentary / Clips, About, Media / Work, Highlights, Combo Spotlight, Gallery, Links / Platforms, Contact / CTA.
- Write in first person on-page, keep the tone articulate and direct, and avoid fake stats, fake testimonials, inflated titles, or software-engineer portfolio language.
- Implement a config-driven content system with typed entries for all text, links, videos, combo items, and gallery images so the site is easy to update later.
- Treat the combo section as a personality module, not a credibility module. It should randomize one mixed X/YouTube combo item per hard page load and offer a manual shuffle action.
- Use the supplied local asset packs selectively: Ekko key art, Devin photos, Synergy logo, and social marks are in scope; the roadmap PDF, NDA folders, stream alerts, and meme SFX are out of scope.
- Keep the UI dependency footprint lean: no router, no CMS, no icon megapack, no WebGL, and no heavy embed abstractions.
- Ship with an accessible gallery lightbox, visible focus states, reduced-motion handling, lazy embeds, strong social metadata, and GitHub Pages deployment automation.
- Acceptance criteria: a visitor from X should understand the brand in under 5 seconds, watch a real clip within 10 seconds, and find a clear contact path without searching.
- Assumptions and defaults: v1 uses qualitative highlights instead of unverified metrics; gallery uses the three currently supplied photos; SynergyFGC is shown as an affiliation badge rather than a sponsor wall; start.gg is a secondary profile link; no external character art is sourced beyond the provided official packs.
