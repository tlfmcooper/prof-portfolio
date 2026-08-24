import React, { useState, useEffect } from 'react';
import { Profile } from '../types';
import { 
  Menu, 
  X, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Sliders, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  profile: Profile;
  onOpenResume: () => void;
  onOpenEditProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume, onOpenEditProfile }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const initials = profile.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs' 
          : 'bg-white/70 backdrop-blur-xs border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          id="navbar-brand-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-indigo-700 transition-colors">
            {initials}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-base tracking-tight leading-tight">
              {profile.name}
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
              {profile.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200 rounded-full px-3 py-1 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              id={`nav-link-${link.id}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeSection === link.id
                  ? 'bg-white text-indigo-600 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Quick Edit Profile Button */}
          <button
            onClick={onOpenEditProfile}
            id="navbar-edit-profile-btn"
            title="Personalize portfolio details"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all cursor-pointer shadow-xs hover:border-slate-300"
          >
            <Sliders className="w-3.5 h-3.5 text-indigo-600" />
            <span>Customize</span>
          </button>

          {/* View Resume Button */}
          <button
            onClick={onOpenResume}
            id="navbar-resume-btn"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>RESUME</span>
          </button>

          {/* Contact Direct Button */}
          <a
            href="#contact"
            id="navbar-contact-cta"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-sm"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenEditProfile}
            id="mobile-customize-btn"
            className="p-2 text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg shadow-xs"
            title="Customize"
          >
            <Sliders className="w-4 h-4 text-indigo-600" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg focus:outline-none shadow-xs"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg mt-2 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-indigo-50 text-indigo-600 font-bold border border-indigo-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg"
            >
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-3 text-slate-500">
            <a 
              href={profile.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={profile.linkedinUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              className="p-2 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
