import { useEffect, useRef, useState } from "react";
import type { ThemeMode } from "../../content/types";
import { ensureTwitterScript } from "../../lib/embeds";
import { ArrowUpRightIcon, XIcon } from "../ui/icons";

interface XEmbedProps {
  url: string;
  title: string;
  fallbackText?: string;
  theme: ThemeMode;
}

export const XEmbed = ({ url, title, fallbackText, theme }: XEmbedProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [shouldHydrate, setShouldHydrate] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldHydrate(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldHydrate || !hostRef.current) {
      return;
    }

    let cancelled = false;
    let fallbackTimer = 0;
    const host = hostRef.current;
    host.innerHTML = "";
    setUseFallback(false);

    const blockquote = document.createElement("blockquote");
    blockquote.className = "twitter-tweet";
    blockquote.dataset.theme = theme;
    blockquote.dataset.dnt = "true";

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.textContent = title;
    blockquote.appendChild(anchor);
    host.appendChild(blockquote);

    ensureTwitterScript()
      .then(() => {
        if (cancelled) {
          return;
        }

        window.twttr?.widgets?.load(host);
        fallbackTimer = window.setTimeout(() => {
          if (!host.querySelector("iframe")) {
            setUseFallback(true);
          }
        }, 4500);
      })
      .catch(() => {
        if (!cancelled) {
          setUseFallback(true);
        }
      });

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
    };
  }, [shouldHydrate, theme, title, url]);

  return (
    <div ref={containerRef}>
      {useFallback ? (
        <div className="chrome-panel p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/6 text-accent">
              <XIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="data-kicker mb-2">X / Twitter fallback</p>
              <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {fallbackText ?? "Open the post directly on X to view the combo clip."}
              </p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                <span>Open on X</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={hostRef}
          className="min-h-[22rem] overflow-hidden rounded-[1.75rem] ring-1 ring-line"
        />
      )}
    </div>
  );
};
