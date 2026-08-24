import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';
import { getStoredProfile, saveStoredProfile, resetStoredProfile } from './data/portfolioData';
import { Profile } from './types';

export default function App() {
  const [profile, setProfile] = useState<Profile>(getStoredProfile);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const handleSaveProfile = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
    saveStoredProfile(updatedProfile);
  };

  const handleResetProfile = () => {
    const defaults = resetStoredProfile();
    setProfile(defaults);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenEditProfile={() => setIsEditProfileOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Biography
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <Skills />

        <Projects />

        <Experience />

        <Contact profile={profile} />
      </main>

      {/* Global Footer */}
      <Footer profile={profile} />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        profile={profile}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Live Profile Customization Modal */}
      <EditProfileModal
        profile={profile}
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
