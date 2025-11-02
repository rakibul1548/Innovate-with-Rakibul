// app/page.tsx
'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/lib/projects";

export default function LandingPage(): JSX.Element {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen text-white bg-[#0F172A]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 -left-56 w-[90rem] h-[90rem] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, #6366F1, transparent 15%), radial-gradient(circle at 80% 80%, #38BDF8, transparent 12%)",
          }}
        />
      </div>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <Projects setSelected={setSelected} />
        <About />
        <Contact />
        <Footer />
      </main>

      <ProjectModal selected={selected} setSelected={setSelected} />
    </div>
  );
}
