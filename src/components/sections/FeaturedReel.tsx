import { featuredVideos } from "../../content/mediaCatalog";
import { siteContent } from "../../content/siteContent";
import { LiteYouTubeEmbed } from "../media/LiteYouTubeEmbed";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export const FeaturedReel = () => (
  <section id="clips" className="section-shell">
    <div className="container-frame">
      <SectionHeading
        eyebrow={siteContent.clips.eyebrow}
        title={siteContent.clips.title}
        body={siteContent.clips.body}
      />

      <div className="section-rule mt-10" />

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <article className="chrome-panel p-4 sm:p-5">
            <LiteYouTubeEmbed
              title={featuredVideos[0].title}
              url={featuredVideos[0].url}
            />
            <div className="mt-5 px-1 pb-1">
              <p className="data-kicker mb-3">{featuredVideos[0].context}</p>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                {featuredVideos[0].title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                {featuredVideos[0].description}
              </p>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-6 lg:col-span-5">
          {featuredVideos.slice(1).map((video, index) => (
            <Reveal key={video.url} delay={0.08 + index * 0.05}>
              <article className="chrome-panel p-4 sm:p-5">
                <LiteYouTubeEmbed title={video.title} url={video.url} />
                <div className="mt-5 px-1 pb-1">
                  <p className="data-kicker mb-3">{video.context}</p>
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-ink">
                    {video.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {video.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
