const PROJECTS = [
  { name: 'Bahria Town Expansion',   client: 'Modern Estates Ltd.',   budget: 'PKR 2.1 Cr', spent: 'PKR 1.43 Cr', progress: 68, status: 'On Track',   team: 24 },
  { name: 'Defence Rd Office Block', client: 'Commercial Group Ltd',  budget: 'PKR 1.4 Cr', spent: 'PKR 0.63 Cr', progress: 45, status: 'On Track',   team: 18 },
  { name: 'DHA Phase 8 Duplex',      client: 'Mr. Salman Qureshi',    budget: 'PKR 0.9 Cr', spent: 'PKR 0.74 Cr', progress: 82, status: 'Near Done',  team: 12 },
  { name: 'Gulberg Renovation',      client: 'Retail Corp',           budget: 'PKR 0.6 Cr', spent: 'PKR 0.63 Cr', progress: 33, status: 'Over Budget', team: 8 },
  { name: 'Engineers Town Villa',    client: 'Private Client',        budget: 'PKR 1.1 Cr', spent: 'PKR 1.1 Cr',  progress: 100, status: 'Completed',  team: 0 },
  { name: 'Model Town Bungalow',     client: 'Dr. Farhan Ahmed',      budget: 'PKR 0.75 Cr', spent: 'PKR 0.75 Cr', progress: 100, status: 'Completed', team: 0 },
]

const STATUS_COLORS: Record<string, string> = {
  'On Track':    'text-green-600 bg-green-50',
  'Near Done':   'text-primary bg-primary/10',
  'Over Budget': 'text-error bg-error-container',
  'Completed':   'text-on-surface-variant bg-surface-container',
}

const STATS = [
  { label: 'Total Value',   value: 'PKR 6.85 Cr', icon: 'account_balance' },
  { label: 'Ongoing Sites', value: '4',            icon: 'construction'    },
  { label: 'Workforce',     value: '62',           icon: 'engineering'     },
  { label: 'Completed',     value: '2',            icon: 'check_circle'    },
]

export default function PortalProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-semibold text-on-surface">Project Portfolio</h2>
          <p className="text-on-surface-variant text-[13px] mt-1">Overseeing {PROJECTS.filter(p => p.status !== 'Completed').length} active construction sites.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:brightness-110 transition-all">
          <span className="material-symbols-outlined text-[18px]">add_business</span>
          New Project
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface rounded-2xl border border-outline-variant p-5">
            <span className="material-symbols-outlined text-primary text-[22px] mb-2 block">{s.icon}</span>
            <div className="text-[22px] font-semibold text-on-surface leading-none mb-1">{s.value}</div>
            <div className="text-[11px] text-on-surface-variant font-semibold tracking-widest uppercase">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {PROJECTS.map(p => (
          <div key={p.name} className="bg-surface rounded-2xl border border-outline-variant p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                <div className="font-semibold text-[15px] text-on-surface">{p.name}</div>
                <div className="text-[12px] text-on-surface-variant">Client: {p.client}</div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`text-[10px] font-semibold px-3 py-1 rounded-full ${STATUS_COLORS[p.status]}`}>
                  {p.status}
                </span>
                {p.team > 0 && (
                  <span className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]">engineering</span>
                    {p.team} workers
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-surface-container rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${p.status === 'Over Budget' ? 'bg-error' : p.status === 'Completed' ? 'bg-green-500' : 'bg-primary'}`}
                  style={{ width: `${p.progress}%` }}
                />
              </div>
              <span className="text-[12px] font-semibold text-on-surface w-8 text-right">{p.progress}%</span>
            </div>

            <div className="flex items-center gap-6 mt-3 text-[12px] text-on-surface-variant">
              <span>Budget: <strong className="text-on-surface">{p.budget}</strong></span>
              <span>Spent: <strong className={p.status === 'Over Budget' ? 'text-error' : 'text-on-surface'}>{p.spent}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
