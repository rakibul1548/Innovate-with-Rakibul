// components/Footer.tsx
import React from "react";
import { Rocket, Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-8 flex items-center justify-between text-sm text-slate-400">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-md bg-white/6 flex items-center justify-center">
          <Rocket size={16} />
        </div>
        <div>
          <div className="font-medium text-white">Rakibul.Dev</div>
          <div>Copyright © 2025</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a href="https://github.com/your-github" aria-label="GitHub">
          <Github size={16} />
        </a>
        <a href="https://linkedin.com/in/your-profile" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
        <a href="mailto:rakibul@example.com" aria-label="Email">
          <Mail size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;