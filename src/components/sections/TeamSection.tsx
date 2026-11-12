"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  coreTestimonials,
  facultyCoordinators,
  leadershipTeam,
  pastLeadershipTeam,
} from "@/data/club";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import {
  M3ArchFrame,
  M3CloverFrame,
  M3JaggedBadge,
  M3ScallopMask,
} from "@/components/ui/M3Shapes";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

type BatchCohort = "current" | "past";

export function TeamSection() {
  const [cohort, setCohort] = useState<BatchCohort>("current");
  const [activeDeptIndex, setActiveDeptIndex] = useState(0);
  const [expandedFacultyId, setExpandedFacultyId] = useState<string | null>(
    null
  );

  const activeTeams = cohort === "current" ? leadershipTeam : pastLeadershipTeam;
  const safeDeptIndex =
    activeDeptIndex < activeTeams.length ? activeDeptIndex : 0;
  const activeDept = activeTeams[safeDeptIndex];

  const handleCohortChange = (next: BatchCohort) => {
    setCohort(next);
    setActiveDeptIndex(0);
  };

  return (
    <section
      id="team"
      className="py-14 sm:py-24 lg:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-12">
          <div>
            <M3JaggedBadge
              variant="ticket"
              tone="secondary"
              icon="school"
              iconAnimation="bob"
              className="mb-3 sm:mb-4"
            >
              People & Mentors
            </M3JaggedBadge>
            <h2 className="font-expressive text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Faculty & Chapter Council.
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-[var(--text-secondary)]">
              Three guiding faculty mentors alongside 80+ student builders across
              12 specialized teams at VIT Bhopal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-card)] pl-2 pr-4 py-1.5 w-fit">
              <div className="flex items-center -space-x-2">
                <span className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-[var(--bg-elevated)]">
                  <Image
                    src="/assets/events/Meet_and_Greet/img2.jpg"
                    alt="Club auditorium session"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="h-8 w-12 overflow-hidden rounded-full ring-2 ring-[var(--bg-elevated)]">
                  <Image
                    src="/assets/gallery/groupPhoto.jpg"
                    alt="VIT Bhopal Android Club group"
                    width={96}
                    height={64}
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                </span>
              </div>
              <span className="text-xs font-medium text-[var(--text-secondary)]">
                12 Active Teams
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6 mb-10 sm:mb-14">
          {facultyCoordinators.map((mentor, idx) => {
            const FrameComponent =
              idx === 0
                ? M3CloverFrame
                : idx === 1
                  ? M3ArchFrame
                  : M3ScallopMask;
            const surfaceClass =
              idx === 0
                ? "bg-[var(--m3-tertiary-container)]"
                : idx === 1
                  ? "bg-[var(--m3-primary-container)]"
                  : "bg-[var(--m3-secondary-container)]";
            const isExpanded = expandedFacultyId === mentor.id;

            return (
              <InvertedCutoutCard
                key={mentor.id}
                corner="bottom-right"
                notchWidth={68}
                notchHeight={68}
                notchGap={12}
                outerRadius={28}
                filletRadius={20}
                surfaceClassName={surfaceClass}
                className="h-full"
                notchContent={
                  <a
                    href={`mailto:${mentor.email}`}
                    aria-label={`Email ${mentor.name}`}
                    title={mentor.email}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm m3-spring hover:scale-105"
                  >
                    <MaterialIcon name="arrow_outward" size={20} />
                  </a>
                }
              >
                <div className="flex h-full flex-col justify-between p-6 pb-20 sm:p-7 sm:pb-20">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <FrameComponent className="h-24 w-24 shrink-0 bg-[var(--bg-elevated)] shadow-sm">
                        <SmartImage
                          src={mentor.image}
                          alt={mentor.name}
                          priority
                          wrapperClassName="h-full w-full"
                          className="h-full w-full object-cover object-top"
                        />
                      </FrameComponent>

                      <M3JaggedBadge
                        variant="pixel"
                        tone="surface"
                        icon="school"
                        iconAnimation="bob"
                        glint={false}
                      >
                        Faculty
                      </M3JaggedBadge>
                    </div>

                    <h3 className="mt-5 font-expressive text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                      {mentor.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[var(--m3-primary)]">
                      {mentor.role}
                    </p>
                    <p className="mt-0.5 text-[11px] font-mono text-[var(--text-muted)]">
                      {mentor.institution}
                    </p>

                    <p
                      className={cn(
                        "mt-3.5 text-sm leading-relaxed text-[var(--text-secondary)]",
                        !isExpanded && "line-clamp-3"
                      )}
                    >
                      {mentor.bio}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setExpandedFacultyId(isExpanded ? null : mentor.id)
                      }
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--m3-primary)] cursor-pointer"
                    >
                      <span>{isExpanded ? "Show less" : "Read more"}</span>
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 pr-12">
                    {mentor.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--bg-elevated)]/85 px-2.5 py-1 text-[11px] font-medium text-[var(--text-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </InvertedCutoutCard>
            );
          })}
        </div>

        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-expressive text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              {cohort === "current"
                ? "Core Council 2026 - 2027"
                : "Past Core Council 2025 - 2026"}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {activeDept.department} • {activeDept.members.length}{" "}
              {activeDept.members.length === 1 ? "member" : "members"}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Select council cohort batch"
            className="inline-flex w-fit items-center overflow-hidden rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] divide-x divide-[var(--border-card)]"
          >
            {(
              [
                { id: "current", label: "2026-27 Current" },
                { id: "past", label: "2025-26 Past" },
              ] as const
            ).map((tab) => {
              const active = cohort === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleCohortChange(tab.id)}
                  className={cn(
                    "inline-flex min-h-[38px] items-center gap-1.5 px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                    active
                      ? "bg-[var(--m3-secondary-container)] text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {active && <MaterialIcon name="check" size={14} />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6 sm:mb-9 flex flex-wrap items-center gap-2">
          {activeTeams.map((dept, index) => {
            const active = safeDeptIndex === index;
            return (
              <button
                key={dept.department}
                type="button"
                onClick={() => setActiveDeptIndex(index)}
                className={cn(
                  "inline-flex min-h-[38px] items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold m3-spring cursor-pointer",
                  active
                    ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-sm"
                    : "bg-[var(--bg-elevated)] border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--m3-primary)]/45"
                )}
              >
                {active && <MaterialIcon name="check" size={14} />}
                <span>{dept.department}</span>
                <span
                  className={cn(
                    "font-mono text-[10px] px-1.5 py-0.5 rounded-full",
                    active
                      ? "bg-black/15 text-[var(--m3-on-primary)]"
                      : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                  )}
                >
                  {dept.members.length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {activeDept.members.map((member, idx) => {
            const PortraitWrapper =
              idx % 3 === 0
                ? M3ScallopMask
                : idx % 3 === 1
                  ? M3ArchFrame
                  : M3CloverFrame;

            return (
              <article
                key={`${cohort}-${activeDept.department}-${member.name}`}
                className="group flex flex-col justify-between rounded-[26px] sm:rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-elevated)] p-5 sm:p-6 m3-spring hover:border-[var(--m3-primary)]/55"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <PortraitWrapper className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 bg-[var(--m3-secondary-container)] group-hover:scale-105">
                      <SmartImage
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        priority={idx < 3}
                        wrapperClassName="h-full w-full"
                        className="h-full w-full object-cover object-top"
                      />
                    </PortraitWrapper>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="rounded-full bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[11px] font-medium text-[var(--text-muted)]">
                        {member.batch}
                      </span>
                      {member.isPlaceholder && (
                        <span className="rounded-full border border-[var(--border-card)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                          Photo Pending
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="mt-4 sm:mt-5 font-expressive text-xl font-bold tracking-tight text-[var(--text-primary)]">
                    {member.name}
                  </h4>
                  <p className="mt-0.5 text-xs font-semibold text-[var(--m3-primary)]">
                    {member.role}
                  </p>

                  <p className="mt-2.5 sm:mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 border-t border-[var(--border-subtle)] pt-3.5 sm:pt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--m3-primary-container)]"
                  >
                    <span>LinkedIn</span>
                    <MaterialIcon name="arrow_outward" size={13} />
                  </a>
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--m3-primary-container)]"
                    >
                      <span>Instagram</span>
                      <MaterialIcon name="arrow_outward" size={13} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--m3-primary-container)]"
                    >
                      <span>GitHub</span>
                      <MaterialIcon name="arrow_outward" size={13} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 rounded-[26px] sm:rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-elevated)] p-4 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-5 sm:mb-6">
            <div>
              <M3JaggedBadge variant="ticket" tone="primary" icon="auto_awesome">
                Message from the Core Team
              </M3JaggedBadge>
              <h3 className="mt-2.5 font-expressive text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Voices across cohorts.
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              Innovation • Determination • Enthusiasm
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreTestimonials.map((item, idx) => (
              <blockquote
                key={item.name}
                className="flex flex-col justify-between rounded-[20px] sm:rounded-[22px] border border-[var(--border-card)] bg-[var(--bg-secondary)]/50 p-4 sm:p-5"
              >
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <footer className="mt-4 flex items-center gap-3 border-t border-[var(--border-subtle)] pt-3.5">
                  <div
                    className={cn(
                      "h-11 w-11 shrink-0 overflow-hidden bg-[var(--m3-secondary-container)]",
                      idx % 2 === 0 ? "rounded-full" : "rounded-2xl"
                    )}
                  >
                    <SmartImage
                      src={item.image}
                      alt={item.name}
                      wrapperClassName="h-full w-full"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <cite className="block not-italic text-sm font-semibold text-[var(--text-primary)] truncate">
                      {item.name}
                    </cite>
                    <span className="block font-mono text-[10px] font-medium text-[var(--m3-primary)] truncate">
                      {item.position}
                    </span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
