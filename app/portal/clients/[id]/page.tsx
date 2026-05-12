const CLIENT = {
  company:     'Modern Estates Ltd.',
  contact:     'Robert Vance',
  title:       'Chief Operations Officer',
  email:       'r.vance@modernestates.pk',
  phone:       '+92 321 5556789',
  since:       'Jan 2022',
  manager:     'Ansar Ahmad Siddiqui',
  totalValue:  'PKR 3.1 Cr',
  totalProjects: 3,
  about:       'Modern Estates Ltd. is a leading residential developer in Lahore specialising in luxury villa communities and gated housing societies. They operate across DHA and Bahria Town, focusing on high-quality construction with modern finishes.',
  type:        'Residential Development',
  team: [
    { name: 'Engr. Tariq Mehmood', role: 'Lead Structural Engineer' },
    { name: 'Usman Khalid',        role: 'Site Manager'             },
    { name: 'Ayesha Noor',         role: 'Interior Design Lead'     },
  ],
  projects: [
    { name: 'Bahria Town Expansion', stage: 'Gray Structure — Phase II', progress: 68, budget: 'PKR 2.1 Cr', spent: 'PKR 1.43 Cr', status: 'Active'  },
    { name: 'DHA Phase 6 Villa',     stage: 'Handover Complete',         progress: 100, budget: 'PKR 0.9 Cr', spent: 'PKR 0.9 Cr',  status: 'Done'    },
    { name: 'Johar Town Duplex',     stage: 'Permitting & Design',       progress: 12,  budget: 'PKR 0.6 Cr', spent: 'PKR 0.07 Cr', status: 'Review'  },
  ],
  invoices: [
    { project: 'Bahria Town Expansion', date: 'Nov 15, 2024', amount: 'PKR 75,00,000', status: 'Paid'    },
    { project: 'Bahria Town Expansion', date: 'Oct 28, 2024', amount: 'PKR 68,00,000', status: 'Paid'    },
    { project: 'Johar Town Duplex',     date: 'Nov 05, 2024', amount: 'PKR 7,00,000',  status: 'Pending' },
  ],
  docs: [
    { name: 'Master_Contract_2024.pdf',    size: '4.2 MB', icon: 'description' },
    { name: 'Site_Blueprints_Bahria.dwg',  size: '12.1 MB', icon: 'architecture' },
    { name: 'Scope_of_Work_v3.docx',       size: '1.8 MB', icon: 'folder_open' },
  ],
}

const STATUS_COLORS: Record<string, string> = {
  Active:  'text-primary bg-primary/10',
  Done:    'text-green-600 bg-green-50',
  Review:  'text-tertiary bg-tertiary/10',
  Paid:    'text-green-600 bg-green-50',
  Pending: 'text-tertiary bg-tertiary/10',
}

export default function ClientProfilePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary text-[28px]">corporate_fare</span>
        </div>
        <div className="flex-1">
          <h2 className="text-[22px] font-semibold text-on-surface">{CLIENT.company}</h2>
          <div className="text-[13px] text-on-surface-variant mt-0.5">Partner since {CLIENT.since} · Account Manager: {CLIENT.manager}</div>
          <div className="flex items-center gap-4 mt-3 flex-wrap">
            <span className="text-[13px] font-semibold text-on-surface">Total Value: <span className="text-primary">{CLIENT.totalValue}</span></span>
            <span className="text-[13px] text-on-surface-variant">{CLIENT.totalProjects} Projects</span>
            <span className="text-[11px] bg-surface-container text-on-surface-variant px-3 py-1 rounded-full font-semibold">{CLIENT.type}</span>
          </div>
        </div>
        <a href="tel:+923215556789"
          className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:brightness-110 transition-all shrink-0">
          <span className="material-symbols-outlined text-[18px]">phone</span>
          Call Client
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* About + Contact */}
        <div className="space-y-4">
          <div className="bg-surface rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-[14px] text-on-surface mb-3">About</h3>
            <p className="text-[13px] text-on-surface-variant leading-relaxed">{CLIENT.about}</p>
          </div>

          <div className="bg-surface rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-[14px] text-on-surface mb-4">Primary Contact</h3>
            <div className="font-semibold text-[14px] text-on-surface mb-0.5">{CLIENT.contact}</div>
            <div className="text-[12px] text-on-surface-variant mb-3">{CLIENT.title}</div>
            <a href={`mailto:${CLIENT.email}`} className="flex items-center gap-2 text-[12px] text-primary mb-1 hover:underline">
              <span className="material-symbols-outlined text-[14px]">mail</span>{CLIENT.email}
            </a>
            <a href={`tel:${CLIENT.phone}`} className="flex items-center gap-2 text-[12px] text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[14px]">phone</span>{CLIENT.phone}
            </a>
          </div>

          {/* Team */}
          <div className="bg-surface rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-[14px] text-on-surface mb-4">Our Team on This Account</h3>
            <div className="space-y-3">
              {CLIENT.team.map(t => (
                <div key={t.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[16px]">person</span>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-on-surface">{t.name}</div>
                    <div className="text-[11px] text-on-surface-variant">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="bg-surface rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-[14px] text-on-surface mb-4">Documents</h3>
            <div className="space-y-3">
              {CLIENT.docs.map(d => (
                <div key={d.name} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">{d.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-on-surface truncate">{d.name}</div>
                    <div className="text-[11px] text-on-surface-variant">{d.size}</div>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects + Invoices */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface rounded-2xl border border-outline-variant">
            <div className="p-5 border-b border-outline-variant">
              <h3 className="font-semibold text-[15px] text-on-surface">Active Projects</h3>
            </div>
            <div className="divide-y divide-outline-variant">
              {CLIENT.projects.map(p => (
                <div key={p.name} className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-semibold text-[14px] text-on-surface">{p.name}</div>
                      <div className="text-[12px] text-on-surface-variant">{p.stage}</div>
                    </div>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${STATUS_COLORS[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1 bg-surface-container rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: `${p.progress}%` }} />
                    </div>
                    <span className="text-[12px] font-semibold text-on-surface w-8 text-right">{p.progress}%</span>
                  </div>
                  <div className="flex gap-5 text-[12px] text-on-surface-variant">
                    <span>Budget: <strong className="text-on-surface">{p.budget}</strong></span>
                    <span>Spent: <strong className="text-on-surface">{p.spent}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Invoices */}
          <div className="bg-surface rounded-2xl border border-outline-variant">
            <div className="p-5 border-b border-outline-variant">
              <h3 className="font-semibold text-[15px] text-on-surface">Recent Invoices</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-outline-variant bg-surface-container">
                    {['Project', 'Date', 'Amount', 'Status'].map(h => (
                      <th key={h} className="text-left px-5 py-3 text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {CLIENT.invoices.map((inv, i) => (
                    <tr key={i} className="hover:bg-surface-container transition-colors">
                      <td className="px-5 py-3.5 text-on-surface">{inv.project}</td>
                      <td className="px-5 py-3.5 text-on-surface-variant whitespace-nowrap">{inv.date}</td>
                      <td className="px-5 py-3.5 font-semibold text-on-surface">{inv.amount}</td>
                      <td className="px-5 py-3.5">
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[inv.status]}`}>
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
