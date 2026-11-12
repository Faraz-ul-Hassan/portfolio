export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TimelineEntry {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
  bullets?: string[];
}
