'use client';
import { useState, useRef } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { CheckCircle, Upload, Loader2 } from 'lucide-react';
import Section from '../components/ui/Section';
import ContentContainer from '../components/ui/ContentContainer';
import MedallionHero from '../components/ui/MedallionHero';
import Eyebrow from '../components/ui/Eyebrow';
import Headline from '../components/ui/Headline';
import Rule from '../components/ui/Rule';
import Button from '../components/ui/Button';
import { Field, INPUT_CLASS } from '../components/ui/form';

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

  function handlePhone(e: ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    setForm(prev => ({ ...prev, phone: formatted }));
  }

  function handleLinkedin(e: ChangeEvent<HTMLInputElement>) {
    let val = e.target.value;
    const match = val.match(/linkedin\.com\/in\/([^/?#]+)/i);
    if (match) val = match[1];
    setForm(prev => ({ ...prev, linkedin: val.replace(/^\/+|\/+$/g, '') }));
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
    Object.entries(form).forEach(([k, v]) => {
      if (k === 'linkedin') {
        const slug = v.trim();
        data.append(k, slug ? `https://www.linkedin.com/in/${slug}/` : '');
      } else {
        data.append(k, v);
      }
    });
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
      <MedallionHero>
        <Eyebrow className="mb-4">Opportunities</Eyebrow>
        <Headline level={1} size="display" className="mb-6">Join Our Talent Community</Headline>
        <p className="mx-auto max-w-2xl text-lead text-(--fg-muted)">
          Senior consultants and subject-matter experts
        </p>
        <p className="mx-auto max-w-2xl text-lead text-(--fg-muted)">
          who deliver measurable operational results.
        </p>
      </MedallionHero>

      {/* Talent Community Opportunity */}
      <Section variant="paper" aria-labelledby="talent-community">
        <ContentContainer>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Rule variant="gold" className="mb-6" />
              <Headline id="talent-community" level={2} size="md">Talent Community Opportunity</Headline>
            </div>
            <div className="space-y-5 text-lead text-(--fg-muted) lg:col-span-8">
              <p>
                By applying, you are expressing interest in joining our network of trusted consultants
                and subject-matter experts who may partner with us on a contract basis when client
                project needs arise.
              </p>
              <p>
                This is not an immediate or guaranteed opening. Engagements are project-based, and
                xlSigma will reach out when an opportunity aligns with your experience, availability,
                location, and client requirements.
              </p>
            </div>
          </div>
        </ContentContainer>
      </Section>

      {/* Company Description */}
      <Section variant="white" aria-labelledby="company-description">
        <ContentContainer>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Rule variant="gold" className="mb-6" />
              <Headline id="company-description" level={2} size="md">Company Description</Headline>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-(--fg-muted) lg:col-span-8">
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
        </ContentContainer>
      </Section>

      {/* Role Description */}
      <Section variant="paper" aria-labelledby="role-description">
        <ContentContainer>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Rule variant="gold" className="mb-6" />
              <Headline id="role-description" level={2} size="md">
                Role Description: Senior Management Consultant / SME - Talent Pool
              </Headline>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-(--fg-muted) lg:col-span-8">
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
        </ContentContainer>
      </Section>

      {/* Qualifications */}
      <Section variant="white" aria-labelledby="qualifications">
        <ContentContainer>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Rule variant="gold" className="mb-6" />
              <Headline id="qualifications" level={2} size="md">Qualifications</Headline>
            </div>
            <ul className="border-b border-(--rule) lg:col-span-8">
              {QUALIFICATIONS.map((q) => (
                <li key={q} className="border-t border-(--rule) py-5 text-base leading-relaxed text-(--fg)">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </ContentContainer>
      </Section>

      {/* Application Form */}
      <Section variant="paper" aria-labelledby="apply-heading">
        <ContentContainer>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow className="mb-5">Apply Now</Eyebrow>
              <Rule variant="gold" className="mb-6" />
              <Headline id="apply-heading" level={2} size="xl">Submit Your Interest</Headline>
            </div>

            <div className="lg:col-span-8">
              {state === 'success' ? (
                <div className="border border-(--rule) bg-white px-8 py-16 text-center" role="status">
                  <CheckCircle size={44} className="mx-auto mb-5 text-gold-ink" aria-hidden="true" />
                  <h3 className="mb-3 font-serif text-title font-medium text-ink">Application Received</h3>
                  <p className="mx-auto max-w-md leading-relaxed text-ink-muted">
                    Thanks, we&apos;ve received your information and will reach out when a
                    fitting opportunity arises.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 border border-(--rule) bg-white p-6 md:p-10">

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field id="careers-name" label="Full Name" required>
                      <input
                        id="careers-name" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Jane Smith" className={INPUT_CLASS}
                      />
                    </Field>
                    <Field id="careers-email" label="Email" required>
                      <input
                        id="careers-email" name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="jane@company.com" className={INPUT_CLASS}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field id="careers-phone" label="Phone" required>
                      <input
                        id="careers-phone" name="phone" type="tel" value={form.phone} onChange={handlePhone} required
                        placeholder="(555) 123-4567" className={INPUT_CLASS}
                      />
                    </Field>
                    <Field id="careers-linkedin" label="LinkedIn" optional>
                      <div className="flex overflow-hidden rounded-sm border border-input-line focus-within:border-navy">
                        <span className="flex select-none items-center whitespace-nowrap border-r border-input-line bg-paper px-3 text-xs text-ink-muted">
                          linkedin.com/in/
                        </span>
                        <input
                          id="careers-linkedin" name="linkedin" type="text" value={form.linkedin} onChange={handleLinkedin}
                          placeholder="yourname"
                          className="min-w-0 flex-1 bg-white px-3 py-3 text-[0.9375rem] text-ink placeholder:text-ink-muted/80"
                        />
                      </div>
                    </Field>
                  </div>

                  <Field id="careers-expertise" label="Area of Expertise / Certifications" optional>
                    <input
                      id="careers-expertise" name="expertise" value={form.expertise} onChange={handleChange}
                      placeholder="e.g. Lean Six Sigma MBB, PMP, RPA, Power BI..." className={INPUT_CLASS}
                    />
                  </Field>

                  <Field id="careers-message" label="Message / Cover Note" optional>
                    <textarea
                      id="careers-message" name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your background, availability, or the type of work you are interested in..."
                      className={`${INPUT_CLASS} resize-none`}
                    />
                  </Field>

                  <Field id="careers-resume" label="Resume" required hint={'PDF, DOC, or DOCX · max 5 MB'}>
                    <label
                      htmlFor="careers-resume"
                      className={`flex cursor-pointer items-center gap-3 rounded-sm border-2 border-dashed px-4 py-4
                                  transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold-ink
                                  ${resume
                                    ? 'border-gold-ink bg-gold-pale'
                                    : 'border-input-line bg-white hover:border-navy'}`}
                    >
                      <Upload size={18} className={resume ? 'text-gold-ink' : 'text-ink-muted'} aria-hidden="true" />
                      <span className={`truncate text-sm ${resume ? 'font-medium text-ink' : 'text-ink-muted'}`}>
                        {resume ? resume.name : 'Click to upload'}
                      </span>
                      <input
                        id="careers-resume"
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFile}
                        className="sr-only"
                      />
                    </label>
                    {fileError && (
                      <p className="mt-2 text-xs text-red-700" role="alert">{fileError}</p>
                    )}
                  </Field>

                  {state === 'error' && errorMsg && (
                    <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  <Button type="submit" variant="primary" disabled={state === 'sending'} className="w-full">
                    {state === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                        Submitting...
                      </>
                    ) : 'Submit Application'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </ContentContainer>
      </Section>
    </>
  );
}
