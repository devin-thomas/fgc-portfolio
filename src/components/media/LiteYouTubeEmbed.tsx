import { useMemo, useState } from "react";
import { extractYouTubeId, getYouTubeThumbnail } from "../../lib/embeds";
import { PlayIcon } from "../ui/icons";

interface LiteYouTubeEmbedProps {
  title: string;
  url: string;
  className?: string;
}

export const LiteYouTubeEmbed = ({
  title,
  url,
  className = "",
}: LiteYouTubeEmbedProps) => {
  const videoId = useMemo(() => extractYouTubeId(url), [url]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [useHqFallback, setUseHqFallback] = useState(false);

  if (!videoId) {
    return (
      <div
        className={`chrome-panel flex aspect-video items-center justify-center px-6 text-center text-sm text-muted ${className}`.trim()}
      >
        Video unavailable.
      </div>
    );
  }

  if (isPlaying) {
    return (
      <div className={`overflow-hidden ${className}`.trim()}>
        <div className="angled-frame overflow-hidden ring-1 ring-line">
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className={`group relative block w-full overflow-hidden rounded-[1.75rem] text-left ${className}`.trim()}
      aria-label={`Play ${title}`}
    >
      <div className="angled-frame overflow-hidden ring-1 ring-line">
        <img
          src={getYouTubeThumbnail(videoId, useHqFallback ? "hq" : "max")}
          alt=""
          loading="lazy"
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          onError={() => setUseHqFallback(true)}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex h-18 w-18 items-center justify-center rounded-full bg-white/14 text-white shadow-[0_16px_34px_rgba(0,0,0,0.35)] backdrop-blur">
          <PlayIcon className="ml-1 h-8 w-8" />
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4">
        <span className="rounded-full border border-white/16 bg-black/45 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-white uppercase">
          Watch clip
        </span>
      </div>
    </button>
  );
};
