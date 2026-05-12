import { supabaseAdmin } from '@/lib/supabase'

const MILESTONES = [
  { title: 'Foundation Pouring: Bahria Villa', date: 'Nov 28', tag: 'Phase A-7'   },
  { title: 'Roof Slab: Engineers Town Duplex', date: 'Dec 3',  tag: 'On Schedule' },
  { title: 'Safety Inspection — All Sites',   date: 'Dec 5',  tag: 'Quarterly'   },
  { title: 'Client Walkthrough: DHA Residence', date: 'Dec 8', tag: 'Final Stage' },
]

const STATUS_LABELS: Record<string, string> = {
  'on-track':  'On Track',
  'near-done': 'Near Done',
  'risk':      'Risk',
  'completed': 'Completed',
}

const STATUS_COLORS: Record<string, string> = {
  'on-track':  'text-green-600 bg-green-50',
  'near-done': 'text-primary bg-primary/10',
  'risk':      'text-error bg-error-container',
  'completed': 'text-on-surface-variant bg-surface-container',
}

export const dynamic = 'force-dynamic'

export default async function PortalDashboard() {
  const db = supabaseAdmin()
  const { data: projects = [] } = await db
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true })

  const active   = (projects ?? []).filter(p => p.status !== 'completed')
  const done     = (projects ?? []).filter(p => p.status === 'completed')
  const atRisk   = (projects ?? []).filter(p => p.status === 'risk')

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[22px] font-semibold text-on-surface">Executive Overview</h2>
        <p className="text-on-surface-variant text-[13px] mt-1">Real-time construction performance and financial health.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Projects',   value: String(active.length),    sub: `${done.length} completed`,    icon: 'construction',        color: 'text-primary'   },
          { label: 'Projects at Risk',  value: String(atRisk.length),    sub: 'Need attention',              icon: 'warning',             color: 'text-error'     },
          { label: 'Total Projects',    value: String((projects ?? []).length), sub: 'In database',          icon: 'architecture',        color: 'text-tertiary'  },
          { label: 'Avg. Progress',     value: `${Math.round(active.reduce((a, p) => a + p.progress_percentage, 0) / (active.length || 1))}%`, sub: 'Active sites', icon: 'donut_large', color: 'text-green-600' },
        ].map(m => (
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
        {/* Active Projects from DB */}
        <div className="lg:col-span-2 bg-surface rounded-2xl border border-outline-variant">
          <div className="flex items-center justify-between p-5 border-b border-outline-variant">
            <h3 className="font-semibold text-[15px] text-on-surface">Active Projects Status</h3>
            <a href="/portal/projects" className="text-[12px] text-primary font-semibold hover:underline flex items-center gap-1">
              View All <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
          <div className="divide-y divide-outline-variant">
            {active.length === 0 && (
              <div className="p-8 text-center text-on-surface-variant text-[13px]">
                No active projects yet. Add them in the Projects tab.
              </div>
            )}
            {active.map(p => (
              <div key={p.id} className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-[14px] text-on-surface">{p.name}</div>
                    <div className="text-[12px] text-on-surface-variant">{p.client_name}</div>
                  </div>
                  <span className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${STATUS_COLORS[p.status]}`}>
                    {STATUS_LABELS[p.status]}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-surface-container rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${p.status === 'risk' ? 'bg-error' : 'bg-primary'}`}
                      style={{ width: `${p.progress_percentage}%` }} />
                  </div>
                  <span className="text-[12px] font-semibold text-on-surface w-8 text-right">{p.progress_percentage}%</span>
                  <span className="text-[11px] text-on-surface-variant">{p.budget_value}</span>
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
