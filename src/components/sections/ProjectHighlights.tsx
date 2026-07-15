import { resumeData } from '@/lib/resume';
import { cn } from '@/lib/utils';

interface ProjectHighlightsProps {
  className?: string;
}

/**
 * Project showcase grid.
 * 1 column on mobile, 2 on lg+.
 * Each card has title, description, tech tags, and outbound links
 * clearly marked for external navigation.
 */
export function ProjectHighlights({ className }: ProjectHighlightsProps) {
  const { projects } = resumeData;

  if (projects.length === 0) {
    return (
      <section className={cn(className)}>
        <p className="text-muted-foreground text-lg">
          Projects coming soon.
        </p>
      </section>
    );
  }

  return (
    <section className={cn(className)}>
      <h2 className="sr-only">Project Highlights</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Project Card                                                        */
/* ------------------------------------------------------------------ */

function ProjectCard({
  project,
}: {
  project: (typeof resumeData.projects)[number];
}) {
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-card">
      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-muted-foreground leading-relaxed text-pretty">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-foreground">Key Achievements</h4>
          <ul className="mt-2 space-y-1.5" role="list">
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Case Study */}
      {project.caseStudy && (
        <div className="mt-5 space-y-3 rounded-lg border border-border bg-muted/50 p-4">
          <h4 className="text-sm font-semibold text-foreground">Case Study</h4>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium text-primary">Challenge: </span>
              <span className="text-muted-foreground">{project.caseStudy.challenge}</span>
            </div>
            <div>
              <span className="font-medium text-primary">Approach: </span>
              <span className="text-muted-foreground">{project.caseStudy.approach}</span>
            </div>
            {project.caseStudy.lessonsLearned && (
              <div>
                <span className="font-medium text-primary">Lessons Learned: </span>
                <span className="text-muted-foreground">{project.caseStudy.lessonsLearned}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Technologies">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Outbound links */}
      <div className="mt-5 flex flex-wrap items-center gap-4 pt-3 border-t border-border">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            <ExternalIcon className="h-4 w-4" aria-hidden="true" />
            Visit site
            <span className="sr-only">(opens in new tab)</span>
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <SourceIcon className="h-4 w-4" aria-hidden="true" />
            Source
            <span className="sr-only">(opens in new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Inline SVG icons                                                    */
/* ------------------------------------------------------------------ */

function ExternalIcon({ className }: { className?: string }) {
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function SourceIcon({ className }: { className?: string }) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
