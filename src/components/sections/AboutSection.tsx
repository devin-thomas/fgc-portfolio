import { siteContent } from "../../content/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export const AboutSection = () => (
  <section id="about" className="section-shell">
    <div className="container-frame grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
      <div>
        <SectionHeading
          eyebrow={siteContent.about.eyebrow}
          title={siteContent.about.title}
          body={siteContent.about.body}
        />

        <Reveal delay={0.08}>
          <div className="chrome-panel mt-8 px-6 py-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="data-kicker mb-3">Current role</p>
                <p className="text-lg font-semibold tracking-[-0.04em] text-ink">
                  {siteContent.brand.role}
                </p>
              </div>
              <div>
                <p className="data-kicker mb-3">Target lane</p>
                <p className="text-lg font-semibold tracking-[-0.04em] text-ink">
                  {siteContent.brand.aspiration}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid gap-4 self-end">
        {siteContent.about.cards.map((card, index) => (
          <Reveal key={card.label} delay={0.08 + index * 0.06}>
            <article className="chrome-panel px-6 py-6">
              <p className="data-kicker mb-3">{card.label}</p>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
