export type RegionTheme = "canada" | "brazil";

export interface ProjectItem {
  title: string;
  metric: string;
  description: string;
  stack: string[];
  github: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface HowIWorkPrinciple {
  text: string;
  detail: string;
}

export interface ExperienceRole {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

export interface Person {
  slug: string;
  displayName: string;
  /** Short label for the nav brand (e.g. initials) */
  navLabel: string;
  regionLabel: string;
  theme: RegionTheme;
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    tagline: string;
    openToWork: boolean;
  };
  resumeUrl: string;
  projects: ProjectItem[];
  skillGroups: SkillGroup[];
  howIWork: HowIWorkPrinciple[];
  experience: ExperienceRole[];
  contact: {
    heading: string;
    intro: string;
    tagline: string;
    email: string;
    linkedin: string;
    github: string;
    exploring: string[];
  };
}
