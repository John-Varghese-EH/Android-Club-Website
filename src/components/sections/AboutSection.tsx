"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clubTimeline, galleryImages } from "@/data/club";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import {
  M3ArchFrame,
  M3FlowerFrame,
  M3JaggedBadge,
  M3PebbleFrame,
  M3SlantedPill,
  M3Starburst,
} from "@/components/ui/M3Shapes";
import { SmartImage } from "@/components/ui/SmartImage";
import { prefersReducedMotion } from "@/lib/motion";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const API_LEVELS = ["API 3", "API 19", "API 26", "API 33", "API 35"];

export function AboutSection() {
  const { accentSeed } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(4);

  useEffect(() => {
    const section = sectionRef.current;
    if (prefersReducedMotion() || !section) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1px)",
      () => {
        const words = section.querySelectorAll(".manifesto-word");
        const block = section.querySelector(".manifesto-block");
        const stage = section.querySelector(".release-stage");

        if (words.length > 0 && block) {
          gsap.fromTo(
            words,
            { opacity: 0.22 },
            {
              opacity: 1,
              stagger: 0.08,
              scrollTrigger: {
                trigger: block,
                start: "top 80%",
                end: "bottom 55%",
                scrub: 0.6,
              },
            }
          );
        }

        if (stage) {
          gsap.fromTo(
            stage,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stage,
                start: "top 85%",
                once: true,
              },
            }
          );
        }
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  const manifestoSegments = [
    "Lectures teach syntax.",
    "We ship software.",
    "Hostel prototypes turned",
    "into campus apps.",
  ];

  const activeMilestone = clubTimeline[activeIdx] ?? clubTimeline[0];
  const activePhoto = galleryImages[activeIdx % galleryImages.length];
  const activeApi = API_LEVELS[activeIdx] ?? "API 35";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-14 sm:py-24 lg:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="manifesto-block max-w-4xl">
          <M3JaggedBadge
            variant="ticket"
            tone="secondary"
            starburst
            dotColor={accentSeed}
            className="mb-5 sm:mb-7"
          >
            Chapter Manifesto
          </M3JaggedBadge>

          <p className="font-expressive text-[clamp(1.85rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)]">
            {manifestoSegments.map((segment, i) => (
              <span key={i} className="manifesto-word inline">
                {segment}{" "}
              </span>
            ))}
          </p>

          <div className="mt-4 sm:mt-7 max-w-2xl text-[15px] sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            Founded in 2017 by Abhay Nigam. Guided by 3 faculty mentors and 80+ core builders across 12 departments, we run weekly Kotlin labs{" "}
            <span className="hidden sm:inline">
              <M3SlantedPill className="mx-2 h-7 w-12 align-middle shadow-sm bg-[var(--bg-elevated)]">
                <Image
                  src="/assets/events/Meet_and_Greet/img1.jpg"
                  alt="Weekly Kotlin coding lab"
                  width={96}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </M3SlantedPill>
            </span>
            hardware sprints{" "}
            <span className="hidden sm:inline">
              <M3FlowerFrame className="inline-flex mx-2 h-8 w-8 align-middle bg-[var(--m3-primary-container)] shadow-sm">
                <Image
                  src="/assets/events/Android_Fusion/img1.jpg"
                  alt="Hardware sprint mentor speaking"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover object-top"
                />
              </M3FlowerFrame>
            </span>
            and 40+ flagship campus events{" "}
            <span className="hidden sm:inline">
              <M3PebbleFrame className="inline-flex mx-2 h-8 w-10 align-middle shadow-sm bg-[var(--bg-elevated)]">
                <Image
                  src="/assets/events/DSA_Tussle/img2.jpg"
                  alt="Hackathon and coding winners"
                  width={80}
                  height={64}
                  className="h-full w-full object-cover object-top"
                />
              </M3PebbleFrame>
            </span>
            for 1,000+ enthusiasts at VIT Bhopal.
          </div>
        </div>

        <div className="release-stage mt-10 sm:mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-5 sm:mb-6">
            <div>
              <h2 className="font-expressive text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                Chapter Evolution by Android™ Release
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Select a release milestone from 2017 to 2026.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveIdx(
                    (prev) =>
                      (prev - 1 + clubTimeline.length) % clubTimeline.length
                  )
                }
                aria-label="Previous chapter release"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--m3-primary)] cursor-pointer"
              >
                <MaterialIcon name="arrow_back" size={18} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((prev) => (prev + 1) % clubTimeline.length)
                }
                aria-label="Next chapter release"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--m3-primary)] cursor-pointer"
              >
                <MaterialIcon name="arrow_forward" size={18} />
              </button>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Android Club timeline milestones"
            className="flex flex-wrap gap-2 mb-5 sm:mb-6"
          >
            {clubTimeline.map((item, idx) => {
              const selected = activeIdx === idx;
              return (
                <button
                  key={item.version}
                  role="tab"
                  aria-selected={selected}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium m3-spring cursor-pointer min-h-[38px]",
                    selected
                      ? "border-transparent bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-sm scale-[1.02]"
                      : "border-[var(--border-card)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:border-[var(--m3-primary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  <span className="font-mono text-[10px] opacity-80">
                    {item.year}
                  </span>
                  <span className="font-semibold">{item.version}</span>
                </button>
              );
            })}
          </div>

          <InvertedCutoutCard
            corner="top-right"
            notchWidth={82}
            notchHeight={48}
            notchGap={12}
            outerRadius={32}
            filletRadius={20}
            surfaceClassName="bg-[var(--bg-elevated)]"
            notchContent={
              <M3JaggedBadge variant="pixel" tone="primary" glint={false}>
                0{activeIdx + 1}/0{clubTimeline.length}
              </M3JaggedBadge>
            }
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 pt-7 sm:p-8 lg:p-10 items-center">
              <div className="lg:col-span-7 flex flex-col justify-between gap-5 sm:gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4 pr-24 lg:pr-0">
                    <M3JaggedBadge
                      variant="sawtooth"
                      tone="primary"
                      icon="history_edu"
                      iconAnimation="bob"
                    >
                      {activeMilestone.year}
                    </M3JaggedBadge>
                    <M3JaggedBadge
                      variant="pixel"
                      tone="dark"
                      icon="smart_toy"
                      iconAnimation="wiggle"
                      glint={false}
                    >
                      {activeMilestone.version} • {activeApi}
                    </M3JaggedBadge>
                  </div>

                  <h3 className="font-expressive text-2xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                    {activeMilestone.milestone}
                  </h3>

                  <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                    {activeMilestone.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-card)] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    {clubTimeline.map((item, idx) => (
                      <button
                        key={item.version}
                        type="button"
                        aria-label={`Jump to ${item.version}`}
                        onClick={() => setActiveIdx(idx)}
                        className={cn(
                          "h-1.5 rounded-full transition-all cursor-pointer",
                          activeIdx === idx
                            ? "w-8 bg-[var(--m3-primary)]"
                            : "w-2 bg-[var(--border-card)] hover:bg-[var(--text-muted)]"
                        )}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {activeMilestone.version}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex items-center justify-center lg:pt-4">
                <M3ArchFrame className="w-full h-52 sm:h-72 border border-[var(--border-card)] bg-[var(--bg-secondary)] shadow-sm">
                  <SmartImage
                    src={activePhoto}
                    alt={`Android Club VIT Bhopal milestone: ${activeMilestone.milestone}`}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full object-cover"
                  />
                </M3ArchFrame>

                <div className="absolute -bottom-3 -right-2 sm:right-2">
                  <M3Starburst size={68} color={accentSeed} spin>
                    <span className="font-mono text-[10px] font-bold text-[#090B0A]">
                      {activeApi}
                    </span>
                  </M3Starburst>
                </div>
              </div>
            </div>
          </InvertedCutoutCard>
        </div>
      </div>
    </section>
  );
}
