'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { resumeData } from '@/lib/resume';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        document.getElementById('mobile-menu-trigger')?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mobileOpen]);

  // Trap focus inside mobile menu while open
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border',
        'bg-background/80 backdrop-blur-sm',
        className
      )}
    >
      <nav
        className={cn(
          'mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8'
        )}
        aria-label="Main navigation"
      >
        {/* ---- Logo ---- */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          aria-label={`${resumeData.hero.fullName} — Home`}
        >
          {resumeData.hero.fullName
            .split(' ')
            .map((w) => w[0])
            .join('')}
        </Link>

        {/* ---- Desktop links ---- */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {resumeData.navigation.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'inline-flex items-center rounded-md px-3 py-2',
                    'text-sm font-medium transition-colors',
                    'focus-visible:ring-2 focus-visible:ring-ring',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface-hover'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ---- Right section ---- */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu trigger */}
          <button
            id="mobile-menu-trigger"
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ---- Mobile menu panel ---- */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-2 duration-200"
          role="region"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 px-4 py-3" role="list">
            {resumeData.navigation.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={cn(
                      'block rounded-md px-3 py-2.5 text-base font-medium transition-colors',
                      'focus-visible:ring-2 focus-visible:ring-ring',
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-surface-hover'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
