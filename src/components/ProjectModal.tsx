import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  BarChart3, 
  Cpu, 
  Calendar, 
  Tag, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="project-detail-modal-content"
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded">
              Case Study
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              {project.date}
            </span>
          </div>

          <button
            onClick={onClose}
            id="close-project-modal-btn"
            aria-label="Close project modal"
            className="p-1.5 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Header & Subtitle */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-indigo-600 font-semibold">
              {project.subtitle}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                id="modal-live-demo-link"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all"
              >
                <span>LAUNCH APPLICATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="modal-github-link"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>SOURCE REPOSITORY</span>
              </a>
            )}
          </div>

          {/* Cover Media */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-100">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
          </div>

          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span className="text-xs text-slate-500 font-medium">
                    {metric.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-indigo-700 mt-0.5">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Deep Overview */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Project Scope &amp; Architecture Overview</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Architecture Highlights & Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Architecture Highlights */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-indigo-600 flex items-center gap-1.5 uppercase tracking-[0.2em]">
                <Cpu className="w-3.5 h-3.5" />
                <span>System Architecture</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {project.architectureHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Features */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-indigo-600 flex items-center gap-1.5 uppercase tracking-[0.2em]">
                <Layers className="w-3.5 h-3.5" />
                <span>Core Capabilities</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {project.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Role and Responsibilities */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-slate-900">Engineering Role: </span>
            <span>{project.roleDescription}</span>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-1">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-100 text-slate-700 text-[11px] font-medium rounded border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>{project.category.toUpperCase()} PROJECT</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-bold text-xs cursor-pointer shadow-xs"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
