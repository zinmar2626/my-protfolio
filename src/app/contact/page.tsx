import type { Metadata } from 'next';
import { resumeData } from '@/lib/resume';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${resumeData.hero.fullName} — Senior Frontend Developer based in ${resumeData.socials.location}.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact — ${resumeData.hero.fullName}`,
    description: `Reach out to ${resumeData.hero.fullName} — available for frontend engineering opportunities.`,
    url: '/contact',
  },
  twitter: {
    title: `Contact — ${resumeData.hero.fullName}`,
    description: `Reach out to ${resumeData.hero.fullName} — available for frontend engineering opportunities.`,
  },
};

export default function ContactPage() {
  const { socials } = resumeData;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        Contact
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Get in touch
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        I&apos;m always open to new opportunities and interesting conversations.
        Reach out through any of the channels below.
      </p>

      <dl className="mt-10 space-y-6">
        <div className="rounded-lg border border-border bg-surface p-4">
          <dt className="text-sm font-medium text-muted-foreground">Email</dt>
          <dd className="mt-1">
            <a
              href={`mailto:${socials.email}`}
              className="text-lg font-medium text-primary hover:text-primary-dark transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {socials.email}
            </a>
          </dd>
        </div>

        {socials.location && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <dt className="text-sm font-medium text-muted-foreground">
              Location
            </dt>
            <dd className="mt-1 text-lg font-medium text-foreground">
              {socials.location}
            </dd>
          </div>
        )}

        {socials.github && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <dt className="text-sm font-medium text-muted-foreground">
              GitHub
            </dt>
            <dd className="mt-1">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-primary hover:text-primary-dark transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                {socials.github}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </dd>
          </div>
        )}

        {socials.linkedin && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <dt className="text-sm font-medium text-muted-foreground">
              LinkedIn
            </dt>
            <dd className="mt-1">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-primary hover:text-primary-dark transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                {socials.linkedin}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
