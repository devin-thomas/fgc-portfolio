import { LazyMotion, domAnimation } from "framer-motion";
import { AppShell } from "./components/layout/AppShell";
import { AboutSection } from "./components/sections/AboutSection";
import { ComboSpotlight } from "./components/sections/ComboSpotlight";
import { ContactBand } from "./components/sections/ContactBand";
import { FeaturedReel } from "./components/sections/FeaturedReel";
import { GalleryMosaic } from "./components/sections/GalleryMosaic";
import { HeroStage } from "./components/sections/HeroStage";
import { HighlightsBand } from "./components/sections/HighlightsBand";
import { PlatformGrid } from "./components/sections/PlatformGrid";
import { WorkGrid } from "./components/sections/WorkGrid";
import { navItems, siteContent } from "./content/siteContent";
import { useActiveSection } from "./hooks/useActiveSection";
import { useThemeMode } from "./hooks/useThemeMode";

const buildJsonLd = () =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.brand.name,
    alternateName: siteContent.brand.alias,
    description: siteContent.seo.description,
    jobTitle: siteContent.brand.role,
    email: `mailto:${siteContent.contact.email}`,
    affiliation: {
      "@type": "Organization",
      name: siteContent.brand.affiliation,
    },
    sameAs: siteContent.platforms.links.map((link) => link.href),
    knowsAbout: [
      "2XKO",
      "Fighting Game Community",
      "Commentary",
      "Broadcast media",
      "Super Smash Bros. Melee",
    ],
  });

const App = () => {
  const { theme, toggleTheme } = useThemeMode();
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <LazyMotion features={domAnimation}>
      <AppShell
        navItems={navItems}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        jsonLd={buildJsonLd()}
      >
        <HeroStage />
        <FeaturedReel />
        <AboutSection />
        <WorkGrid />
        <HighlightsBand />
        <ComboSpotlight theme={theme} />
        <GalleryMosaic />
        <PlatformGrid />
        <ContactBand />

        <footer className="pb-8">
          <div className="container-frame">
            <div className="section-rule mb-6" />
            <p className="text-sm leading-7 text-soft">{siteContent.footerNote}</p>
          </div>
        </footer>
      </AppShell>
    </LazyMotion>
  );
};

export default App;
