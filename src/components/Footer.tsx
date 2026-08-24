import React from 'react';
import { Profile } from '../types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Heart, 
  Terminal,
  Layers,
  Code2
} from 'lucide-react';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer"
      className="bg-white border-t border-slate-200 pt-14 pb-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                {profile.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="font-bold text-base text-slate-900 tracking-tight">
                {profile.name}
              </span>
            </div>

            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              {profile.headline}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs text-slate-600 font-mono">
                {profile.availability.label}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
              <a href="#about" className="hover:text-slate-900 transition-colors">Biography &amp; Story</a>
              <a href="#skills" className="hover:text-slate-900 transition-colors">Technical Skills</a>
              <a href="#projects" className="hover:text-slate-900 transition-colors">Featured Projects</a>
              <a href="#experience" className="hover:text-slate-900 transition-colors">Career Timeline</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Direct Contact</a>
              <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-900 transition-colors">Top of Page</a>
            </div>
          </div>

          {/* Col 3: Social & Profiles */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
              Profiles &amp; Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Engineered with modern React and Tailwind CSS.
            </p>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer text-xs font-semibold shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
