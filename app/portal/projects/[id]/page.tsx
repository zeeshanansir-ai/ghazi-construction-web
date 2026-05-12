const PROJECT = {
  name:      'Bahria Town Expansion — Phase II',
  location:  'Bahria Town, Lahore',
  client:    'Modern Estates Ltd.',
  manager:   'Usman Khalid',
  architect: 'Engr. Tariq Mehmood',
  budget:    'PKR 2.1 Cr',
  spent:     'PKR 1.43 Cr',
  spentPct:  68,
  started:   'March 2024',
  eta:       'April 2025',
  safety:    'ZERO INCIDENT',
  cert:      'PEC Approved',
  about:     "A multi-phase luxury residential community development in Lahore's Bahria Town, prioritising open-concept living and state-of-the-art infrastructure. Ghazi Construction is overseeing the complete structural development — from ground levelling through gray structure, interior finishing, and final handover.",
  timeline: [
    { phase: 'Site Clearance & Levelling', status: 'done',    note: 'Completed on schedule with zero safety incidents.', date: 'Mar 2024' },
    { phase: 'Foundation & Sub-structure', status: 'done',    note: 'Concrete slab and basement work completed, inspected by PEC.', date: 'May 2024' },
    { phase: 'Gray Structure — Phase I',   status: 'done',    note: 'Columns, beams, and ground floor slab fully cast.', date: 'Aug 2024' },
    { phase: 'Gray Structure — Phase II',  status: 'active',  note: 'Currently 55% complete. First floor columns in progress.', date: 'Nov 2024' },
    { phase: 'Roof Slab & Waterproofing',  status: 'pending', note: 'Procurement finalised. Staging begins next month.', date: 'Jan 2025' },
    { phase: 'Interior Finishing',         status: 'pending', note: 'Tiles, woodwork, and paint scheduled post-roof.', date: 'Mar 2025' },
  ],
  personnel: [
    { name: 'Usman Khalid',       role: 'Site Manager'       },
    { name: 'Engr. Tariq Mehmood', role: 'Structural Engineer' },
    { name: 'Ayesha Noor',        role: 'Interior Design Lead' },
    { name: 'Zafar Ali',          role: 'Safety Officer'      },
  ],
}

const PHASE_STYLE: Record<string, { dot: string; label: string }> = {
  done:    { dot: 'bg-green-500',  label: 'Completed'  },
  active:  { dot: 'bg-primary',    label: 'Active'     },
  pending: { dot: 'bg-outline-variant', label: 'Upcoming' },
}

export default function ProjectDetailPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[12px] text-on-surface-variant">
        <a href="/portal/projects" className="hover:text-primary transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          Projects
        </a>
        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
        <span className="text-on-surface">{PROJECT.name}</span>
      </div>

      {/* Header */}
      <div className="bg-surface rounded-2xl border border-outline-variant p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-1">
            <h2 className="text-[22px] font-semibold text-on-surface leading-tight">{PROJECT.name}</h2>
            <div className="flex items-center gap-1.5 text-[13px] text-on-surface-variant mt-1">
              <span className="material-symbols-outlined text-[15px]">location_on</span>
              {PROJECT.location}
            </div>
            <div className="flex flex-wrap gap-3 mt-4 text-[12px] text-on-surface-variant">
              <span>Client: <strong className="text-on-surface">{PROJECT.client}</strong></span>
              <span>·</span>
              <span>Started: <strong className="text-on-surface">{PROJECT.started}</strong></span>
              <span>·</span>
              <span>ETA: <strong className="text-on-surface">{PROJECT.eta}</strong></span>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap shrink-0">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[14px]">verified</span>{PROJECT.safety}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              {PROJECT.cert}
            </span>
          </div>
        </div>
        <p className="mt-5 text-[13px] text-on-surface-variant leading-relaxed border-t border-outline-variant pt-5">{PROJECT.about}</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Budget',    value: PROJECT.budget,           icon: 'account_balance' },
          { label: 'Spent to Date',   value: PROJECT.spent,            icon: 'payments'        },
          { label: 'Overall Progress', value: `${PROJECT.spentPct}%`,  icon: 'donut_large'    },
          { label: 'Safety Record',   value: '0 Incidents',            icon: 'health_and_safety' },
        ].map(m => (
          <div key={m.label} className="bg-surface rounded-2xl border border-outline-variant p-5">
            <span className="material-symbols-outlined text-primary text-[22px] mb-2 block">{m.icon}</span>
            <div className="text-[20px] font-semibold text-on-surface leading-none mb-1">{m.value}</div>
            <div className="text-[11px] text-on-surface-variant font-semibold tracking-widest uppercase">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="lg:col-span-2 bg-surface rounded-2xl border border-outline-variant p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-[15px] text-on-surface">Timeline Progress</h3>
            <span className="text-[13px] font-semibold text-primary">{PROJECT.spentPct}% Completed</span>
          </div>

          {/* Progress bar */}
          <div className="bg-surface-container rounded-full h-2 mb-8">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${PROJECT.spentPct}%` }} />
          </div>

          <div className="space-y-6">
            {PROJECT.timeline.map((t, i) => {
              const s = PHASE_STYLE[t.status]
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-3 h-3 rounded-full shrink-0 mt-1 ${s.dot}`} />
                    {i < PROJECT.timeline.length - 1 && <div className="w-px flex-1 bg-outline-variant" />}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-semibold text-[13px] text-on-surface">{t.phase}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        t.status === 'done' ? 'bg-green-50 text-green-700' :
                        t.status === 'active' ? 'bg-primary/10 text-primary' :
                        'bg-surface-container text-on-surface-variant'
                      }`}>{s.label}</span>
                      <span className="text-[11px] text-on-surface-variant">{t.date}</span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant leading-relaxed">{t.note}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Personnel */}
        <div className="space-y-6">
          <div className="bg-surface rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-[15px] text-on-surface mb-4">Key Personnel</h3>
            <div className="space-y-4">
              {PROJECT.personnel.map(p => (
                <div key={p.name} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[18px]">person</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[13px] text-on-surface">{p.name}</div>
                    <div className="text-[11px] text-on-surface-variant">{p.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-2xl border border-outline-variant p-5">
            <h3 className="font-semibold text-[15px] text-on-surface mb-4">Financial Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-[13px]">
                <span className="text-on-surface-variant">Total Budget</span>
                <span className="font-semibold text-on-surface">{PROJECT.budget}</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-on-surface-variant">Actual Spend</span>
                <span className="font-semibold text-primary">{PROJECT.spent} ({PROJECT.spentPct}%)</span>
              </div>
              <div className="bg-surface-container rounded-full h-1.5 mt-2">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: `${PROJECT.spentPct}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
