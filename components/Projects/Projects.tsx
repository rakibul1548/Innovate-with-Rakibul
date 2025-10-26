// components/Projects/Projects.tsx
import React from "react";
import { Project, PROJECTS } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  setSelected: (project: Project | null) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setSelected }) => {
  return (
    <section id="projects" className="mt-14">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Projects & Ideas</h2>
        <div className="text-sm text-slate-400">Curated concepts & demos</div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} setSelected={setSelected} />
        ))}
      </div>
    </section>
  );
};

export default Projects;