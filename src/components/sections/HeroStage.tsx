import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { mediaAssets } from "../../content/mediaCatalog";
import { siteContent } from "../../content/siteContent";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRightIcon } from "../ui/icons";

export const HeroStage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 54]);
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);
  const artScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 1.06],
  );

  return (
    <section id="hero" ref={sectionRef} className="section-shell pt-6 sm:pt-8 lg:pt-14">
      <div className="container-frame">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div className="relative z-10">
            <Reveal>
              <p className="data-kicker mb-5">{siteContent.hero.eyebrow}</p>
              <h1 className="text-balance font-display text-5xl font-semibold tracking-[-0.07em] text-ink sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]">
                {siteContent.hero.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-pretty mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:text-[1.15rem]">
                {siteContent.hero.deck}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-7 flex flex-wrap gap-3">
                {siteContent.hero.proofChips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-line bg-white/4 px-4 py-2 text-sm font-medium text-ink"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={siteContent.hero.primaryCta.href} variant="primary">
                  {siteContent.hero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={siteContent.hero.secondaryCta.href}
                  variant="secondary"
                  icon={<ArrowUpRightIcon className="h-4 w-4" />}
                >
                  {siteContent.hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {siteContent.hero.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.14 + index * 0.05}>
                  <article className="chrome-panel px-5 py-5">
                    <p className="data-kicker mb-3">{stat.label}</p>
                    <h2 className="text-lg font-semibold tracking-[-0.04em] text-ink">
                      {stat.value}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted">{stat.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative">
            <m.img
              src={mediaAssets.ekkoKeyArt}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-4%] top-[-10%] z-0 hidden w-[78%] max-w-[32rem] opacity-75 mix-blend-screen md:block"
              style={{ y: artY, scale: artScale }}
            />

            <div className="relative ml-auto max-w-[36rem]">
              <Reveal delay={0.12}>
                <m.div
                  className="chrome-panel noise-sheen p-3 sm:p-4"
                  style={{ y: portraitY }}
                >
                  <div className="angled-frame relative overflow-hidden">
                    <img
                      src={mediaAssets.heroPortrait}
                      alt="Portrait of Devin Thomas, known as Lil Gohan."
                      className="aspect-[0.8] w-full object-cover object-[58%_30%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                    <img
                      src={mediaAssets.ekkoOverlay}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 right-0 w-[56%] opacity-30 mix-blend-screen"
                    />
                    <div className="absolute left-4 top-4 flex items-center gap-3 rounded-full border border-white/14 bg-black/38 px-3 py-2 backdrop-blur">
                      <img
                        src={mediaAssets.synergyMark}
                        alt=""
                        aria-hidden="true"
                        className="h-7 w-7 object-contain"
                      />
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/75">
                          Affiliation
                        </p>
                        <p className="text-sm font-medium text-white">
                          {siteContent.brand.affiliation}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div className="rounded-[1.25rem] border border-white/14 bg-black/45 px-4 py-3 backdrop-blur">
                        <p className="data-kicker text-white/70">{siteContent.brand.name}</p>
                        <p className="mt-1 text-lg font-semibold tracking-[-0.04em] text-white">
                          {siteContent.brand.alias}
                        </p>
                      </div>
                      <div className="rounded-full border border-white/14 bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                        {siteContent.brand.handle}
                      </div>
                    </div>
                  </div>
                </m.div>
              </Reveal>

              <Reveal delay={0.24}>
                <aside className="chrome-panel mt-5 ml-auto max-w-[23rem] px-5 py-5">
                  <p className="data-kicker mb-3">Positioning</p>
                  <p className="text-pretty text-sm leading-7 text-muted">
                    {siteContent.hero.sideNote}
                  </p>
                </aside>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
