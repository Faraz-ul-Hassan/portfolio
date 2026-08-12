export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TimelineEntry {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string; // optional, since current roles have no end date
  description: string;
  bullets?: string[];
}
