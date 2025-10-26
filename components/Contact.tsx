// components/Contact.tsx
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mt-14 bg-white/4 p-6 rounded-2xl border border-white/6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Let’s Collaborate</h3>
          <p className="mt-2 text-slate-300">
            Have an idea or opportunity? I’d love to hear from you. Send a
            message or connect on LinkedIn / GitHub.
          </p>

          <div className="mt-6 flex gap-3 items-center">
            <a
              href="mailto:rakibul@example.com"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/6"
            >
              <Mail size={14} />
              Email Me
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/6"
            >
              <Linkedin size={14} />
              LinkedIn
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Simple client-side feedback — integrate with an API later
            alert("Thanks — message sent (demo). Please wire this to your backend.");
          }}
          className="space-y-3"
        >
          <input
            className="w-full rounded-md bg-white/5 border border-white/6 px-3 py-2 text-white text-sm"
            placeholder="Your name"
            required
          />
          <input
            className="w-full rounded-md bg-white/5 border border-white/6 px-3 py-2 text-white text-sm"
            placeholder="Your email"
            type="email"
            required
          />
          <textarea
            className="w-full rounded-md bg-white/5 border border-white/6 px-3 py-2 text-white text-sm h-28"
            placeholder="Tell me about the opportunity"
            required
          />
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-400">Or email: rakibul@example.com</div>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#6366F1] to-[#38BDF8]">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;