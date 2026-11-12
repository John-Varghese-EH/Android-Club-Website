"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  wrapperClassName?: string;
  priority?: boolean;
}

export function SmartImage({
  src,
  alt,
  fallbackSrc,
  className,
  wrapperClassName,
  priority = false,
  ...rest
}: SmartImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const activeSrc =
    failedSrc === src && fallbackSrc ? fallbackSrc : src;
  const isLoaded = loadedSrc === activeSrc;

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      const id = requestAnimationFrame(() => setLoadedSrc(activeSrc));
      return () => cancelAnimationFrame(id);
    }
    const safety = setTimeout(() => setLoadedSrc(activeSrc), 750);
    return () => clearTimeout(safety);
  }, [activeSrc]);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 material-skeleton z-0"
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={activeSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoadedSrc(activeSrc)}
        onError={() => {
          if (fallbackSrc && activeSrc !== fallbackSrc) {
            setFailedSrc(src);
          } else {
            setLoadedSrc(activeSrc);
          }
        }}
        className={cn(
          "relative z-10 transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...rest}
      />
    </div>
  );
}
