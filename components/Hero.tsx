// components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Building Ideas That Shape the Future.
        </h1>
        <p className="mt-4 text-slate-300 max-w-xl">
          Hi, I’m Rakibul — a passionate developer crafting AI-powered
          solutions that empower people and inspire innovation.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] px-4 py-2 rounded-md shadow-lg"
          >
            <Code size={16} />
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-md"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-sm text-slate-300">
          <div>
            <div className="text-xs">Tech stack</div>
            <div className="mt-2 flex gap-2 flex-wrap">
              {[
                "Next.js",
                "React",
                "Tailwind",
                "Framer Motion",
                "OpenAI",
                "TypeScript",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs border border-white/6 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="order-first md:order-last"
      >
        <div className="w-full rounded-2xl p-6 bg-white/6 backdrop-blur-sm border border-white/6">
          {/* Mock laptop illustration */}
          <div className="h-64 md:h-56 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <div className="h-full rounded-lg bg-gradient-to-br from-white/6 to-transparent flex items-center justify-center">
                <div className="text-center text-slate-200">
                  <div className="text-lg font-semibold">AI Project Suite</div>
                  <div className="text-sm mt-2 text-slate-300">
                    Live demos • Smart UIs • Instant deploy
                  </div>
                </div>
              </div>
            </div>
            <div className="w-40 md:w-56 text-xs text-slate-300">
              <div className="mb-2 font-medium">Live Preview</div>
              <div className="text-[12px] leading-5">
                Interactive demos, code completion, and automated tests — a
                quick snapshot of how an AI/Dev workflow looks.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;