import React, { useEffect } from 'react';
import { Profile } from '../types';
import { EXPERIENCES, EDUCATIONS, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe, 
  Phone,
  FileText,
  CheckCircle2,
  Award,
  ExternalLink
} from 'lucide-react';

interface ResumeModalProps {
  profile: Profile;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ profile, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJson = () => {
    const resumeData = {
      profile,
      certifications: CERTIFICATIONS,
      skills: SKILL_CATEGORIES,
      experience: EXPERIENCES,
      education: EDUCATIONS
    };
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profile.name.toLowerCase().replace(/\s+/g, '_')}_resume.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="resume-modal-content"
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="print-resume-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadJson}
              id="download-resume-json-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Export Data</span>
            </button>

            <button
              onClick={onClose}
              id="close-resume-modal-btn"
              aria-label="Close resume modal"
              className="p-1.5 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-white text-slate-900 font-sans print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {profile.name}
              </h1>
              <span className="text-xs sm:text-sm font-bold text-indigo-600">
                {profile.title}
              </span>
            </div>

            {/* Meta links */}
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                {profile.email}
              </span>
              {profile.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-indigo-600" />
                  {profile.phone}
                </span>
              )}
              <a 
                href={profile.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 text-slate-700 hover:text-indigo-600 font-medium"
              >
                <Github className="w-3.5 h-3.5 text-indigo-600" />
                GitHub
              </a>
              <a 
                href={profile.linkedinUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 text-slate-700 hover:text-indigo-600 font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-600" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-200 pb-1">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {profile.bioSummary}
            </p>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-200 pb-1">
              Core Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
              {SKILL_CATEGORIES.map(cat => (
                <div key={cat.id} className="space-y-0.5">
                  <span className="font-bold text-slate-900">{cat.name}:</span>{' '}
                  <span className="text-slate-600">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-5">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-200 pb-1">
              Professional Experience
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {exp.role}
                    </span>
                    <span className="text-xs font-semibold text-indigo-600">
                      @ {exp.company}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {exp.period} | {exp.location}
                  </span>
                </div>

                <p className="text-xs text-slate-600">
                  {exp.description}
                </p>

                <ul className="space-y-1 pl-4 list-disc marker:text-indigo-600 text-xs text-slate-700">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Licensures */}
          <div className="space-y-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-200 pb-1">
              Professional Licenses &amp; Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.id} className="flex items-start gap-1.5 bg-slate-50 border border-slate-200 rounded-md p-2">
                  <Award className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">{cert.name}</div>
                    <div className="text-[11px] text-slate-500">{cert.issuer} {cert.badge && `• ${cert.badge}`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-200 pb-1">
              Education &amp; Quantitative Foundation
            </h2>

            {EDUCATIONS.map((edu) => (
              <div key={edu.id} className="space-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {edu.degree}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {edu.period}
                  </span>
                </div>
                <div className="text-xs text-slate-600">
                  {edu.school}, {edu.location}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
