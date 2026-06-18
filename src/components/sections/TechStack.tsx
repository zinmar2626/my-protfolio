import { resumeData } from '@/lib/resume';
import { cn } from '@/lib/utils';

interface TechStackProps {
  className?: string;
}

/**
 * Categorized tech-stack grid.
 * Each skill group renders as a card with a semantic heading and a list of
 * pill-shaped badges. Responsive: 1 column on mobile, 2 on md, 4 on lg.
 */
export function TechStack({ className }: TechStackProps) {
  const { skills } = resumeData;

  if (skills.length === 0) {
    return (
      <section className={cn(className)}>
        <p className="text-muted-foreground text-lg">
          Skills coming soon.
        </p>
      </section>
    );
  }

  return (
    <section className={cn(className)}>
      <h2 className="sr-only">Technical Skills</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skill Card                                                          */
/* ------------------------------------------------------------------ */

interface SkillCardProps {
  group: (typeof resumeData.skills)[number];
}

function SkillCard({ group }: SkillCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/30">
      {/* Category heading */}
      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
        {group.category}
      </h3>

      {/* Skill pills */}
      <ul className="mt-3 flex flex-wrap gap-1.5" role="list" aria-label={`${group.category} skills`}>
        {group.items.map((skill) => (
          <li
            key={skill}
            className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
