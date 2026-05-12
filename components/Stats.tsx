const STATS = [
  { value: '28+',  label: 'Years Experience',   icon: 'workspace_premium' },
  { value: '500+', label: 'Projects Completed',  icon: 'domain' },
  { value: '4.69★', label: 'Google Rating',      icon: 'star' },
  { value: '100%', label: 'Client Satisfaction', icon: 'verified' },
]

export default function Stats() {
  return (
    <section className="bg-surface-container border-b border-outline-variant py-14">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(s => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[28px]">{s.icon}</span>
              <div className="text-primary text-[30px] md:text-[36px] font-semibold tracking-tight leading-none">
                {s.value}
              </div>
              <div className="text-on-surface-variant text-[12px] font-semibold tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
