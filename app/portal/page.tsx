const METRICS = [
  { label: 'Total Revenue',        value: 'PKR 8.5 Cr', sub: '+12% this quarter', icon: 'trending_up',       color: 'text-green-600' },
  { label: 'Operational Expenses', value: 'PKR 3.7 Cr', sub: 'Budget on track',   icon: 'account_balance_wallet', color: 'text-primary' },
  { label: 'Active Projects',      value: '12',         sub: '3 near completion', icon: 'construction',      color: 'text-tertiary' },
  { label: 'Net Profit Margin',    value: '56.5%',      sub: 'Target: 50%+',     icon: 'analytics',         color: 'text-green-600' },
]

const MILESTONES = [
  { title: 'Foundation Pouring: Bahria Villa', date: 'Nov 28', tag: 'Phase A-7'  },
  { title: 'Roof Slab: Engineers Town Duplex', date: 'Dec 3',  tag: 'On Schedule' },
  { title: 'Safety Inspection — All Sites',   date: 'Dec 5',  tag: 'Quarterly'  },
  { title: 'Client Walkthrough: DHA Residence', date: 'Dec 8', tag: 'Final Stage' },
]

const ACTIVE_PROJECTS = [
  { name: 'Bahria Town Expansion',   client: 'Private Client',        progress: 68, budget: 'PKR 2.1 Cr', status: 'On Track'  },
  { name: 'Defence Rd Office Block', client: 'Commercial Group Ltd',  progress: 45, budget: 'PKR 1.4 Cr', status: 'On Track'  },
  { name: 'DHA Phase 8 Duplex',      client: 'Mr. Salman Qureshi',    progress: 82, budget: 'PKR 0.9 Cr', status: 'Near Done' },
  { name: 'Gulberg Renovation',      client: 'Retail Corp',           progress: 33, budget: 'PKR 0.6 Cr', status: 'Risk'      },
]

const STATUS_COLORS: Record<string, string> = {
  'On Track':  'text-green-600 bg-green-50',
  'Near Done': 'text-primary bg-primary/10',
  'Risk':      'text-error bg-error-container',
}

export default function PortalDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[22px] font-semibold text-on-surface">Executive Overview</h2>
        <p className="text-on-surface-variant text-[13px] mt-1">Real-time construction performance and financial health.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map(m => (
          <div key={m.label} className="bg-surface rounded-2xl border border-outline-variant p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-on-surface-variant">{m.label}</span>
              <span className={`material-symbols-outlined text-[20px] ${m.color}`}>{m.icon}</span>
            </div>
            <div className="text-[24px] font-semibold text-on-surface leading-none mb-1">{m.value}</div>
            <div className="text-[11px] text-on-surface-variant">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Projects */}
        <div className="lg:col-span-2 bg-surface rounded-2xl border border-outline-variant">
          <div className="flex items-center justify-between p-5 border-b border-outline-variant">
            <h3 className="font-semibold text-[15px] text-on-surface">Active Projects Status</h3>
            <a href="/portal/projects" className="text-[12px] text-primary font-semibold hover:underline flex items-center gap-1">
              View All <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
          <div className="divide-y divide-outline-variant">
            {ACTIVE_PROJECTS.map(p => (
              <div key={p.name} className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-[14px] text-on-surface">{p.name}</div>
                    <div className="text-[12px] text-on-surface-variant">{p.client}</div>
                  </div>
                  <span className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${STATUS_COLORS[p.status] ?? ''}`}>
                    {p.status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-surface-container rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${p.progress}%` }} />
                  </div>
                  <span className="text-[12px] font-semibold text-on-surface w-8 text-right">{p.progress}%</span>
                  <span className="text-[11px] text-on-surface-variant">{p.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-surface rounded-2xl border border-outline-variant">
          <div className="p-5 border-b border-outline-variant">
            <h3 className="font-semibold text-[15px] text-on-surface">Upcoming Milestones</h3>
          </div>
          <div className="divide-y divide-outline-variant">
            {MILESTONES.map(m => (
              <div key={m.title} className="p-4">
                <div className="text-[13px] font-semibold text-on-surface mb-1">{m.title}</div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-on-surface-variant">{m.tag}</span>
                  <span className="text-[11px] font-semibold text-primary">{m.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
