"use client";

import React from "react";
import { ThemeMode, useTheme } from "@/lib/theme";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils";

const MODES: { id: ThemeMode; label: string }[] = [
  { id: "light", label: "Light theme" },
  { id: "system", label: "System theme" },
  { id: "dark", label: "Dark theme" },
];

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Color theme switcher"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-secondary)]/85 p-1",
        className
      )}
    >
      {MODES.map((m) => {
        const active = theme === m.id;
        return (
          <button
            key={m.id}
            type="button"
            onClick={() => setTheme(m.id)}
            aria-label={m.label}
            aria-pressed={active}
            title={m.label}
            className={cn(
              "relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 cursor-pointer",
              active
                ? "bg-[var(--m3-secondary-container)] text-[var(--text-primary)] shadow-sm scale-100"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)] scale-95"
            )}
          >
            {m.id === "light" && (
              <MaterialIcon name="light_mode" size={15} filled={active} />
            )}
            {m.id === "system" && (
              <MaterialIcon name="devices" size={15} filled={active} />
            )}
            {m.id === "dark" && (
              <MaterialIcon name="dark_mode" size={15} filled={active} />
            )}
          </button>
        );
      })}
    </div>
  );
}
