import React from 'react';
import { Profile, EducationItem } from '../types';
import { EDUCATIONS, CERTIFICATIONS } from '../data/portfolioData';
import { 
  User, 
  Sparkles, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Compass,
  CheckCircle2,
  BookOpen,
  ArrowUpRight,
  Database,
  BarChart3,
  Lock
} from 'lucide-react';

interface BiographyProps {
  profile: Profile;
  onOpenResume: () => void;
}

export const Biography: React.FC<BiographyProps> = ({ profile, onOpenResume }) => {
  const pillars = [
    {
      icon: Cpu,
      title: "Agentic AI & Multi-Agent Graphs",
      description: "Architecting governed multi-agent ecosystems on Google ADK, Agent-to-Agent (A2A) protocol, and Model Context Protocol (MCP) streamable-HTTP endpoints with live LLM-as-judge evaluation."
    },
    {
      icon: ShieldCheck,
      title: "AI Governance & Semantic RBAC",
      description: "Designing deterministic security gates, hierarchical permission fast-fails, structured audit logging, and automated prompt-injection screening that make autonomous systems compliant."
    },
    {
      icon: BarChart3,
      title: "Continuous Auditing & SOX 404",
      description: "Transforming manual sample-based audit testing into continuous 100% population verification with Python, SQL, process mining, and predictive risk scoring models."
    },
    {
      icon: Database,
      title: "Anomaly Detection & Telemetry",
      description: "Engineering real-time time-series anomaly detection engines (Prophet, Isolation Forest) processing 1M+ daily log events at 95%+ precision and 99.9% uptime."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 relative border-t border-slate-200 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">
            Biography &amp; Core Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Engineering with rigor, curiosity, and human empathy.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            {profile.bioSummary}
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5 text-slate-700 text-base leading-relaxed">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Background &amp; Technical Mission</span>
              </h3>
              
              {profile.fullBio.map((paragraph, index) => (
                <p key={index} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Working Philosophy Points */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Governed &amp; audited agent execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tiered LLM-as-judge evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SOX 404 &amp; ITGC continuous compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>High-throughput time-series anomaly detection</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-[0.2em]">
                <Award className="w-4 h-4" />
                <span>Professional Licensures &amp; Certifications</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {CERTIFICATIONS.map((cert) => (
                  <div 
                    key={cert.id}
                    className="bg-white border border-slate-200 rounded-lg p-3.5 space-y-1 shadow-xs hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {cert.name}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                      <span>{cert.issuer}</span>
                      {cert.badge && (
                        <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.2 rounded">
                          {cert.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-[0.2em]">
                <GraduationCap className="w-4 h-4" />
                <span>Academic &amp; Quantitative Foundation</span>
              </div>

              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded self-start sm:self-auto font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-slate-700">
                    {edu.school} • <span className="text-slate-500">{edu.location}</span>
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="mt-3 space-y-1 text-xs sm:text-sm text-slate-600 pl-4 list-disc marker:text-indigo-600">
                      {edu.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Core Pillars (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] px-1">
              Engineering Disciplines
            </h3>

            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={index}
                  className="bg-white hover:bg-slate-50/80 border border-slate-200 rounded-xl p-4.5 transition-all shadow-xs group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-100 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Action Box */}
            <div className="mt-6 p-6 rounded-xl bg-slate-900 border border-slate-800 text-white text-center space-y-3 shadow-sm">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Interested in technical leadership or advisory?
              </h4>
              <p className="text-xs text-slate-300">
                Check out full verified history in my resume or request an architectural consultation.
              </p>
              <div className="flex items-center justify-center gap-3 pt-1">
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-xs transition-all cursor-pointer"
                >
                  DOWNLOAD CV
                </button>
                <a
                  href="#contact"
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all"
                >
                  CONTACT DIRECTLY
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
