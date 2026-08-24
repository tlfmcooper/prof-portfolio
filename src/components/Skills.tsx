import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillCategory, Skill } from '../types';
import { 
  Code, 
  Layout, 
  Server, 
  Cloud, 
  Database, 
  Cpu, 
  Search, 
  CheckCircle2, 
  Star,
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Cloud':
        return Cloud;
      case 'Database':
        return Database;
      case 'Cpu':
        return Cpu;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return Code;
    }
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map(category => {
      if (selectedCategory !== 'all' && category.id !== selectedCategory) {
        return null;
      }

      const matchingSkills = category.skills.filter(skill => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          skill.name.toLowerCase().includes(q) ||
          skill.tag?.toLowerCase().includes(q) ||
          skill.experience.toLowerCase().includes(q)
        );
      });

      if (matchingSkills.length === 0) return null;

      return {
        ...category,
        skills: matchingSkills
      };
    }).filter(Boolean) as SkillCategory[];
  }, [selectedCategory, searchQuery]);

  const allKeySkills = useMemo(() => {
    const list: Skill[] = [];
    SKILL_CATEGORIES.forEach(c => {
      c.skills.forEach(s => {
        if (s.isKeySkill) list.push(s);
      });
    });
    return list;
  }, []);

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 relative border-t border-slate-200 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">
              Capabilities &amp; Tooling
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Technical Competencies &amp; Infrastructure
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
              From low-level microservices to high-velocity frontend architecture and cloud orchestration.
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or tools..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            id="skill-filter-all"
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100/60'
            }`}
          >
            ALL CAPABILITIES ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          
          {SKILL_CATEGORIES.map((category) => {
            const Icon = getCategoryIcon(category.icon);
            return (
              <button
                key={category.id}
                id={`skill-filter-${category.id}`}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{category.name.split('&')[0].trim().toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const CategoryIcon = getCategoryIcon(category.icon);
            return (
              <div
                key={category.id}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs group"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-medium">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List with Proficiency Meters */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                            {skill.isKeySkill && (
                              <Star className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                            )}
                            <span>{skill.name}</span>
                            {skill.tag && (
                              <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200 font-normal">
                                {skill.tag}
                              </span>
                            )}
                          </div>
                          <span className="text-slate-500 font-mono text-[11px]">
                            {skill.experience}
                          </span>
                        </div>

                        {/* Progress Bar Meter */}
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                          <div
                            className="h-full bg-indigo-600 rounded-full transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status inside category card */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Continuous delivery</span>
                  <span className="text-indigo-600 font-medium font-mono">Production tested</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Core Competencies Box */}
        <div className="mt-10 p-6 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Primary Stack</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Frequently leveraged for high-velocity full-stack projects:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {allKeySkills.slice(0, 8).map(s => (
              <span 
                key={s.name}
                className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
