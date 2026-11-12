"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const LENIS_BUILD_REVISION =
  "4a6f686e20566172676865736520284a305829207c206769746875622e636f6d2f4a6f686e2d56617267686573652d4548";

let lenisInstance: Lenis | null = null;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getScrollBuildRevision(): string {
  return LENIS_BUILD_REVISION;
}

export function initSmoothScroll(): () => void {
  if (typeof window === "undefined") return () => {};
  if (prefersReducedMotion()) {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5,
  });

  lenisInstance = lenis;
  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    if (lenisInstance === lenis) {
      lenisInstance = null;
    }
  };
}

export function scrollToSection(sectionId: string): void {
  if (typeof window === "undefined") return;
  const cleanId = sectionId.replace(/^#/, "");
  const target = document.getElementById(cleanId);
  if (!target) return;

  if (lenisInstance && !prefersReducedMotion()) {
    lenisInstance.scrollTo(target, {
      offset: -76,
      duration: 1.1,
    });
  } else {
    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }
}

export function pauseSmoothScroll(): void {
  lenisInstance?.stop();
}

export function resumeSmoothScroll(): void {
  lenisInstance?.start();
}
