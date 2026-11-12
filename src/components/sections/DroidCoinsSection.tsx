"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { droidCoinsConfig } from "@/data/club";
import {
  M3ArchFrame,
  M3CloverFrame,
  M3FlowerFrame,
  M3JaggedBadge,
  M3PebbleFrame,
  M3ScallopMask,
  M3Starburst,
} from "@/components/ui/M3Shapes";
import { MaterialIcon, MaterialIconName } from "@/components/ui/MaterialIcon";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const QUEST_ICONS: Record<string, MaterialIconName> = {
  verify: "bolt",
  attend: "school",
  quest: "auto_awesome",
  pr: "code_blocks",
};

export function DroidCoinsSection() {
  const { accentSeed } = useTheme();
  const [selectedActionIds, setSelectedActionIds] = useState<string[]>([
    "verify",
    "attend",
  ]);
  const [coinSpins, setCoinSpins] = useState(0);

  const totalBalance = useMemo(() => {
    return droidCoinsConfig.earnActions.reduce((sum, action) => {
      return selectedActionIds.includes(action.id) ? sum + action.coins : sum;
    }, 0);
  }, [selectedActionIds]);

  const maxTierCost =
    droidCoinsConfig.rewards[droidCoinsConfig.rewards.length - 1]?.cost ?? 240;
  const progressPct = Math.min(
    100,
    Math.round((totalBalance / maxTierCost) * 100)
  );

  const toggleAction = (id: string) => {
    setSelectedActionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setCoinSpins((s) => s + 1);
  };

  return (
    <section
      id="droidcoins"
      className="py-14 sm:py-24 lg:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
          <div>
            <M3JaggedBadge
              variant="ticket"
              tone="secondary"
              icon="auto_awesome"
              iconAnimation="wiggle"
              className="mb-3 sm:mb-4"
            >
              {droidCoinsConfig.badge}
            </M3JaggedBadge>
            <h2 className="font-expressive text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Droid Coins.
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-[var(--text-secondary)]">
              {droidCoinsConfig.description}
            </p>
          </div>

          <M3JaggedBadge
            variant="sawtooth"
            tone="primary"
            icon="bolt"
            iconAnimation="bob"
          >
            {droidCoinsConfig.statusChip}
          </M3JaggedBadge>
        </div>

        <div className="rounded-[26px] sm:rounded-[32px] border border-[var(--border-card)] bg-[var(--bg-elevated)]">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 p-4 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-10">
            <div className="lg:col-span-5">
              <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-[22px] sm:rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-secondary)]/80 p-4 sm:p-7">
                <div className="relative z-10 flex w-full items-center justify-between">
                  <M3JaggedBadge
                    variant="pixel"
                    tone="dark"
                    icon="bolt"
                    iconAnimation="wiggle"
                    glint={false}
                  >
                    Upcoming Drop
                  </M3JaggedBadge>

                  <M3Starburst size={46} color={accentSeed} spin>
                    <span className="font-mono text-[9px] font-bold uppercase text-[#090B0A]">
                      DRD
                    </span>
                  </M3Starburst>
                </div>

                <div className="my-3.5 sm:my-5 flex w-full items-center justify-between gap-2 sm:gap-4">
                  <div
                    aria-hidden="true"
                    className="flex flex-col items-center gap-3 shrink-0 w-10 sm:w-12"
                  >
                    <M3FlowerFrame
                      className="h-9 w-9 sm:h-11 sm:w-11 bg-[var(--m3-primary-container)] text-[var(--m3-primary)] border border-[var(--m3-primary)]/25 transition-transform duration-500"
                    >
                      <div
                        className="flex h-full w-full items-center justify-center transition-transform duration-500"
                        style={{ transform: `rotate(${coinSpins * 15}deg)` }}
                      >
                        <MaterialIcon name="auto_awesome" size={16} />
                      </div>
                    </M3FlowerFrame>

                    <M3PebbleFrame className="h-8 w-10 sm:h-9 sm:w-12 bg-amber-400/20 dark:bg-amber-400/15 border-amber-400/40 -rotate-6 flex items-center justify-center">
                      <span className="font-mono text-[9px] font-bold tracking-wider text-amber-600 dark:text-amber-300">
                        +DRD
                      </span>
                    </M3PebbleFrame>

                    <M3ArchFrame className="h-10 w-6 sm:h-12 sm:w-7 bg-[var(--bg-elevated)] flex items-end justify-center pb-1.5">
                      <span className="h-2 w-2 rounded-full bg-[var(--m3-primary)]" />
                    </M3ArchFrame>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCoinSpins((s) => s + 1)}
                    aria-label="Animate Droid Coin side shapes"
                    className="group relative flex flex-1 flex-col items-center justify-center py-1 sm:py-2 cursor-pointer focus:outline-none"
                  >
                    <div className="relative flex h-36 w-36 sm:h-52 sm:w-52 items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
                      <Image
                        src={droidCoinsConfig.coinImage}
                        alt="3D animated Droid Coin"
                        width={360}
                        height={360}
                        unoptimized
                        priority
                        className="h-full w-full object-contain pointer-events-none select-none"
                      />
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 h-2.5 w-24 sm:w-28 rounded-full bg-black/15 dark:bg-black/50 blur-[6px] transition-transform duration-500 group-hover:scale-95"
                    />
                  </button>

                  <div
                    aria-hidden="true"
                    className="flex flex-col items-center gap-3 shrink-0 w-10 sm:w-12"
                  >
                    <M3CloverFrame className="h-10 w-10 sm:h-12 sm:w-12 bg-[var(--m3-primary)]/18 border border-[var(--m3-primary)]/30">
                      <div
                        className="flex h-full w-full items-center justify-center text-[var(--m3-primary)] transition-transform duration-500"
                        style={{ transform: `rotate(${-coinSpins * 15}deg)` }}
                      >
                        <MaterialIcon name="bolt" size={16} />
                      </div>
                    </M3CloverFrame>

                    <M3ScallopMask className="h-9 w-9 sm:h-11 sm:w-11 bg-[var(--bg-elevated)] flex items-center justify-center rotate-6">
                      <MaterialIcon
                        name="school"
                        size={15}
                        className="text-amber-500 dark:text-amber-400"
                      />
                    </M3ScallopMask>

                    <M3Starburst
                      size={36}
                      color="rgba(245, 158, 11, 0.24)"
                      className="text-amber-600 dark:text-amber-300"
                    >
                      <span className="font-mono text-[9px] font-bold">M3</span>
                    </M3Starburst>
                  </div>
                </div>

                <div className="relative z-10 w-full rounded-[20px] sm:rounded-[22px] border border-[var(--border-card)] bg-[var(--bg-elevated)]/95 p-3.5 sm:p-4 backdrop-blur-sm shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Preview Balance
                    </span>
                    <span className="rounded-full bg-[var(--m3-secondary-container)] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--text-primary)]">
                      @vitbhopal.ac.in
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-expressive text-4xl font-bold tracking-tight tabular-nums text-[var(--text-primary)]">
                        {totalBalance}
                      </span>
                      <span className="text-sm font-bold text-amber-500 dark:text-amber-400">
                        DRD
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-medium text-[var(--text-muted)]">
                      {progressPct}% Vault
                    </span>
                  </div>

                  <div className="relative mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[var(--bg-secondary)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--m3-primary)] to-amber-400 transition-all duration-300"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <M3FlowerFrame className="h-7 w-7 shrink-0 bg-[var(--m3-primary-container)] text-[var(--m3-primary)]">
                      <div className="flex h-full w-full items-center justify-center">
                        <MaterialIcon name="bolt" size={14} />
                      </div>
                    </M3FlowerFrame>
                    <h3 className="font-expressive text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                      Earn Preview
                    </h3>
                    <span className="rounded-full bg-[var(--m3-secondary-container)] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--text-primary)]">
                      Upcoming
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedActionIds(
                        selectedActionIds.length ===
                          droidCoinsConfig.earnActions.length
                          ? ["verify"]
                          : droidCoinsConfig.earnActions.map((a) => a.id)
                      );
                      setCoinSpins((s) => s + 1);
                    }}
                    className="rounded-full border border-[var(--border-card)] bg-[var(--bg-secondary)] px-3.5 py-1 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--m3-primary)] cursor-pointer"
                  >
                    {selectedActionIds.length ===
                    droidCoinsConfig.earnActions.length
                      ? "Reset"
                      : "Max All"}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {droidCoinsConfig.earnActions.map((action, idx) => {
                    const checked = selectedActionIds.includes(action.id);
                    const ShapeBadge =
                      idx % 4 === 0
                        ? M3ScallopMask
                        : idx % 4 === 1
                          ? M3CloverFrame
                          : idx % 4 === 2
                            ? M3FlowerFrame
                            : M3PebbleFrame;
                    const iconName = QUEST_ICONS[action.id] ?? "bolt";

                    return (
                      <button
                        key={action.id}
                        type="button"
                        onClick={() => toggleAction(action.id)}
                        aria-pressed={checked}
                        className={cn(
                          "group flex flex-col justify-between rounded-[24px] border p-4 text-left m3-spring cursor-pointer hover:-translate-y-0.5",
                          checked
                            ? "border-[var(--m3-primary)] bg-[var(--m3-primary-container)]/45 shadow-sm"
                            : "border-[var(--border-card)] bg-[var(--bg-secondary)]/70 hover:border-[var(--m3-primary)]/45"
                        )}
                      >
                        <div className="flex items-center justify-between gap-2 w-full">
                          <div className="flex items-center gap-2">
                            <ShapeBadge
                              className={cn(
                                "h-8 w-8 shrink-0",
                                checked
                                  ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)]"
                                  : "bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-card)]"
                              )}
                            >
                              <div className="flex h-full w-full items-center justify-center">
                                <MaterialIcon name={iconName} size={15} />
                              </div>
                            </ShapeBadge>
                            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                              {action.tag}
                            </span>
                          </div>

                          <span
                            className={cn(
                              "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-xs font-bold",
                              checked
                                ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)]"
                                : "bg-[var(--bg-elevated)] text-[var(--text-primary)]"
                            )}
                          >
                            {checked && <MaterialIcon name="check" size={12} />}
                            +{action.coins}
                          </span>
                        </div>

                        <p className="mt-3 font-expressive text-sm sm:text-base font-bold text-[var(--text-primary)]">
                          {action.title}
                        </p>
                        <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                          {action.detail}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-5 border-t border-[var(--border-subtle)]">
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <M3CloverFrame className="h-7 w-7 bg-[var(--m3-tertiary-container)] text-[var(--m3-primary)]">
                      <div className="flex h-full w-full items-center justify-center">
                        <MaterialIcon name="auto_awesome" size={14} />
                      </div>
                    </M3CloverFrame>
                    <h3 className="font-expressive text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                      Swag Vault
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    Unlocks at Launch
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {droidCoinsConfig.rewards.map((reward) => {
                    const unlocked = totalBalance >= reward.cost;
                    const remaining = Math.max(0, reward.cost - totalBalance);
                    return (
                      <div
                        key={reward.id}
                        className={cn(
                          "flex items-center justify-between gap-3 rounded-[22px] border px-4 py-3.5 transition-colors",
                          unlocked
                            ? "border-[var(--m3-primary)]/60 bg-[var(--m3-secondary-container)]/75"
                            : "border-[var(--border-card)] bg-[var(--bg-secondary)]/45 opacity-80"
                        )}
                      >
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                            {reward.tier} • {reward.cost} DRD
                          </p>
                          <p className="mt-0.5 font-expressive text-sm font-semibold text-[var(--text-primary)] truncate">
                            {reward.title}
                          </p>
                        </div>

                        <span
                          className={cn(
                            "shrink-0 inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold",
                            unlocked
                              ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)]"
                              : "bg-[var(--bg-elevated)] text-[var(--text-muted)]"
                          )}
                        >
                          {unlocked ? (
                            <>
                              <MaterialIcon name="check" size={11} />
                              <span>Ready</span>
                            </>
                          ) : (
                            <span>+{remaining}</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
