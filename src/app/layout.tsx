import type { Metadata, Viewport } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { Navigation } from '@/components/layout/Navigation';
import { SkipLink } from '@/components/ui/SkipLink';
import { resumeData } from '@/lib/resume';
import './globals.css';

// ---------------------------------------------------------------------------
// Fonts — self-hosted via next/font (SKILL.md §Font Loading)
// ---------------------------------------------------------------------------
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
});

// ---------------------------------------------------------------------------
// Metadata & SEO (SKILL.md §SEO)
// ---------------------------------------------------------------------------
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: `${resumeData.hero.fullName} — ${resumeData.hero.tagline}`,
    template: `%s — ${resumeData.hero.fullName}`,
  },
  description: resumeData.hero.summary,

  // Canonical & alternates
  alternates: {
    canonical: '/',
  },

  // Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Keywords — used by some search engines, low signal but costs nothing
  keywords: [
    resumeData.hero.fullName,
    'Senior Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'Frontend Engineer',
    ...resumeData.skills.flatMap((g) => g.items),
  ],

  // Authorship
  authors: [{ name: resumeData.hero.fullName }],
  creator: resumeData.hero.fullName,

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: resumeData.hero.fullName,
    title: `${resumeData.hero.fullName} — ${resumeData.hero.tagline}`,
    description: resumeData.hero.summary,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: resumeData.hero.fullName,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${resumeData.hero.fullName} — ${resumeData.hero.tagline}`,
    description: resumeData.hero.summary,
    images: [`${BASE_URL}/og-image.png`],
    creator: resumeData.socials.twitter
      ? `@${resumeData.socials.twitter}`
      : undefined,
  },

  // Verification (add your own tokens)
  // verification: { google: '...', yandex: '...' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

// ---------------------------------------------------------------------------
// JSON-LD Structured Data (Person schema — SKILL.md §SEO)
// ---------------------------------------------------------------------------
function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resumeData.hero.fullName,
    jobTitle: resumeData.hero.tagline,
    description: resumeData.hero.summary,
    url: BASE_URL,
    email: resumeData.socials.email,
    sameAs: [
      resumeData.socials.github,
      resumeData.socials.linkedin,
    ].filter(Boolean),
    address: resumeData.socials.location
      ? {
          '@type': 'PostalAddress',
          addressLocality: resumeData.socials.location,
        }
      : undefined,
    knowsAbout: resumeData.skills.flatMap((g) => g.items),
    alumniOf: resumeData.education.map((e) => ({
      '@type': 'EducationalOrganization',
      name: e.institution,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
        {/*
         * Inline script to prevent flash of wrong theme before React hydrates.
         * Runs synchronously before first paint — reads localStorage and applies
         * the dark class immediately.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('portfolio-theme');
                  var theme = stored === 'light' || stored === 'dark'
                    ? stored
                    : window.matchMedia('(prefers-color-scheme: dark)').matches
                      ? 'dark'
                      : 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider>
          <SkipLink />
          <Navigation />
          <main id="content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <footer
            className="border-t border-border py-8 text-center text-sm text-muted-foreground"
            role="contentinfo"
          >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <p>
                &copy; {new Date().getFullYear()} {resumeData.hero.fullName}.
                Built with Next.js &amp; Tailwind CSS.
              </p>
            </div>
          </footer>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
