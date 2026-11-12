"use client";

import React, { useId } from "react";
import { MaterialIcon, type MaterialIconName } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils";

export function M3Starburst({
  className,
  size = 44,
  color = "var(--m3-primary)",
  spin = false,
  children,
}: {
  className?: string;
  size?: number;
  color?: string;
  spin?: boolean;
  children?: React.ReactNode;
}) {
  const points = 12;
  const cx = 50;
  const cy = 50;
  const rOuter = 47;
  const rInner = 37;
  let d = "";

  for (let i = 0; i < points; i++) {
    const a1 = (i / points) * Math.PI * 2;
    const aMid = ((i + 0.5) / points) * Math.PI * 2;
    const a2 = ((i + 1) / points) * Math.PI * 2;

    const x1 = cx + rInner * Math.cos(a1);
    const y1 = cy + rInner * Math.sin(a1);
    const xm = cx + rOuter * Math.cos(aMid);
    const ym = cy + rOuter * Math.sin(aMid);
    const x2 = cx + rInner * Math.cos(a2);
    const y2 = cy + rInner * Math.sin(a2);

    if (i === 0) d += `M ${x1.toFixed(2)} ${y1.toFixed(2)} `;
    d += `Q ${xm.toFixed(2)} ${ym.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)} `;
  }
  d += "Z";

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center m3-spring",
        spin && "hover:rotate-90 hover:scale-110",
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="w-full h-full"
      >
        <path d={d} fill={color} />
      </svg>
      {children && (
        <span className="absolute inset-0 flex items-center justify-center">
          {children}
        </span>
      )}
    </span>
  );
}

export function M3CloverFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const clipId = `m3-clover-${useId().replace(/:/g, "")}`;
  return (
    <div
      className={cn("relative overflow-hidden m3-spring", className)}
      style={{ clipPath: `url(#${clipId})` }}
    >
      <svg width={0} height={0} aria-hidden="true" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.03 C0.72,0.03 0.78,0.16 0.81,0.19 C0.84,0.22 0.97,0.28 0.97,0.5 C0.97,0.72 0.84,0.78 0.81,0.81 C0.78,0.84 0.72,0.97 0.5,0.97 C0.28,0.97 0.22,0.84 0.19,0.81 C0.16,0.78 0.03,0.72 0.03,0.5 C0.03,0.28 0.16,0.22 0.19,0.19 C0.22,0.16 0.28,0.03 0.5,0.03 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="h-full w-full overflow-hidden">{children}</div>
    </div>
  );
}

export function M3ArchFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-t-[999px] rounded-b-[28px] border border-[var(--border-card)] m3-spring",
        className
      )}
    >
      {children}
    </div>
  );
}

export function M3ScallopMask({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[30%] border border-[var(--border-card)] m3-spring",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PixelMatrixDotCluster({
  className,
}: {
  className?: string;
}) {
  const pattern = [
    1, 0, 1, 0, 1,
    0, 1, 1, 1, 0,
    1, 1, 1, 1, 1,
    0, 1, 1, 1, 0,
    1, 0, 1, 0, 1,
  ];
  return (
    <div
      className={cn("grid grid-cols-5 gap-1 w-fit", className)}
      aria-hidden="true"
    >
      {pattern.map((active, idx) => (
        <span
          key={idx}
          className={cn(
            "w-1.5 h-1.5 rounded-full transition-colors duration-300",
            active
              ? "bg-[var(--m3-primary)]"
              : "bg-[var(--text-muted)]/20"
          )}
        />
      ))}
    </div>
  );
}

export function M3FlowerFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const clipId = `m3-flower-${useId().replace(/:/g, "")}`;
  return (
    <div
      className={cn("relative overflow-hidden m3-spring", className)}
      style={{ clipPath: `url(#${clipId})` }}
    >
      <svg width={0} height={0} aria-hidden="true" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.02 C0.61,0.02 0.64,0.14 0.72,0.12 C0.82,0.09 0.91,0.18 0.88,0.28 C0.86,0.36 0.98,0.39 0.98,0.5 C0.98,0.61 0.86,0.64 0.88,0.72 C0.91,0.82 0.82,0.91 0.72,0.88 C0.64,0.86 0.61,0.98 0.5,0.98 C0.39,0.98 0.36,0.86 0.28,0.88 C0.18,0.91 0.09,0.82 0.12,0.72 C0.14,0.64 0.02,0.61 0.02,0.5 C0.02,0.39 0.14,0.36 0.12,0.28 C0.09,0.18 0.18,0.09 0.28,0.12 C0.36,0.14 0.39,0.02 0.5,0.02 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="h-full w-full overflow-hidden">{children}</div>
    </div>
  );
}

export function M3PebbleFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[42%_58%_62%_38%/46%_40%_60%_54%] border border-[var(--border-card)] m3-spring",
        className
      )}
    >
      {children}
    </div>
  );
}

export function M3SlantedPill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex overflow-hidden rounded-full border border-[var(--border-card)] -rotate-2 m3-spring hover:rotate-0 hover:scale-110",
        className
      )}
    >
      {children}
    </span>
  );
}

const JAGGED_PATHS = {
  sawtooth: {
    left: "M 11 0 L 2 4 L 8.5 8 L 1.5 12 L 8.5 16 L 1.5 20 L 8.5 24 L 2 28 L 11 32 Z",
    right: "M 0 0 L 9 4 L 2.5 8 L 9.5 12 L 2.5 16 L 9.5 20 L 2.5 24 L 9 28 L 0 32 Z",
  },
  ticket: {
    left: "M 11 0 L 3 0 L 3 5.5 C 7 6.5 7 11.5 3 12.5 L 3 19.5 C 7 20.5 7 25.5 3 26.5 L 3 32 L 11 32 Z",
    right: "M 0 0 L 8 0 L 8 5.5 C 4 6.5 4 11.5 8 12.5 L 8 19.5 C 4 20.5 4 25.5 8 26.5 L 8 32 L 0 32 Z",
  },
  pixel: {
    left: "M 11 0 L 7 0 L 7 5 L 3.5 5 L 3.5 10 L 1 10 L 1 22 L 3.5 22 L 3.5 27 L 7 27 L 7 32 L 11 32 Z",
    right: "M 0 0 L 4 0 L 4 5 L 7.5 5 L 7.5 10 L 10 10 L 10 22 L 7.5 22 L 7.5 27 L 4 27 L 4 32 L 0 32 Z",
  },
} as const;

const BADGE_TONES = {
  primary: {
    bg: "var(--m3-primary-container)",
    text: "var(--m3-on-primary-container)",
  },
  secondary: {
    bg: "var(--m3-secondary-container)",
    text: "var(--text-primary)",
  },
  surface: {
    bg: "var(--bg-elevated)",
    text: "var(--text-primary)",
  },
  solid: {
    bg: "var(--m3-primary)",
    text: "var(--m3-on-primary)",
  },
  dark: {
    bg: "var(--bg-secondary)",
    text: "var(--text-secondary)",
  },
} as const;

export function M3JaggedBadge({
  children,
  variant = "sawtooth",
  tone = "primary",
  icon,
  iconAnimation = "bob",
  liveDot = false,
  starburst = false,
  dotColor,
  glint = true,
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof JAGGED_PATHS;
  tone?: keyof typeof BADGE_TONES;
  icon?: MaterialIconName;
  iconAnimation?: "bob" | "wiggle" | "none";
  liveDot?: boolean;
  starburst?: boolean;
  dotColor?: string;
  glint?: boolean;
  className?: string;
}) {
  const paths = JAGGED_PATHS[variant];
  const palette = BADGE_TONES[tone];
  const iconAnimClass =
    iconAnimation === "bob"
      ? "m3-icon-bob"
      : iconAnimation === "wiggle"
        ? "m3-icon-wiggle"
        : "";

  return (
    <span
      className={cn(
        "group/jagged inline-flex items-stretch min-h-[30px] select-none m3-spring hover:-translate-y-0.5 hover:-rotate-1 active:scale-95",
        className
      )}
    >
      <svg
        width={11}
        height={32}
        viewBox="0 0 11 32"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="w-[11px] shrink-0 self-stretch -mr-[1px]"
      >
        <path d={paths.left} fill={palette.bg} />
      </svg>

      <span
        className={cn(
          "inline-flex items-center gap-2 px-2.5 py-1 text-xs font-semibold tracking-tight leading-none",
          glint && "m3-jagged-glint"
        )}
        style={{ backgroundColor: palette.bg, color: palette.text }}
      >
        {liveDot && (
          <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: dotColor ?? "var(--m3-primary)" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: dotColor ?? "var(--m3-primary)" }}
            />
          </span>
        )}

        {starburst && (
          <M3Starburst
            size={14}
            color={dotColor ?? "var(--m3-primary)"}
            className="group-hover/jagged:rotate-90"
          />
        )}

        {icon && (
          <MaterialIcon
            name={icon}
            size={14}
            filled
            className={cn(
              "shrink-0 transition-transform duration-300 group-hover/jagged:scale-110",
              iconAnimClass
            )}
          />
        )}

        <span className="whitespace-nowrap">{children}</span>
      </span>

      <svg
        width={11}
        height={32}
        viewBox="0 0 11 32"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="w-[11px] shrink-0 self-stretch -ml-[1px]"
      >
        <path d={paths.right} fill={palette.bg} />
      </svg>
    </span>
  );
}

export function AndroidLogoMark({
  className,
  alt = "Android 3D emblem",
  active = false,
  alwaysAnimate = false,
  width = 430,
  height = 252,
}: {
  className?: string;
  alt?: string;
  active?: boolean;
  alwaysAnimate?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center select-none",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logos/android-head_3D.svg"
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        className={cn(
          "block h-auto w-full object-contain transition-all duration-200",
          alwaysAnimate || active
            ? "opacity-0 scale-95"
            : "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0 group-active:opacity-0 group-hover:scale-95"
        )}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logos/android-brand-new-logo-3D-animation.gif"
        alt=""
        aria-hidden="true"
        width={395}
        height={222}
        loading="lazy"
        decoding="async"
        className={cn(
          "pointer-events-none absolute inset-0 m-auto h-full w-full object-contain transition-all duration-200",
          alwaysAnimate || active
            ? "opacity-100 scale-[1.18]"
            : "opacity-0 scale-100 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 group-hover:scale-[1.18] group-focus-visible:scale-[1.18] group-active:scale-[1.18]"
        )}
      />
    </span>
  );
}

