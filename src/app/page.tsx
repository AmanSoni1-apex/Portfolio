"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Sparkles,
  ArrowUpRight,
  FileText,
  Users,
  GraduationCap,
  Database,
  Terminal,
  Cpu,
  Layers,
  ChevronRight,
  TrendingUp,
  Workflow,
  Github,
  Linkedin
} from "lucide-react";

type EngineState = 'developer' | 'product';

export default function Home() {
  const [activeEngine, setActiveEngine] = useState<EngineState>('developer');

  // Hard-coded portfolio copy mapped directly to the active switch
  const data = {
    developer: {
      engineBadge: "",
      badgeColor: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20",
      accentGlow: "from-cyan-500/10 via-transparent to-transparent",
      accentBorder: "hover:border-cyan-500/30",
      accentText: "text-cyan-400",
      accentBg: "bg-cyan-500",
      ctaBg: "from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 shadow-cyan-500/10",
      heroTitle: "BUILDER.",
      heroSub: "AI Systems Engineer",
      heroDesc: "BCA Batch Topper specializing in secure backend development, optimized RAG workflows, and modular developer tooling. Shipped production-ready FastAPI systems integrated with isolated Supabase database layers.",
      skills: [
        "FastAPI", "Python", "Supabase",
        "LangChain", "Postman", "Java",
        "API Performance", "System Architecture", "Git"
      ],
      resumePath: "/resumes/Aman_Soni_Resume.pdf",
      ctaLabel: "Download SDE Resume",
      projects: [
        {
          name: "Reflecta",
          tag: "Secure Cognitive AI Journal",
          role: "Lead Backend Developer",
          link: "https://reflecta-seven.vercel.app",
          desc: "A secure, privacy-first AI journal that distills unstructured thoughts into actionable, emotion-aware self-insights.",
          bullets: [
            "Security & Auth Handshake: Engineered a stateless FastAPI JSON Web Token (JWT) session architecture securing user routes against multi-tenant memory leakages.",
            "Isolated Supabase Schemas: Deployed robust relational schemas via Supabase, managing isolated, user-specific data boundaries and row-level operations.",
            "Asynchronous AI Pipeline: Integrated Groq/Llama 3.3 endpoint abstractions to parse user check-ins into structured JSON payloads in under 1 second."
          ],
          tech: ["FastAPI", "Supabase", "PostgreSQL", "JWT", "Vercel"],
          deliverables: [
            "🔒 Secure JWT Auth System",
            "📊 Isolated Database Schema",
            "🤖 Groq Task Classifier"
          ]
        },
        {
          name: "BuildThis",
          tag: "Developer Blueprint Engine",
          role: "Founder-Architect & AI Systems Engineer (Product & Technical Owner)",
          link: "https://github.com/AmanSoni1-apex/BuildThis",
          desc: "An AI-powered Technical Architect that instantly compiles chaotic, stream-of-consciousness product thoughts into strict, production-ready system blueprints.",
          bullets: [
            "Volatile Memory State: Customized Next.js state engine binding React memory straight to URL query parameters.",
            "PostgreSQL Infrastructure: Asynchronous Supabase schemas backed by detailed MVP bootstrap cost-audits ($15/mo vs. $4K AWS).",
            "2-Week E2E Sprint: Coordinated database, API, and UI blueprints to ship a fully functional MVP prototype in 14 days."
          ],
          tech: ["FastAPI", "LangChain", "Groq (Llama 3.3)", "Pydantic", "Supabase / PostgreSQL", "Next.js"],
          deliverables: [
            "📄 Technical PRD",
            "🧬 Interactive System Flow",
            "📅 24-Week Release Roadmap",
          ]
        }
      ],
      credentials: [
        {
          icon: GraduationCap,
          title: "BCA Class Topper",
          value: "Rank #1 Leader",
          desc: "Consistently ranked #1 for technical and logical performance throughout MCA and BCA cycles."
        },
        {
          icon: Users,
          title: "Directed 170+ Bootcamp",
          value: "Student Head",
          desc: "Elected to direct comprehensive full-stack programming boot camp to junior students."
        },
        {
          icon: Terminal,
          title: "Production Stack",
          value: "100% Shipped",
          desc: "All applications fully deployed, secured behind HTTPS/JWT, and managed under git workflow standards."
        }
      ]
    },
    product: {
      engineBadge: "",
      badgeColor: "text-violet-400 border-violet-500/20 bg-violet-950/20",
      accentGlow: "from-violet-500/10 via-transparent to-transparent",
      accentBorder: "hover:border-violet-500/30",
      accentText: "text-violet-400",
      accentBg: "bg-violet-500",
      ctaBg: "from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-violet-500/10",
      heroTitle: "ARCHITECT.",
      heroSub: "Technical Product Manager",
      heroDesc: "High-agency product manager who translates complex engineering specs into zero-friction user workflows. MCA  Leader with hands-on technical foundations writing detailed PRDs and prioritizing product backlogs.",
      skills: [
        "Product Discovery", "PRD Writing", "Figma Prototyping", "RICE Prioritization",
        "Milestone Roadmapping", "User Story Mapping", "Agile / Scrum Leadership", "Telemetry Analysis",
        "System Flow Design", "FastAPI", "Sprint Planning"
      ],
      resumePath: "/resumes/Aman_Soni_ProjectManager_Resume.pdf",
      ctaLabel: "Download Product PM Resume",
      projects: [
        {
          name: "Reflecta",
          tag: "Secure Cognitive AI Journal",
          role: "Product Founder & Owner",
          link: "https://reflecta-seven.vercel.app",
          desc: "A secure, privacy-first AI journal that distills unstructured thoughts into actionable, emotion-aware self-insights.",
          bullets: [
            "User Discovery & Friction: Conducted 15+ user discovery sessions to pinpoint high-friction entry points in standard journal onboarding workflows.",
            "RICE Milestone Mapping: Framed product requirements (PRDs) and prioritized database security features using RICE frameworks to align 2-week sprints.",
            "Telemetry Latency Analysis: Monitored post-launch user analytics and system logs to drive generative AI feedback cycle improvements of 35%."
          ],
          tech: ["Product Discovery", "User Telemetry", "RICE", "Agile"],
          deliverables: [
            "🔒 Secure JWT Auth System",
            "📊 Isolated Database Schema",
            "🤖 Groq Task Classifier"
          ]
        },
        {
          name: "BuildThis",
          tag: "Developer Blueprint Engine",
          role: "Founder-Architect & AI Systems Engineer (Product & Technical Owner)",
          link: "https://github.com/AmanSoni1-apex/BuildThis",
          desc: "An AI-powered Technical Architect that instantly compiles chaotic, stream-of-consciousness product thoughts into strict, production-ready system blueprints.",
          bullets: [
            "Volatile Memory State: Customized Next.js state engine binding React memory straight to URL query parameters.",
            "PostgreSQL Infrastructure: Asynchronous Supabase schemas backed by detailed MVP bootstrap cost-audits ($15/mo vs. $4K AWS).",
            "2-Week E2E Sprint: Coordinated database, API, and UI blueprints to ship a fully functional MVP prototype in 14 days."
          ],
          tech: ["FastAPI", "LangChain", "Groq (Llama 3.3)", "Pydantic", "Supabase / PostgreSQL", "Next.js"],
          deliverables: [
            "📄 Technical PRD",
            "🧬 Interactive System Flow",
            "📅 24-Week Release Roadmap",
          ]
        }
      ],
      credentials: [
        {
          icon: Users,
          title: "Directed the Bootcamp of 170+ students",
          value: "Bootcamp Lead",
          desc: "Led a massive student cohort, managing curriculum timelines, sprint milestones, and peer code reviews."
        },
        {
          icon: GraduationCap,
          title: "Crowned Mr. Farewell",
          value: "Batch Representative",
          desc: "Voted #1 student representative for outstanding leadership, charisma, and exceptional academic character."
        },
        {
          icon: TrendingUp,
          title: "Product Execution",
          value: "Zero to Shipped",
          desc: "Fluent in code, database constraints, and visual flows, bridging the gap between product strategy and rapid dev velocity."
        }
      ]
    }
  };

  const current = data[activeEngine];

  return (
    <div className="flex-1 flex flex-col relative w-full overflow-hidden">

      {/* Dynamic Background Glow matching active engine */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b ${current.accentGlow} blur-[120px] pointer-events-none z-0 transition-all duration-700`}></div>

      {/* 1. NAVIGATION HEADER */}
      <header className="glass-nav sticky top-0 w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${current.accentBg} animate-pulse transition-all duration-500`}></div>
              <span className="text-xl font-black tracking-tighter text-white">AmanSoni.</span>
            </div>
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-4 ml-1">
              <a
                href="https://github.com/AmanSoni1-apex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-soni28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* DUAL-ENGINE SLIDING SWITCH */}
          <div className="relative bg-black/40 border border-white/5 rounded-full p-1 flex items-center h-11 w-[260px] md:w-[320px]">
            {/* Sliding Glass Background */}
            <div
              className={`absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-md shadow-violet-500/20 transition-all duration-300 ease-out`}
              style={{
                left: activeEngine === 'developer' ? '4px' : 'calc(50% + 2px)',
                width: 'calc(50% - 6px)'
              }}
            ></div>

            {/* Dev Switch Button */}
            <button
              onClick={() => setActiveEngine('developer')}
              className={`relative z-10 flex-1 h-full text-center flex items-center justify-center gap-1.5 text-[10px] md:text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${activeEngine === 'developer' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Dev Engine
            </button>

            {/* PM Switch Button */}
            <button
              onClick={() => setActiveEngine('product')}
              className={`relative z-10 flex-1 h-full text-center flex items-center justify-center gap-1.5 text-[10px] md:text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${activeEngine === 'product' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Product Engine
            </button>
          </div>

        </div>
      </header>

      {/* 2. EDITORIAL OVERLAP HERO CANVAS */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center max-w-7xl mx-auto px-6 py-12 w-full">

        {/* Massive Background Text (Z-Index: 0) */}
        <h1
          key={`bg-title-${activeEngine}`}
          className="absolute select-none font-black text-[12vw] tracking-tighter leading-none text-transparent text-stroke-obsidian uppercase z-0 pointer-events-none select-none select-none text-center select-none w-full animate-fade-in transition-all duration-700"
          style={{ top: '35%', transform: 'translateY(-50%)' }}
        >
          {current.heroTitle}
        </h1>

        {/* Foreground Transparent Portrait Cutout (Z-Index: 10) */}
        <div className="relative z-10 mt-auto md:h-[65vh] h-[50vh] w-full flex items-end justify-center pointer-events-none">
          <Image
            src="/images/aman-cutout-v2.png"
            alt="Aman Soni Portrait"
            width={700}
            height={800}
            priority
            className="h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(139,92,246,0.15)] filter contrast-125 transition-all duration-500 cursor-pointer pointer-events-auto"
          />
        </div>

        {/* Dynamic Badge Layered over Image */}
        {current.engineBadge && (
          <div className="absolute top-[80%] z-20 flex justify-center w-full">
            <span className={`border rounded-full px-4 py-1 text-[10px] font-bold tracking-widest uppercase transition-all duration-500 ${current.badgeColor}`}>
              {current.engineBadge}
            </span>
          </div>
        )}

        {/* ASYMMETRICAL EDITORIAL METADATA LABELS (Z-Index: 20) */}

        {/* Top Left: Date and Handles */}
        <div className="absolute top-12 left-6 text-left z-20 space-y-1.5 font-mono text-[9px] md:text-[10px] text-gray-500 tracking-widest uppercase">
          <p className="text-white text-xs font-extrabold tracking-tighter">18 MAY 2026</p>
          <p>in frame: <span className="text-gray-300">@amansoni</span></p>
          <p>location: <span className="text-gray-300">Ghaziabad, Delhi ncr</span></p>
        </div>

        {/* Top Right: Class topper metrics */}
        <div className="absolute top-12 right-6 text-right z-20 space-y-1.5 font-mono text-[9px] md:text-[10px] text-gray-500 tracking-widest uppercase">
          <p className="text-cyan-400 text-xs font-extrabold tracking-tighter">BCA Batch TOPPER</p>
          <p>rank: <span className="text-gray-300">#1 batch leader</span></p>
          <p>directed: <span className="text-gray-300">bootcamp of 170+ students</span></p>
        </div>

        {/* Bottom Left: Tech Stack telemetry */}
        <div className="absolute bottom-16 left-6 text-left z-20 space-y-1.5 font-mono text-[9px] md:text-[10px] text-gray-500 tracking-widest uppercase max-w-[180px] md:max-w-[240px]">
          <p className="text-violet-400 text-xs font-extrabold tracking-tighter">CORE ENGINE TELEMETRY</p>
          <p className="leading-normal text-gray-400 font-sans tracking-normal capitalize">
            {activeEngine === 'developer'
              ? 'Optimized FastAPI routes, isolated PostgreSQL schemas, and low-latency LLM agent orchestrations.'
              : 'Translating deep engineering constraints into high-conversion user experiences and clean roadmap releases.'}
          </p>
        </div>

        {/* Bottom Right: Active Role info */}
        <div className="absolute bottom-16 right-6 text-right z-20 space-y-1.5 font-mono text-[9px] md:text-[10px] text-gray-500 tracking-widest uppercase">
          <p className="text-white text-xs font-extrabold tracking-tighter">ACTIVE DESIGNATION</p>
          <p className="text-gray-300">{current.heroSub}</p>
          <p>status: <span className="text-green-400 animate-pulse font-bold">HIRING ACTIVE</span></p>
        </div>

      </section>

      {/* 3. HERO DESCRIPTION BOX */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center relative z-20 border-t border-white/5 w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4">
          The {activeEngine === 'developer' ? 'SDE / Engineering' : 'Product & Strategy'} Blueprint
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {current.heroDesc}
        </p>
      </section>

      {/* 4. DYNAMIC SKILLS SHOWCASE */}
      <section className="max-w-5xl mx-auto px-6 py-8 relative z-20 w-full">
        <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">ACTIVE ENGINE SKILLS OVERVIEW</span>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {current.skills.map((skill, idx) => (
              <span
                key={`${activeEngine}-skill-${idx}`}
                className={`glass-card px-4 py-2 rounded-full text-xs font-semibold text-gray-300 tracking-wide hover:border-violet-500/30 transition-all duration-300`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MASTERPIECE PROJECTS GRID (Reflecta & BuildThis) */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-20 w-full">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">PORTFOLIO SHIPPED PRODUCTS</span>
          <h2 className="text-3xl font-black tracking-tight text-white mt-2">Active Technical Showcase</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {current.projects.map((project, idx) => (
            <div
              key={`project-${idx}`}
              className="glass-card rounded-2xl p-6 md:p-8 flex flex-col group hover:border-violet-500/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Card accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-500/5 to-transparent blur-xl group-hover:from-violet-500/10 transition-all"></div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">{project.tag}</span>
                  {project.link !== '#' ? (
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/title flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <h3 className="text-2xl font-bold text-white tracking-tight mt-1 group-hover/title:underline decoration-violet-500/50">{project.name}</h3>
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">{project.name}</h3>
                  )}
                </div>
                {project.link !== '#' ? (
                  <a 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-2.5 rounded-full bg-white/5 hover:bg-white/10 ${current.accentText} transition-all duration-300 border border-white/5`}
                    aria-label={`Open ${project.name}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                ) : (
                  <span className="text-[9px] font-mono tracking-wider text-gray-500 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-full uppercase">
                    PROTOTYPE
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Dynamic Role pill */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">MY DESIGNATION:</span>
                <span className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-white/5 border border-white/5 text-white`}>
                  {project.role}
                </span>
              </div>

              {/* Bullet details */}
              <div className="space-y-4 mb-8 flex-1">
                {project.bullets.map((bullet, bIdx) => (
                  <div key={`bullet-${bIdx}`} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${current.accentBg} mt-2 shrink-0 transition-all duration-500`}></div>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>

              {/* Optional Deliverables Section */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div className="mb-8 pt-6 border-t border-white/5">
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block mb-3">DELIVERABLES & CASE STUDIES</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.deliverables.map((del, delIdx) => (
                      <div
                        key={`del-${delIdx}`}
                        className="text-gray-300 text-xs md:text-sm font-semibold flex items-start gap-3 bg-white/[0.02] border border-white/5 hover:border-violet-500/20 rounded-xl px-4 py-3 transition-colors duration-300"
                      >
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Tech Stack tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.tech.map((t, tIdx) => (
                  <span key={`tech-${tIdx}`} className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CORONATION CREDENTIALS & METRICS SECTION (Loops Coronation Video!) */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Loop Stage Coronation video card (Occupies 2 columns on desktop) */}
          <div className="glass-card rounded-2xl lg:col-span-2 overflow-hidden flex flex-col md:flex-row relative min-h-[350px]">
            {/* Absolute overlay gradient over video for premium text reading */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Loop Video */}
            <div className="absolute inset-0 md:left-1/3 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-40"
              >
                <source src="/videos/myvideo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Left Column Content (Sits in front of overlay) */}
            <div className="relative z-20 flex-1 p-8 md:p-10 flex flex-col justify-center h-full max-w-md">
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">BATCH CORONATION</span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-2 mb-4 leading-tight">
                Crowned Mr.Farewell
              </h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                Voted as the #1 representative personality of our entire Master’s finalist cohort. Recognized by faculty heads for exemplary leadership, character, and developer velocity.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">telemetry:</span>
                <span className="px-2.5 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] font-bold tracking-wider uppercase">
                  looping live stage capture
                </span>
              </div>
            </div>
          </div>

          {/* Credentials stats Cards Column */}
          <div className="flex flex-col gap-6 justify-between">
            {current.credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <div
                  key={`stat-${idx}`}
                  className="glass-card rounded-2xl p-6 flex flex-col flex-1 group hover:border-violet-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight leading-none mt-1">{cred.value}</h4>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed flex-1">
                    {cred.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. RESUME DOWNLOAD FOOTER CTA */}
      <footer className="max-w-7xl mx-auto px-6 py-20 text-center relative z-20 border-t border-white/5 w-full">
        <h2 className="text-3xl font-black tracking-tight text-white mt-2 mb-6">Review My Raw Telemetry</h2>

        <div className="flex flex-col items-center gap-4">
          <a
            href={current.resumePath}
            download
            className={`flex items-center justify-center gap-2.5 bg-gradient-to-r ${current.ctaBg} text-white text-xs md:text-sm font-extrabold tracking-wider uppercase px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}
          >
            <FileText className="w-4.5 h-4.5" />
            {current.ctaLabel}
          </a>
          <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">
            Resume pdf downloads
          </p>
        </div>
        <div className="mt-16 flex items-center justify-center gap-4">
          <a
            href="https://github.com/AmanSoni1-apex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-soni28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <div className="mt-4 text-[9px] font-mono text-gray-600 tracking-widest uppercase">
          <p>© 2026 AMAN SONI.</p>
        </div>
      </footer>

    </div>
  );
}
