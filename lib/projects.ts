// lib/projects.ts
export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "ai-career-copilot",
    name: "AI Career Copilot",
    tagline: "Personalized career guidance using AI",
    description:
      "A smart assistant that analyzes your experience and public job markets to recommend career moves, interview prep, and tailored learning paths.",
    tech: ["Next.js", "OpenAI", "TypeScript"],
  },
  {
    id: "interviewverse",
    name: "InterviewVerse",
    tagline: "Realistic mock interviews with feedback",
    description:
      "Practice technical and behavioral interviews with an AI interviewer that gives score-based feedback and improvement tips.",
    tech: ["React", "WebRTC", "AI Scoring"],
  },
  {
    id: "devai-studio",
    name: "DevAI Studio",
    tagline: "AI-assisted development environment",
    description:
      "A lightweight web IDE that autocompletes code, suggests tests, and generates documentation from comments.",
    tech: ["Monaco", "OpenAI", "Supabase"],
  },
  {
    id: "smart-resume-generator",
    name: "Smart Resume Generator",
    tagline: "Auto-tailor resumes for each job",
    description:
      "Upload your resume and a job description — the tool highlights strengths and creates optimized versions per role.",
    tech: ["Next.js", "OpenAI", "PDF Gen"],
  },
  {
    id: "skillgraph",
    name: "SkillGraph",
    tagline: "Visualize and plan your skill growth",
    description:
      "An interactive skill map that links concepts, resources, and project ideas so you can track progress and plan learning paths.",
    tech: ["D3", "TypeScript", "Postgres"],
  },
  {
    id: "codeportfolio",
    name: "CodePortfolio",
    tagline: "Showcase projects with live demos",
    description:
      "A dynamic portfolio platform built for engineers that can instantly deploy demo sandboxes and show metrics.",
    tech: ["Vercel", "Next.js", "Tailwind"],
  },
];