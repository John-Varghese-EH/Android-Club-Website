"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BugdroidRig } from "@/components/ui/BugdroidRig";
import { prefersReducedMotion } from "@/lib/motion";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const droidWrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  const [done, setDone] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (done) return;

    const alreadySeen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("ac-intro-seen") === "1";

    if (prefersReducedMotion() || alreadySeen) {
      const id = requestAnimationFrame(() => {
        setDone(true);
        onCompleteRef.current();
      });
      return () => cancelAnimationFrame(id);
    }

    const overlay = overlayRef.current;
    const droid = droidWrapRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const progress = progressRef.current;

    if (!overlay || !droid || !title || !subtitle || !progress) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          try {
            window.sessionStorage.setItem("ac-intro-seen", "1");
          } catch {
            // Ignore private-browsing storage restrictions
          }
          setDone(true);
          onCompleteRef.current();
        },
      });

      tl.fromTo(
        droid,
        { y: 12, scale: 0.94, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.18, ease: "power3.out" }
      )
        .fromTo(
          [title, subtitle],
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.16,
            stagger: 0.04,
            ease: "power3.out",
          },
          "-=0.1"
        )
        .to(
          progress,
          { scaleX: 1, duration: 0.28, ease: "power2.inOut" },
          "-=0.12"
        )
        // Snappy reveal into the main stage (~0.52s total)
        .to(
          [droid, title, subtitle],
          {
            scale: 1.05,
            opacity: 0,
            duration: 0.16,
            ease: "power2.in",
          },
          "+=0.02"
        )
        .to(
          overlay,
          {
            opacity: 0,
            duration: 0.16,
            ease: "power2.out",
          },
          "-=0.1"
        );
    }, overlayRef);

    const safetyTimer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem("ac-intro-seen", "1");
      } catch {}
      setDone(true);
      onCompleteRef.current();
    }, 1400);

    return () => {
      window.clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, [done]);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      aria-label="Loading Android Club VIT Bhopal"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg-primary)] px-6 select-none"
    >
      <div className="flex flex-col items-center text-center">
        <div ref={droidWrapRef} className="mb-4">
          <BugdroidRig variant="preloader" size={140} />
        </div>

        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
        >
          Android Club
        </h2>
        <p
          ref={subtitleRef}
          className="mt-1.5 font-mono text-xs uppercase tracking-[0.28em] text-[var(--text-secondary)]"
        >
          VIT Bhopal
        </p>

        <div className="mt-7 h-[2px] w-36 overflow-hidden rounded-full bg-[var(--border-card)]">
          <div
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0 rounded-full bg-[var(--android-green)]"
          />
        </div>
      </div>
    </div>
  );
}
