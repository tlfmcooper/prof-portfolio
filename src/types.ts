export interface Profile {
  name: string;
  title: string;
  role: string;
  headline: string;
  bioSummary: string;
  fullBio: string[];
  location: string;
  email: string;
  phone?: string;
  avatarUrl: string;
  resumeUrl?: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
  websiteUrl?: string;
  availability: {
    status: 'available' | 'contract' | 'busy';
    label: string;
    description: string;
  };
  stats: {
    yearsExperience: number;
    skillsDeployed: string;
    dailyLogVolume: string;
    anomalyAccuracy: string;
  };
}

export interface Skill {
  name: string;
  level: number; // 0-100
  experience: string;
  isKeySkill?: boolean;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'ai' | 'cloud' | 'mobile' | 'opensource';
  description: string;
  longDescription: string;
  coverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  featured: boolean;
  date: string;
  metrics: ProjectMetric[];
  architectureHighlights: string[];
  features: string[];
  roleDescription: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  badge?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  achievements?: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
