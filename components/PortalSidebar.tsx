'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/portal',          icon: 'dashboard',       label: 'Dashboard'  },
  { href: '/portal/projects', icon: 'architecture',    label: 'Projects'   },
  { href: '/portal/finance',  icon: 'account_balance', label: 'Finance'    },
  { href: '/portal/clients',  icon: 'groups',          label: 'Clients'    },
]

export default function PortalSidebar() {
  const path = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 bg-surface border-r border-outline-variant min-h-screen">
      <div className="flex items-center gap-2 px-6 h-16 border-b border-outline-variant">
        <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
        <div>
          <div className="text-[13px] font-semibold text-on-surface leading-tight">Ghazi Construction</div>
          <div className="text-[9px] text-on-surface-variant font-medium tracking-widest uppercase">Management Portal</div>
        </div>
      </div>

      <nav className="flex flex-col gap-1 p-3 flex-1">
        {NAV.map(n => {
          const active = path === n.href || (n.href !== '/portal' && path.startsWith(n.href))
          return (
            <Link key={n.href} href={n.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}>
              <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
              {n.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-outline-variant">
        <Link href="/" className="flex items-center gap-2 text-[12px] text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          View Public Site
        </Link>
      </div>
    </aside>
  )
}
