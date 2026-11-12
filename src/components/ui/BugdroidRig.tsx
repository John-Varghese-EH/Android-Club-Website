"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/motion";

export type DroidAccessory = "none" | "visor" | "headphones" | "cap";

interface BugdroidRigProps {
  variant?: "hero" | "inline" | "peek" | "preloader";
  size?: number;
  accentColor?: string;
  accessory?: DroidAccessory;
  className?: string;
}

const SEED_FILTERS: Record<string, string> = {
  "#3DDC84": "none",
  "#4C8DF6": "hue-rotate(82deg) saturate(1.12)",
  "#E07A5F": "hue-rotate(-135deg) saturate(1.05)",
  "#D4A72C": "hue-rotate(-96deg) saturate(1.15) brightness(1.04)",
};

export function getSeedFilter(accentColor: string): string {
  return (
    SEED_FILTERS[accentColor.toUpperCase()] ??
    SEED_FILTERS[accentColor] ??
    "none"
  );
}

/* Android robot artwork used under Creative Commons Attribution 3.0 License. */
export function BugdroidRig({
  variant = "hero",
  size = 240,
  accentColor = "#3DDC84",
  accessory = "none",
  className,
}: BugdroidRigProps) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  useEffect(() => {
    if (variant !== "hero" || prefersReducedMotion()) return;

    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({
        ry: Math.max(-14, Math.min(14, nx * 14)),
        rx: Math.max(-10, Math.min(10, -ny * 10)),
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [variant]);

  const filterValue = getSeedFilter(accentColor);

  if (variant === "inline") {
    return (
      <span
        onMouseEnter={() => setBouncing(true)}
        onMouseLeave={() => setBouncing(false)}
        className={cn(
          "inline-flex items-center justify-center align-middle mx-1.5 px-3 py-1 rounded-full bg-[var(--m3-primary-container)] border border-[var(--border-card)] m3-spring hover:scale-110 hover:-rotate-3 cursor-pointer",
          className
        )}
        title="Android Robot (CC BY 3.0)"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/android-head_3D.svg"
          alt="Official 3D Android Robot"
          style={{
            width: size,
            height: Math.round(size * (252 / 430)),
            filter: filterValue,
            transform: bouncing
              ? "translateY(-2px) rotate(-6deg) scale(1.08)"
              : "none",
            transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          className="object-contain select-none"
        />
      </span>
    );
  }

  const height = Math.round(size * (252 / 430));

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        setBouncing(true);
        setTimeout(() => setBouncing(false), 650);
      }}
      className={cn(
        "relative select-none flex flex-col items-center justify-center",
        variant === "hero" && "cursor-pointer",
        className
      )}
      style={{
        width: size,
        height: height + 36,
        perspective: "900px",
      }}
      aria-label="Official Interactive 3D Android Robot"
    >
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          height,
          transformStyle: "preserve-3d",
          transform:
            variant === "hero"
              ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${bouncing ? -16 : hovered ? -6 : 0}px) scale(${bouncing ? 1.07 : hovered ? 1.03 : 1})`
              : "none",
          transition:
            "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/android-head_3D.svg"
          alt="Official 3D Android Robot"
          style={{ filter: filterValue }}
          className="w-full h-full object-contain drop-shadow-[0_24px_38px_rgba(11,79,38,0.28)] pointer-events-none"
        />

        {accessory !== "none" && (
          <svg
            viewBox="0 0 430 252"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full overflow-visible"
          >
            {accessory === "visor" && (
              <g>
                <rect
                  x="76"
                  y="142"
                  width="278"
                  height="64"
                  rx="32"
                  fill="#090B0A"
                  fillOpacity="0.86"
                  stroke="#FFFFFF"
                  strokeOpacity="0.45"
                  strokeWidth="3"
                />
                <path
                  d="M 104 160 L 154 160"
                  stroke="#FFFFFF"
                  strokeOpacity="0.45"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>
            )}

            {accessory === "headphones" && (
              <g>
                <path
                  d="M 10 218 C 12 46 418 46 420 218"
                  stroke="#171C19"
                  strokeWidth="18"
                  strokeLinecap="round"
                  fill="none"
                />
                <rect
                  x="-12"
                  y="168"
                  width="34"
                  height="74"
                  rx="17"
                  fill="#171C19"
                  stroke="#FFFFFF"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                />
                <rect
                  x="408"
                  y="168"
                  width="34"
                  height="74"
                  rx="17"
                  fill="#171C19"
                  stroke="#FFFFFF"
                  strokeOpacity="0.18"
                  strokeWidth="2"
                />
              </g>
            )}

            {accessory === "cap" && (
              <g>
                <path
                  d="M 88 76 C 122 -6 308 -6 342 76 Z"
                  fill="#171C19"
                />
                <path
                  d="M 80 72 H 394 C 402 72 402 90 384 90 H 80 Z"
                  fill="#0F1411"
                />
              </g>
            )}
          </svg>
        )}
      </div>

      {variant === "hero" && (
        <div
          className="mt-4 h-3 rounded-full bg-black/25 dark:bg-black/55 blur-[3px] transition-all duration-300"
          style={{
            width: bouncing ? "46%" : hovered ? "56%" : "64%",
            opacity: bouncing ? 0.45 : 0.75,
          }}
        />
      )}
    </div>
  );
}
