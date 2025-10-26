// components/Header.tsx
import React from "react";
import { Rocket, Download } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#38BDF8] flex items-center justify-center shadow-md">
          <Rocket size={20} />
        </div>
        <div>
          <div className="font-semibold text-lg">Rakibul.Dev</div>
          <div className="text-xs text-slate-300">Innovate with Rakibul</div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md hover:bg-white/20"
        >
          <Download size={14} />
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;