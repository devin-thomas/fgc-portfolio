import { AnimatePresence, m } from "framer-motion";
import { useEffect } from "react";
import type { GalleryImage } from "../../content/types";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "../ui/icons";

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const GalleryLightbox = ({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) => {
  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        onPrevious();
      }
      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, onClose, onNext, onPrevious]);

  const image = activeIndex === null ? null : images[activeIndex];

  return (
    <AnimatePresence>
      {image ? (
        <m.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/86 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-white/6 text-white hover:bg-white/10"
            aria-label="Close gallery"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-white/6 text-white hover:bg-white/10 md:flex"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-white/6 text-white hover:bg-white/10 md:flex"
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <m.figure
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="max-h-[92vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-black/40 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 max-w-3xl text-sm leading-7 text-white/78">
              {image.caption}
            </figcaption>
          </m.figure>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
};
