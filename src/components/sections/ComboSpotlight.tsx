import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import { comboSpotlightItems } from "../../content/mediaCatalog";
import { siteContent } from "../../content/siteContent";
import type { ThemeMode } from "../../content/types";
import { LiteYouTubeEmbed } from "../media/LiteYouTubeEmbed";
import { XEmbed } from "../media/XEmbed";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ShuffleIcon } from "../ui/icons";

const randomIndex = (length: number, previous?: number) => {
  if (length <= 1) {
    return 0;
  }

  let next = Math.floor(Math.random() * length);
  while (next === previous) {
    next = Math.floor(Math.random() * length);
  }
  return next;
};

interface ComboSpotlightProps {
  theme: ThemeMode;
}

export const ComboSpotlight = ({ theme }: ComboSpotlightProps) => {
  const [activeIndex, setActiveIndex] = useState(() => randomIndex(comboSpotlightItems.length));
  const currentItem = comboSpotlightItems[activeIndex];

  return (
    <section id="combo" className="section-shell">
      <div className="container-frame">
        <SectionHeading
          eyebrow={siteContent.comboSpotlight.eyebrow}
          title={siteContent.comboSpotlight.title}
          body={siteContent.comboSpotlight.body}
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div className="chrome-panel flex h-full flex-col justify-between px-6 py-6">
              <div>
                <p className="data-kicker mb-3">{currentItem.label}</p>
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-ink">
                  {currentItem.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {currentItem.description}
                </p>
                <p className="mt-8 text-sm leading-7 text-soft">
                  {siteContent.comboSpotlight.helper}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveIndex((previous) =>
                    randomIndex(comboSpotlightItems.length, previous),
                  )
                }
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-line-strong hover:bg-white/6"
              >
                <ShuffleIcon className="h-4 w-4" />
                <span>Shuffle combo</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <AnimatePresence mode="wait">
              <m.div
                key={currentItem.url}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {currentItem.type === "youtube" ? (
                  <article className="chrome-panel p-4 sm:p-5">
                    <LiteYouTubeEmbed
                      title={currentItem.title}
                      url={currentItem.url}
                    />
                  </article>
                ) : (
                  <XEmbed
                    url={currentItem.url}
                    title={currentItem.title}
                    fallbackText={currentItem.fallbackText}
                    theme={theme}
                  />
                )}
              </m.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
