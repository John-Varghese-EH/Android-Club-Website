"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export interface MaterialSeedPalette {
  id: string;
  name: string;
  label: string;
  hex: string;
  light: {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondaryContainer: string;
    tertiaryContainer: string;
  };
  dark: {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondaryContainer: string;
    tertiaryContainer: string;
  };
}

export const MATERIAL_SEEDS: MaterialSeedPalette[] = [
  {
    id: "botanical",
    name: "Android Botanical",
    label: "M3 Default",
    hex: "#3DDC84",
    light: {
      primary: "#0B6E3A",
      onPrimary: "#FFFFFF",
      primaryContainer: "#C8F5D9",
      onPrimaryContainer: "#07381D",
      secondaryContainer: "#DCE8DF",
      tertiaryContainer: "#EAE5D8",
    },
    dark: {
      primary: "#3DDC84",
      onPrimary: "#072112",
      primaryContainer: "#123822",
      onPrimaryContainer: "#A8F5C8",
      secondaryContainer: "#19231D",
      tertiaryContainer: "#23221B",
    },
  },
  {
    id: "cobalt",
    name: "Pixel Cobalt",
    label: "Compose Sky",
    hex: "#4C8DF6",
    light: {
      primary: "#1B5EC9",
      onPrimary: "#FFFFFF",
      primaryContainer: "#D4E4FF",
      onPrimaryContainer: "#0B295E",
      secondaryContainer: "#DFE6F2",
      tertiaryContainer: "#DCECE4",
    },
    dark: {
      primary: "#7CACF8",
      onPrimary: "#08224A",
      primaryContainer: "#152E54",
      onPrimaryContainer: "#D4E4FF",
      secondaryContainer: "#18202C",
      tertiaryContainer: "#172620",
    },
  },
  {
    id: "terracotta",
    name: "Bhopal Clay",
    label: "Warm Earth",
    hex: "#E07A5F",
    light: {
      primary: "#9C422B",
      onPrimary: "#FFFFFF",
      primaryContainer: "#FFDAD1",
      onPrimaryContainer: "#4A180B",
      secondaryContainer: "#EFE0DA",
      tertiaryContainer: "#DFE9E1",
    },
    dark: {
      primary: "#F4977E",
      onPrimary: "#3D1308",
      primaryContainer: "#4A2117",
      onPrimaryContainer: "#FFDAD1",
      secondaryContainer: "#261D1A",
      tertiaryContainer: "#18241D",
    },
  },
  {
    id: "citron",
    name: "Citron Gold",
    label: "Studio Amber",
    hex: "#D4A72C",
    light: {
      primary: "#7D5E00",
      onPrimary: "#FFFFFF",
      primaryContainer: "#FCE8A6",
      onPrimaryContainer: "#332400",
      secondaryContainer: "#ECE5D2",
      tertiaryContainer: "#DCECE2",
    },
    dark: {
      primary: "#F2C94C",
      onPrimary: "#2B1F00",
      primaryContainer: "#3E310B",
      onPrimaryContainer: "#FCE8A6",
      secondaryContainer: "#242118",
      tertiaryContainer: "#17241D",
    },
  },
];

interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (mode: ThemeMode) => void;
  accentSeed: string;
  setAccentSeed: (hex: string) => void;
  activePalette: MaterialSeedPalette;
}

const STORAGE_KEY = "android-club-theme";
const ACCENT_STORAGE_KEY = "android-club-accent";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemPreference(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTokens(resolved: ResolvedTheme, seedHex: string) {
  const root = document.documentElement;
  if (resolved === "dark") {
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }

  const palette =
    MATERIAL_SEEDS.find(
      (s) => s.hex.toLowerCase() === seedHex.toLowerCase()
    ) ?? MATERIAL_SEEDS[0];
  const tokens = resolved === "dark" ? palette.dark : palette.light;

  root.style.setProperty("--color-dynamic-seed", palette.hex);
  root.style.setProperty("--m3-primary", tokens.primary);
  root.style.setProperty("--m3-on-primary", tokens.onPrimary);
  root.style.setProperty("--m3-primary-container", tokens.primaryContainer);
  root.style.setProperty("--m3-on-primary-container", tokens.onPrimaryContainer);
  root.style.setProperty("--m3-secondary-container", tokens.secondaryContainer);
  root.style.setProperty("--m3-tertiary-container", tokens.tertiaryContainer);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [accentSeed, setAccentSeedState] = useState<string>(
    MATERIAL_SEEDS[0].hex
  );

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      let initial: ThemeMode = "system";
      let initialSeed = MATERIAL_SEEDS[0].hex;
      try {
        const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
        if (saved === "light" || saved === "dark" || saved === "system") {
          initial = saved;
        }
        const savedAccent = localStorage.getItem(ACCENT_STORAGE_KEY);
        if (savedAccent && /^#[0-9A-Fa-f]{6}$/.test(savedAccent)) {
          initialSeed = savedAccent;
        }
      } catch {
        // Ignore storage errors
      }

      setThemeState(initial);
      setAccentSeedState(initialSeed);
      const nextResolved =
        initial === "system" ? getSystemPreference() : initial;
      setResolvedTheme(nextResolved);
      applyTokens(nextResolved, initialSeed);
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      setThemeState((current) => {
        if (current === "system") {
          const sys = getSystemPreference();
          setResolvedTheme(sys);
          setAccentSeedState((seed) => {
            applyTokens(sys, seed);
            return seed;
          });
        }
        return current;
      });
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      cancelAnimationFrame(frameId);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const setTheme = useCallback(
    (mode: ThemeMode) => {
      setThemeState(mode);
      try {
        localStorage.setItem(STORAGE_KEY, mode);
      } catch {
        // Ignore storage write errors
      }
      const nextResolved = mode === "system" ? getSystemPreference() : mode;
      setResolvedTheme(nextResolved);
      applyTokens(nextResolved, accentSeed);
    },
    [accentSeed]
  );

  const setAccentSeed = useCallback(
    (hex: string) => {
      setAccentSeedState(hex);
      applyTokens(resolvedTheme, hex);
      try {
        localStorage.setItem(ACCENT_STORAGE_KEY, hex);
      } catch {
        // Ignore storage write errors
      }
    },
    [resolvedTheme]
  );

  const activePalette =
    MATERIAL_SEEDS.find(
      (s) => s.hex.toLowerCase() === accentSeed.toLowerCase()
    ) ?? MATERIAL_SEEDS[0];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        accentSeed,
        setAccentSeed,
        activePalette,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
