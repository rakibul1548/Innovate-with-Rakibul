// components/Projects/ProjectCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  setSelected: (project: Project | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, setSelected }) => {
  return (
    <motion.div
      key={project.id}
      whileHover={{ y: -6 }}
      className="bg-white/4 p-5 rounded-2xl border border-white/6 cursor-pointer"
      onClick={() => setSelected(project)}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">{project.name}</div>
          <div className="text-sm text-slate-300 mt-1">{project.tagline}</div>
        </div>
        <div className="text-slate-300 text-xs">
          {project.tech.join(" • ")}
        </div>
      </div>

      <p className="mt-4 text-slate-300 text-sm">{project.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-slate-400">Idea #{index + 1}</div>
        <button
          onClick={() => setSelected(project)}
          className="text-sm bg-white/6 px-3 py-1 rounded-md"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;