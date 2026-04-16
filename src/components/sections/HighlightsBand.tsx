import { mediaAssets } from "../../content/mediaCatalog";
import { siteContent } from "../../content/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export const HighlightsBand = () => (
  <section id="highlights" className="section-shell">
    <div className="container-frame">
      <div className="chrome-panel px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <img
          src={mediaAssets.synergyMark}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-6 hidden h-28 w-28 object-contain opacity-12 md:block"
        />
        <SectionHeading
          eyebrow={siteContent.highlights.eyebrow}
          title={siteContent.highlights.title}
          body={siteContent.highlights.body}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.highlights.items.map((item, index) => (
            <Reveal key={item.label} delay={0.05 + index * 0.04}>
              <article className="rounded-[1.6rem] border border-line bg-white/[0.03] px-5 py-5">
                <p className="data-kicker mb-3">{item.label}</p>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-ink">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
