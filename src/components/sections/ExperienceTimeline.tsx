import type { Experience } from '@/types/resume';
import { resumeData } from '@/lib/resume';
import { cn } from '@/lib/utils';

interface ExperienceTimelineProps {
  className?: string;
}

export function ExperienceTimeline({ className }: ExperienceTimelineProps) {
  const { experiences } = resumeData;

  if (experiences.length === 0) {
    return (
      <section className={cn(className)}>
        <p className="text-muted-foreground text-lg">
          Experience details coming soon.
        </p>
      </section>
    );
  }

  return (
    <section className={cn(className)}>
      {/* Screen-reader heading sits outside the visual flow */}
      <h2 className="sr-only">Professional Experience</h2>

      <ol className="relative space-y-0" role="list">
        {experiences.map((exp, i) => (
          <TimelineItem
            key={`${exp.company}-${exp.role}`}
            experience={exp}
            isLatest={i === 0}
            isLast={i === experiences.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Timeline Item                                                       */
/* ------------------------------------------------------------------ */

interface TimelineItemProps {
  experience: Experience;
  isLatest: boolean;
  isLast: boolean;
}

function TimelineItem({ experience, isLatest, isLast }: TimelineItemProps) {
  return (
    <li className="relative flex gap-6 pb-0">
      {/* ---- Vertical line & dot ---- */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className={cn(
            'relative z-10 mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background ring-2 transition-colors',
            isLatest
              ? 'bg-primary ring-primary/30'
              : 'bg-muted-foreground/40 ring-muted-foreground/20'
          )}
          aria-hidden="true"
        />
        {/* Connecting line to next item */}
        {!isLast && (
          <div className="absolute top-5 h-full w-px bg-border" aria-hidden="true" />
        )}
      </div>

      {/* ---- Content ---- */}
      <div className={cn('pb-12', isLast && 'pb-0')}>
        {/* Role + company */}
        <h3 className="text-xl font-semibold text-foreground">
          {experience.role}
          <span className="text-muted-foreground font-normal">
            {' '}
            at{' '}
          </span>
          <span className="text-primary font-semibold">{experience.company}</span>
        </h3>

        {/* Date range */}
        <p className="mt-1 text-sm font-medium text-muted-foreground">
          <time dateTime={experience.startDate}>
            {formatDate(experience.startDate)}
          </time>
          {' — '}
          {experience.endDate === 'Present' ? (
            <span className="inline-flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Present
            </span>
          ) : (
            <time dateTime={experience.endDate}>
              {formatDate(experience.endDate)}
            </time>
          )}
          {' · '}
          <span>{calcDuration(experience.startDate, experience.endDate)}</span>
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-2.5" role="list">
          {experience.highlights.map((highlight, j) => (
            <li
              key={j}
              className="text-muted-foreground leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/50 text-pretty"
            >
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        {experience.tags && experience.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
            {experience.tags.map((tag) => (
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
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function formatDate(iso: string): string {
  const [year, month] = iso.split('-');
  if (!month) return year;
  return `${MONTHS[parseInt(month, 10) - 1]} ${year}`;
}

function calcDuration(start: string, end: string): string {
  const s = new Date(start);
  const e = end === 'Present' ? new Date() : new Date(end);

  const totalMonths =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return `${months} mo`;
  if (months === 0) return `${years} yr`;
  return `${years} yr ${months} mo`;
}
