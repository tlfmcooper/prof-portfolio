import React from 'react';
import { Profile } from '../types';
import { 
  ArrowDown, 
  ArrowUpRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Sparkles, 
  CheckCircle2,
  Terminal,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';

interface HeroProps {
  profile: Profile;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-200/40 via-violet-200/20 to-blue-200/30 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-100/50 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro text and Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability Pill */}
            <div 
              id="hero-availability-pill"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-slate-800">{profile.availability.label}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs">
                <Terminal className="w-3.5 h-3.5" />
                <span>Professional Portfolio · {profile.title}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Governing multi-agent AI ecosystems &amp; <span className="text-indigo-600">enterprise intelligence</span>.
              </h1>
            </div>

            {/* Subtitle & Role */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {profile.headline}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>{profile.role}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all group"
              >
                <span>VIEW SELECTED WORKS</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all shadow-xs hover:border-slate-300"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-resume-download-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 rounded-lg transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                <span>DOWNLOAD CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">Professional Links</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-github-link"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-md bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-indigo-600 transition-all shadow-xs"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-linkedin-link"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-md bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-indigo-600 transition-all shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  id="hero-email-link"
                  aria-label="Send Email"
                  className="p-2 rounded-md bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-indigo-600 transition-all shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Floating Architecture Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Main Card */}
              <div className="relative bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm overflow-hidden">
                
                {/* Top status bar inside card */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-mono">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                    <span className="text-slate-800 font-semibold">architect.profile.ts</span>
                  </div>
                  <span className="text-slate-600 bg-slate-100 font-medium px-2 py-0.5 rounded text-[11px] border border-slate-200">Executive Ready</span>
                </div>

                {/* Professional Monogram & System Architecture Badge */}
                <div className="relative rounded-lg overflow-hidden p-6 mb-5 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white border border-slate-800 shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xl font-extrabold tracking-wider shadow-inner font-mono border border-indigo-400/30">
                      AK
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-indigo-400 block">Focus Area</span>
                      <span className="text-xs font-semibold text-slate-200">Governed Multi-Agent AI</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">CREDENTIALS</span>
                      <span className="font-bold text-slate-100">CPA • CIA • MFin</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">GOOGLE CLOUD</span>
                      <span className="font-bold text-slate-100">Prof. ML Engineer</span>
                    </div>
                  </div>

                  {/* Status tag */}
                  <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{profile.role}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                      ● Active Runtimes
                    </span>
                  </div>
                </div>

                {/* Stack pill badges */}
                <div className="space-y-2.5">
                  <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">
                    Core Capabilities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Google ADK", "Model Context Protocol (MCP)", "Semantic RBAC", "Python & FastAPI", "SOX 404 / ITGC", "pgvector & Redis", "Prophet / Anomaly Detection", "Kubernetes & ArgoCD"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-[11px] font-medium rounded border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Micro quote/statement */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span className="italic">"Making autonomous agent ecosystems governable, audited, and production-tested."</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div 
          id="hero-stats-banner"
          className="mt-14 sm:mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="flex flex-col bg-white p-4 rounded-lg border border-slate-200/80 shadow-xs">
            <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              {profile.stats.yearsExperience}+
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Years Experience (Audit &amp; AI)
            </span>
          </div>

          <div className="flex flex-col bg-white p-4 rounded-lg border border-slate-200/80 shadow-xs">
            <span className="text-3xl sm:text-4xl font-bold text-indigo-600 tracking-tight font-mono">
              {profile.stats.skillsDeployed}
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Modular Agent Skills &amp; Tools
            </span>
          </div>

          <div className="flex flex-col bg-white p-4 rounded-lg border border-slate-200/80 shadow-xs">
            <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              {profile.stats.dailyLogVolume}
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Daily Log Entries Streamed
            </span>
          </div>

          <div className="flex flex-col bg-white p-4 rounded-lg border border-slate-200/80 shadow-xs">
            <span className="text-3xl sm:text-4xl font-bold text-emerald-600 tracking-tight font-mono">
              {profile.stats.anomalyAccuracy}
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Anomaly Model Precision
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
