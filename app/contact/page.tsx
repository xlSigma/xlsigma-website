'use client';
import { useState } from 'react';
import { MapPin, Phone, Send, CheckCircle } from 'lucide-react';

// TODO: Replace YOUR_FORM_ID with your Formspree form ID
// Sign up at formspree.io, create a form, and paste the ID here
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
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
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-light text-sm font-semibold uppercase tracking-widest mb-3">
            Reach Out
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact xlSigma</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Tell us about your challenge. We respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Form */}
          <div className="md:col-span-2">
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-navy mb-2">Message Received</h2>
                <p className="text-slate-600">
                  Thank you for reaching out. We will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Acme Corp"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Phone <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your challenge or what you are looking for..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm
                               focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy
                               resize-none"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white
                             font-semibold px-6 py-3 rounded-lg transition-colors
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {state === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-navy mb-4">Contact Information</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span>Tampa, FL</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span>(813) 919-9772</span>
                </li>
              </ul>
            </div>
            <div className="bg-gold-pale border border-gold/20 rounded-xl p-5">
              <h4 className="font-bold text-navy text-sm mb-3 uppercase tracking-wide">
                Certifications
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="font-semibold text-navy">SDVOSB</li>
                <li className="text-slate-500 text-xs mb-1">
                  Service-Disabled Veteran-Owned Small Business
                </li>
                <li className="font-semibold text-navy">FL OSD Veteran CBE (pending)</li>
                <li className="text-slate-500 text-xs mb-1">
                  Florida OSD Veteran-Owned Business Enterprise (pending)
                </li>
                <li className="font-semibold text-navy">SAM.gov Registered</li>
                <li className="text-slate-500 text-xs">
                  Active federal registration
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">NAICS</p>
              <p className="text-sm text-slate-600">
                541511 | 541611 | 541614 | 541618
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
