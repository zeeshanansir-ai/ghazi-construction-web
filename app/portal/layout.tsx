import PortalSidebar from '@/components/PortalSidebar'

export const metadata = { title: 'Management Portal | Ghazi Construction' }

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gc-bg">
      <PortalSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-surface border-b border-outline-variant flex items-center justify-between px-6 shrink-0">
          <h1 className="text-[15px] font-semibold text-on-surface">Executive Portal</h1>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
            </button>
            <div className="flex items-center gap-2 text-[13px] font-semibold text-on-surface">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">person</span>
              </div>
              Executive Director
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}
