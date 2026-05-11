'use client'

import { useState } from 'react'

type FormState = {
  full_name: string
  email: string
  phone: string
  subject: string
  message: string
}

const SUBJECTS = [
  'Commercial Development Enquiry',
  'Infrastructure Tender',
  'Residential Construction',
  'Interior Finishing',
  'Real Estate Consultancy',
  'Project Management Consulting',
  'Other',
]

const CONTACT_INFO = [
  { icon: 'phone',     label: 'Phone',   value: '+92 321 4441444',          href: 'tel:+923214441444' },
  { icon: 'email',     label: 'Email',   value: 'info@ghaziconstructions.pk', href: 'mailto:info@ghaziconstructions.pk' },
  { icon: 'location_on', label: 'Offices', value: 'DHA Phase 6/8, Lahore · Islamabad · Gujranwala', href: null },
]

export default function Contact() {
  const [form, setForm]   = useState<FormState>({ full_name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function set(field: keyof FormState, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res  = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()
      if (!res.ok) { setErrorMsg(json.error ?? 'Submission failed'); setStatus('error'); return }
      setStatus('success')
      setForm({ full_name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' })
    } catch {
      setStatus('error')
      setErrorMsg('Network error — please try again.')
    }
  }

  const input = 'w-full rounded-lg border border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 text-[16px] text-on-surface outline-none transition'

  return (
    <section id="contact" className="py-24 bg-surface-container">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">

          {/* Info panel */}
          <div className="md:w-5/12 bg-on-primary-fixed p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-[32px] font-semibold text-white leading-tight tracking-tight mb-4">
                Start Your Next Landmark Project
              </h2>
              <p className="text-white/70 text-[16px] leading-relaxed mb-10">
                Our technical specialists are ready to discuss your requirements and provide a
                preliminary feasibility overview — no obligation.
              </p>

              <div className="space-y-6">
                {CONTACT_INFO.map(c => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white text-[20px]">{c.icon}</span>
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-white/50 uppercase tracking-wider mb-0.5">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-white text-[14px] hover:text-primary-fixed transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <span className="text-white text-[14px]">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-[12px] font-semibold text-white/50 uppercase tracking-wider mb-3">Follow Us</div>
              <a
                href="https://www.facebook.com/GhaziConstructions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[14px]"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
                Facebook — @GhaziConstructions
              </a>
            </div>
          </div>

          {/* Form panel */}
          <div className="md:w-7/12 p-10 md:p-14">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-green-700 text-[32px]">check_circle</span>
                </div>
                <h3 className="text-[24px] font-semibold text-on-background mb-3">Enquiry Received</h3>
                <p className="text-on-surface-variant text-[16px] max-w-sm">
                  Thank you. A specialist from Ghazi Constructions will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary text-[14px] font-semibold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-[24px] font-semibold text-on-background mb-2">Contact Us</h3>
                <p className="text-on-surface-variant text-[14px] mb-6">All fields marked * are required.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-medium text-on-surface">Full Name *</label>
                    <input required className={input} placeholder="e.g. Ahmed Khan" type="text"
                      value={form.full_name} onChange={e => set('full_name', e.target.value)} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-medium text-on-surface">Email Address *</label>
                    <input required className={input} placeholder="ahmed@company.com" type="email"
                      value={form.email} onChange={e => set('email', e.target.value)} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-on-surface">Phone (optional)</label>
                  <input className={input} placeholder="+92 3XX XXXXXXX" type="tel"
                    value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-on-surface">Subject *</label>
                  <select required className={input} value={form.subject} onChange={e => set('subject', e.target.value)}>
                    {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-on-surface">Project Brief *</label>
                  <textarea
                    required rows={5} className={`${input} resize-none`}
                    placeholder="Briefly describe your project — location, scale, timeline, and any specific requirements..."
                    value={form.message} onChange={e => set('message', e.target.value)}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-gc-error text-[14px] bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <span className="material-symbols-outlined text-[18px]">error</span>
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-on-primary py-4 rounded-lg text-[14px] font-semibold hover:bg-primary-container transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                      Submitting…
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
