'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function PortalLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/portal-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/portal')
      router.refresh()
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gc-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <span className="material-symbols-outlined text-primary text-[48px] mb-3">architecture</span>
          <div className="text-[18px] font-semibold text-on-surface tracking-tight">Ghazi Construction</div>
          <div className="text-[11px] text-on-surface-variant font-medium tracking-widest uppercase mt-1">Management Portal</div>
        </div>

        <div className="bg-surface rounded-2xl border border-outline-variant p-8 shadow-sm">
          <h1 className="text-[17px] font-semibold text-on-surface mb-1">Welcome back</h1>
          <p className="text-[13px] text-on-surface-variant mb-7">Enter your portal password to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-on-surface-variant mb-1.5 tracking-wide uppercase">
                Password
              </label>
              <input
                type="password"
                required
                autoFocus
                value={password}
                onChange={e => { setPassword(e.target.value); setStatus('idle') }}
                placeholder="Enter portal password"
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-[14px] text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {status === 'error' && (
              <p className="text-[13px] text-error flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">error</span>
                Incorrect password. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary text-on-primary py-3 rounded-xl text-[14px] font-semibold hover:brightness-110 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
              {status === 'loading' ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  Signing in…
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-[12px] text-on-surface-variant hover:text-primary transition-colors">
            ← Back to public site
          </a>
        </div>
      </div>
    </div>
  )
}
