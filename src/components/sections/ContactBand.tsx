import { useState } from "react";
import { siteContent } from "../../content/siteContent";
import { buttonLinkClassName, ButtonLink } from "../ui/ButtonLink";
import { MailIcon, XIcon, DiscordIcon } from "../ui/icons";

const copyToClipboard = async (value: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
};

export const ContactBand = () => {
  const [copyMessage, setCopyMessage] = useState("Email is the best first contact for booking inquiries.");

  return (
    <section id="contact" className="section-shell pb-20">
      <div className="container-frame">
        <div className="chrome-panel overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(102,221,231,0.12),transparent_28%),radial-gradient(circle_at_left_bottom,rgba(209,122,242,0.12),transparent_22%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <div>
              <p className="data-kicker mb-4">{siteContent.contact.eyebrow}</p>
              <h2 className="text-balance font-display text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
                {siteContent.contact.title}
              </h2>
              <p className="text-pretty mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {siteContent.contact.body}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-line bg-white/[0.03] px-5 py-5">
                  <p className="data-kicker mb-3">Business email</p>
                  <p className="break-all text-base font-semibold text-ink">
                    {siteContent.contact.email}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-line bg-white/[0.03] px-5 py-5">
                  <p className="data-kicker mb-3">Discord</p>
                  <p className="text-base font-semibold text-ink">
                    {siteContent.contact.discord}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 self-center">
              <ButtonLink
                href={`mailto:${siteContent.contact.email}?subject=Commentary%20Inquiry`}
                variant="primary"
                icon={<MailIcon className="h-4 w-4" />}
              >
                Email Devin
              </ButtonLink>

              <button
                type="button"
                onClick={async () => {
                  await copyToClipboard(siteContent.contact.discord);
                  setCopyMessage("Discord handle copied to clipboard.");
                  window.setTimeout(() => {
                    setCopyMessage("Email is the best first contact for booking inquiries.");
                  }, 2400);
                }}
                className={buttonLinkClassName("secondary")}
              >
                <span>Copy Discord</span>
                <DiscordIcon className="h-4 w-4" />
              </button>

              <ButtonLink
                href={siteContent.contact.xUrl}
                variant="ghost"
                external
                icon={<XIcon className="h-4 w-4" />}
              >
                DM on X
              </ButtonLink>

              <p aria-live="polite" className="mt-3 text-sm leading-7 text-muted">
                {copyMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
