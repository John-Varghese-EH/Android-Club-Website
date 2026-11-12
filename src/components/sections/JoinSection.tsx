"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  clubConfig,
  clubFaq,
  recruitmentDomains,
  recruitmentPipeline,
  sponsors,
} from "@/data/club";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import {
  AndroidLogoMark,
  M3JaggedBadge,
  M3Starburst,
} from "@/components/ui/M3Shapes";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SmartImage } from "@/components/ui/SmartImage";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ALL_TRACKS = [
  ...recruitmentDomains.technical,
  ...recruitmentDomains.nonTechnical,
];

type TrackCategory = "technical" | "nonTechnical";

export function JoinSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("2025");
  const [profileUrl, setProfileUrl] = useState("");
  const [pitch, setPitch] = useState("");
  const [category, setCategory] = useState<TrackCategory>("technical");
  const [track, setTrack] = useState(recruitmentDomains.technical[0].id);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categoryTracks = recruitmentDomains[category];
  const activeTrack =
    ALL_TRACKS.find((t) => t.id === track) ?? recruitmentDomains.technical[0];
  const isTechnicalTrack = recruitmentDomains.technical.some(
    (t) => t.id === activeTrack.id
  );

  const handleCategorySwitch = (nextCategory: TrackCategory) => {
    setCategory(nextCategory);
    setTrack(recruitmentDomains[nextCategory][0].id);
  };

  const handleTrackSelect = (trackId: string) => {
    setTrack(trackId);
    const inTech = recruitmentDomains.technical.some((t) => t.id === trackId);
    setCategory(inTech ? "technical" : "nonTechnical");
  };

  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".partners-marquee-stage", {
        y: 24,
        scale: 0.985,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".partners-marquee-stage",
          start: "top 92%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[0-9]{2}[A-Za-z]{3}[0-9]{4,5}$/.test(regNo.trim())) {
      setError("Enter a valid VIT Bhopal registration ID (e.g. 25BCE10421).");
      return;
    }
    const emailValue = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailValue)) {
      setError("Please enter a valid @vitbhopal.ac.in or personal email.");
      return;
    }
    const profileValue = profileUrl.trim();
    if (
      isTechnicalTrack &&
      (profileValue.length < 4 || /^(javascript|data|vbscript):/i.test(profileValue))
    ) {
      setError(
        "Technical tracks require a valid GitHub or LinkedIn profile handle."
      );
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="join"
      ref={sectionRef}
      className="py-14 sm:py-24 lg:py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/35"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6">
            <div>
              <M3JaggedBadge
                variant="ticket"
                tone="secondary"
                icon="auto_awesome"
                iconAnimation="wiggle"
                className="mb-3"
              >
                Campus & Event Partners
              </M3JaggedBadge>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-expressive text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                  Backed by developer platforms.
                </h2>
              </div>
            </div>

            <a
              href={`mailto:${clubConfig.email}?subject=Partnership%20Inquiry%20-%20Android%20Club%20VIT%20Bhopal`}
              className="group m3-jagged-glint inline-flex w-fit shrink-0 items-center gap-2.5 rounded-full border border-[var(--m3-primary)]/35 bg-[var(--m3-primary-container)] pl-3 pr-2 py-1.5 text-[var(--m3-on-primary-container)] shadow-sm m3-spring hover:-translate-y-0.5 hover:border-[var(--m3-primary)] hover:shadow-[0_10px_24px_rgba(61,220,132,0.18)]"
            >
              <M3Starburst
                size={18}
                color="var(--m3-primary)"
                className="group-hover:rotate-90"
              />
              <AndroidLogoMark
                alt="Partner with Android Club"
                width={30}
                height={18}
                className="h-4 w-7"
              />
              <span className="text-xs font-bold tracking-tight whitespace-nowrap">
                Partner With Us
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <MaterialIcon name="arrow_outward" size={14} />
              </span>
            </a>
          </div>

          <div className="partners-marquee-stage relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[var(--border-card)] bg-[var(--bg-elevated)] py-3.5 sm:py-5 shadow-[var(--md-sys-elevation-level1)]">
            <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_3%,black_97%,transparent)]">
              <div className="flex w-max animate-marquee items-stretch gap-3 sm:gap-4 px-2 py-1">
                {[...sponsors, ...sponsors].map((partner, idx) => (
                  <div
                    key={`logo-loop-${partner.name}-${idx}`}
                    className="group/logo relative flex w-[196px] sm:w-[264px] shrink-0 flex-col rounded-[20px] sm:rounded-[24px] border border-[var(--border-card)] bg-[var(--bg-secondary)]/70 p-2 sm:p-2.5 shadow-[var(--md-sys-elevation-level1)] m3-spring hover:-translate-y-1 hover:border-[var(--m3-primary)] hover:bg-[var(--bg-elevated)] hover:shadow-[var(--md-sys-elevation-level2)]"
                  >
                    <div className="flex h-[68px] sm:h-[84px] w-full items-center justify-center rounded-[14px] sm:rounded-[16px] bg-white px-3 py-2 sm:px-3.5 sm:py-2.5 ring-1 ring-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
                      <SmartImage
                        src={partner.logo}
                        fallbackSrc={partner.fallback}
                        alt={`${partner.name} logo`}
                        priority
                        wrapperClassName="flex h-full w-full items-center justify-center"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover/logo:scale-105"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 px-1.5 pt-2 pb-0.5">
                      <p className="text-xs sm:text-[13px] font-bold tracking-tight text-[var(--text-primary)] truncate">
                        {partner.name}
                      </p>
                      <span className="shrink-0 rounded-full bg-[var(--m3-primary-container)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--m3-on-primary-container)]">
                        {partner.type.replace(" Partner", "")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 border-t border-[var(--border-subtle)]/75 pt-3 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_3%,black_97%,transparent)]">
              <div className="flex w-max animate-marquee-reverse items-center gap-6 px-4">
                {[...sponsors, ...sponsors].map((partner, idx) => (
                  <div
                    key={`tag-loop-${partner.name}-${idx}`}
                    className="inline-flex items-center gap-3 shrink-0"
                  >
                    <M3Starburst size={12} color="var(--m3-primary)" />
                    <span className="font-mono text-[11px] font-semibold text-[var(--text-secondary)] whitespace-nowrap">
                      {partner.name}
                    </span>
                    <span className="rounded-full border border-[var(--border-card)] bg-[var(--bg-secondary)]/75 px-2.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)] whitespace-nowrap">
                      {partner.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <InvertedCutoutCard
          corner="bottom-right"
          notchWidth={76}
          notchHeight={76}
          notchGap={12}
          outerRadius={32}
          filletRadius={22}
          surfaceClassName="bg-[var(--bg-elevated)]"
          notchContent={
            <a
              href={clubConfig.recruitmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open official recruitment portal"
              title="Open Official Recruitment Portal"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-md transition-transform duration-300 hover:scale-105"
            >
              <MaterialIcon name="arrow_outward" size={22} />
            </a>
          }
        >
          <div className="grid grid-cols-1 gap-7 sm:gap-10 p-5 pb-22 sm:p-10 sm:pb-24 lg:grid-cols-12 lg:p-12">
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <M3JaggedBadge
                    variant="sawtooth"
                    tone="primary"
                    liveDot
                  >
                    {clubConfig.recruitmentStatus} • Core Team 2026-27
                  </M3JaggedBadge>
                  <span className="rounded-full bg-[var(--m3-secondary-container)] px-3 py-1 font-mono text-[10px] font-semibold text-[var(--text-primary)]">
                    @vitbhopal.ac.in
                  </span>
                </div>

                <h2 className="mt-4 font-expressive text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                  Build With Us.
                </h2>

                <p className="mt-2.5 max-w-lg text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                  Pick your department, complete the domain task round, and join
                  our next lab cohort in LC-205.
                </p>

                <div
                  role="tablist"
                  aria-label="Squad category filter"
                  className="mt-5 inline-flex flex-wrap rounded-full bg-[var(--bg-secondary)] p-1 border border-[var(--border-card)]"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={category === "technical"}
                    onClick={() => handleCategorySwitch("technical")}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                      category === "technical"
                        ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-xs"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    Technical ({recruitmentDomains.technical.length})
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={category === "nonTechnical"}
                    onClick={() => handleCategorySwitch("nonTechnical")}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                      category === "nonTechnical"
                        ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-xs"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    Non-Technical ({recruitmentDomains.nonTechnical.length})
                  </button>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-2">
                  {categoryTracks.map((item) => {
                    const active = item.id === activeTrack.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleTrackSelect(item.id)}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs font-semibold m3-spring cursor-pointer",
                          active
                            ? "border-[var(--m3-primary)] bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)]"
                            : "border-[var(--border-card)] bg-[var(--bg-secondary)]/70 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        )}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[24px] border border-[var(--border-card)] bg-[var(--bg-secondary)]/65 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="relative aspect-video w-full sm:w-48 shrink-0 overflow-hidden rounded-[18px] bg-[#060807] border border-[var(--border-subtle)]">
                    <SmartImage
                      src={activeTrack.image}
                      alt={activeTrack.name}
                      wrapperClassName="h-full w-full"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[var(--m3-primary-container)] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[var(--m3-on-primary-container)]">
                        {isTechnicalTrack ? "Technical Squad" : "Non-Tech Squad"}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--text-muted)]">
                        {isTechnicalTrack
                          ? "GitHub + LinkedIn"
                          : "Social / Portfolio"}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-expressive text-lg font-bold text-[var(--text-primary)]">
                      {activeTrack.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {activeTrack.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-3">
                  {activeTrack.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[var(--bg-elevated)] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[var(--text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {recruitmentPipeline.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-secondary)]/55 p-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold text-[var(--m3-primary)]">
                        ROUND {item.step}
                      </span>
                      <MaterialIcon
                        name="check"
                        size={13}
                        className="text-[var(--m3-primary)]"
                      />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-[var(--text-muted)]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 pr-0 lg:pr-12">
              {submitted ? (
                <div className="flex h-full flex-col justify-center rounded-[24px] border border-[var(--android-green)]/40 bg-[var(--surface-sage)] p-6 sm:p-8">
                  <M3JaggedBadge variant="ticket" tone="primary" liveDot>
                    Application Recorded
                  </M3JaggedBadge>
                  <h3 className="mt-4 font-expressive text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    Welcome to the queue, {name}.
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    Registered for{" "}
                    <strong className="text-[var(--text-primary)]">
                      {activeTrack.name}
                    </strong>{" "}
                    ({regNo.toUpperCase()} • Batch {batch}). Check{" "}
                    <span className="font-mono text-xs">{email}</span> for
                    your Round 2 task prompt and LC-205 interview schedule, or
                    complete the official task upload at{" "}
                    <a
                      href={clubConfig.recruitmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[var(--m3-primary)] underline"
                    >
                      androidclub.tech/recruitment
                    </a>
                    .
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={clubConfig.recruitmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--m3-primary)] px-5 py-2.5 text-xs font-semibold text-[var(--m3-on-primary)]"
                    >
                      <span>Open Task Round Portal</span>
                      <MaterialIcon name="arrow_outward" size={14} />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setRegNo("");
                        setEmail("");
                        setProfileUrl("");
                        setPitch("");
                      }}
                      className="rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] px-5 py-2.5 text-xs font-semibold text-[var(--text-primary)] cursor-pointer"
                    >
                      Submit another
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4 rounded-[24px] sm:rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-secondary)]/70 p-5 sm:p-7"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                        Selected Track
                      </p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">
                        {activeTrack.name}
                      </p>
                    </div>
                    <span className="rounded-full bg-[var(--m3-primary-container)] px-3 py-1 font-mono text-[10px] font-bold text-[var(--m3-on-primary-container)]">
                      Batch {batch} Eligible
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="join-name"
                        className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="join-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aarav Sharma"
                        required
                        className="w-full rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--m3-primary)] focus:ring-2 focus:ring-[var(--m3-primary)]/20 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="join-batch"
                        className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5"
                      >
                        Campus Batch
                      </label>
                      <select
                        id="join-batch"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                        className="w-full rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--m3-primary)] focus:ring-2 focus:ring-[var(--m3-primary)]/20 focus:outline-none"
                      >
                        <option value="2025">Batch 2025</option>
                        <option value="2024">Batch 2024</option>
                        <option value="2023">Batch 2023</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="join-reg"
                        className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5"
                      >
                        VIT Registration ID
                      </label>
                      <input
                        id="join-reg"
                        type="text"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                        placeholder="25BCE10421"
                        required
                        className="w-full rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--m3-primary)] focus:ring-2 focus:ring-[var(--m3-primary)]/20 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="join-email"
                        className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5"
                      >
                        College Email ID
                      </label>
                      <input
                        id="join-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="aarav.25bce@vitbhopal.ac.in"
                        required
                        className="w-full rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--m3-primary)] focus:ring-2 focus:ring-[var(--m3-primary)]/20 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="join-track"
                        className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5"
                      >
                        Preferred Department
                      </label>
                      <select
                        id="join-track"
                        value={track}
                        onChange={(e) => handleTrackSelect(e.target.value)}
                        className="w-full rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--m3-primary)] focus:ring-2 focus:ring-[var(--m3-primary)]/20 focus:outline-none"
                      >
                        <optgroup label="Technical Squads">
                          {recruitmentDomains.technical.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.name}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Non-Technical Squads">
                          {recruitmentDomains.nonTechnical.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="join-profile"
                        className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5"
                      >
                        {isTechnicalTrack
                          ? "GitHub / LinkedIn Handle"
                          : "Instagram / Portfolio Link"}
                      </label>
                      <input
                        id="join-profile"
                        type="text"
                        value={profileUrl}
                        onChange={(e) => setProfileUrl(e.target.value)}
                        placeholder={
                          isTechnicalTrack
                            ? "github.com/username"
                            : "@handle or portfolio URL"
                        }
                        required={isTechnicalTrack}
                        className="w-full rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] px-4 py-3 text-base sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--m3-primary)] focus:ring-2 focus:ring-[var(--m3-primary)]/20 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="join-pitch"
                      className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5"
                    >
                      What have you built or organized? (or Drive task link)
                    </label>
                    <textarea
                      id="join-pitch"
                      rows={2}
                      value={pitch}
                      onChange={(e) => setPitch(e.target.value)}
                      placeholder="Brief project note, motivation, or shareable Google Drive link..."
                      className="w-full rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] px-4 py-2.5 text-base sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--m3-primary)] focus:ring-2 focus:ring-[var(--m3-primary)]/20 focus:outline-none resize-none"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-2xl bg-rose-500/10 px-4 py-2.5 text-xs font-medium text-rose-600 dark:text-rose-400"
                    >
                      {error}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit"
                      className="md-state-layer m3-spring inline-flex w-full sm:w-auto sm:flex-1 min-h-12 h-12 shrink-0 items-center justify-center rounded-full bg-[var(--m3-primary)] px-5 text-sm font-semibold text-[var(--m3-on-primary)] transition-transform hover:scale-[1.01] active:scale-[0.985] cursor-pointer"
                    >
                      Submit Application
                    </button>
                    <a
                      href={clubConfig.recruitmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md-state-layer inline-flex w-full sm:w-auto min-h-12 h-12 shrink-0 items-center justify-center gap-1.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] px-5 text-xs font-semibold text-[var(--text-primary)] m3-spring hover:border-[var(--m3-primary)]"
                    >
                      <span>Official Portal</span>
                      <MaterialIcon name="arrow_outward" size={14} />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </InvertedCutoutCard>

        <div
          id="faq"
          className="mt-14 sm:mt-16 rounded-[28px] sm:rounded-[32px] border border-[var(--border-card)] bg-[var(--bg-elevated)] p-5 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <M3JaggedBadge
                variant="sawtooth"
                tone="secondary"
                icon="auto_awesome"
                className="mb-2.5"
              >
                Chapter FAQ
              </M3JaggedBadge>
              <h3 className="font-expressive text-xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Quick answers before you apply.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-sm">
              Membership, tech stacks, Droid Coins, and onboarding details for VIT Bhopal students.
            </p>
          </div>

          <div className="mt-4 divide-y divide-[var(--border-subtle)]">
            {clubFaq.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.question} className="py-1">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full min-h-[48px] items-center justify-between gap-4 py-3 text-left cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--m3-primary)] transition-colors">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-transform duration-300",
                        isOpen && "rotate-180 bg-[var(--m3-primary-container)] text-[var(--m3-on-primary-container)] border-[var(--m3-primary)]/40"
                      )}
                    >
                      <MaterialIcon name="expand_more" size={18} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-4 pr-10 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
