"use client";

import React, { useState } from "react";
import Image from "next/image";
import { pillars } from "@/data/club";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import {
  M3ArchFrame,
  M3CloverFrame,
  M3JaggedBadge,
  M3ScallopMask,
  M3Starburst,
} from "@/components/ui/M3Shapes";
import { MATERIAL_SEEDS, useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/motion";

export function DomainsSection() {
  const { accentSeed, setAccentSeed, activePalette } = useTheme();
  const [composePreviewTab, setComposePreviewTab] = useState<"ui" | "tokens">(
    "ui"
  );

  return (
    <section
      id="domains"
      className="py-14 sm:py-24 lg:py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/35"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3.5 md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
          <div>
            <M3JaggedBadge
              variant="sawtooth"
              tone="primary"
              icon="layers"
              iconAnimation="bob"
              className="mb-3 sm:mb-4"
            >
              Engineering Tracks
            </M3JaggedBadge>
            <h2 className="font-expressive text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Four Pillars.
            </h2>
            <p className="mt-2 max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
              From Jetpack Compose architecture to BLE hardware.
            </p>
          </div>
          <M3JaggedBadge
            variant="ticket"
            tone="surface"
            liveDot
            dotColor={accentSeed}
            glint={false}
            className="w-fit"
          >
            Seed: {activePalette.name}
          </M3JaggedBadge>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-7">
          <InvertedCutoutCard
            corner="bottom-right"
            notchWidth={128}
            notchHeight={56}
            notchGap={12}
            outerRadius={32}
            filletRadius={22}
            surfaceClassName="bg-[var(--m3-primary-container)]"
            className="lg:col-span-7"
            notchContent={
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[var(--m3-primary)] px-4 text-xs font-semibold text-[var(--m3-on-primary)] shadow-sm m3-spring hover:scale-[1.04] cursor-pointer"
              >
                <span>See Apps</span>
                <MaterialIcon
                  name="arrow_outward"
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            }
          >
            <div className="flex h-full flex-col justify-between p-5 sm:p-9">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--m3-primary)] text-[var(--m3-on-primary)]">
                      <MaterialIcon name="code_blocks" size={18} />
                    </span>
                    <span className="rounded-full bg-[var(--bg-elevated)]/90 px-3 py-1 text-xs font-semibold text-[var(--text-primary)]">
                      {pillars[0].badge}
                    </span>
                    <span className="rounded-full bg-[var(--bg-elevated)]/70 px-3 py-1 font-mono text-[11px] font-semibold text-[var(--m3-on-primary-container)]">
                      {pillars[0].stat}
                    </span>
                  </div>

                  <h3 className="mt-4 sm:mt-5 font-expressive text-2xl sm:text-3xl font-bold tracking-tight text-[var(--m3-on-primary-container)]">
                    {pillars[0].title}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-[var(--m3-primary)]">
                    {pillars[0].tagline}
                  </p>
                  <p className="mt-2.5 sm:mt-3 max-w-xl text-sm leading-relaxed text-[var(--m3-on-primary-container)]/85">
                    {pillars[0].description}
                  </p>
                </div>

                <div className="flex shrink-0 items-center justify-center self-center sm:self-start rounded-3xl bg-[var(--bg-elevated)]/85 p-3.5 sm:p-4 shadow-sm">
                  <Image
                    src="/assets/logos/android-brand-new-logo-3D-animation.gif"
                    alt="3D Android builder robot animation"
                    width={395}
                    height={222}
                    unoptimized
                    className="h-20 sm:h-24 w-auto object-contain select-none"
                  />
                </div>
              </div>

              <div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-card)] pt-4 sm:pt-5 pb-14 sm:pb-0 sm:pr-40">
                <div className="flex flex-wrap gap-2">
                  {pillars[0].skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[var(--bg-elevated)]/85 px-3 py-1 text-xs font-medium text-[var(--text-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </InvertedCutoutCard>

          <InvertedCutoutCard
            corner="top-right"
            notchWidth={54}
            notchHeight={54}
            notchGap={12}
            outerRadius={30}
            filletRadius={20}
            surfaceClassName="bg-[var(--m3-tertiary-container)]"
            className="lg:col-span-5"
            notchContent={<M3Starburst size={42} color={accentSeed} spin />}
          >
            <div className="flex h-full flex-col justify-between p-5 sm:p-8">
              <div>
                <div className="pr-16 flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Live Monet Engine • Material 3
                  </span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                  Material You Color Picker
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Tap a wallpaper seed to recalculate the site&apos;s tonal
                  containers, Bugdroid chassis, and Compose tokens live.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {MATERIAL_SEEDS.map((seed) => {
                    const selected =
                      accentSeed.toLowerCase() === seed.hex.toLowerCase();
                    return (
                      <button
                        key={seed.hex}
                        type="button"
                        onClick={() => setAccentSeed(seed.hex)}
                        aria-pressed={selected}
                        className={cn(
                          "flex items-center gap-2.5 rounded-2xl border p-2.5 text-left m3-spring cursor-pointer",
                          selected
                            ? "border-[var(--text-primary)] bg-[var(--bg-elevated)] shadow-sm scale-[1.02]"
                            : "border-[var(--border-card)] bg-[var(--bg-elevated)]/65 hover:bg-[var(--bg-elevated)]"
                        )}
                      >
                        <span
                          className="h-6 w-6 shrink-0 rounded-full border border-black/10"
                          style={{ backgroundColor: seed.hex }}
                        />
                        <span className="min-w-0">
                          <span className="block truncate text-xs font-semibold text-[var(--text-primary)]">
                            {seed.name}
                          </span>
                          <span className="block font-mono text-[10px] text-[var(--text-muted)]">
                            {seed.label}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] p-3.5">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 mb-2.5">
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    ColorScheme.kt
                  </span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => setComposePreviewTab("ui")}
                      className={cn(
                        "rounded-md px-2 py-0.5 font-mono text-[10px] cursor-pointer",
                        composePreviewTab === "ui"
                          ? "bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                          : "text-[var(--text-muted)]"
                      )}
                    >
                      Preview
                    </button>
                    <button
                      type="button"
                      onClick={() => setComposePreviewTab("tokens")}
                      className={cn(
                        "rounded-md px-2 py-0.5 font-mono text-[10px] cursor-pointer",
                        composePreviewTab === "tokens"
                          ? "bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold"
                          : "text-[var(--text-muted)]"
                      )}
                    >
                      Kotlin
                    </button>
                  </div>
                </div>

                {composePreviewTab === "ui" ? (
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold text-[#090B0A]"
                        style={{ backgroundColor: accentSeed }}
                      >
                        M3
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)]">
                          {activePalette.name}
                        </p>
                        <p className="font-mono text-[10px] text-[var(--text-muted)]">
                          Seed {accentSeed}
                        </p>
                      </div>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-semibold text-[#090B0A]"
                      style={{ backgroundColor: accentSeed }}
                    >
                      Active
                    </span>
                  </div>
                ) : (
                  <pre className="overflow-x-auto font-mono text-[10.5px] leading-relaxed text-[var(--text-secondary)]">
                    {`val scheme = dynamicColorScheme(
  seed = Color(0xFF${accentSeed.replace("#", "")})
)`}
                  </pre>
                )}
              </div>
            </div>
          </InvertedCutoutCard>

          <div className="lg:col-span-4 rounded-[28px] sm:rounded-[32px] bg-[var(--bg-elevated)] border border-[var(--border-card)] p-5 sm:p-7 flex flex-col justify-between m3-spring hover:border-[var(--m3-primary)]/45">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--m3-secondary-container)] text-[var(--text-primary)]">
                  <MaterialIcon name="devices" size={18} />
                </span>
                <span className="rounded-full bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[11px] font-medium text-[var(--text-secondary)]">
                  {pillars[1].stat}
                </span>
              </div>
              <h3 className="mt-5 font-expressive text-xl font-bold tracking-tight text-[var(--text-primary)]">
                {pillars[1].title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {pillars[1].description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {pillars[1].skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-[var(--bg-secondary)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 rounded-[28px] sm:rounded-[32px] bg-[var(--m3-secondary-container)] p-5 sm:p-7 flex flex-col justify-between m3-spring">
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center -space-x-2">
                  <M3ScallopMask className="h-11 w-11 bg-[var(--bg-elevated)]">
                    <Image
                      src="/assets/events/Android_Fusion/img1.jpg"
                      alt="Design jam speaker at VIT Bhopal"
                      width={88}
                      height={88}
                      className="h-full w-full object-cover"
                    />
                  </M3ScallopMask>
                  <M3CloverFrame className="h-11 w-11 bg-[var(--bg-elevated)]">
                    <Image
                      src="/assets/events/Meet_and_Greet/img1.jpg"
                      alt="Member prototyping UI"
                      width={88}
                      height={88}
                      className="h-full w-full object-cover"
                    />
                  </M3CloverFrame>
                </div>
                <span className="rounded-full bg-[var(--bg-elevated)]/85 px-3 py-1 font-mono text-[11px] font-medium text-[var(--text-primary)]">
                  {pillars[2].stat}
                </span>
              </div>
              <h3 className="mt-5 font-expressive text-xl font-bold tracking-tight text-[var(--text-primary)]">
                {pillars[2].title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {pillars[2].description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {pillars[2].skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-[var(--bg-elevated)]/85 px-3 py-1 text-xs font-medium text-[var(--text-primary)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <InvertedCutoutCard
            corner="top-right"
            notchWidth={142}
            notchHeight={52}
            notchGap={12}
            outerRadius={32}
            filletRadius={20}
            surfaceClassName="bg-[var(--bg-elevated)]"
            className="lg:col-span-4"
            notchContent={
              <button
                type="button"
                onClick={() => scrollToSection("events")}
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[var(--m3-primary-container)] px-3.5 text-xs font-semibold text-[var(--m3-on-primary-container)] m3-spring hover:bg-[var(--m3-primary)] hover:text-[var(--m3-on-primary)] cursor-pointer"
              >
                <span>Hardware Labs</span>
                <MaterialIcon name="arrow_outward" size={13} />
              </button>
            }
          >
            <div className="flex h-full flex-col justify-between p-5 sm:p-7">
              <div>
                <div className="flex items-center gap-3 pr-32 sm:pr-36">
                  <M3ArchFrame className="h-12 w-12 shrink-0 bg-[var(--bg-secondary)]">
                    <Image
                      src="/assets/events/Android_Fusion/img2.jpg"
                      alt="Hardware and AI lab session"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </M3ArchFrame>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)]">
                    <MaterialIcon name="memory" size={18} />
                  </span>
                </div>
                <h3 className="mt-5 font-expressive text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  {pillars[3].title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {pillars[3].description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {pillars[3].skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-[var(--bg-secondary)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </InvertedCutoutCard>
        </div>
      </div>
    </section>
  );
}
