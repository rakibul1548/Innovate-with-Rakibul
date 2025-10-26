// components/About.tsx
import React from "react";
import { Github } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="mt-14 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 bg-white/4 p-6 rounded-2xl border border-white/6">
        <h3 className="text-xl font-semibold">About</h3>
        <p className="mt-4 text-slate-300">
          I’m a Computer Science graduate passionate about building
          innovative, human-centered solutions using Next.js, AI, and modern
          web technologies. I focus on rapid prototyping, clean UI, and
          projects that make developer workflows and user experiences
          better.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-slate-400">Location</div>
            <div className="mt-1">Dhaka, Bangladesh</div>
          </div>

          <div>
            <div className="text-xs text-slate-400">Availability</div>
            <div className="mt-1">Open to opportunities</div>
          </div>

          <div>
            <div className="text-xs text-slate-400">Experience</div>
            <div className="mt-1">Internships, freelance projects</div>
          </div>

          <div>
            <div className="text-xs text-slate-400">Contact</div>
            <div className="mt-1">rakibul@example.com</div>
          </div>
        </div>
      </div>

      <div className="bg-white/4 p-6 rounded-2xl border border-white/6">
        <h4 className="text-lg font-semibold">Tech Stack</h4>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "OpenAI API",
            "Supabase",
          ].map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-white/6"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <div className="text-sm text-slate-300">Want the code?</div>
          <div className="mt-3 flex gap-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-[#6366F1] to-[#38BDF8]"
            >
              View Projects
            </a>
            <a
              href="https://github.com/your-github"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/6"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;