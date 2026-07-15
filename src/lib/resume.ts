import type { ResumeData } from '@/types/resume';

/**
 * Resume data for Zin Mar Win — the single source of truth.
 * Every page and section component reads from this object.
 */
export const resumeData: ResumeData = {
  hero: {
    fullName: 'Zin Mar Win',
    tagline: 'Senior Frontend Developer',
    summary:
      'Dynamic, detail-oriented frontend engineer with 6+ years of experience crafting accessible, high-performance web applications. Passionate about user-centric interfaces, design systems, and squeezing every millisecond out of the critical rendering path.',
    avatarPath: '/images/profile.jpeg',
  },

  socials: {
    github: 'https://github.com/zinmar2626',
    linkedin: 'https://linkedin.com/in/zinmarwin2626',
    email: 'zinmar.ucsy1@gmail.com',
    location: 'Yangon, Myanmar',
  },

  about: [
    'Senior Frontend Developer with a proven track record of shipping production-grade web applications across fintech, e-commerce, and travel domains.',
    'Deep expertise in React, Next.js, and TypeScript — comfortable owning the full frontend lifecycle from architecture through deployment.',
    'Performance-obsessed: delivered a 25% Lighthouse score improvement at Property Scout through code splitting, image optimization, and server-side rendering strategies.',
    'Strong collaborator who bridges design and engineering — fluent in design systems, component libraries, and accessibility standards (WCAG 2.1 AA).',
    'Continuous learner currently deepening expertise in React Server Components, edge rendering, and progressive web app patterns.',
  ],

  experiences: [
    {
      company: 'Property Scout',
      role: 'Senior Frontend Developer',
      startDate: '2023-03',
      endDate: 'Present',
      highlights: [
        'Led migration of the core platform from a legacy SPA to Next.js with server-side rendering, reducing Time-to-Interactive by 25% and improving Lighthouse performance scores from 62 to 87.',
        'Designed and implemented a shared component library with TypeScript and Tailwind CSS, reducing UI development time by 30% across a team of 4 engineers.',
        'Introduced automated performance budgets in CI/CD pipeline using Lighthouse CI, catching regressions before deployment.',
        'Improved Largest Contentful Paint (LCP) from 3.8s to 1.9s through image optimization, font loading strategy, and critical CSS inlining.',
        'Mentored 2 junior developers on React best practices, accessibility patterns, and testing workflows.',
      ],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lighthouse CI', 'Vercel'],
    },
    {
      company: 'Oway.com.mm',
      role: 'Frontend Developer',
      startDate: '2021-06',
      endDate: '2023-02',
      highlights: [
        'Built a responsive React SPA for the travel booking platform serving 50K+ monthly active users across Myanmar and Southeast Asia.',
        'Implemented a complex multi-step booking flow with React Context and custom hooks, reducing booking abandonment by 18%.',
        'Developed a reusable form system with Zod validation and error boundary patterns used across 15+ forms throughout the application.',
        'Collaborated with the backend team to design RESTful API contracts, reducing over-fetching by 40% through tailored response shapes.',
        'Integrated i18n support for Burmese (my) and English (en) locales, including RTL-aware layout components.',
      ],
      tags: ['React', 'TypeScript', 'REST APIs', 'i18n', 'React Context'],
    },
    {
      company: 'AGD Bank OnePay',
      role: 'Frontend Developer',
      startDate: '2020-01',
      endDate: '2021-05',
      highlights: [
        'Designed and built reusable fintech UI components — transaction tables, balance cards, and PIN-pad inputs — for the OnePay mobile banking application.',
        'Implemented Material UI theming system aligned with AGD Bank brand guidelines, ensuring visual consistency across 20+ screens.',
        'Built an animated onboarding flow with Lottie and CSS transforms that contributed to a 22% increase in new-user activation.',
        'Wrote comprehensive unit test suites using Jest and React Testing Library, achieving 85% code coverage across the component library.',
        'Participated in code reviews and established frontend coding standards adopted by the 6-person engineering team.',
      ],
      tags: ['React', 'Material UI', 'Jest', 'Fintech', 'Lottie'],
    },
    {
      company: 'Myanlearn',
      role: 'Junior Frontend Developer',
      startDate: '2019-02',
      endDate: '2019-12',
      highlights: [
        'Developed cross-platform mobile learning modules using React Native for Myanmar\'s largest ed-tech platform with 100K+ student users.',
        'Built interactive quiz components with animated transitions, progress tracking, and offline-first capability using AsyncStorage.',
        'Optimized list rendering for course catalogs with 500+ items using FlatList virtualization and memo patterns.',
        'Collaborated on the migration of 8 legacy screens from class components to functional components with hooks, reducing per-screen code by an average of 35%.',
      ],
      tags: ['React Native', 'JavaScript', 'AsyncStorage', 'Mobile'],
    },
  ],

  education: [
    {
      institution: 'University of Computer Studies, Yangon',
      degree: "Bachelor's Degree",
      field: 'Computer Science',
      startYear: 2014,
      endYear: 2018,
    },
  ],

  skills: [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Vue.js'],
    },
    {
      category: 'Styling',
      items: ['Tailwind CSS', 'Material UI', 'CSS Modules', 'Sass'],
    },
    {
      category: 'Testing',
      items: ['Cypress', 'Jest', 'React Testing Library', 'Unit Testing'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Bitbucket', 'GitHub Actions', 'Lighthouse CI'],
    },
    {
      category: 'Vibe Code',
      items: ['Claude Code', 'MCP', 'AI Agents', 'Subagents'],
      description:
        'Building this portfolio site with Claude Code — AI-assisted development for rapid prototyping, code generation, and iterative refinement. Used MCP for context-aware edits, subagents for parallel task execution, and AI agents for automating repetitive workflows.',
    },
  ],

  projects: [
    {
      title: 'Property Scout Platform',
      description:
        'Led the architectural migration of a property listing and search platform to Next.js with SSR, achieving a 25% performance improvement. Features advanced filtering, saved searches, and a design system of 40+ components shared across the organization.',
      highlights: [
        'Improved Lighthouse performance score from 62 to 87 (+25%)',
        'Reduced Largest Contentful Paint (LCP) from 3.8s to 1.9s',
        'Built 40+ reusable components, cutting UI dev time by 30%',
        'Automated performance budgets in CI/CD with Lighthouse CI',
      ],
      caseStudy: {
        challenge:
          'The legacy SPA suffered from slow initial loads and poor SEO. Users abandoned property searches when pages took over 4 seconds to render. The existing jQuery codebase made it impossible to implement server-side rendering without a full rewrite.',
        approach:
          'Migrated to Next.js with a hybrid rendering strategy — SSR for search results and listing pages (SEO-critical), static generation for marketing pages. Implemented incremental adoption by wrapping legacy components in React islands. Used code splitting and dynamic imports to keep bundle size manageable during the transition.',
        lessonsLearned:
          'Incremental migration beats big-bang rewrites. By introducing React alongside jQuery first, we could ship value immediately while reducing risk. The key insight was identifying which pages needed SSR (search results) vs. which could stay client-rendered (user dashboards).',
      },
      url: 'https://www.propertyscout.co.th',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SSR', 'Design System'],
    },
    {
      title: 'Oway Travel & Tour',
      description:
        'Built the frontend for Myanmar\'s leading online travel agency — a React SPA handling flight, hotel, and package bookings. Implemented multi-step checkout, i18n (English/Burmese), and an optimized search experience used by thousands of travelers monthly.',
      highlights: [
        'Served 50K+ monthly active users across Southeast Asia',
        'Reduced booking abandonment by 18% with optimized checkout flow',
        'Built reusable form system used across 15+ forms',
        'Implemented full i18n support for English and Burmese locales',
      ],
      caseStudy: {
        challenge:
          'The booking flow required users to complete 5+ steps across flight, hotel, and package selections. Each step had complex validation rules and conditional fields. The existing implementation used deeply nested Redux state, making it fragile and hard to debug.',
        approach:
          'Redesigned the state management using React Context with custom hooks, isolating each booking step into its own context provider. Implemented Zod schemas for runtime validation with clear error messages. Built a reusable form system that could be composed from individual field components.',
        lessonsLearned:
          'Complex multi-step forms benefit from isolated state per step rather than a single global store. This made each step independently testable and easier to reason about. The Zod validation approach caught errors at the boundary rather than propagating invalid state downstream.',
      },
      url: 'https://www.oway.com.mm',
      tags: ['React', 'TypeScript', 'i18n', 'REST APIs', 'Responsive'],
    },
  ],

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
};

/**
 * Derive computed values from resume data.
 */
export function getYearsOfExperience(
  experiences: ResumeData['experiences']
): number {
  if (experiences.length === 0) return 0;

  const startYears = experiences.map((e) => new Date(e.startDate).getFullYear());
  const endYears = experiences.map((e) =>
    e.endDate === 'Present'
      ? new Date().getFullYear()
      : new Date(e.endDate).getFullYear()
  );

  const earliest = Math.min(...startYears);
  const latest = Math.max(...endYears);
  return latest - earliest;
}
