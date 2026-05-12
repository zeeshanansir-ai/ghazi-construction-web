'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ProjectModal from '@/components/portal/ProjectModal'

type Project = {
  id: string
  name: string
  client_name: string
  status: string
  progress_percentage: number
  budget_value: string
  spent_value: string
  location: string
  team_size: number
  started_date: string
  eta_date: string
  image_url: string
}

const STATUS_LABELS: Record<string, string> = {
  'on-track': 'On Track', 'near-done': 'Near Done', 'risk': 'At Risk', 'completed': 'Completed',
}
const STATUS_COLORS: Record<string, string> = {
  'on-track': 'text-green-600 bg-green-50', 'near-done': 'text-primary bg-primary/10',
  'risk': 'text-error bg-error-container', 'completed': 'text-on-surface-variant bg-surface-container',
}
const BAR_COLORS: Record<string, string> = {
  'on-track': 'bg-primary', 'near-done': 'bg-primary', 'risk': 'bg-error', 'completed': 'bg-green-500',
}

export default function ProjectsClient({ initialProjects }: { initialProjects: Project[] }) {
  const router = useRouter()
  const [showNew, setShowNew] = useState(false)
  const [editing, setEditing] = useState<Project | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)

  const projects = initialProjects
  const active    = projects.filter(p => p.status !== 'completed')
  const completed = projects.filter(p => p.status === 'completed')

  function refresh() { router.refresh() }

  async function deleteProject(id: string) {
    if (!confirm('Delete this project? This cannot be undone.')) return
    setDeleting(id)
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
    setDeleting(null)
    refresh()
  }

  const stats = [
    { label: 'Total Sites',   value: String(projects.length),          icon: 'account_balance' },
    { label: 'Ongoing Sites', value: String(active.length),            icon: 'construction'    },
    { label: 'Workforce',     value: String(projects.reduce((a, p) => a + (p.team_size ?? 0), 0)), icon: 'engineering' },
    { label: 'Completed',     value: String(completed.length),         icon: 'check_circle'    },
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
        <button onClick={() => setShowNew(true)}
          className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:brightness-110 transition-all">
          <span className="material-symbols-outlined text-[18px]">add_business</span>
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-surface rounded-2xl border border-outline-variant p-5">
            <span className="material-symbols-outlined text-primary text-[22px] mb-2 block">{s.icon}</span>
            <div className="text-[22px] font-semibold text-on-surface leading-none mb-1">{s.value}</div>
            <div className="text-[11px] text-on-surface-variant font-semibold tracking-widest uppercase">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Project cards */}
      <div className="space-y-4">
        {projects.map(p => (
          <div key={p.id} className="bg-surface rounded-2xl border border-outline-variant overflow-hidden">
            <div className="flex gap-0">
              {/* Image strip */}
              {p.image_url && (
                <div className="w-32 shrink-0 hidden sm:block">
                  <img src={p.image_url} alt={p.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1 p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="font-semibold text-[15px] text-on-surface">{p.name}</div>
                    <div className="text-[12px] text-on-surface-variant mt-0.5">
                      {p.client_name}
                      {p.location && <> · {p.location}</>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-semibold px-3 py-1 rounded-full ${STATUS_COLORS[p.status]}`}>
                      {STATUS_LABELS[p.status]}
                    </span>
                    {(p.team_size ?? 0) > 0 && (
                      <span className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                        <span className="material-symbols-outlined text-[14px]">engineering</span>
                        {p.team_size}
                      </span>
                    )}
                    {/* Edit / Delete */}
                    <button onClick={() => setEditing(p)}
                      className="flex items-center gap-1 text-[12px] text-on-surface-variant hover:text-primary transition-colors border border-outline-variant px-3 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-[14px]">edit</span>
                      Edit
                    </button>
                    <button onClick={() => deleteProject(p.id)} disabled={deleting === p.id}
                      className="flex items-center gap-1 text-[12px] text-on-surface-variant hover:text-error transition-colors border border-outline-variant px-3 py-1 rounded-lg disabled:opacity-50">
                      <span className="material-symbols-outlined text-[14px]">{deleting === p.id ? 'progress_activity' : 'delete'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-1 bg-surface-container rounded-full h-2">
                    <div className={`h-2 rounded-full ${BAR_COLORS[p.status] ?? 'bg-primary'}`}
                      style={{ width: `${p.progress_percentage}%` }} />
                  </div>
                  <span className="text-[12px] font-semibold text-on-surface w-8 text-right">{p.progress_percentage}%</span>
                </div>

                <div className="flex items-center gap-5 text-[12px] text-on-surface-variant flex-wrap">
                  <span>Budget: <strong className="text-on-surface">{p.budget_value}</strong></span>
                  {p.spent_value && <span>Spent: <strong className={p.status === 'risk' ? 'text-error' : 'text-on-surface'}>{p.spent_value}</strong></span>}
                  {p.started_date && <span>Started: {p.started_date}</span>}
                  {p.eta_date && <span>ETA: {p.eta_date}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="bg-surface rounded-2xl border border-outline-variant p-12 text-center">
            <span className="material-symbols-outlined text-on-surface-variant text-[48px] mb-4 block">construction</span>
            <div className="text-[15px] font-semibold text-on-surface mb-2">No projects yet</div>
            <button onClick={() => setShowNew(true)} className="text-primary text-[13px] font-semibold hover:underline">
              Create your first project →
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showNew && (
        <ProjectModal onClose={() => setShowNew(false)} onSaved={refresh} />
      )}
      {editing && (
        <ProjectModal project={editing} onClose={() => setEditing(null)} onSaved={refresh} />
      )}
    </div>
  )
}
