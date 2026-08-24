import React, { useState, useEffect } from 'react';
import { Profile } from '../types';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare,
  Globe,
  Phone,
  AlertCircle,
  CheckCircle2,
  Building2,
  Calendar,
  Briefcase
} from 'lucide-react';

interface ContactProps {
  profile: Profile;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  inquiryType?: string;
  subject?: string;
  message?: string;
}

const INQUIRY_TYPES = [
  { id: 'full-time', label: 'Full-Time Opportunity / Staff Role' },
  { id: 'advisory', label: 'Technical Advisory & Architecture' },
  { id: 'consulting', label: 'Consulting / Contract Engineering' },
  { id: 'open-source', label: 'Open Source / Collaboration' },
  { id: 'general', label: 'General Introduction / Networking' }
];

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'full-time',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [submissionId, setSubmissionId] = useState('');
  const [submittedAt, setSubmittedAt] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Please enter at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address (e.g. name@domain.com).';
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Subject line is required.';
        if (value.trim().length < 3) return 'Subject should be at least 3 characters.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message content is required.';
        if (value.trim().length < 15) return `Please provide more context (at least 15 characters, current: ${value.trim().length}).`;
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    // Filter out undefined values
    const cleanedErrors: FormErrors = {};
    if (newErrors.name) cleanedErrors.name = newErrors.name;
    if (newErrors.email) cleanedErrors.email = newErrors.email;
    if (newErrors.subject) cleanedErrors.subject = newErrors.subject;
    if (newErrors.message) cleanedErrors.message = newErrors.message;

    setErrors(cleanedErrors);
    return Object.keys(cleanedErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({
      ...prev,
      [field]: errorMsg
    }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors(prev => ({
        ...prev,
        [field]: errorMsg
      }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all required fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    // Simulate formal dispatch
    setTimeout(() => {
      const refId = `INQ-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
      setSubmissionId(refId);
      setSubmittedAt(timestamp);
      setSubmittedData({ ...formData });
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      inquiryType: 'full-time',
      subject: '',
      message: ''
    });
    setTouched({});
    setErrors({});
    setSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 relative border-t border-slate-200 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">
            Get In Touch &amp; Direct Channels
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Start a Formal Conversation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Whether you are exploring senior technical leadership opportunities, advisory arrangements, or wish to review architectural scope.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Links & Profiles */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card with Copy button */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
                  Primary Email Channel
                </span>
                <span className="text-xs text-emerald-700 flex items-center gap-1.5 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Fast Response &lt;24h
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800 truncate">
                    {profile.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-md transition-all shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-xs"
              >
                <span>OPEN IN DEFAULT CLIENT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>

            {/* Professional Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-github-card"
                className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 transition-all group shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-200/70 text-slate-800 group-hover:text-indigo-600 transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">GitHub</h4>
                <p className="text-xs text-slate-500 mt-1">Production repositories &amp; open-source</p>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-linkedin-card"
                className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 transition-all group shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-100 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">LinkedIn</h4>
                <p className="text-xs text-slate-500 mt-1">Professional network &amp; recommendations</p>
              </a>
            </div>

            {/* Location & Real-time availability */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2.5 shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-slate-700 text-xs font-semibold bg-white px-2 py-0.5 rounded border border-slate-200">
                  <Clock className="w-3 h-3 text-indigo-600" />
                  <span>{currentTime || 'Local Time'}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {profile.availability.description}
              </p>
            </div>

          </div>

          {/* Right Column: Formal Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5 shadow-xs">
              
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600" />
                  <span>Direct Communication Form</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Please complete the validated fields below. Inquiries are routed directly to the principal engineer.
                </p>
              </div>

              {/* SUCCESS CONFIRMATION STATE */}
              {submitted && submittedData ? (
                <div 
                  id="contact-success-state"
                  className="bg-white border border-emerald-200 rounded-xl p-6 sm:p-7 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                        Inquiry Received • Status: Confirmed
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Thank you, {submittedData.name}.
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Your message has been successfully registered under receipt <span className="font-mono font-semibold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{submissionId}</span>. A direct response will be delivered to <span className="font-semibold text-slate-800">{submittedData.email}</span> within 24 business hours.
                      </p>
                    </div>
                  </div>

                  {/* Formal Receipt Summary Box */}
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    <div className="font-bold text-slate-800 uppercase tracking-wider text-[10px] text-slate-500 mb-2">
                      Inquiry Record Summary
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div>
                        <span className="text-slate-500 font-medium">Inquiry Type: </span>
                        <span className="font-semibold">{INQUIRY_TYPES.find(t => t.id === submittedData.inquiryType)?.label || submittedData.inquiryType}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-medium">Subject: </span>
                        <span className="font-semibold">{submittedData.subject}</span>
                      </div>
                      {submittedData.company && (
                        <div>
                          <span className="text-slate-500 font-medium">Organization: </span>
                          <span className="font-semibold">{submittedData.company}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-slate-500 font-medium">Logged At: </span>
                        <span className="font-mono font-semibold">{submittedAt}</span>
                      </div>
                    </div>
                  </div>

                  {/* Post-submission Action buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(`[${submissionId}] ${submittedData.subject}`)}&body=${encodeURIComponent(
                        `Hi ${profile.name},\n\nFollowing up on inquiry ${submissionId} submitted via your portfolio.\n\n${submittedData.message}\n\nBest regards,\n${submittedData.name}\n${submittedData.company ? `(${submittedData.company})` : ''}`
                      )}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Open Pre-filled Email</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      id="send-another-message-btn"
                      className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all cursor-pointer shadow-xs uppercase tracking-wider"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM BODY WITH FORMAL VALIDATION */
                <form onSubmit={handleSubmit} noValidate className="space-y-4" id="formal-contact-form">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label 
                          htmlFor="contact-name-input"
                          className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]"
                        >
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                      </div>
                      <input
                        type="text"
                        id="contact-name-input"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        value={formData.name}
                        onBlur={() => handleBlur('name')}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none transition-all shadow-xs ${
                          errors.name && touched.name 
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-rose-50/20' 
                            : touched.name && !errors.name && formData.name.length >= 2
                            ? 'border-emerald-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                            : 'border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p id="contact-name-error" className="flex items-center gap-1 text-xs text-rose-600 pt-0.5">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label 
                          htmlFor="contact-email-input"
                          className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]"
                        >
                          Work / Direct Email <span className="text-rose-500">*</span>
                        </label>
                      </div>
                      <input
                        type="email"
                        id="contact-email-input"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        value={formData.email}
                        onBlur={() => handleBlur('email')}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="e.g. eleanor@enterprise.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none transition-all shadow-xs ${
                          errors.email && touched.email 
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-rose-50/20' 
                            : touched.email && !errors.email && formData.email.length > 5
                            ? 'border-emerald-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                            : 'border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p id="contact-email-error" className="flex items-center gap-1 text-xs text-rose-600 pt-0.5">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Inquiry Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Organization / Company */}
                    <div className="space-y-1">
                      <label 
                        htmlFor="contact-company-input"
                        className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]"
                      >
                        Company / Organization <span className="text-slate-400 font-normal text-[10px]">(Optional)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="contact-company-input"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder="e.g. Acme Corp or Seed Fund"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1">
                      <label 
                        htmlFor="contact-inquiry-type-select"
                        className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]"
                      >
                        Inquiry Nature <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-inquiry-type-select"
                        value={formData.inquiryType}
                        onChange={(e) => handleChange('inquiryType', e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all shadow-xs font-medium"
                      >
                        {INQUIRY_TYPES.map(type => (
                          <option key={type.id} value={type.id}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject Line */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label 
                        htmlFor="contact-subject-input"
                        className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]"
                      >
                        Subject Line <span className="text-rose-500">*</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      id="contact-subject-input"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      value={formData.subject}
                      onBlur={() => handleBlur('subject')}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="e.g. Senior Principal Architect Opportunity / Technical Leadership"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none transition-all shadow-xs ${
                        errors.subject && touched.subject 
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-rose-50/20' 
                          : touched.subject && !errors.subject && formData.subject.length >= 3
                          ? 'border-emerald-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                          : 'border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                      }`}
                    />
                    {errors.subject && touched.subject && (
                      <p id="contact-subject-error" className="flex items-center gap-1 text-xs text-rose-600 pt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message & Character Count */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label 
                        htmlFor="contact-message-input"
                        className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]"
                      >
                        Message / Project Scope <span className="text-rose-500">*</span>
                      </label>
                      <span className={`text-[11px] font-mono ${
                        formData.message.trim().length >= 15 ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {formData.message.length} chars (min 15)
                      </span>
                    </div>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      value={formData.message}
                      onBlur={() => handleBlur('message')}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Please outline the role scope, technology stack, timeline, or engineering challenge..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none transition-all resize-none shadow-xs ${
                        errors.message && touched.message 
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 bg-rose-50/20' 
                          : touched.message && !errors.message && formData.message.length >= 15
                          ? 'border-emerald-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                          : 'border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
                      }`}
                    />
                    {errors.message && touched.message && (
                      <p id="contact-message-error" className="flex items-center gap-1 text-xs text-rose-600 pt-0.5">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-lg shadow-xs transition-all cursor-pointer uppercase tracking-wider"
                  >
                    {submitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                        <span>Transmitting Inquiry...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Formal Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

