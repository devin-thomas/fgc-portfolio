import { siteContent } from "../../content/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export const WorkGrid = () => (
  <section id="work" className="section-shell">
    <div className="container-frame">
      <SectionHeading
        eyebrow={siteContent.work.eyebrow}
        title={siteContent.work.title}
        body={siteContent.work.body}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.work.pillars.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            delay={0.05 + index * 0.05}
            className={index === siteContent.work.pillars.length - 1 ? "xl:col-span-2" : ""}
          >
            <article className="chrome-panel h-full px-6 py-6">
              <div className="flex items-start justify-between gap-4">
                <p className="data-kicker">{pillar.eyebrow}</p>
                <span className="font-condensed text-5xl font-semibold tracking-[-0.06em] text-white/6">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 max-w-sm text-2xl font-semibold tracking-[-0.05em] text-ink">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{pillar.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
