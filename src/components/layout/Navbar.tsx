"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { clubConfig, navigationConfig } from "@/data/club";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { AndroidLogoMark } from "@/components/ui/M3Shapes";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn, getIstTimeString } from "@/lib/utils";
import {
  pauseSmoothScroll,
  prefersReducedMotion,
  resumeSmoothScroll,
  scrollToSection,
} from "@/lib/motion";

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [hoveredNav, setHoveredNav] = useState(navigationConfig.items[0]);
  const [istTime, setIstTime] = useState<string>("");

  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Live VIT Bhopal campus IST clock
  useEffect(() => {
    const init = setTimeout(() => setIstTime(getIstTimeString()), 0);
    const timer = setInterval(() => {
      setIstTime(getIstTimeString());
    }, 1000);
    return () => {
      clearTimeout(init);
      clearInterval(timer);
    };
  }, []);

  // Scroll spy & progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0
      );

      let current = "hero";
      for (const item of navigationConfig.items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate Menu Drawer open/close
  useEffect(() => {
    if (menuOpen) {
      pauseSmoothScroll();
      closeButtonRef.current?.focus();

      if (!prefersReducedMotion() && drawerRef.current) {
        const ctx = gsap.context(() => {
          gsap.fromTo(
            drawerRef.current,
            { clipPath: "circle(0% at 94% 4%)", opacity: 0.7 },
            {
              clipPath: "circle(150% at 94% 4%)",
              opacity: 1,
              duration: 0.65,
              ease: "expo.out",
            }
          );
          gsap.fromTo(
            menuItemsRef.current.filter(Boolean),
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              stagger: 0.045,
              delay: 0.15,
              ease: "power3.out",
            }
          );
        }, drawerRef);

        const onKey = (e: KeyboardEvent) => {
          if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
          window.removeEventListener("keydown", onKey);
          ctx.revert();
        };
      }
    } else {
      resumeSmoothScroll();
    }
  }, [menuOpen]);

  const handleNavigate = (itemId: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      scrollToSection(itemId);
    }, 120);
  };

  return (
    <>
      <header className="fixed top-[max(0.65rem,env(safe-area-inset-top))] sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none">
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto relative mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-3 overflow-hidden rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-2.5 sm:px-3.5 py-1.5 sm:py-2 backdrop-blur-xl shadow-[var(--shadow-soft)]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 bottom-0 h-[2px] overflow-hidden rounded-full"
          >
            <span
              className="block h-full rounded-full bg-[var(--m3-primary)] transition-[width] duration-150"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </span>

          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2 sm:gap-2.5 rounded-full pl-1 pr-2 py-0.5 text-left transition-opacity hover:opacity-95 cursor-pointer min-w-0"
          >
            <span className="relative flex h-[21px] w-[36px] sm:h-[24px] sm:w-[41px] shrink-0 items-center justify-center -translate-y-[2px] sm:-translate-y-[2.5px] transition-transform duration-300 ease-out group-hover:scale-105">
              <AndroidLogoMark
                alt="Android Club VIT Bhopal logo"
                width={41}
                height={24}
                className="h-full w-full drop-shadow-[0_2px_8px_rgba(61,220,132,0.2)]"
              />
            </span>
            <div className="leading-tight min-w-0">
              <span className="block font-expressive text-xs sm:text-sm font-semibold tracking-tight text-[var(--text-primary)] truncate">
                Android Club
              </span>
              <span className="block text-[10px] font-medium text-[var(--text-muted)] truncate">
                VIT Bhopal
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navigationConfig.items
              .filter((i) => i.id !== "hero")
              .map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-xs font-medium m3-spring cursor-pointer",
                      isActive
                        ? "bg-[var(--m3-secondary-container)] text-[var(--text-primary)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/70"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeSwitcher />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="club-menu-drawer"
              aria-label="Open navigation menu"
              className="md-state-layer inline-flex h-10 items-center gap-1.5 sm:gap-2 rounded-full bg-[var(--m3-primary)] px-3.5 sm:px-4 text-xs font-semibold text-[var(--m3-on-primary)] m3-spring hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span className="max-[360px]:sr-only">Menu</span>
              <MaterialIcon name="menu" size={16} />
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="club-menu-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation drawer"
          className="fixed inset-0 z-[90] flex flex-col justify-between overflow-y-auto bg-[var(--bg-primary)] px-5 py-6 sm:px-10 lg:px-16 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--android-green)]" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[var(--text-secondary)] truncate">
                VIT Bhopal • {istTime || "IST"}
              </span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-elevated)] px-5 text-xs font-semibold text-[var(--text-primary)] transition-transform hover:scale-105 cursor-pointer"
            >
              <span>Close</span>
              <MaterialIcon name="close" size={16} />
            </button>
          </div>

          <div className="mx-auto my-8 grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 flex flex-col gap-2">
              {navigationConfig.items.map((item, idx) => (
                <button
                  key={item.id}
                  ref={(el) => {
                    menuItemsRef.current[idx] = el;
                  }}
                  type="button"
                  onMouseEnter={() => setHoveredNav(item)}
                  onFocus={() => setHoveredNav(item)}
                  onClick={() => handleNavigate(item.id)}
                  className="group flex items-baseline gap-4 rounded-2xl px-3 py-2 text-left transition-colors hover:bg-[var(--bg-secondary)] cursor-pointer"
                >
                  <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--android-green)]">
                    {item.index}
                  </span>
                  <span className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-2">
                    {item.label}
                  </span>
                  <span className="ml-auto hidden sm:inline font-mono text-xs text-[var(--text-muted)] opacity-0 transition-opacity group-hover:opacity-100">
                    {item.subtitle}
                  </span>
                </button>
              ))}
            </div>

            <div className="hidden lg:block lg:col-span-5">
              <div className="overflow-hidden rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-elevated)] p-4 shadow-[var(--shadow-soft)]">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[var(--bg-secondary)]">
                  <SmartImage
                    src={hoveredNav.previewImage}
                    alt={hoveredNav.label}
                    className="h-full w-full object-cover transition-transform duration-500"
                    wrapperClassName="h-full w-full"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <p className="text-base font-semibold text-[var(--text-primary)]">
                      {hoveredNav.label}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {hoveredNav.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[var(--android-forest)] dark:text-[var(--android-green)]">
                    /{hoveredNav.id}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-[var(--border-card)] pt-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-medium text-[var(--text-secondary)]">
              <a
                href={clubConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center rounded-full bg-[var(--bg-secondary)]/70 px-3.5 sm:bg-transparent sm:px-0 hover:text-[var(--text-primary)] transition-colors"
              >
                GitHub
              </a>
              <a
                href={clubConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center rounded-full bg-[var(--bg-secondary)]/70 px-3.5 sm:bg-transparent sm:px-0 hover:text-[var(--text-primary)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={clubConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center rounded-full bg-[var(--bg-secondary)]/70 px-3.5 sm:bg-transparent sm:px-0 hover:text-[var(--text-primary)] transition-colors"
              >
                Instagram
              </a>
              <a
                href={clubConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center rounded-full bg-[var(--bg-secondary)]/70 px-3.5 sm:bg-transparent sm:px-0 hover:text-[var(--text-primary)] transition-colors"
              >
                X (Twitter)
              </a>
            </div>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              {clubConfig.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
