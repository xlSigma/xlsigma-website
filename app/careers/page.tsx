'use client';
import { useState, useRef } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { CheckCircle, Upload, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const QUALIFICATIONS = [
  'Strong analytical skills with the ability to interpret complex data, develop insights, and translate findings into practical recommendations.',
  'Demonstrated expertise in management consulting and consulting practices, including client-facing leadership, engagement delivery, and stakeholder management.',
  'Experience in finance-related analysis, such as building business cases, ROI models, and cost-benefit analyses to support transformation initiatives.',
  'Expertise in business process design and improvement, including current-state / future-state process mapping, performance measurement, and application of Lean Six Sigma methods.',
  'Solid understanding of AI, automation, and RPA concepts and their application in operational and process improvement contexts, including the ability to develop benefit, cost, and risk analyses and define detailed requirements for SMEs who design or implement technical AI/automation/RPA solutions.',
  'Proven track record leading or supporting projects in one or more domains such as manufacturing, healthcare, financial services, IT, or government programs.',
  'Excellent communication, presentation, and facilitation skills, with the ability to work collaboratively with senior leadership and diverse cross-functional teams.',
  'Advanced degree and professional certifications, such as MBA, Lean Six Sigma Master Black Belt, PMP, or related credentials, are a plus.',
];

export default function CareersPage() {
  const [state, setState]         = useState<FormState>('idle');
  const [errorMsg, setErrorMsg]   = useState('');
  const [fileError, setFileError] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', linkedin: '', expertise: '', message: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setFileError('');
    if (!file) { setResume(null); return; }
    const validMime = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const validExt = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!validMime.includes(file.type) && !validExt) {
      setFileError('Please upload a PDF, DOC, or DOCX file.');
      setResume(null);
      if (fileRef.current) fileRef.current.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File must be 5 MB or smaller.');
      setResume(null);
      if (fileRef.current) fileRef.current.value = '';
      return;
    }
    setResume(file);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg('');
    if (!resume) { setFileError('Please attach your resume.'); return; }

    setState('sending');
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append('resume', resume);

    try {
      const res = await fetch('/api/careers', { method: 'POST', body: data });
      if (res.ok) {
        setState('success');
      } else {
        const json = await res.json().catch(() => ({})) as { error?: string };
        setErrorMsg(json.error ?? 'Submission failed. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setState('error');
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">
            Opportunities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Talent Community</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Senior consultants and subject-matter experts
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            who deliver measurable operational results.
          </p>
        </div>
      </section>

      {/* Body Copy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="bg-gold-pale border border-gold/20 rounded-xl p-6">
            <h2 className="text-lg font-bold text-navy mb-3">Talent Community Opportunity</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              By applying, you are expressing interest in joining our network of trusted consultants
              and subject-matter experts who may partner with us on a contract basis when client
              project needs arise.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed mt-3">
              This is not an immediate or guaranteed opening. Engagements are project-based, and
              xlSigma will reach out when an opportunity aligns with your experience, availability,
              location, and client requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-4">Company Description</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                xlSigma LLC is a management consulting firm that delivers solutions at the
                intersection of operational excellence, AI, automation, enterprise knowledge
                transformation, IT, and Lean Six Sigma.
              </p>
              <p>
                We help private-sector and government organizations improve performance by
                integrating AI, automation, knowledge management, and Lean Six Sigma into core
                operations. Our core capabilities include process optimization, AI/RPA-enabled
                automation, enterprise knowledge management, technology-enabled transformation,
                KPI and management dashboards, and operational performance improvement.
              </p>
              <p>
                xlSigma serves clients across industries including manufacturing, healthcare,
                financial services, and government. Engagements are led by experienced practitioners
                with backgrounds at organizations such as GE, Emerson, TD Bank, Citi, and
                major consulting firms.
              </p>
              <p>
                Headquartered in the Greater Tampa Bay Area, xlSigma serves commercial clients
                directly and partners with federal prime contractors as a strategic subcontracting
                partner. The firm is building a talent pool of senior consultants, subject-matter
                experts, and delivery practitioners who can support high-impact transformation,
                automation, process improvement, and knowledge-management initiatives.
              </p>
              <p>
                xlSigma is especially interested in experienced consultants who bring practical
                delivery expertise, client-facing judgment, and the ability to convert strategy
                into measurable operational results.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-4">
              Role Description: Senior Management Consultant / SME &mdash; Talent Pool
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                The Senior Management Consultant is a senior practitioner role supporting future
                full-time, part-time, remote, hybrid, and client on-site consulting opportunities
                as client needs, prime-contractor teaming opportunities, and federal or commercial
                engagements develop.
              </p>
              <p>
                This role is responsible for leading or supporting consulting engagements that
                diagnose client challenges and design practical, data-driven solutions integrating
                AI, automation, Lean Six Sigma, and operational excellence methods. Depending on
                the engagement, the Senior Management Consultant may serve as an engagement lead,
                workstream lead, subject-matter expert, or specialized delivery practitioner.
              </p>
              <p>
                Day-to-day activities may include conducting assessments and analyses, mapping and
                optimizing business processes, facilitating workshops with client leadership and
                cross-functional teams, and preparing clear, actionable deliverables such as
                roadmaps, business cases, operating models, requirements documents, and performance
                dashboards.
              </p>
              <p>
                The Senior Management Consultant will collaborate with technical and business
                stakeholders, mentor project team members, and help build reusable frameworks,
                tools, and methodologies that support xlSigma&apos;s service offerings. This role
                may also contribute to business development efforts by supporting proposals,
                participating in client presentations, and identifying opportunities to expand
                engagement scope and impact.
              </p>
              <p>
                Selected consultants will be considered for future project-based opportunities as
                client needs, prime-contractor teaming opportunities, and federal or commercial
                engagements develop.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-4">Qualifications</h2>
            <ul className="space-y-3">
              {QUALIFICATIONS.map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold font-bold flex-shrink-0 mt-0.5">&#8226;</span>
                  <span className="text-slate-600 text-sm leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
              Apply Now
            </p>
            <h2 className="text-3xl font-bold text-navy">Submit Your Interest</h2>
          </div>

          {state === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center
                            bg-white rounded-xl border border-slate-200 px-8">
              <CheckCircle size={48} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-3">Application Received</h3>
              <p className="text-slate-600 max-w-md leading-relaxed">
                Thanks &mdash; we&apos;ve received your information and will reach out when a
                fitting opportunity arises.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}
                  className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    placeholder="Jane Smith"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="jane@company.com"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone" type="tel" value={form.phone} onChange={handleChange} required
                    placeholder="(555) 123-4567"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    LinkedIn URL
                    <span className="text-slate-400 font-normal ml-1">(optional)</span>
                  </label>
                  <input
                    name="linkedin" type="url" value={form.linkedin} onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">
                  Area of Expertise / Certifications
                  <span className="text-slate-400 font-normal ml-1">(optional)</span>
                </label>
                <input
                  name="expertise" value={form.expertise} onChange={handleChange}
                  placeholder="e.g. Lean Six Sigma MBB, PMP, RPA, Power BI..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">
                  Message / Cover Note
                  <span className="text-slate-400 font-normal ml-1">(optional)</span>
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} rows={4}
                  placeholder="Tell us about your background, availability, or the type of work you are interested in..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy
                             resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">
                  Resume <span className="text-red-500">*</span>
                  <span className="text-slate-400 font-normal ml-1">
                    PDF, DOC, or DOCX &middot; max 5 MB
                  </span>
                </label>
                <label
                  className={`flex items-center gap-3 border-2 border-dashed rounded-lg px-4 py-4
                              cursor-pointer transition-colors
                              ${resume
                                ? 'border-green-400 bg-green-50'
                                : 'border-slate-300 hover:border-navy/40 bg-white'}`}
                >
                  <Upload size={18} className={resume ? 'text-green-600' : 'text-slate-400'} />
                  <span className={`text-sm truncate
                                   ${resume ? 'text-green-700 font-medium' : 'text-slate-500'}`}>
                    {resume ? resume.name : 'Click to upload'}
                  </span>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFile}
                    className="sr-only"
                  />
                </label>
                {fileError && (
                  <p className="text-red-500 text-xs mt-1">{fileError}</p>
                )}
              </div>

              {state === 'error' && errorMsg && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200
                               rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'sending'}
                className="w-full flex items-center justify-center gap-2 bg-navy
                           hover:bg-navy-light text-white font-semibold px-6 py-3
                           rounded-lg transition-colors
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
