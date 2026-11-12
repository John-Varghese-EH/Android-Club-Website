"use client";

import React from "react";
import Image from "next/image";
import { clubConfig, navigationConfig } from "@/data/club";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import {
  AndroidLogoMark,
  M3CloverFrame,
  M3ScallopMask,
  M3Starburst,
  PixelMatrixDotCluster,
} from "@/components/ui/M3Shapes";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { scrollToSection } from "@/lib/motion";
import { useTheme } from "@/lib/theme";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { accentSeed, resolvedTheme } = useTheme();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-card)] bg-[var(--bg-secondary)]/75 pt-16 sm:pt-20 pb-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 opacity-45"
        style={{
          background: `radial-gradient(ellipse 68% 60% at 50% 100%, ${accentSeed}24 0%, transparent 72%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InvertedCutoutCard
          corner="top-right"
          notchWidth={140}
          notchHeight={56}
          notchGap={12}
          outerRadius={34}
          filletRadius={22}
          surfaceClassName="bg-[var(--bg-elevated)]"
          className="shadow-sm"
          notchContent={
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--m3-primary)] px-4.5 text-xs font-semibold text-[var(--m3-on-primary)] shadow-sm m3-spring hover:scale-[1.04] cursor-pointer"
            >
              <span>Back to top</span>
              <MaterialIcon
                name="arrow_forward"
                size={14}
                className="-rotate-90"
              />
            </button>
          }
        >
          <div className="p-5 pt-16 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6 space-y-5 pr-0 sm:pr-36 lg:pr-6">
                <div className="group flex items-center gap-3.5 w-fit cursor-default">
                  <span className="relative flex h-[28px] w-[48px] sm:h-[32px] sm:w-[54px] shrink-0 items-center justify-center -translate-y-[1.5px] transition-transform duration-300 ease-out group-hover:scale-105">
                    <AndroidLogoMark
                      alt="Android Club logo"
                      width={54}
                      height={32}
                      className="h-full w-full drop-shadow-[0_3px_10px_rgba(61,220,132,0.2)]"
                    />
                  </span>
                  <div>
                    <h2 className="font-expressive text-xl font-bold tracking-tight text-[var(--text-primary)]">
                      Android Club
                    </h2>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      {clubConfig.chapter} • Est. {clubConfig.established}
                    </p>
                  </div>
                </div>

                <div className="font-expressive text-2xl sm:text-3xl font-bold tracking-tight leading-[1.2] text-[var(--text-primary)]">
                  Built in Bhopal.{" "}
                  <span className="hidden sm:inline-flex items-center align-middle mx-1">
                    <M3ScallopMask className="h-10 w-10 bg-[var(--bg-secondary)]">
                      <Image
                        src="/assets/events/Meet_and_Greet/img2.jpg"
                        alt="VIT Bhopal auditorium session"
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </M3ScallopMask>
                  </span>
                  <br />
                  Open to{" "}
                  <span className="hidden sm:inline-flex h-8 w-14 overflow-hidden rounded-full align-middle mx-1 -rotate-2 ring-2 ring-[var(--m3-primary)]/45">
                    <Image
                      src="/assets/gallery/groupPhoto.jpg"
                      alt="Android Club VIT Bhopal members"
                      width={112}
                      height={64}
                      loading="eager"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="text-[var(--m3-primary)]">every</span>{" "}
                  builder.
                </div>

                <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                  {clubConfig.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => scrollToSection("join")}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--m3-primary)] px-4.5 py-2 text-xs font-semibold text-[var(--m3-on-primary)] m3-spring hover:scale-[1.03] cursor-pointer"
                  >
                    <span>Join Chapter</span>
                    <MaterialIcon name="arrow_forward" size={14} />
                  </button>
                  <a
                    href={`mailto:${clubConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-secondary)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] m3-spring hover:bg-[var(--m3-secondary-container)]"
                  >
                    <span>{clubConfig.email}</span>
                  </a>
                  <a
                    href={`tel:${clubConfig.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-secondary)] px-4 py-2 font-mono text-xs font-medium text-[var(--text-primary)] m3-spring hover:bg-[var(--m3-secondary-container)]"
                  >
                    <span>{clubConfig.phone}</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 lg:col-span-6 lg:pt-8">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Navigation
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-[var(--text-secondary)]">
                    {navigationConfig.items.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(item.id)}
                          className="hover:text-[var(--m3-primary)] transition-colors cursor-pointer"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Community
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-[var(--text-secondary)]">
                    <li>
                      <a
                        href={clubConfig.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[var(--m3-primary)] transition-colors"
                      >
                        <span>WhatsApp</span>
                        <MaterialIcon name="arrow_outward" size={13} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={clubConfig.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[var(--m3-primary)] transition-colors"
                      >
                        <span>GitHub</span>
                        <MaterialIcon name="arrow_outward" size={13} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={clubConfig.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[var(--m3-primary)] transition-colors"
                      >
                        <span>LinkedIn</span>
                        <MaterialIcon name="arrow_outward" size={13} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={clubConfig.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[var(--m3-primary)] transition-colors"
                      >
                        <span>Instagram</span>
                        <MaterialIcon name="arrow_outward" size={13} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={clubConfig.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[var(--m3-primary)] transition-colors"
                      >
                        <span>X (Twitter)</span>
                        <MaterialIcon name="arrow_outward" size={13} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={clubConfig.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[var(--m3-primary)] transition-colors"
                      >
                        <span>YouTube</span>
                        <MaterialIcon name="arrow_outward" size={13} />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Campus Address
                  </h3>
                  <div className="mt-4 rounded-2xl bg-[var(--m3-secondary-container)] p-3.5 space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <M3CloverFrame className="h-9 w-9 shrink-0 bg-[var(--bg-elevated)]">
                        <Image
                          src="/assets/events/Android_Fusion/img2.jpg"
                          alt="LC Lab campus workshop"
                          width={72}
                          height={72}
                          className="h-full w-full object-cover"
                        />
                      </M3CloverFrame>
                      <span className="text-[11px] font-semibold text-[var(--text-primary)]">
                        Lab Complex Studio
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {clubConfig.campus}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-5 rounded-[26px] border border-[var(--border-card)] bg-[var(--bg-secondary)]/65 p-4 sm:p-5 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 space-y-3 px-1">
                <div className="flex items-center gap-2.5">
                  <M3Starburst size={34} color={accentSeed} spin>
                    <MaterialIcon
                      name="bolt"
                      size={14}
                      className="text-[#090B0A]"
                    />
                  </M3Starburst>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      Live Campus Map
                    </p>
                    <h3 className="font-expressive text-base sm:text-lg font-bold text-[var(--text-primary)]">
                      VIT Bhopal University
                    </h3>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  Meet the chapter at Lab Complex Studio (LC-205) and Main
                  Auditorium Blocks along the Bhopal-Indore Highway, Kothrikalan.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  <span className="rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] px-2.5 py-1 font-mono text-[10px] font-medium text-[var(--text-secondary)]">
                    {clubConfig.campusCoordinates}
                  </span>
                  <span className="rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] px-2.5 py-1 font-mono text-[10px] font-medium text-[var(--text-secondary)]">
                    {clubConfig.linkedinFollowers} LinkedIn Followers
                  </span>
                </div>

                <div className="pt-1">
                  <a
                    href={clubConfig.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--m3-primary)] px-4 py-2 text-xs font-semibold text-[var(--m3-on-primary)] m3-spring hover:scale-[1.03]"
                  >
                    <span>Open in Google Maps</span>
                    <MaterialIcon name="arrow_outward" size={14} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative h-52 sm:h-56 w-full overflow-hidden rounded-[20px] border border-[var(--border-card)] bg-[var(--bg-elevated)]">
                  <iframe
                    title="Android Club VIT Bhopal Google Map"
                    src={clubConfig.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`h-full w-full border-0 transition-all duration-300 ${
                      resolvedTheme === "dark"
                        ? "invert-[0.9] hue-rotate-180 contrast-[0.92] brightness-[0.95]"
                        : ""
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-[var(--border-card)] pt-7 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-2 text-[11px] leading-relaxed text-[var(--text-muted)]">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <p className="font-medium text-[var(--text-secondary)]">
                    &copy; {currentYear} Android Club, VIT Bhopal University.{" "}
                    <span className="text-[var(--m3-primary)] font-semibold">
                      {clubConfig.tagline}
                    </span>
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={clubConfig.legalLinks.privacy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--m3-primary)] transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <span aria-hidden="true">•</span>
                    <a
                      href={clubConfig.legalLinks.conduct}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--m3-primary)] transition-colors"
                    >
                      Code of Conduct
                    </a>
                    <span aria-hidden="true">•</span>
                    <a
                      href={clubConfig.legalLinks.reports}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--m3-primary)] transition-colors"
                    >
                      Make a Report
                    </a>
                  </div>
                </div>
                <p>
                  Android is a trademark of Google LLC. The Android robot is
                  reproduced or modified from work created and shared by Google
                  and used according to terms described in the Creative Commons
                  3.0 Attribution License.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://www.linkedin.com/in/John--Varghese"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--bg-secondary)] px-4 py-2 text-xs text-[var(--text-secondary)] transition-all hover:bg-[var(--m3-primary-container)] hover:text-[var(--text-primary)]"
                >
                  <span>Crafted with</span>
                  <MaterialIcon
                    name="favorite"
                    size={14}
                    filled
                    className="text-rose-500"
                  />
                  <span>by</span>
                  <span className="font-semibold text-[var(--text-primary)] underline decoration-[var(--android-green)]/50 decoration-1 underline-offset-4 group-hover:decoration-[var(--android-green)]">
                    John Varghese (J0X)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </InvertedCutoutCard>

        <div className="mt-8 sm:mt-10 flex items-end justify-center gap-5 sm:gap-12 overflow-hidden pt-4 border-b border-[var(--border-subtle)] lg:border-b-0">
          <div className="flex pb-5 sm:pb-7 opacity-80">
            <PixelMatrixDotCluster className="h-7 w-11 sm:h-9 sm:w-14 text-[var(--m3-primary)]" />
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            aria-label="Scroll back to top"
            className="group relative w-[180px] sm:w-[290px] md:w-[340px] cursor-pointer focus-visible:outline-none pt-6"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 translate-y-2 opacity-0 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-card)] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--text-primary)] shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 whitespace-nowrap"
            >
              Back to top ↑
            </span>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 bottom-0 h-20 rounded-full blur-2xl opacity-75 transition-opacity duration-500 group-hover:opacity-100"
              style={{ backgroundColor: `${accentSeed}38` }}
            />
            <AndroidLogoMark
              alt="3D Android robot sticking its head out at the bottom of the page"
              width={430}
              height={252}
              className="w-full translate-y-[6px] transition-transform duration-500 ease-[var(--md-sys-motion-easing-emphasized-decelerate)] group-hover:translate-y-[1px]"
            />
          </button>

          <div className="flex pb-5 sm:pb-7">
            <M3Starburst size={30} color={accentSeed} spin />
          </div>
        </div>
        <div
          className="h-[calc(5rem+env(safe-area-inset-bottom))] lg:hidden"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}
