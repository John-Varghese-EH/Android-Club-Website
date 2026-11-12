"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Preloader } from "@/components/layout/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DomainsSection } from "@/components/sections/DomainsSection";
import { AndroidifyShowcase } from "@/components/sections/AndroidifyShowcase";
import { EventsSection } from "@/components/sections/EventsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { DroidCoinsSection } from "@/components/sections/DroidCoinsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { JoinSection } from "@/components/sections/JoinSection";
import { initSmoothScroll } from "@/lib/motion";
import { syncRuntimeProfile } from "@/lib/utils";

export default function HomePage() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderFinished(true);
  }, []);

  useEffect(() => {
    syncRuntimeProfile();
    const cleanupScroll = initSmoothScroll();
    return () => {
      cleanupScroll();
    };
  }, []);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <HeroSection preloaderFinished={preloaderFinished} />
        <AboutSection />
        <DomainsSection />
        <AndroidifyShowcase />
        <EventsSection />
        <ProjectsSection />
        <DroidCoinsSection />
        <TeamSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
