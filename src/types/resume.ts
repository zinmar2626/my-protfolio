// ---------------------------------------------------------------------------
// Shared resume data types — the single source of truth consumed by all
// portfolio components. Update this file to match your resume structure.
// ---------------------------------------------------------------------------

/** A single professional experience entry. */
export interface Experience {
  /** Company or organization name */
  company: string;
  /** Job title / role */
  role: string;
  /** ISO date strings (YYYY-MM or YYYY-MM-DD) */
  startDate: string;
  /** ISO date string, or "Present" */
  endDate: string;
  /** Bullet-point descriptions of responsibilities & achievements */
  highlights: string[];
  /** Optional tech tags shown as badges */
  tags?: string[];
  /** Optional company logo path (relative to /public) */
  logoPath?: string;
}

/** An academic qualification. */
export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  highlights?: string[];
}

/** A skill category with proficiency level. */
export interface SkillGroup {
  category: string;
  items: string[];
}

/** A project entry for the portfolio / projects section. */
export interface Project {
  title: string;
  description: string;
  url?: string;
  sourceUrl?: string;
  imagePath?: string;
  tags: string[];
}

/** Social / contact links. */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email: string;
  website?: string;
  location?: string;
}

/** Hero / intro section data. */
export interface HeroData {
  fullName: string;
  tagline: string;
  summary: string;
  avatarPath?: string;
}

/** Navigation links. */
export interface NavLink {
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Aggregate root type
// ---------------------------------------------------------------------------

export interface ResumeData {
  hero: HeroData;
  socials: SocialLinks;
  about: string[];
  experiences: Experience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  navigation: NavLink[];
}
