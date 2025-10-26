// components/ProjectModal.tsx
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface ProjectModalProps {
  selected: Project | null;
  setSelected: (project: Project | null) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ selected, setSelected }) => {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setSelected(null)}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-10 w-full max-w-2xl bg-[#081028] p-6 rounded-2xl border border-white/6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xl font-semibold">{selected.name}</div>
            <div className="text-slate-300 mt-1">{selected.tagline}</div>
          </div>
          <button
            onClick={() => setSelected(null)}
            className="text-slate-300 text-sm"
          >
            Close
          </button>
        </div>

        <p className="mt-4 text-slate-300">{selected.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {selected.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/6">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <a
            href="#"
            className="px-3 py-2 rounded-md bg-gradient-to-r from-[#6366F1] to-[#38BDF8]"
          >
            View Prototype
          </a>
          <a href="#" className="px-3 py-2 rounded-md border border-white/6">
            View Code
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;