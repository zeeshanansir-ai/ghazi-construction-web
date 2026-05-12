'use client'

import { useRouter } from 'next/navigation'

export default function PortalSignOut() {
  const router = useRouter()

  async function signOut() {
    await fetch('/api/portal-auth', { method: 'DELETE' })
    router.push('/portal/login')
    router.refresh()
  }

  return (
    <button onClick={signOut}
      className="flex items-center gap-1.5 text-[12px] text-on-surface-variant hover:text-error transition-colors px-3 py-1.5 rounded-lg hover:bg-error-container">
      <span className="material-symbols-outlined text-[16px]">logout</span>
      Sign Out
    </button>
  )
}
