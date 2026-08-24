import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  Star,
  CheckCircle,
  Filter,
  Eye
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Systems' },
    { id: 'fullstack', label: 'Full-Stack Apps' },
    { id: 'cloud', label: 'Cloud & Telemetry' },
    { id: 'opensource', label: 'Open Source' }
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section 
      id="projects" 
      className="py-16 md:py-24 relative border-t border-slate-200 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">
              Selected Works &amp; Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Selected Engineering Works
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
              A curation of technical and creative highlights across high-velocity systems, telemetry, and product design.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-lg p-1 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`project-category-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl overflow-hidden flex flex-col justify-between group transition-all duration-200 shadow-xs hover:shadow-md"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/95 backdrop-blur-sm text-indigo-700 border border-slate-200 shadow-xs">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 shadow-xs">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Frosted Case Study Badge Overlay on Bottom */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/60 shadow-xs flex items-center justify-between">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                        Case Study 0{index + 1}
                      </span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[11px] font-bold text-slate-900 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3.5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metric Chips */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-lg p-2 border border-slate-200/80">
                          <span className="block text-[10px] text-slate-500 font-medium">{m.label}</span>
                          <span className="block text-xs font-bold font-mono text-indigo-700 mt-0.5">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 text-[11px] font-medium border border-slate-200">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-3 pt-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`view-study-btn-${project.id}`}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1 cursor-pointer uppercase tracking-wider"
                >
                  <span>Read Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo Link"
                      className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom GitHub Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <Github className="w-4 h-4 text-slate-700" />
              <span>Explore More Repositories &amp; Open Source Contributions</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Browse full commit histories, open pull requests, and experiment scripts on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/tlfmcooper"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shrink-0 shadow-xs"
          >
            <span>GITHUB PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
