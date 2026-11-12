"use client";

import React, { useEffect, useState } from "react";
import { EventItem, events } from "@/data/club";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import {
  M3CloverFrame,
  M3JaggedBadge,
  M3ScallopMask,
  M3Starburst,
} from "@/components/ui/M3Shapes";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/motion";
import { useTheme } from "@/lib/theme";

export function EventsSection() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const { accentSeed } = useTheme();

  const flagshipEvent = events[0];
  const filteredEvents = events.filter((ev) =>
    filter === "all" ? ev.id !== flagshipEvent.id : ev.status === filter
  );

  useEffect(() => {
    if (!selectedEvent) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedEvent]);

  return (
    <section
      id="events"
      className="py-14 sm:py-24 lg:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-8 sm:mb-12">
          <div>
            <M3JaggedBadge
              variant="ticket"
              tone="secondary"
              icon="bolt"
              iconAnimation="wiggle"
              className="mb-3 sm:mb-4"
            >
              Campus Calendar
            </M3JaggedBadge>
            <h2 className="font-expressive text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Events & Archive.
            </h2>
            <p className="mt-2 max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
              Hackathons, bootcamps, and hardware labs at VIT Bhopal.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter club events"
            className="inline-flex w-fit items-center overflow-hidden rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] divide-x divide-[var(--border-card)]"
          >
            {(["all", "upcoming", "past"] as const).map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={cn(
                    "inline-flex min-h-[40px] sm:min-h-0 items-center gap-1.5 px-4 py-2 text-xs font-medium capitalize transition-colors cursor-pointer",
                    active
                      ? "bg-[var(--m3-secondary-container)] text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {active && <MaterialIcon name="check" size={14} />}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {filter === "all" && (
          <div className="mb-6 sm:mb-8">
            <InvertedCutoutCard
              corner="bottom-right"
              notchWidth={76}
              notchHeight={76}
              notchGap={12}
              outerRadius={32}
              filletRadius={22}
              surfaceClassName="bg-[var(--m3-primary-container)]"
              notchContent={
                <button
                  type="button"
                  onClick={() => setSelectedEvent(flagshipEvent)}
                  aria-label={`Inspect ${flagshipEvent.title}`}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] m3-spring group-hover:scale-105 cursor-pointer"
                >
                  <MaterialIcon name="arrow_outward" size={22} />
                </button>
              }
            >
              <div className="grid grid-cols-1 gap-5 sm:gap-6 p-5 pb-20 sm:p-8 sm:pb-22 lg:grid-cols-12 lg:items-center lg:p-8">
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-[20px] sm:rounded-[22px] bg-[#0B0E0D] p-3 flex items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 overflow-hidden"
                    >
                      <SmartImage
                        src={flagshipEvent.posterUrl}
                        alt=""
                        wrapperClassName="h-full w-full"
                        className="h-full w-full object-cover opacity-30 blur-2xl scale-125"
                      />
                    </div>
                    <SmartImage
                      src={flagshipEvent.posterUrl}
                      alt={flagshipEvent.title}
                      wrapperClassName="z-10 flex h-full w-full items-center justify-center"
                      className="max-h-full w-auto max-w-full rounded-xl object-contain shadow-lg"
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <M3Starburst size={48} color={accentSeed} spin>
                        <span className="font-mono text-[9px] font-bold uppercase text-[#090B0A]">
                          2026
                        </span>
                      </M3Starburst>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--m3-on-primary-container)]">
                    <span className="rounded-full bg-[var(--bg-elevated)]/90 px-3 py-1 font-semibold">
                      {flagshipEvent.tag}
                    </span>
                    <span>•</span>
                    <span>{flagshipEvent.date}</span>
                    <span>•</span>
                    <span>{flagshipEvent.venue}</span>
                  </div>

                  <h3 className="mt-3 font-expressive text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                    {flagshipEvent.title}
                  </h3>

                  <p className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                    {flagshipEvent.description}
                  </p>

                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 lg:pr-20">
                    {flagshipEvent.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-[var(--bg-elevated)]/85 px-3 py-1 text-xs font-medium text-[var(--text-primary)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </InvertedCutoutCard>
          </div>
        )}

        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:gap-6",
            filteredEvents.length === 5
              ? "md:grid-cols-6"
              : "md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {filteredEvents.map((ev, idx) => {
            const isUpcoming = ev.status === "upcoming";
            const isWideFeature =
              filteredEvents.length === 5 ? idx < 2 : idx === 0;
            const colSpanClass =
              filteredEvents.length === 5
                ? idx < 2
                  ? "md:col-span-3"
                  : "md:col-span-2"
                : "";

            const actionButton = (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEvent(ev);
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--m3-secondary-container)] px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)] m3-spring group-hover:bg-[var(--m3-primary)] group-hover:text-[var(--m3-on-primary)] cursor-pointer"
              >
                <span>{ev.registrationOpen ? "Register" : "Details"}</span>
                <MaterialIcon name="arrow_outward" size={14} />
              </button>
            );

            const galleryPreview = ev.gallery && ev.gallery.length > 0 && (
              <div className="flex items-center -space-x-2">
                {ev.gallery.slice(0, 2).map((img, gIdx) => {
                  const Frame = gIdx === 0 ? M3ScallopMask : M3CloverFrame;
                  return (
                    <Frame
                      key={img}
                      className="h-8 w-8 shrink-0 bg-[var(--bg-secondary)]"
                    >
                      <SmartImage
                        src={img}
                        alt=""
                        wrapperClassName="h-full w-full"
                        className="h-full w-full object-cover"
                      />
                    </Frame>
                  );
                })}
              </div>
            );

            const cardInner = (
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedEvent(ev)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedEvent(ev);
                  }
                }}
                className="group flex h-full flex-col cursor-pointer outline-none"
              >
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#0E1411] p-3.5 sm:p-4 flex items-center justify-center">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                  >
                    <SmartImage
                      src={ev.posterUrl}
                      alt=""
                      wrapperClassName="h-full w-full"
                      className="h-full w-full object-cover opacity-25 blur-2xl scale-125"
                    />
                  </div>
                  <SmartImage
                    src={ev.posterUrl}
                    alt={`${ev.title} poster`}
                    wrapperClassName="z-10 flex h-full w-full items-center justify-center"
                    className="max-h-full w-auto max-w-full rounded-xl object-contain shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <span
                    className={cn(
                      "absolute top-3.5 right-3.5 z-20 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur-md",
                      isUpcoming
                        ? "bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)]"
                        : "bg-[var(--bg-elevated)]/90 text-[var(--text-secondary)]"
                    )}
                  >
                    {isUpcoming && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--m3-primary)]" />
                    )}
                    {isUpcoming ? "Upcoming" : "Archive"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                      <span>{ev.date}</span>
                      <span>•</span>
                      <span className="truncate">{ev.venue}</span>
                    </div>

                    <h3 className="mt-2 font-expressive text-xl font-bold tracking-tight text-[var(--text-primary)]">
                      {ev.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {ev.description}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "mt-5 flex items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4",
                      isWideFeature && "pr-32"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {galleryPreview}
                      <span className="truncate text-xs font-medium text-[var(--text-muted)]">
                        {ev.type}
                      </span>
                    </div>

                    {!isWideFeature && actionButton}
                  </div>
                </div>
              </div>
            );

            if (isWideFeature) {
              return (
                <InvertedCutoutCard
                  key={ev.id}
                  corner="bottom-right"
                  notchWidth={104}
                  notchHeight={44}
                  notchGap={12}
                  outerRadius={28}
                  filletRadius={20}
                  surfaceClassName="bg-[var(--bg-elevated)]"
                  className={cn("group", colSpanClass)}
                  notchContent={actionButton}
                >
                  {cardInner}
                </InvertedCutoutCard>
              );
            }

            return (
              <article
                key={ev.id}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-[26px] sm:rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-elevated)] m3-spring hover:border-[var(--m3-primary)]/55",
                  colSpanClass
                )}
              >
                {cardInner}
              </article>
            );
          })}
        </div>
      </div>

      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-event-title"
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/55 p-0 sm:p-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-[28px] sm:rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-elevated)] p-5 pt-4 sm:p-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              aria-hidden="true"
              className="mx-auto mb-3 h-1 w-10 rounded-full bg-[var(--text-muted)]/35 sm:hidden"
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--m3-primary)]">
                  {selectedEvent.tag} • {selectedEvent.date}
                </span>
                <h3
                  id="modal-event-title"
                  className="mt-1.5 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]"
                >
                  {selectedEvent.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
                  {selectedEvent.venue} • {selectedEvent.time}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close event modal"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--m3-primary)] cursor-pointer"
              >
                <MaterialIcon name="close" size={18} />
              </button>
            </div>

            <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
              <SmartImage
                src={selectedEvent.posterUrl}
                alt={selectedEvent.title}
                wrapperClassName="h-full w-full"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {selectedEvent.description}
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedEvent.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 rounded-xl border border-[var(--border-card)] bg-[var(--bg-secondary)] px-3.5 py-2.5 text-xs font-medium text-[var(--text-primary)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--m3-primary)]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] mb-3">
                  Campus Photos
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  {selectedEvent.gallery.slice(0, 3).map((img, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] overflow-hidden rounded-xl bg-[var(--bg-secondary)]"
                    >
                      <SmartImage
                        src={img}
                        alt={`${selectedEvent.title} photo ${i + 1}`}
                        wrapperClassName="h-full w-full"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-[var(--border-subtle)] pt-5">
              {selectedEvent.registrationOpen && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEvent(null);
                    scrollToSection("join");
                  }}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--m3-primary)] px-6 text-xs font-semibold text-[var(--m3-on-primary)] cursor-pointer"
                >
                  <span>Reserve Seat via Recruitment Portal</span>
                  <MaterialIcon name="arrow_outward" size={16} />
                </button>
              )}
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="inline-flex h-11 items-center rounded-full border border-[var(--border-card)] px-5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
