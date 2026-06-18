import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { resumeData } from '@/lib/resume';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: `${resumeData.hero.fullName} — ${resumeData.hero.tagline}`,
    description: resumeData.hero.summary,
    url: '/',
  },
  twitter: {
    title: `${resumeData.hero.fullName} — ${resumeData.hero.tagline}`,
    description: resumeData.hero.summary,
  },
};

export default function HomePage() {
  const { socials, navigation } = resumeData;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* ---- Hero ---- */}
      <HeroSection />

      {/* ---- Quick-nav grid ---- */}
      <section aria-labelledby="quick-links-heading">
        <h2
          id="quick-links-heading"
          className="text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Explore
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {navigation
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-primary/40 hover:shadow-card focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {link.href === '/about' &&
                    'Background, skills, and what drives my work'}
                  {link.href === '/experience' &&
                    'Professional journey across 4 roles'}
                  {link.href === '/projects' &&
                    'Featured work with live demos'}
                  {link.href === '/contact' &&
                    "Reach out — I'd love to connect"}
                </p>
              </Link>
            ))}
        </div>
      </section>

      {/* ---- Social links ---- */}
      <section aria-labelledby="connect-heading">
        <h2
          id="connect-heading"
          className="text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Connect
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-surface-hover hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring"
            >
              GitHub
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in new tab)</span>
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-surface-hover hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in new tab)</span>
            </a>
          )}
          <a
            href={`mailto:${socials.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-surface-hover hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-ring"
          >
            {socials.email}
          </a>
        </div>
      </section>
    </div>
  );
}
