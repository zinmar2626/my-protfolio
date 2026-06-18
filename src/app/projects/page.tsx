import type { Metadata } from 'next';
import { resumeData } from '@/lib/resume';
import { ProjectHighlights } from '@/components/sections/ProjectHighlights';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Featured projects by ${resumeData.hero.fullName} — Property Scout Platform, Oway Travel & Tour, and more.`,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: `Projects — ${resumeData.hero.fullName}`,
    description: `Production applications built with Next.js, React, and TypeScript — including Property Scout Platform and Oway Travel & Tour.`,
    url: '/projects',
  },
  twitter: {
    title: `Projects — ${resumeData.hero.fullName}`,
    description: `Production applications built with Next.js, React, and TypeScript.`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Page heading */}
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Projects
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured work
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          Production applications I&apos;ve built and shipped. Each project
          links to the live site — click through to see the work in action.
        </p>
      </div>

      {/* Project cards */}
      <ProjectHighlights />
    </div>
  );
}
