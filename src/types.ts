export interface Project {
  id: string;
  name: string;
  githubName: string;
  tagline: string;
  githubUrl: string;
  category: "AI/ML" | "Generative AI" | "Full Stack" | "DevSecOps & Automation";
  language: string;
  stars: number;
  updatedAt: string;
  recruiterScore: {
    attractiveness: number;
    atsRelevance: number;
    depth: number;
    sophistication: number;
    overall: number;
  };
  techStack: string[];
  problem: string;
  architecture: string;
  implementation: string;
  challenges: string;
  systemsThinking: string;
  recruiterSummary: string;
  atsKeywords: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

export interface AuditItem {
  category: string;
  title: string;
  description: string;
  status: "high-signal" | "incomplete" | "action-required";
  action: string;
}

export interface RoleResumeVariant {
  role: string;
  headline: string;
  summary: string;
  bullets: string[];
}
