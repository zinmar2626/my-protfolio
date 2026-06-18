import type { Metadata } from 'next';
import { resumeData } from '@/lib/resume';
import { TechStack } from '@/components/sections/TechStack';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${resumeData.hero.fullName} — background, skills, and what drives my work as a Senior Frontend Developer.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About — ${resumeData.hero.fullName}`,
    description: `${resumeData.hero.fullName} is a Senior Frontend Developer with 6+ years of experience across fintech, e-commerce, travel, and ed-tech.`,
    url: '/about',
  },
  twitter: {
    title: `About — ${resumeData.hero.fullName}`,
    description: `${resumeData.hero.fullName} is a Senior Frontend Developer with 6+ years of experience.`,
  },
};

export default function AboutPage() {
  const { about, hero } = resumeData;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Page heading */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          About
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {hero.fullName}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{hero.tagline}</p>
      </div>

      {/* Bio paragraphs */}
      <div className="mt-10 max-w-3xl space-y-5">
        {about.map((paragraph, i) => (
          <p
            key={`about-p-${i}`}
            className="text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Education */}
      {resumeData.education.length > 0 && (
        <div className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Education
          </h2>
          <div className="mt-4 space-y-4">
            {resumeData.education.map((edu) => (
              <div
                key={`${edu.institution}-${edu.degree}`}
                className="rounded-lg border border-border bg-surface p-4"
              >
                <h3 className="font-semibold text-foreground">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {edu.institution} &middot; {edu.startYear} — {edu.endYear}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mt-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Tech Stack
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Technologies I work with daily to build fast, accessible, and
          maintainable applications.
        </p>
        <div className="mt-6">
          <TechStack />
        </div>
      </div>
    </div>
  );
}
