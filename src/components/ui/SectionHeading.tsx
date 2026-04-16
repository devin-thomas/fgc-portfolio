import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
}

export const SectionHeading = ({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionHeadingProps) => (
  <Reveal
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <p className="data-kicker mb-4">{eyebrow}</p>
    <h2 className="text-balance font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[3.25rem]">
      {title}
    </h2>
    <p className="text-pretty mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
      {body}
    </p>
  </Reveal>
);
