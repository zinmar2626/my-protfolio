import type { Metadata } from 'next';
import { resumeData } from '@/lib/resume';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';

export const metadata: Metadata = {
  title: 'Experience',
  description: `Professional experience of ${resumeData.hero.fullName} — 6+ years across fintech, e-commerce, travel, and ed-tech.`,
  alternates: { canonical: '/experience' },
  openGraph: {
    title: `Experience — ${resumeData.hero.fullName}`,
    description: `6+ years of frontend engineering — Property Scout, Oway, AGD Bank OnePay, and Myanlearn.`,
    url: '/experience',
  },
  twitter: {
    title: `Experience — ${resumeData.hero.fullName}`,
    description: `6+ years of frontend engineering across 4 companies.`,
  },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Page heading */}
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Experience
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Where I&apos;ve worked
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          6+ years of building frontend products across fintech, travel,
          e-commerce, and education.
        </p>
      </div>

      {/* Timeline */}
      <ExperienceTimeline />
    </div>
  );
}
