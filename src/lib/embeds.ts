declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: Element | null) => void;
      };
    };
  }
}

let twitterScriptPromise: Promise<void> | null = null;

export const extractYouTubeId = (url: string) => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.searchParams.has("v")) {
      return parsed.searchParams.get("v");
    }

    const parts = parsed.pathname.split("/");
    const embedIndex = parts.findIndex((part) => part === "embed");
    return embedIndex >= 0 ? parts[embedIndex + 1] ?? null : null;
  } catch {
    return null;
  }
};

export const getYouTubeThumbnail = (videoId: string, quality: "hq" | "max" = "max") =>
  quality === "max"
    ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

export const extractXStatusId = (url: string) => {
  const match = url.match(/status\/(\d+)/i);
  return match?.[1] ?? null;
};

export const ensureTwitterScript = () => {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.twttr?.widgets) {
    return Promise.resolve();
  }

  if (twitterScriptPromise) {
    return twitterScriptPromise;
  }

  twitterScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      "script[data-twitter-widgets]",
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Unable to load Twitter widgets script.")),
        { once: true },
      );
      window.setTimeout(() => resolve(), 2400);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-twitter-widgets", "true");
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load Twitter widgets script."));
    document.body.appendChild(script);

    window.setTimeout(() => resolve(), 2400);
  });

  return twitterScriptPromise;
};
