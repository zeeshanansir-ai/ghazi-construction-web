import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

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

const BAR_COLORS: Record<string, string> = {
  'on-track':  'bg-primary',
  'near-done': 'bg-primary',
  'risk':      'bg-error',
  'completed': 'bg-green-500',
}

export default async function PortalProjectsPage() {
  const db = supabaseAdmin()
  const { data: projects = [], error } = await db
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true })

  const active    = (projects ?? []).filter(p => p.status !== 'completed')
  const completed = (projects ?? []).filter(p => p.status === 'completed')

  const statsData = [
    { label: 'Total Sites',   value: String((projects ?? []).length), icon: 'account_balance' },
    { label: 'Ongoing Sites', value: String(active.length),           icon: 'construction'    },
    { label: 'Workforce',     value: String((projects ?? []).reduce((a: number, p: any) => a + (p.team_size ?? 0), 0)), icon: 'engineering' },
    { label: 'Completed',     value: String(completed.length),        icon: 'check_circle'    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-semibold text-on-surface">Project Portfolio</h2>
          <p className="text-on-surface-variant text-[13px] mt-1">
            Overseeing {active.length} active construction site{active.length !== 1 ? 's' : ''}.
          </p>
        </div>
        <a href="/portal/projects/1"
          className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:brightness-110 transition-all">
          <span className="material-symbols-outlined text-[18px]">add_business</span>
          New Project
        </a>
      </div>

      {error && (
        <div className="bg-error-container text-on-error-container px-4 py-3 rounded-xl text-[13px]">
          Could not load projects — check Supabase env vars.
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map(s => (
          <div key={s.label} className="bg-surface rounded-2xl border border-outline-variant p-5">
            <span className="material-symbols-outlined text-primary text-[22px] mb-2 block">{s.icon}</span>
            <div className="text-[22px] font-semibold text-on-surface leading-none mb-1">{s.value}</div>
            <div className="text-[11px] text-on-surface-variant font-semibold tracking-widest uppercase">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Project cards */}
      <div className="space-y-4">
        {(projects ?? []).map((p: any) => (
          <div key={p.id} className="bg-surface rounded-2xl border border-outline-variant p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                <div className="font-semibold text-[15px] text-on-surface">{p.name}</div>
                <div className="text-[12px] text-on-surface-variant">Client: {p.client_name}</div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`text-[10px] font-semibold px-3 py-1 rounded-full ${STATUS_COLORS[p.status]}`}>
                  {STATUS_LABELS[p.status]}
                </span>
                {(p.team_size ?? 0) > 0 && (
                  <span className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]">engineering</span>
                    {p.team_size} workers
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-surface-container rounded-full h-2">
                <div className={`h-2 rounded-full ${BAR_COLORS[p.status] ?? 'bg-primary'}`}
                  style={{ width: `${p.progress_percentage}%` }} />
              </div>
              <span className="text-[12px] font-semibold text-on-surface w-8 text-right">{p.progress_percentage}%</span>
            </div>

            <div className="flex items-center gap-6 mt-3 text-[12px] text-on-surface-variant">
              <span>Budget: <strong className="text-on-surface">{p.budget_value}</strong></span>
              {p.spent_value && <span>Spent: <strong className={p.status === 'risk' ? 'text-error' : 'text-on-surface'}>{p.spent_value}</strong></span>}
              {p.location && <span>{p.location}</span>}
            </div>

            <a href={`/portal/projects/${p.id}`}
              className="inline-flex items-center gap-1 text-[12px] text-primary font-semibold hover:underline mt-3">
              View Detail <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        ))}

        {(projects ?? []).length === 0 && !error && (
          <div className="bg-surface rounded-2xl border border-outline-variant p-12 text-center">
            <span className="material-symbols-outlined text-on-surface-variant text-[48px] mb-4 block">construction</span>
            <div className="text-[15px] font-semibold text-on-surface mb-2">No projects yet</div>
            <p className="text-[13px] text-on-surface-variant">Run the schema SQL in Supabase to seed your first projects.</p>
          </div>
        )}
      </div>
    </div>
  )
}
