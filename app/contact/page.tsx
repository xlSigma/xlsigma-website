'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import ContentContainer from '../components/ui/ContentContainer';
import MedallionHero from '../components/ui/MedallionHero';
import Eyebrow from '../components/ui/Eyebrow';
import Headline from '../components/ui/Headline';
import Button from '../components/ui/Button';
import { Field, INPUT_CLASS } from '../components/ui/form';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name:    '',
    company: '',
    email:   '',
    phone:   '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits.length ? `(${digits}` : '';
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      if (res.ok) {
        setState('success');
        setForm({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  return (
    <>
      {/* Header */}
      <MedallionHero>
        <Eyebrow className="mb-4">Reach Out</Eyebrow>
        <Headline level={1} size="display" className="mb-6">Contact xlSigma</Headline>
        <p className="mx-auto max-w-xl text-lead text-(--fg-muted)">
          Tell us about your challenge.
          <br />
          We respond within one business day.
        </p>
      </MedallionHero>

      {/* Form + Info */}
      <Section variant="white">
        <ContentContainer>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-7">
              {state === 'success' ? (
                <div className="border border-(--rule) px-8 py-16 text-center" role="status">
                  <CheckCircle size={44} className="mx-auto mb-5 text-gold-ink" aria-hidden="true" />
                  <h2 className="mb-2 font-serif text-title font-medium text-ink">Message Received</h2>
                  <p className="text-ink-muted">
                    Thank you for reaching out. We will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field id="contact-name" label="Full Name" required>
                      <input
                        id="contact-name" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Jane Smith" className={INPUT_CLASS}
                      />
                    </Field>
                    <Field id="contact-company" label="Company" required>
                      <input
                        id="contact-company" name="company" value={form.company} onChange={handleChange} required
                        placeholder="Acme Corp" className={INPUT_CLASS}
                      />
                    </Field>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field id="contact-email" label="Email" required>
                      <input
                        id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="jane@company.com" className={INPUT_CLASS}
                      />
                    </Field>
                    <Field id="contact-phone" label="Phone" optional>
                      <input
                        id="contact-phone" name="phone" type="tel" value={form.phone}
                        onChange={e => setForm(prev => ({ ...prev, phone: formatPhone(e.target.value) }))}
                        placeholder="(555) 123-4567" className={INPUT_CLASS}
                      />
                    </Field>
                  </div>
                  <Field id="contact-message" label="Message" required>
                    <textarea
                      id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Describe your challenge or what you are looking for..."
                      className={`${INPUT_CLASS} resize-none`}
                    />
                  </Field>

                  {state === 'error' && (
                    <p className="text-sm text-red-700" role="alert">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <Button type="submit" variant="primary" disabled={state === 'sending'}>
                    <Send size={16} aria-hidden="true" />
                    {state === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <aside className="tone-light tone-paper space-y-10 bg-paper p-8 md:p-10 lg:col-span-5">
              <div>
                <h2 className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-(--accent)">
                  Contact Information
                </h2>
                <ul className="space-y-2 font-serif text-title font-medium text-(--fg)">
                  <li>Tampa, FL</li>
                  <li>(813) 539-8229</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-(--accent)">
                  Mailing Address
                </h2>
                <address className="font-serif text-title font-medium not-italic text-(--fg)">
                  4522 W Village Dr<br />
                  Unit #1563<br />
                  Tampa, FL 33624
                </address>
              </div>

              <div>
                <h2 className="mb-2 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-(--accent)">
                  NAICS
                </h2>
                <p className="text-(--fg-muted)">
                  541511 | 541512 | 541611 | 541614 | 541618
                </p>
              </div>
            </aside>
          </div>
        </ContentContainer>
      </Section>
    </>
  );
}
