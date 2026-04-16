import { useState } from "react";
import { galleryImages } from "../../content/mediaCatalog";
import { siteContent } from "../../content/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { GalleryLightbox } from "./GalleryLightbox";

export const GalleryMosaic = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-shell">
      <div className="container-frame">
        <SectionHeading
          eyebrow={siteContent.gallery.eyebrow}
          title={siteContent.gallery.title}
          body={siteContent.gallery.body}
        />

        <div className="mt-10 grid gap-5 md:auto-rows-[16rem] md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={0.05 + index * 0.05}
              className={index === 0 ? "md:row-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block h-full w-full overflow-hidden rounded-[1.75rem] text-left ring-1 ring-line"
                aria-label={`Open gallery image ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                    image.orientation === "portrait" ? "object-[58%_32%]" : "object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="data-kicker text-white/70">Gallery</p>
                  <p className="mt-2 max-w-md text-sm leading-7 text-white/82">
                    {image.caption}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <GalleryLightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrevious={() =>
          setActiveIndex((current) =>
            current === null
              ? 0
              : (current - 1 + galleryImages.length) % galleryImages.length,
          )
        }
        onNext={() =>
          setActiveIndex((current) =>
            current === null ? 0 : (current + 1) % galleryImages.length,
          )
        }
      />
    </section>
  );
};
