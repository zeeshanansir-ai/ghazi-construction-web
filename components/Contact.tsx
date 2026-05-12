'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inp = 'w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-[14px] text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary transition-colors'

  return (
    <section id="contact" className="bg-surface-container py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Info */}
          <div>
            <span className="inline-block text-primary text-[11px] font-semibold tracking-widest uppercase mb-3">
              Get In Touch
            </span>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-on-surface tracking-tight leading-tight mb-6">
              Start Your Next Project
            </h2>
            <p className="text-on-surface-variant text-[15px] leading-relaxed mb-10">
              Our technical specialists are ready to discuss your requirements and provide a
              preliminary feasibility overview. Get a free quote within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-xl p-3">
                  <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
                </div>
                <div>
                  <div className="text-on-surface font-semibold text-[14px] mb-1">Our Office</div>
                  <div className="text-on-surface-variant text-[13px] leading-relaxed">
                    Office No. 2, Defence Rd, Block B-1<br />
                    Engineers Town, Lahore, 54000
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-xl p-3">
                  <span className="material-symbols-outlined text-primary text-[22px]">phone</span>
                </div>
                <div>
                  <div className="text-on-surface font-semibold text-[14px] mb-1">Phone</div>
                  <a href="tel:+923216666906" className="text-primary text-[13px] hover:underline">
                    +92 321 6666906
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-xl p-3">
                  <span className="material-symbols-outlined text-primary text-[22px]">schedule</span>
                </div>
                <div>
                  <div className="text-on-surface font-semibold text-[14px] mb-1">Office Hours</div>
                  <div className="text-on-surface-variant text-[13px]">
                    Mon – Sat: 9:00 AM – 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface rounded-2xl border border-outline-variant p-8">
            <h3 className="text-on-surface font-semibold text-[18px] mb-6">Request a Free Quote</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <span className="material-symbols-outlined text-primary text-[56px]">check_circle</span>
                <div className="text-on-surface font-semibold text-[18px]">Message Received!</div>
                <p className="text-on-surface-variant text-[14px]">
                  We'll get back to you within 24 hours with a preliminary overview.
                </p>
                <button onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                  className="text-primary text-[13px] font-semibold hover:underline mt-2">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className={inp} placeholder="Full Name" required
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  <input className={inp} placeholder="Phone Number" required
                    value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <input className={inp} type="email" placeholder="Email Address"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                <select className={inp}
                  value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                  <option value="">Select Service</option>
                  <option>Architectural Design</option>
                  <option>Gray Structure</option>
                  <option>Turnkey Construction</option>
                  <option>Interior Finishing</option>
                  <option>Renovation</option>
                  <option>Real Estate Consultancy</option>
                  <option>Waterproofing / MEP</option>
                </select>
                <textarea className={`${inp} resize-none h-32`} placeholder="Tell us about your project..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />

                {status === 'error' && (
                  <p className="text-[13px] text-error">Something went wrong. Please try again.</p>
                )}

                <button type="submit" disabled={status === 'sending'}
                  className="w-full bg-primary text-on-primary py-3.5 rounded-xl text-[14px] font-semibold hover:brightness-110 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                  {status === 'sending' ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                      Sending…
                    </>
                  ) : (
                    <>
                      Get a Free Quote
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
