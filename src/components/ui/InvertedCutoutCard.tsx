"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type CutoutCorner =
  | "bottom-right"
  | "top-right"
  | "bottom-left"
  | "top-left";

interface InvertedCutoutCardProps {
  children: React.ReactNode;
  notchContent?: React.ReactNode;
  corner?: CutoutCorner;
  notchWidth?: number;
  notchHeight?: number;
  notchGap?: number;
  outerRadius?: number;
  filletRadius?: number;
  className?: string;
  surfaceClassName?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function buildCutoutPath(
  w: number,
  h: number,
  corner: CutoutCorner,
  nw: number,
  nh: number,
  r: number,
  f: number
): string {
  const safeR = Math.min(r, w / 4, h / 4);
  const safeNw = Math.min(nw, w * 0.48);
  const safeNh = Math.min(nh, h * 0.48);
  const safeF = Math.min(f, safeNw * 0.46, safeNh * 0.46);
  const innerF = safeF;

  if (corner === "bottom-right") {
    return [
      `M 0 ${safeR}`,
      `Q 0 0 ${safeR} 0`,
      `L ${w - safeR} 0`,
      `Q ${w} 0 ${w} ${safeR}`,
      `L ${w} ${h - safeNh - safeF}`,
      `Q ${w} ${h - safeNh} ${w - safeF} ${h - safeNh}`,
      `L ${w - safeNw + innerF} ${h - safeNh}`,
      `Q ${w - safeNw} ${h - safeNh} ${w - safeNw} ${h - safeNh + innerF}`,
      `L ${w - safeNw} ${h - safeF}`,
      `Q ${w - safeNw} ${h} ${w - safeNw - safeF} ${h}`,
      `L ${safeR} ${h}`,
      `Q 0 ${h} 0 ${h - safeR}`,
      "Z",
    ].join(" ");
  }

  if (corner === "top-right") {
    return [
      `M 0 ${safeR}`,
      `Q 0 0 ${safeR} 0`,
      `L ${w - safeNw - safeF} 0`,
      `Q ${w - safeNw} 0 ${w - safeNw} ${safeF}`,
      `L ${w - safeNw} ${safeNh - innerF}`,
      `Q ${w - safeNw} ${safeNh} ${w - safeNw + innerF} ${safeNh}`,
      `L ${w - safeF} ${safeNh}`,
      `Q ${w} ${safeNh} ${w} ${safeNh + safeF}`,
      `L ${w} ${h - safeR}`,
      `Q ${w} ${h} ${w - safeR} ${h}`,
      `L ${safeR} ${h}`,
      `Q 0 ${h} 0 ${h - safeR}`,
      "Z",
    ].join(" ");
  }

  if (corner === "bottom-left") {
    return [
      `M 0 ${safeR}`,
      `Q 0 0 ${safeR} 0`,
      `L ${w - safeR} 0`,
      `Q ${w} 0 ${w} ${safeR}`,
      `L ${w} ${h - safeR}`,
      `Q ${w} ${h} ${w - safeR} ${h}`,
      `L ${safeNw + safeF} ${h}`,
      `Q ${safeNw} ${h} ${safeNw} ${h - safeF}`,
      `L ${safeNw} ${h - safeNh + innerF}`,
      `Q ${safeNw} ${h - safeNh} ${safeNw - innerF} ${h - safeNh}`,
      `L ${safeF} ${h - safeNh}`,
      `Q 0 ${h - safeNh} 0 ${h - safeNh - safeF}`,
      "Z",
    ].join(" ");
  }

  // top-left
  return [
    `M 0 ${safeNh + safeF}`,
    `Q 0 ${safeNh} ${safeF} ${safeNh}`,
    `L ${safeNw - innerF} ${safeNh}`,
    `Q ${safeNw} ${safeNh} ${safeNw} ${safeNh - innerF}`,
    `L ${safeNw} ${safeF}`,
    `Q ${safeNw} 0 ${safeNw + safeF} 0`,
    `L ${w - safeR} 0`,
    `Q ${w} 0 ${w} ${safeR}`,
    `L ${w} ${h - safeR}`,
    `Q ${w} ${h} ${w - safeR} ${h}`,
    `L ${safeR} ${h}`,
    `Q 0 ${h} 0 ${h - safeR}`,
    "Z",
  ].join(" ");
}

export function InvertedCutoutCard({
  children,
  notchContent,
  corner = "bottom-right",
  notchWidth = 76,
  notchHeight = 76,
  notchGap = 12,
  outerRadius = 28,
  filletRadius = 22,
  className,
  surfaceClassName,
  style,
  onClick,
}: InvertedCutoutCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const notchSlotRef = useRef<HTMLDivElement>(null);
  const rawId = useId().replace(/:/g, "");
  const clipId = `cutout-clip-${rawId}`;
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [notchSize, setNotchSize] = useState<{ w: number; h: number } | null>(
    null
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const nextW = Math.round(rect.width);
      const nextH = Math.round(rect.height);
      setSize((prev) =>
        prev.w === nextW && prev.h === nextH ? prev : { w: nextW, h: nextH }
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slot = notchSlotRef.current;
    if (!slot) return;

    const updateNotch = () => {
      const rect = slot.getBoundingClientRect();
      const nw = Math.ceil(rect.width);
      const nh = Math.ceil(rect.height);
      if (nw > 0 && nh > 0) {
        setNotchSize((prev) =>
          prev && prev.w === nw && prev.h === nh ? prev : { w: nw, h: nh }
        );
      }
    };

    updateNotch();
    const observer = new ResizeObserver(updateNotch);
    observer.observe(slot);
    return () => observer.disconnect();
  }, [notchContent]);

  const effectiveNw =
    notchContent && notchSize ? notchSize.w + notchGap : notchWidth;
  const effectiveNh =
    notchContent && notchSize ? notchSize.h + notchGap : notchHeight;
  const hasDims = size.w > 0 && size.h > 0;
  const path = hasDims
    ? buildCutoutPath(
        size.w,
        size.h,
        corner,
        effectiveNw,
        effectiveNh,
        outerRadius,
        filletRadius
      )
    : "";

  const notchPosClass =
    corner === "bottom-right"
      ? "bottom-0 right-0 items-end justify-end"
      : corner === "top-right"
        ? "top-0 right-0 items-start justify-end"
        : corner === "bottom-left"
          ? "bottom-0 left-0 items-end justify-start"
          : "top-0 left-0 items-start justify-start";

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={cn("relative group", className)}
      style={style}
    >
      {hasDims && (
        <svg
          width={0}
          height={0}
          aria-hidden="true"
          className="absolute pointer-events-none"
        >
          <defs>
            <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
              <path d={path} />
            </clipPath>
          </defs>
        </svg>
      )}

      <div
        className={cn(
          "relative w-full h-full overflow-hidden transition-colors duration-300",
          !hasDims && "border border-[var(--border-card)]",
          surfaceClassName
        )}
        style={{
          clipPath: hasDims ? `url(#${clipId})` : undefined,
          borderRadius: !hasDims ? `${outerRadius}px` : undefined,
          backgroundColor: surfaceClassName ? undefined : "var(--bg-elevated)",
        }}
      >
        {children}
      </div>

      {hasDims && (
        <svg
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
        >
          <path
            d={path}
            stroke="var(--border-card)"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      {notchContent && (
        <div
          className={cn("pointer-events-none absolute z-20 flex", notchPosClass)}
          style={{
            width: `${effectiveNw}px`,
            height: `${effectiveNh}px`,
          }}
        >
          <div
            ref={notchSlotRef}
            className="pointer-events-auto inline-flex w-fit h-fit"
          >
            {notchContent}
          </div>
        </div>
      )}
    </div>
  );
}
