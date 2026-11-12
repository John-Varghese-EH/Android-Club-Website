"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { clubConfig, clubStats } from "@/data/club";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import {
  BugdroidRig,
  DroidAccessory,
  getSeedFilter,
} from "@/components/ui/BugdroidRig";
import { MaterialIcon, MaterialIconName } from "@/components/ui/MaterialIcon";
import {
  AndroidLogoMark,
  M3CloverFrame,
  M3JaggedBadge,
  M3PebbleFrame,
  M3SlantedPill,
  M3Starburst,
  PixelMatrixDotCluster,
} from "@/components/ui/M3Shapes";
import { SmartImage } from "@/components/ui/SmartImage";
import { prefersReducedMotion, scrollToSection } from "@/lib/motion";
import { MATERIAL_SEEDS, useTheme } from "@/lib/theme";
import { cn, getIstTimeString } from "@/lib/utils";

interface HeroSectionProps {
  preloaderFinished: boolean;
}

const ACCESSORIES: { id: DroidAccessory; label: string; icon: MaterialIconName }[] = [
  { id: "none", label: "Classic", icon: "smart_toy" },
  { id: "visor", label: "Visor", icon: "visibility" },
  { id: "headphones", label: "Audio", icon: "headphones" },
  { id: "cap", label: "Cap", icon: "school" },
];

const HERO_PHOTOS = [
  {
    src: "/assets/gallery/groupPhoto.jpg",
    alt: "Android Club VIT Bhopal campus squad",
    badge: "AB-1 Squad",
    title: "1,200+ Builders",
    subtitle: "VIT Bhopal Since 2017",
  },
  {
    src: "/assets/events/latest/promptwars_2026/gallery_1.jpg",
    alt: "PromptWars Community 2026 mentor judging with Google for Developers and Hack2skill",
    badge: "PromptWars 2026",
    title: "Build with AI",
    subtitle: "Google × Hack2skill",
  },
  {
    src: "/assets/events/Android_Fusion/img1.jpg",
    alt: "Students building live prototypes in LC-205 lab",
    badge: "LC-205 Lab",
    title: "Android Fusion",
    subtitle: "36h Kotlin Sprints",
  },
  {
    src: "/assets/events/DSA_Tussle/img1.jpg",
    alt: "Packed coding arena during DSA Tussle at VIT Bhopal",
    badge: "DSA Tussle",
    title: "Full-Hall Arena",
    subtitle: "Algorithmic Challenges",
  },
  {
    src: "/assets/events/latest/geek_rush/gallery_1.webp",
    alt: "Speaker session during Geek Rush at VIT Bhopal",
    badge: "Geek Rush",
    title: "Campus Keynotes",
    subtitle: "Technical Workshops",
  },
  {
    src: "/assets/events/Meet_and_Greet/img3.jpg",
    alt: "Faculty coordinators and students at Meet and Greet auditorium session",
    badge: "Auditorium",
    title: "Meet & Greet",
    subtitle: "Faculty & Cohort",
  },
];

const CAPABILITY_TRACKS = [
  "Jetpack Compose",
  "Kotlin Multiplatform",
  "Material 3",
  "CameraX AI",
  "ESP32 BLE",
  "Wear OS",
  "Google Play",
];

export function HeroSection({ preloaderFinished }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const { accentSeed, setAccentSeed, activePalette } = useTheme();
  const [accessory, setAccessory] = useState<DroidAccessory>("none");
  const [studioMode, setStudioMode] = useState<"bot" | "dance" | "3d">("bot");
  const [photoIdx, setPhotoIdx] = useState(0);
  const [galleryPaused, setGalleryPaused] = useState(false);
  const [campusTime, setCampusTime] = useState<string>("");

  useEffect(() => {
    const t = setTimeout(() => setCampusTime(getIstTimeString()), 0);
    const id = setInterval(() => setCampusTime(getIstTimeString()), 1000);
    return () => {
      clearTimeout(t);
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (galleryPaused || prefersReducedMotion()) return;
    const id = setInterval(() => {
      setPhotoIdx((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 4500);
    return () => clearInterval(id);
  }, [galleryPaused]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!preloaderFinished || prefersReducedMotion() || !stage) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stage,
        { scale: 1.03, filter: "blur(4px)" },
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "expo.out",
          clearProps: "filter,transform",
        }
      );

      gsap.fromTo(
        ".hero-stagger",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "power3.out",
          clearProps: "opacity,transform",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [preloaderFinished]);

  const activePhoto = HERO_PHOTOS[photoIdx] ?? HERO_PHOTOS[0];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-[100svh] flex-col justify-center pt-[74px] pb-6 sm:pt-24 sm:pb-6 lg:pt-20 lg:pb-5 overflow-hidden"
    >
      <div
        ref={stageRef}
        className="mx-auto my-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 will-change-transform"
      >
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-12 lg:items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-0.5 sm:py-1">
            <div>
              <div className="hero-stagger mb-2.5 sm:mb-5 flex flex-wrap items-center justify-between gap-2.5">
                <M3JaggedBadge
                  variant="sawtooth"
                  tone="primary"
                  liveDot
                  dotColor={accentSeed}
                >
                  Fall 2026 Cohort • VIT Bhopal
                </M3JaggedBadge>

                <div className="flex items-center gap-2.5 text-xs font-medium text-[var(--text-muted)]">
                  <span className="font-mono text-[11px] tabular-nums">
                    IST {campusTime || "11:30 AM"}
                  </span>
                  <PixelMatrixDotCluster className="hidden sm:grid" />
                </div>
              </div>

              <p className="hero-stagger mb-1 sm:mb-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[var(--m3-primary)]">
                {clubConfig.tagline}
              </p>

              <h1 className="hero-stagger font-expressive text-[clamp(2.1rem,4.7vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.036em] text-[var(--text-primary)]">
                Native apps,
                <br />
                built for campus.
              </h1>

              <div className="hero-stagger mt-3 sm:mt-5 max-w-xl text-[15px] sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                Student builders{" "}
                <span className="hidden sm:inline">
                  <M3SlantedPill className="mx-1.5 sm:mx-2 h-6 sm:h-7 w-10 sm:w-12 align-middle shadow-sm bg-[var(--bg-elevated)]">
                    <Image
                      src="/assets/events/Meet_and_Greet/img1.jpg"
                      alt="VIT Bhopal Android lab session"
                      width={96}
                      height={56}
                      loading="eager"
                      className="h-full w-full object-cover"
                    />
                  </M3SlantedPill>
                </span>
                shipping Kotlin,{" "}
                <span className="hidden sm:inline">
                  <M3PebbleFrame className="inline-flex mx-1.5 sm:mx-2 h-7 sm:h-8 w-7 sm:w-8 align-middle shadow-sm bg-[var(--m3-primary-container)]">
                    <Image
                      src="/assets/events/Android_Fusion/img2.jpg"
                      alt="Android Club cohort in lab"
                      width={64}
                      height={64}
                      loading="eager"
                      className="h-full w-full object-cover"
                    />
                  </M3PebbleFrame>
                </span>
                on-device AI, and hardware{" "}
                <span className="hidden sm:inline">
                  <M3SlantedPill className="group mx-1.5 h-6 sm:h-7 w-10 sm:w-11 align-middle bg-[var(--m3-primary-container)] px-1.5 items-center justify-center rotate-2 cursor-pointer">
                    <AndroidLogoMark
                      alt="Android 3D icon"
                      width={26}
                      height={16}
                      className="h-4.5 sm:h-5 w-6 sm:w-7"
                    />
                  </M3SlantedPill>
                </span>
                at VIT Bhopal since 2017.
              </div>

              <div className="hero-stagger mt-5 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection("join")}
                  className="group md-state-layer inline-flex h-11 sm:h-12 flex-1 sm:flex-initial justify-between sm:justify-start items-center gap-3 rounded-full bg-[var(--m3-primary)] pl-5 sm:pl-6 pr-1.5 sm:pr-2 text-sm font-semibold text-[var(--m3-on-primary)] m3-spring hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  <span>{clubConfig.ctaPrimary}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--m3-on-primary)]/15 m3-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <MaterialIcon name="arrow_outward" size={17} />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="md-state-layer inline-flex h-11 sm:h-12 flex-1 sm:flex-initial justify-center items-center gap-2 rounded-full bg-[var(--m3-secondary-container)] px-4 sm:px-6 text-sm font-semibold text-[var(--text-primary)] m3-spring hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <MaterialIcon
                    name="code_blocks"
                    size={18}
                    className="text-[var(--m3-primary)]"
                  />
                  <span>Explore Builds</span>
                </button>
              </div>
            </div>

            <div className="hero-stagger mt-5 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-6 sm:border-t sm:border-[var(--border-card)] sm:pt-5">
              {clubStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)]/85 px-3.5 py-2.5 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
                >
                  <p className="font-expressive text-xl sm:text-2xl lg:text-[1.75rem] font-bold tracking-tight text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-[var(--text-muted)] truncate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-stagger lg:col-span-6 flex flex-col gap-4">
            <InvertedCutoutCard
              corner="bottom-right"
              notchWidth={72}
              notchHeight={72}
              notchGap={12}
              outerRadius={30}
              filletRadius={20}
              surfaceClassName="bg-[var(--m3-primary-container)]"
              className="min-h-[265px] sm:min-h-[300px] lg:min-h-[290px] xl:min-h-[315px]"
              notchContent={
                <button
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      studioMode === "dance" ? "androidify" : "domains"
                    )
                  }
                  aria-label={
                    studioMode === "dance"
                      ? "Customize on Androidify"
                      : "Explore Engineering Tracks"
                  }
                  title={
                    studioMode === "dance"
                      ? "Androidify Studio"
                      : "Explore Tracks"
                  }
                  className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-md m3-spring hover:scale-105 hover:rotate-12 cursor-pointer"
                >
                  <MaterialIcon name="arrow_outward" size={20} />
                </button>
              }
            >
              <div className="relative h-full p-4 sm:p-5 lg:p-6 bg-architectural-grid">
                <div className="grid h-full grid-cols-1 gap-3.5 sm:grid-cols-12 sm:gap-5 sm:items-stretch">
                  <div className="order-2 sm:order-1 sm:col-span-5 flex flex-col justify-between gap-2.5 sm:gap-3">
                    <div>
                      <div className="hidden sm:flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--m3-primary)]">
                          <span
                            className="h-2 w-2 rounded-full animate-pulse"
                            style={{ backgroundColor: accentSeed }}
                          />
                          Droid Studio
                        </span>
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">
                          M3 Expressive
                        </span>
                      </div>

                      <div className="sm:mt-2.5 flex items-center justify-between gap-2 sm:block rounded-2xl sm:rounded-[20px] border border-[var(--border-card)] bg-[var(--bg-elevated)]/92 px-3.5 py-2.5 sm:p-3.5 backdrop-blur-sm">
                        <div className="min-w-0">
                          <div className="hidden sm:flex items-center justify-between gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                              Monet Seed
                            </span>
                            <span className="font-mono text-[10px] font-medium text-[var(--text-muted)]">
                              {accentSeed}
                            </span>
                          </div>
                          <p className="sm:mt-0.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)] truncate">
                            {activePalette.name}
                          </p>
                        </div>
                        <div className="sm:mt-2.5 flex items-center gap-1.5 sm:gap-2 shrink-0">
                          {MATERIAL_SEEDS.map((seed) => {
                            const active =
                              accentSeed.toLowerCase() === seed.hex.toLowerCase();
                            return (
                              <button
                                key={seed.id}
                                type="button"
                                onClick={() => setAccentSeed(seed.hex)}
                                aria-label={`Palette ${seed.name}`}
                                title={seed.name}
                                className={cn(
                                  "h-5 w-5 rounded-full transition-transform cursor-pointer",
                                  active
                                    ? "scale-115 ring-2 ring-[var(--text-primary)] ring-offset-2 ring-offset-[var(--bg-elevated)]"
                                    : "opacity-80 hover:opacity-100 hover:scale-110"
                                )}
                                style={{ backgroundColor: seed.hex }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 pr-[80px] sm:pr-0">
                      <div
                        role="group"
                        aria-label="Bot stage mode"
                        className="grid grid-cols-3 rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)]/92 p-1 backdrop-blur-sm"
                      >
                        {(
                          [
                            { id: "bot", label: "Peek" },
                            { id: "dance", label: "Dance" },
                            { id: "3d", label: "Custom" },
                          ] as const
                        ).map((mode) => (
                          <button
                            key={mode.id}
                            type="button"
                            onClick={() => setStudioMode(mode.id)}
                            className={cn(
                              "rounded-full px-2 py-1.5 font-mono text-[10px] font-semibold transition-colors cursor-pointer",
                              studioMode === mode.id
                                ? "bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-xs"
                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            )}
                          >
                            {mode.label}
                          </button>
                        ))}
                      </div>

                      {studioMode === "3d" ? (
                        <div
                          role="group"
                          aria-label="Droid accessory"
                          className="grid grid-cols-4 sm:grid-cols-2 gap-1 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)]/92 p-1.5 backdrop-blur-sm"
                        >
                          {ACCESSORIES.map((acc) => (
                            <button
                              key={acc.id}
                              type="button"
                              onClick={() => setAccessory(acc.id)}
                              className={cn(
                                "inline-flex items-center justify-center gap-1 rounded-xl px-1.5 sm:px-2 py-1 font-mono text-[10px] font-medium transition-colors cursor-pointer",
                                accessory === acc.id
                                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                              )}
                            >
                              <MaterialIcon
                                name={acc.icon}
                                size={13}
                                filled={accessory === acc.id}
                              />
                              <span className="hidden xs:inline sm:inline">
                                {acc.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <a
                          href="https://www.androidify.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden sm:inline-flex items-center justify-between gap-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)]/92 px-3.5 py-2 font-mono text-[10px] font-semibold text-[var(--text-primary)] backdrop-blur-sm m3-spring hover:border-[var(--m3-primary)]"
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <MaterialIcon
                              name="auto_awesome"
                              size={13}
                              className="text-[var(--m3-primary)]"
                              filled
                            />
                            <span>Try Androidify</span>
                          </span>
                          <MaterialIcon
                            name="arrow_outward"
                            size={12}
                            className="text-[var(--text-muted)]"
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="order-1 sm:order-2 sm:col-span-7 relative flex min-h-[142px] sm:min-h-[245px] lg:min-h-[235px] flex-col items-center justify-center pt-6 sm:pt-0 pb-0.5 sm:pb-6 sm:pr-6">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-4 rounded-full blur-2xl opacity-35"
                      style={{
                        background: `radial-gradient(circle, ${accentSeed} 0%, transparent 68%)`,
                      }}
                    />

                    <div className="absolute left-0 top-0 z-10 flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2">
                      <div className="flex items-center gap-2">
                        <M3Starburst size={30} color={accentSeed} spin>
                          <MaterialIcon
                            name={studioMode === "3d" ? "touch_app" : "bolt"}
                            size={13}
                            className="text-[#090B0A]"
                            filled
                          />
                        </M3Starburst>
                        <span className="rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)]/88 px-2.5 py-1 font-mono text-[10px] font-medium text-[var(--text-primary)] backdrop-blur-sm">
                          {studioMode === "bot"
                            ? "3D Peek Bot"
                            : studioMode === "dance"
                              ? "3D Character"
                              : "Cursor Rig"}
                        </span>
                      </div>

                      <span className="sm:hidden font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--m3-primary)]">
                        Droid Studio
                      </span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center">
                      {studioMode === "bot" ? (
                        <>
                          <Image
                            src="/assets/logos/android-brand-new-logo-3D-full-bot.gif"
                            alt="Official 3D Android Peek bot animation"
                            width={818}
                            height={678}
                            unoptimized
                            style={{ filter: getSeedFilter(accentSeed) }}
                            className="h-[138px] sm:h-[210px] xl:h-[228px] w-auto object-contain select-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.24)] transition-[filter] duration-300"
                          />
                          <div
                            aria-hidden="true"
                            className="mt-0.5 h-2 w-24 sm:h-2.5 sm:w-32 rounded-full bg-black/25 dark:bg-black/50 blur-[4px]"
                          />
                        </>
                      ) : studioMode === "dance" ? (
                        <>
                          <Image
                            src="/assets/logos/android_dancing.gif"
                            alt="Official 3D animated dancing Android bot"
                            width={600}
                            height={680}
                            unoptimized
                            className="h-[138px] sm:h-[210px] xl:h-[225px] w-auto object-contain select-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.28)]"
                          />
                          <div
                            aria-hidden="true"
                            className="-mt-2 h-2 w-24 sm:h-2.5 sm:w-28 rounded-full bg-black/25 dark:bg-black/50 blur-[4px]"
                          />
                        </>
                      ) : (
                        <BugdroidRig
                          variant="hero"
                          size={195}
                          accentColor={accentSeed}
                          accessory={accessory}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </InvertedCutoutCard>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-12 sm:gap-4 flex-1">
              <InvertedCutoutCard
                corner="bottom-right"
                notchWidth={56}
                notchHeight={56}
                notchGap={12}
                outerRadius={26}
                filletRadius={18}
                surfaceClassName="bg-[var(--bg-elevated)]"
                className="sm:col-span-7 min-h-[178px] sm:min-h-[188px] lg:min-h-[182px] xl:min-h-[198px] group"
                notchContent={
                  <M3CloverFrame className="h-11 w-11 bg-[var(--m3-primary)] text-[var(--m3-on-primary)] flex items-center justify-center shadow-md hover:scale-110">
                    <button
                      type="button"
                      onClick={() => scrollToSection("events")}
                      aria-label="View events"
                      className="flex h-full w-full items-center justify-center cursor-pointer"
                    >
                      <MaterialIcon name="arrow_outward" size={17} />
                    </button>
                  </M3CloverFrame>
                }
              >
                <div
                  className="relative h-full min-h-[178px] sm:min-h-[188px] lg:min-h-[182px] xl:min-h-[198px]"
                  onMouseEnter={() => setGalleryPaused(true)}
                  onMouseLeave={() => setGalleryPaused(false)}
                >
                  <div className="absolute inset-0">
                    <SmartImage
                      src={activePhoto.src}
                      alt={activePhoto.alt}
                      wrapperClassName="h-full w-full"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

                  <div className="relative z-10 flex h-full min-h-[178px] sm:min-h-[188px] lg:min-h-[182px] xl:min-h-[198px] flex-col justify-between p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 font-mono text-[10px] font-medium text-white backdrop-blur-md border border-white/15">
                        {activePhoto.badge}
                      </span>

                      <div className="inline-flex items-center gap-1 rounded-full bg-black/45 p-0.5 font-mono text-[10px] text-white backdrop-blur-md border border-white/15">
                        <button
                          type="button"
                          onClick={() =>
                            setPhotoIdx(
                              (prev) =>
                                (prev - 1 + HERO_PHOTOS.length) %
                                HERO_PHOTOS.length
                            )
                          }
                          aria-label="Previous campus photo"
                          className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          <MaterialIcon name="arrow_back" size={13} />
                        </button>
                        <span className="px-1 tabular-nums">
                          {photoIdx + 1}/{HERO_PHOTOS.length}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setPhotoIdx(
                              (prev) => (prev + 1) % HERO_PHOTOS.length
                            )
                          }
                          aria-label="Next campus photo"
                          className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          <MaterialIcon name="arrow_forward" size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="pr-16">
                      <p className="font-expressive text-base sm:text-lg xl:text-xl font-semibold text-white leading-tight">
                        {activePhoto.title}
                      </p>
                      <p className="font-mono text-[10px] sm:text-[11px] text-white/75">
                        {activePhoto.subtitle}
                      </p>

                      <div className="mt-2 flex items-center gap-1.5">
                        {HERO_PHOTOS.map((photo, idx) => {
                          const active = idx === photoIdx;
                          return (
                            <button
                              key={photo.src}
                              type="button"
                              onClick={() => setPhotoIdx(idx)}
                              aria-label={`View ${photo.badge}`}
                              title={photo.badge}
                              className={cn(
                                "relative h-6.5 w-6.5 sm:h-7 sm:w-7 overflow-hidden rounded-lg border transition-all cursor-pointer shrink-0",
                                active
                                  ? "border-[var(--m3-primary)] ring-2 ring-[var(--m3-primary)]/70 scale-105"
                                  : "border-white/30 opacity-70 hover:opacity-100 hover:scale-105"
                              )}
                            >
                              <SmartImage
                                src={photo.src}
                                alt={photo.badge}
                                wrapperClassName="h-full w-full"
                                className="h-full w-full object-cover"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </InvertedCutoutCard>

              <InvertedCutoutCard
                corner="top-right"
                notchWidth={54}
                notchHeight={54}
                outerRadius={26}
                filletRadius={18}
                surfaceClassName="bg-[var(--m3-tertiary-container)]"
                className="sm:col-span-5 min-h-[164px] sm:min-h-[188px] lg:min-h-[182px] xl:min-h-[198px]"
                notchContent={
                  <M3Starburst size={42} color={accentSeed} spin>
                    <span className="font-mono text-[11px] font-bold text-[#090B0A]">
                      15
                    </span>
                  </M3Starburst>
                }
              >
                <div className="flex h-full min-h-[178px] sm:min-h-[188px] lg:min-h-[182px] xl:min-h-[198px] flex-col justify-between p-4 sm:p-5">
                  <div className="pr-12">
                    <M3JaggedBadge
                      variant="pixel"
                      tone="surface"
                      icon="bolt"
                      iconAnimation="wiggle"
                    >
                      BuildFest 2026
                    </M3JaggedBadge>
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-[var(--text-muted)]">
                      Target SDK
                    </p>
                    <p className="mt-0.5 font-expressive text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                      API 35
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToSection("projects")}
                    className="md-state-layer flex w-full items-center justify-between rounded-2xl bg-[var(--bg-elevated)]/92 px-3.5 py-2 text-left text-xs font-semibold text-[var(--text-primary)] m3-spring hover:bg-[var(--m3-primary)] hover:text-[var(--m3-on-primary)] cursor-pointer"
                  >
                    <span>Explore Builds</span>
                    <MaterialIcon name="arrow_forward" size={15} />
                  </button>
                </div>
              </InvertedCutoutCard>
            </div>
          </div>
        </div>

        <div className="hero-stagger mt-5 sm:mt-7 lg:mt-6 py-1.5 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-3">
            {[...CAPABILITY_TRACKS, ...CAPABILITY_TRACKS].map((track, idx) => (
              <span
                key={`${track}-${idx}`}
                className="shrink-0 rounded-full bg-[var(--bg-secondary)] px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
              >
                {track}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
