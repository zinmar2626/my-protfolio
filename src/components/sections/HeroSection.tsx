import Image from 'next/image';
import Link from 'next/link';
import { resumeData, getYearsOfExperience } from '@/lib/resume';
import { cn } from '@/lib/utils';
import profileImg from '@/images/profile.jpeg';

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const { hero, socials } = resumeData;
  const years = getYearsOfExperience(resumeData.experiences);

  return (
    <section
      className={cn(
        'flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:gap-12 lg:gap-16',
        className
      )}
    >
      {/* ---- Text content ---- */}
      <div className="flex flex-col gap-4 sm:max-w-xl">
        {/* Tagline badge */}
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          {hero.tagline}
        </p>

        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
          {hero.fullName}
        </h1>

        {/* Summary */}
        <p className="max-w-prose text-lg leading-relaxed text-muted-foreground text-pretty">
          {hero.summary}
        </p>

        {/* Stats row: years, projects, etc. */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            {years}+ years
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {resumeData.experiences.length} roles
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            {resumeData.projects.length} projects
          </span>
        </div>

        {/* CTA buttons */}
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
          </Link>
          <Link
            href="/experience"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View experience &rarr;
          </Link>
        </div>

        {/* Social proof — visible on sm+ */}
        <div className="mt-4 hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          )}
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-4 w-4" />
            {socials.location}
          </span>
        </div>
      </div>

      {/* ---- Avatar ---- */}
      <div className="flex-shrink-0">
        <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-border shadow-lg sm:h-36 sm:w-36 lg:h-44 lg:w-44">
          <Image
            src={profileImg}
            alt={`Portrait of ${hero.fullName}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 7rem, (max-width: 1024px) 9rem, 11rem"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Inline SVG icons — no dependency, tree-shakeable, zero overhead    */
/* ------------------------------------------------------------------ */

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
