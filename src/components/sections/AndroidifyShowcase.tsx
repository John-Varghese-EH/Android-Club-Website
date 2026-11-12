"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MATERIAL_SEEDS, useTheme } from "@/lib/theme";
import { M3JaggedBadge, M3Starburst } from "@/components/ui/M3Shapes";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils";

const PROMPT_PRESETS = [
  {
    id: "kotlin",
    label: "Kotlin Hoodie",
    prompt: "Android™ bot in a dark Kotlin hoodie with studio headphones",
    seed: "#3DDC84",
  },
  {
    id: "campus",
    label: "VIT Builder",
    prompt: "Bot holding a coffee mug and tiny laptop in cobalt studio",
    seed: "#4C8DF6",
  },
  {
    id: "pixel",
    label: "Pixel Studio",
    prompt: "Golden amber Android™ bot with vintage camera and sunnies",
    seed: "#D4A72C",
  },
] as const;

export function AndroidifyShowcase() {
  const { accentSeed, setAccentSeed } = useTheme();
  const [selectedPresetId, setSelectedPresetId] = useState<string>(
    PROMPT_PRESETS[0].id
  );

  const activePreset =
    PROMPT_PRESETS.find((p) => p.id === selectedPresetId) ?? PROMPT_PRESETS[0];

  return (
    <section
      id="androidify"
      aria-label="Androidify Bot Studio"
      className="py-14 sm:py-24 lg:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] sm:rounded-[36px] border border-[var(--border-card)] bg-[var(--bg-elevated)] p-4 sm:p-11 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-7">
              <M3JaggedBadge
                variant="sawtooth"
                tone="secondary"
                starburst
                dotColor={accentSeed}
              >
                Androidify • Custom Bot Studio
              </M3JaggedBadge>

              <div>
                <h2 className="font-expressive text-3xl sm:text-5xl font-bold tracking-tight leading-[1.04] text-[var(--text-primary)]">
                  Make your own Android™ bot.
                </h2>
                <p className="mt-3 sm:mt-4 max-w-lg text-sm sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                  Turn a selfie or quick text prompt into your personal bot
                  on the official Androidify app. Match your style, accessories,
                  and club palette in seconds.
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <p className="text-xs font-medium text-[var(--text-muted)]">
                  Try a sample prompt preset
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROMPT_PRESETS.map((preset) => {
                    const active = preset.id === activePreset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setSelectedPresetId(preset.id);
                          setAccentSeed(preset.seed);
                        }}
                        className={cn(
                          "inline-flex min-h-[38px] items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold m3-spring cursor-pointer",
                          active
                            ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                            : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        )}
                      >
                        <MaterialIcon name="auto_awesome" size={14} />
                        <span>{preset.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-2xl bg-[var(--bg-secondary)]/85 px-4 py-3">
                  <p className="font-mono text-xs text-[var(--text-secondary)]">
                    &ldquo;{activePreset.prompt}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <a
                  href="https://www.androidify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group md-state-layer inline-flex h-12 sm:h-13 w-full sm:w-auto justify-between sm:justify-start items-center gap-3 rounded-full bg-[var(--m3-primary)] pl-6 pr-2.5 text-sm font-semibold text-[var(--m3-on-primary)] m3-spring hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                >
                  <span>Try Androidify App</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--m3-on-primary)]/15 m3-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <MaterialIcon name="arrow_outward" size={17} />
                  </span>
                </a>

                <span className="text-xs font-medium text-[var(--text-muted)]">
                  Official Google tool • androidify.com
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <InvertedCutoutCard
                corner="bottom-right"
                notchWidth={68}
                notchHeight={68}
                notchGap={12}
                outerRadius={28}
                filletRadius={20}
                surfaceClassName="bg-[var(--m3-primary-container)]"
                className="min-h-[320px] sm:min-h-[440px]"
                notchContent={
                  <a
                    href="https://www.androidify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Androidify app"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-sm m3-spring hover:scale-105"
                  >
                    <MaterialIcon name="arrow_outward" size={20} />
                  </a>
                }
              >
                <div className="relative flex min-h-[320px] sm:min-h-[440px] flex-col justify-between p-5 sm:p-8 bg-architectural-grid">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-30 transition-colors duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 52%, ${accentSeed}55 0%, transparent 64%)`,
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-elevated)]/92 px-3.5 py-1.5 font-mono text-[11px] font-medium text-[var(--text-primary)] backdrop-blur-sm">
                      <span
                        className="h-2 w-2 rounded-full animate-pulse"
                        style={{ backgroundColor: accentSeed }}
                      />
                      Bot Motion
                    </span>

                    <div className="flex items-center gap-1.5 rounded-full bg-[var(--bg-elevated)]/92 px-2.5 py-1.5 backdrop-blur-sm">
                      {MATERIAL_SEEDS.map((seed) => {
                        const active =
                          accentSeed.toLowerCase() === seed.hex.toLowerCase();
                        return (
                          <button
                            key={seed.id}
                            type="button"
                            onClick={() => setAccentSeed(seed.hex)}
                            aria-label={`Studio tint ${seed.name}`}
                            className={cn(
                              "h-3.5 w-3.5 rounded-full transition-transform cursor-pointer",
                              active
                                ? "scale-125 ring-2 ring-[var(--text-primary)] ring-offset-1 ring-offset-[var(--bg-elevated)]"
                                : "opacity-80 hover:opacity-100"
                            )}
                            style={{ backgroundColor: seed.hex }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative z-10 my-3 sm:my-4 flex flex-1 items-center justify-center">
                    <Image
                      src="/assets/logos/android_dancing.gif"
                      alt="Official dancing Android bot animation"
                      width={600}
                      height={680}
                      loading="lazy"
                      unoptimized
                      className="h-[205px] sm:h-[290px] w-auto object-contain select-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.16)]"
                    />
                  </div>

                  <div className="relative z-10 pr-20 flex items-center gap-3">
                    <span className="text-xs font-medium text-[var(--m3-on-primary-container)]/85">
                      Your way. Your world. Your Android™.
                    </span>
                  </div>
                </div>
              </InvertedCutoutCard>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[var(--border-subtle)] flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3.5">
              <M3Starburst size={40} color={accentSeed} spin />
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-xs font-semibold text-[var(--m3-primary)]">
                  Infinite Styles • Expressive Android™ Identity
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  Pick headwear, shaders, or custom finishes on Androidify.
                </p>
              </div>
            </div>
            <Image
              src="/assets/logos/Bugdroids.png"
              alt="Six custom 3D Android Bugdroids styles"
              width={1200}
              height={197}
              className="h-12 sm:h-16 w-auto object-contain select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
