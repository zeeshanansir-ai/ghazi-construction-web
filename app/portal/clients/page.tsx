'use client'

import { useState } from 'react'

const LEADS = [
  { name: 'Ahmad Raza Sheikh', project: 'Skyline Office Plaza',   type: 'Commercial',  note: 'RFP for facade renovation and full MEP upgrade.',         priority: 'High',   date: 'Today'     },
  { name: 'Mrs. Nadia Malik',  project: 'The Oak Villa',          type: 'Residential', note: 'New turnkey construction inquiry — 10 marla DHA plot.',   priority: 'High',   date: 'Yesterday' },
  { name: 'Punjab Logistics',  project: 'Logistics Hub X',        type: 'Industrial',  note: 'Warehouse expansion proposal — 50,000 sqft.',            priority: 'Medium', date: '3 days ago' },
  { name: 'Mr. Kamran Iqbal',  project: 'Cantt Bungalow Reno',    type: 'Renovation',  note: 'Full renovation of 1 kanal bungalow, interior + gray.',  priority: 'Low',    date: '5 days ago' },
]

const CLIENTS = [
  { name: 'Modern Estates Ltd.',   contact: 'Robert Vance',       project: 'Bahria Town Expansion',   status: 'On-Site',   lastContact: 'Today, 10:45 AM'    },
  { name: 'Mr. Salman Qureshi',   contact: 'Direct',             project: 'DHA Phase 8 Duplex',       status: 'Finishing', lastContact: 'Yesterday, 2:00 PM' },
  { name: 'Commercial Group Ltd',  contact: 'Engr. Asad Farooq',  project: 'Defence Rd Office Block',  status: 'Active',    lastContact: 'Nov 22, 9:30 AM'   },
  { name: 'Heritage Builders',     contact: 'Ms. Sara Tariq',     project: 'Engineers Town Villa',     status: 'Completed', lastContact: 'Nov 18, 11:00 AM'  },
]

const STATUS_COLORS: Record<string, string> = {
  'On-Site':  'text-primary bg-primary/10',
  'Finishing': 'text-tertiary bg-tertiary/10',
  'Active':   'text-green-600 bg-green-50',
  'Completed': 'text-on-surface-variant bg-surface-container',
}

const PRIORITY_COLORS: Record<string, string> = {
  High:   'text-error bg-error-container',
  Medium: 'text-tertiary bg-tertiary/10',
  Low:    'text-on-surface-variant bg-surface-container',
}

const inp = 'w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-[13px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors'

export default function ClientsPage() {
  const [showModal, setShowModal] = useState(false)
  const [leads, setLeads] = useState(LEADS)
  const [form, setForm] = useState({ name: '', project: '', phone: '', type: 'Residential', priority: 'Medium', note: '' })
  const [saving, setSaving] = useState(false)

  function addLead(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setLeads(l => [{ ...form, date: 'Just now' }, ...l])
      setForm({ name: '', project: '', phone: '', type: 'Residential', priority: 'Medium', note: '' })
      setShowModal(false)
      setSaving(false)
    }, 600)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-semibold text-on-surface">Client &amp; Lead Manager</h2>
          <p className="text-on-surface-variant text-[13px] mt-1">Centralised hub for stakeholder communication and acquisition.</p>
        </div>
        <button onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:brightness-110 transition-all">
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          Add Lead
        </button>
      </div>

      {/* Add Lead Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-surface rounded-2xl border border-outline-variant w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between p-5 border-b border-outline-variant">
              <h3 className="font-semibold text-[16px] text-on-surface">Add New Lead</h3>
              <button onClick={() => setShowModal(false)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={addLead} className="p-5 space-y-3">
              <input className={inp} placeholder="Contact Name *" required
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              <input className={inp} placeholder="Project / Enquiry Title *" required
                value={form.project} onChange={e => setForm(f => ({ ...f, project: e.target.value }))} />
              <input className={inp} placeholder="Phone Number"
                value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              <div className="grid grid-cols-2 gap-3">
                <select className={inp}
                  value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Renovation</option>
                  <option>Turnkey</option>
                </select>
                <select className={inp}
                  value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <textarea className={`${inp} resize-none h-20`} placeholder="Notes / Project details"
                value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
              <div className="flex gap-3 pt-1">
                <button type="button" onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-outline-variant text-[13px] font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={saving}
                  className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary text-[13px] font-semibold hover:brightness-110 transition-all disabled:opacity-60">
                  {saving ? 'Saving…' : 'Add Lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Leads */}
      <div className="bg-surface rounded-2xl border border-outline-variant">
        <div className="p-5 border-b border-outline-variant flex items-center justify-between">
          <h3 className="font-semibold text-[15px] text-on-surface">New Leads</h3>
          <span className="text-[11px] text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full font-semibold">{leads.length}</span>
        </div>
        <div className="divide-y divide-outline-variant">
          {leads.map((l, i) => (
            <div key={i} className="p-5 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-semibold text-[14px] text-on-surface">{l.project}</span>
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${PRIORITY_COLORS[l.priority]}`}>
                    {l.priority}
                  </span>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                    {l.type}
                  </span>
                </div>
                <div className="text-[12px] text-on-surface-variant mb-1">Lead: {l.name}</div>
                {l.note && <div className="text-[12px] text-on-surface-variant">{l.note}</div>}
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="text-[11px] text-on-surface-variant">{l.date}</span>
                <button className="flex items-center gap-1 text-[12px] text-primary font-semibold hover:underline">
                  <span className="material-symbols-outlined text-[14px]">call</span>
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Clients */}
      <div className="bg-surface rounded-2xl border border-outline-variant">
        <div className="flex items-center justify-between p-5 border-b border-outline-variant">
          <h3 className="font-semibold text-[15px] text-on-surface">Active Clients</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container">
                {['Client Name', 'Contact', 'Project', 'Status', 'Last Contact'].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {CLIENTS.map(c => (
                <tr key={c.name} className="hover:bg-surface-container transition-colors">
                  <td className="px-5 py-3.5 font-semibold text-on-surface">
                    <a href="/portal/clients/1" className="hover:text-primary transition-colors">{c.name}</a>
                  </td>
                  <td className="px-5 py-3.5 text-on-surface-variant">{c.contact}</td>
                  <td className="px-5 py-3.5 text-on-surface">{c.project}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-on-surface-variant whitespace-nowrap">{c.lastContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
