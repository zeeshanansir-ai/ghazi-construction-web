'use client'

import { useState, useRef, FormEvent } from 'react'
import { createClient } from '@supabase/supabase-js'

type Project = {
  id?: string
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

const EMPTY: Project = {
  name: '', client_name: '', status: 'on-track',
  progress_percentage: 0, budget_value: 'PKR 0', spent_value: '',
  location: '', team_size: 0, started_date: '', eta_date: '', image_url: '',
}

const inp = 'w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-[13px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors'

function supabaseBrowser() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}

export default function ProjectModal({
  project,
  onClose,
  onSaved,
}: {
  project?: Project | null
  onClose: () => void
  onSaved: () => void
}) {
  const isEdit = Boolean(project?.id)
  const [form, setForm] = useState<Project>(project ?? EMPTY)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  function set(k: keyof Project, v: string | number) {
    setForm(f => ({ ...f, [k]: v }))
  }

  async function uploadImage(file: File) {
    setUploading(true)
    try {
      const sb = supabaseBrowser()
      const ext = file.name.split('.').pop()
      const path = `projects/${Date.now()}.${ext}`
      const { error: upErr } = await sb.storage.from('project-images').upload(path, file, { upsert: true })
      if (upErr) throw upErr
      const { data } = sb.storage.from('project-images').getPublicUrl(path)
      set('image_url', data.publicUrl)
    } catch (e: any) {
      setError('Image upload failed: ' + e.message)
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const url = isEdit
        ? `/api/admin/projects/${project!.id}`
        : `/api/admin/projects`
      const res = await fetch(url, {
        method: isEdit ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const d = await res.json()
        throw new Error(d.error ?? 'Save failed')
      }
      onSaved()
      onClose()
    } catch (e: any) {
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-surface rounded-2xl border border-outline-variant w-full max-w-2xl shadow-2xl my-4">

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-outline-variant">
          <h3 className="font-semibold text-[17px] text-on-surface">
            {isEdit ? 'Edit Project' : 'New Project'}
          </h3>
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">

          {/* Image */}
          <div>
            <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Project Photo</label>
            <div className="relative flex items-center gap-4">
              {form.image_url ? (
                <div className="relative w-24 h-16 rounded-xl overflow-hidden border border-outline-variant shrink-0">
                  <img src={form.image_url} alt="preview" className="w-full h-full object-cover" />
                  <button type="button" onClick={() => set('image_url', '')}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5">
                    <span className="material-symbols-outlined text-[12px]">close</span>
                  </button>
                </div>
              ) : (
                <div className="w-24 h-16 rounded-xl border-2 border-dashed border-outline-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant text-[24px]">photo_camera</span>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <button type="button"
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading}
                  className="flex items-center gap-2 border border-outline-variant px-4 py-2 rounded-xl text-[13px] font-semibold text-on-surface hover:bg-surface-container transition-colors disabled:opacity-60">
                  <span className="material-symbols-outlined text-[16px]">upload</span>
                  {uploading ? 'Uploading…' : 'Upload Photo'}
                </button>
                <p className="text-[11px] text-on-surface-variant">JPG, PNG or WebP. Max 5 MB.</p>
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden"
                onChange={e => { const f = e.target.files?.[0]; if (f) uploadImage(f) }} />
            </div>
          </div>

          {/* Core fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Project Name *</label>
              <input className={inp} required value={form.name}
                onChange={e => set('name', e.target.value)} placeholder="e.g. DHA Phase 6 Villa" />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Client Name *</label>
              <input className={inp} required value={form.client_name}
                onChange={e => set('client_name', e.target.value)} placeholder="e.g. Mr. Salman Qureshi" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Status</label>
              <select className={inp} value={form.status} onChange={e => set('status', e.target.value)}>
                <option value="on-track">On Track</option>
                <option value="near-done">Near Done</option>
                <option value="risk">At Risk</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Progress %</label>
              <input className={inp} type="number" min={0} max={100}
                value={form.progress_percentage}
                onChange={e => set('progress_percentage', Number(e.target.value))} />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Team Size</label>
              <input className={inp} type="number" min={0}
                value={form.team_size}
                onChange={e => set('team_size', Number(e.target.value))} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Budget</label>
              <input className={inp} value={form.budget_value}
                onChange={e => set('budget_value', e.target.value)} placeholder="PKR 1.5 Cr" />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Amount Spent</label>
              <input className={inp} value={form.spent_value}
                onChange={e => set('spent_value', e.target.value)} placeholder="PKR 0.8 Cr" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Location</label>
            <input className={inp} value={form.location}
              onChange={e => set('location', e.target.value)} placeholder="e.g. DHA Phase 6, Lahore" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">Start Date</label>
              <input className={inp} value={form.started_date}
                onChange={e => set('started_date', e.target.value)} placeholder="e.g. Mar 2024" />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wide mb-1.5">ETA / Handover</label>
              <input className={inp} value={form.eta_date}
                onChange={e => set('eta_date', e.target.value)} placeholder="e.g. Dec 2024" />
            </div>
          </div>

          {error && (
            <p className="text-[13px] text-error flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">error</span>{error}
            </p>
          )}

          <div className="flex gap-3 pt-2 border-t border-outline-variant">
            <button type="button" onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-outline-variant text-[13px] font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={saving || uploading}
              className="flex-1 py-3 rounded-xl bg-primary text-on-primary text-[13px] font-semibold hover:brightness-110 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
              {saving
                ? <><span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>Saving…</>
                : isEdit ? 'Save Changes' : 'Create Project'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
