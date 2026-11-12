"use client";

import React, { useState } from "react";
import {
  clubConfig,
  engineeringBlogs,
  linkedinDispatches,
  ProjectItem,
  projects,
} from "@/data/club";
import { InvertedCutoutCard } from "@/components/ui/InvertedCutoutCard";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { M3JaggedBadge, M3Starburst } from "@/components/ui/M3Shapes";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";

function ProjectAppWidget({ project }: { project: ProjectItem }) {
  if (project.id === "campus-orbit") {
    return (
      <div className="mt-4 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--text-primary)]">
            Shuttle A-1 • Main Gate
          </span>
          <span className="rounded-full bg-[var(--m3-primary-container)] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--m3-on-primary-container)]">
            2 min ETA
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--bg-secondary)]">
          <div
            className="h-full w-4/5 rounded-full"
            style={{ backgroundColor: project.color }}
          />
        </div>
        <div className="flex justify-between font-mono text-[10px] text-[var(--text-muted)]">
          <span>Hostel Block 2</span>
          <span>Lab Complex LC-205</span>
        </div>
      </div>
    );
  }

  if (project.id === "drowsy-guard") {
    return (
      <div className="mt-4 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] p-3.5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-[var(--text-primary)]">
            CameraX EAR Pipeline
          </p>
          <p className="font-mono text-[10px] text-[var(--text-muted)]">
            MediaPipe FaceMesh • Offline
          </p>
        </div>
        <span className="rounded-xl bg-[var(--m3-secondary-container)] px-3 py-1.5 font-mono text-xs font-bold text-[var(--text-primary)]">
          18 ms
        </span>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-elevated)] p-3.5 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-[var(--text-primary)]">
          {project.metrics}
        </p>
        <p className="font-mono text-[10px] text-[var(--text-muted)]">
          {project.architecture}
        </p>
      </div>
      <span
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: project.color }}
      />
    </div>
  );
}

export function ProjectsSection() {
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");
  const [feedTab, setFeedTab] = useState<"linkedin" | "guides">("linkedin");
  const { accentSeed } = useTheme();

  const activeProject =
    projects.find((p) => p.id === selectedId) ?? projects[0];

  return (
    <section
      id="projects"
      className="py-14 sm:py-24 lg:py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/35"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3.5 md:flex-row md:items-end md:justify-between mb-7 sm:mb-12">
          <div>
            <M3JaggedBadge
              variant="sawtooth"
              tone="primary"
              icon="code_blocks"
              iconAnimation="bob"
              className="mb-3 sm:mb-4"
            >
              Open-Source Builds
            </M3JaggedBadge>
            <h2 className="font-expressive text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              Shipped Software.
            </h2>
            <p className="mt-2 max-w-md text-sm sm:text-base text-[var(--text-secondary)]">
              Campus apps and Kotlin repositories built by members.
            </p>
          </div>
          <a
            href="https://github.com/Android-Club-VIT-Bhopal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--bg-elevated)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-card)] m3-spring hover:border-[var(--m3-primary)]"
          >
            <span>github.com/Android-Club-VIT-Bhopal</span>
            <MaterialIcon name="arrow_outward" size={15} />
          </a>
        </div>

        <div
          role="tablist"
          aria-label="Select app to preview on Pixel phone"
          className="lg:hidden mb-4 flex flex-wrap items-center gap-2"
        >
          {projects.map((project) => {
            const isSelected = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => setSelectedId(project.id)}
                className={cn(
                  "inline-flex min-h-[38px] items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold m3-spring cursor-pointer",
                  isSelected
                    ? "border-transparent bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-sm"
                    : "border-[var(--border-card)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
                )}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: isSelected ? "#FFFFFF" : project.color,
                  }}
                />
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="rounded-[26px] sm:rounded-[38px] border border-[var(--border-card)] sm:border-2 bg-[var(--bg-elevated)] p-3.5 sm:p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#090B0A] ring-2 ring-[var(--border-card)]" />
                  <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                    {activeProject.title}
                  </span>
                </div>

                <div className="inline-flex overflow-hidden rounded-full border border-[var(--border-card)] bg-[var(--bg-primary)] divide-x divide-[var(--border-card)]">
                  <button
                    type="button"
                    onClick={() => setViewMode("preview")}
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-1.5 sm:py-1 font-mono text-[11px] transition-colors cursor-pointer",
                      viewMode === "preview"
                        ? "bg-[var(--m3-secondary-container)] text-[var(--text-primary)] font-semibold"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    {viewMode === "preview" && <MaterialIcon name="check" size={12} />}
                    <span>App UI</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("code")}
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-1.5 sm:py-1 font-mono text-[11px] transition-colors cursor-pointer",
                      viewMode === "code"
                        ? "bg-[var(--m3-secondary-container)] text-[var(--text-primary)] font-semibold"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    {viewMode === "code" && <MaterialIcon name="check" size={12} />}
                    <span>Kotlin</span>
                  </button>
                </div>
              </div>

              <div className="mt-3.5 sm:mt-4 rounded-[20px] sm:rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-primary)] p-3.5 sm:p-5 min-h-[280px] sm:min-h-[370px] flex flex-col justify-between">
                {viewMode === "preview" ? (
                  <>
                    <div>
                      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
                        <span>Android 15 • Compose</span>
                        <span className="rounded-full bg-[var(--bg-secondary)] px-2.5 py-0.5 text-[var(--text-secondary)]">
                          {activeProject.category}
                        </span>
                      </div>

                      <div
                        className="mt-3.5 sm:mt-4 rounded-2xl p-3.5 sm:p-4 border border-[var(--border-card)]"
                        style={{
                          backgroundColor: `${activeProject.color}1C`,
                        }}
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                          {activeProject.badge}
                        </span>
                        <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                          {activeProject.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                          {activeProject.tagline}
                        </p>
                      </div>

                      <ProjectAppWidget project={activeProject} />

                      <p className="mt-3.5 sm:mt-4 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {activeProject.description}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-5 flex justify-center pt-1.5">
                      <span className="h-1 w-24 rounded-full bg-[var(--text-muted)]/35" />
                    </div>
                  </>
                ) : (
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="font-mono text-[11px] text-[var(--text-muted)] mb-3">
                        {activeProject.title}.kt
                      </p>
                      <pre className="overflow-x-auto rounded-xl bg-[var(--bg-secondary)] p-3.5 font-mono text-[11px] leading-relaxed text-[var(--text-primary)]">
                        {activeProject.codeSnippet ??
                          `// ${activeProject.title}\n// Architecture: ${activeProject.architecture}\n// Stack: ${activeProject.tech.join(", ")}`}
                      </pre>
                    </div>
                    <p className="mt-4 inline-flex items-center justify-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                      <MaterialIcon name="star" size={13} filled className="text-amber-500" />
                      <span>
                        {activeProject.stars} Stars • {activeProject.forks} Forks on GitHub
                      </span>
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-between gap-2 px-1">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                  <MaterialIcon name="star" size={14} filled className="text-amber-500" />
                  <span>
                    {activeProject.stars} • {activeProject.forks} forks
                  </span>
                </span>
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-semibold text-[var(--bg-primary)] m3-spring hover:scale-105"
                >
                  <span>Source Repo</span>
                  <MaterialIcon name="arrow_outward" size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:gap-4">
            {projects.map((project) => {
              const isSelected = project.id === activeProject.id;

              const githubBtn = (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Open ${project.title} on GitHub`}
                  className={cn(
                    "flex items-center justify-center rounded-full m3-spring hover:scale-105",
                    isSelected
                      ? "h-10 w-10 bg-[var(--m3-primary)] text-[var(--m3-on-primary)] shadow-sm"
                      : "h-8 w-8 bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--m3-primary)] hover:text-[var(--m3-on-primary)]"
                  )}
                >
                  <MaterialIcon name="arrow_outward" size={15} />
                </a>
              );

              const cardContent = (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedId(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(project.id);
                    }
                  }}
                  className="flex h-full flex-col justify-between p-5 text-left cursor-pointer outline-none"
                >
                  <div>
                    <div
                      className={cn(
                        "flex items-center justify-between gap-2",
                        isSelected && "pr-12"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                          isSelected
                            ? "bg-[var(--bg-elevated)]/90 text-[var(--text-primary)]"
                            : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                        )}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: isSelected
                              ? accentSeed
                              : project.color,
                          }}
                        />
                        {project.category}
                      </span>

                      {isSelected ? (
                        <M3Starburst size={22} color={accentSeed} spin />
                      ) : (
                        githubBtn
                      )}
                    </div>

                    <h3 className="mt-3.5 font-expressive text-lg font-bold tracking-tight text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-xs leading-relaxed",
                        isSelected
                          ? "text-[var(--m3-on-primary-container)]/85"
                          : "text-[var(--text-secondary)]"
                      )}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[var(--bg-primary)]/80 px-2.5 py-0.5 font-mono text-[10px] font-medium text-[var(--text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] font-semibold text-[var(--text-muted)]">
                      <MaterialIcon name="star" size={11} filled className="text-amber-500" />
                      <span>{project.stars}</span>
                    </span>
                  </div>
                </div>
              );

              if (isSelected) {
                return (
                  <InvertedCutoutCard
                    key={project.id}
                    corner="top-right"
                    notchWidth={56}
                    notchHeight={56}
                    notchGap={12}
                    outerRadius={24}
                    filletRadius={18}
                    surfaceClassName="bg-[var(--m3-primary-container)]"
                    className="shadow-sm"
                    notchContent={githubBtn}
                  >
                    {cardContent}
                  </InvertedCutoutCard>
                );
              }

              return (
                <div
                  key={project.id}
                  className="group rounded-[24px] border border-[var(--border-card)] bg-[var(--bg-elevated)] m3-spring hover:border-[var(--m3-primary)]/45"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 sm:mt-14 rounded-[28px] border border-[var(--border-card)] bg-[var(--bg-elevated)] p-5 sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <M3JaggedBadge variant="ticket" tone="secondary" icon="history_edu">
                {feedTab === "linkedin" ? "LinkedIn Dispatches" : "Read Our Blogs"}
              </M3JaggedBadge>
              <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {feedTab === "linkedin"
                  ? `${clubConfig.linkedinFollowers} followers on LinkedIn • Event recaps & newsletters`
                  : "Kotlin, Jetpack Compose & MVVM fundamentals from club engineers."}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <div
                role="tablist"
                aria-label="Filter publications"
                className="inline-flex items-center overflow-hidden rounded-full border border-[var(--border-card)] bg-[var(--bg-secondary)] divide-x divide-[var(--border-card)]"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={feedTab === "linkedin"}
                  onClick={() => setFeedTab("linkedin")}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                    feedTab === "linkedin"
                      ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  LinkedIn ({linkedinDispatches.length})
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={feedTab === "guides"}
                  onClick={() => setFeedTab("guides")}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                    feedTab === "guides"
                      ? "bg-[var(--m3-primary)] text-[var(--m3-on-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  Club Guides ({engineeringBlogs.length})
                </button>
              </div>

              <a
                href={
                  feedTab === "linkedin"
                    ? clubConfig.socials.linkedin
                    : clubConfig.blogsUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--m3-secondary-container)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] m3-spring hover:bg-[var(--m3-primary)] hover:text-[var(--m3-on-primary)]"
              >
                <span>
                  {feedTab === "linkedin" ? "Follow on LinkedIn" : "All Engineering Blogs"}
                </span>
                <MaterialIcon name="arrow_outward" size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {feedTab === "linkedin"
              ? linkedinDispatches.map((post) => (
                  <a
                    key={post.id}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-[20px] border border-[var(--border-card)] bg-[var(--bg-secondary)]/55 p-4 m3-spring hover:border-[var(--m3-primary)]/50 hover:bg-[var(--m3-primary-container)]/35"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--m3-primary)]">
                          {post.date}
                        </span>
                        <MaterialIcon
                          name="arrow_outward"
                          size={14}
                          className="text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--m3-primary)]"
                        />
                      </div>
                      <h3 className="mt-2 font-expressive text-base font-bold text-[var(--text-primary)]">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {post.summary}
                      </p>
                    </div>
                    <p className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] font-mono text-[10px] text-[var(--text-muted)] truncate">
                      {post.author}
                    </p>
                  </a>
                ))
              : engineeringBlogs.map((blog) => (
                  <a
                    key={blog.id}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-[20px] border border-[var(--border-card)] bg-[var(--bg-secondary)]/55 p-4 m3-spring hover:border-[var(--m3-primary)]/50 hover:bg-[var(--m3-primary-container)]/35"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-bold text-[var(--m3-primary)]">
                          {blog.id}
                        </span>
                        <MaterialIcon
                          name="arrow_outward"
                          size={14}
                          className="text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--m3-primary)]"
                        />
                      </div>
                      <h3 className="mt-2 font-expressive text-base font-bold text-[var(--text-primary)]">
                        {blog.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {blog.summary}
                      </p>
                    </div>
                  </a>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
