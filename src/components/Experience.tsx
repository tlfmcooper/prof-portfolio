import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Building, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 relative border-t border-slate-200 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">
            Career Path &amp; History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Work Experience &amp; Impact
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Over 15 years bridging internal audit, SOX 404 controls, and modern production agentic AI systems.
          </p>
        </div>

        {/* Timeline & Roles */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id} 
              id={`experience-item-${exp.id}`}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className={`absolute -left-[33px] sm:-left-[49px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                exp.current 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs' 
                  : 'bg-white border-slate-400 text-slate-400'
              }`}>
                {exp.current ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                )}
              </div>

              {/* Experience Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-4 hover:border-slate-300 transition-all shadow-xs">
                
                {/* Role and Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          CURRENT ROLE
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-indigo-600 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-1.5 text-xs text-slate-600 font-mono">
                    <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role Narrative */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {exp.description}
                </p>

                {/* Measurable Achievements */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
                    Key Outcomes &amp; Architectural Milestones
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mr-1 tracking-wider">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
