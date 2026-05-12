const PROJECTS = [
  {
    title: 'Lahore Heights',
    category: 'Residential',
    status: 'Completed',
    location: 'DHA Phase 6, Lahore',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Bahria Town Expansion',
    category: 'Residential',
    status: 'Active',
    location: 'Bahria Town, Lahore',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Engineers Town Villa',
    category: 'Turnkey',
    status: 'Completed',
    location: 'Engineers Town, Lahore',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Gulberg Commercial Plaza',
    category: 'Commercial',
    status: 'Completed',
    location: 'Gulberg III, Lahore',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Model Town Bungalow',
    category: 'Renovation',
    status: 'Completed',
    location: 'Model Town, Lahore',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Defence Road Office Block',
    category: 'Commercial',
    status: 'Ongoing',
    location: 'Defence Rd, Lahore',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
]

const STATUS_COLORS: Record<string, string> = {
  Completed: 'bg-green-600/90',
  Active:    'bg-primary/90',
  Ongoing:   'bg-tertiary/90',
}

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-container py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="inline-block text-primary text-[11px] font-semibold tracking-widest uppercase mb-3">
              Our Portfolio
            </span>
            <h2 className="text-[32px] md:text-[42px] font-semibold text-on-surface tracking-tight leading-tight">
              National Landmark Developments
            </h2>
            <p className="mt-4 text-on-surface-variant text-[15px] max-w-xl leading-relaxed">
              500+ completed projects across Lahore's most prestigious addresses.
            </p>
          </div>
          <a href="/projects"
            className="inline-flex items-center gap-2 border border-outline text-on-surface-variant px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:border-primary hover:text-primary transition-colors shrink-0">
            View All Projects
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <div key={p.title} className="rounded-2xl overflow-hidden border border-outline-variant bg-surface group hover:shadow-lg transition-shadow">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 ${STATUS_COLORS[p.status] ?? 'bg-primary/90'} text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full`}>
                  {p.status}
                </span>
                <span className="absolute top-3 right-3 bg-black/40 text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-on-surface font-semibold text-[15px] mb-1">{p.title}</h3>
                <div className="flex items-center gap-1.5 text-on-surface-variant text-[12px]">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-lg text-[14px] font-semibold hover:brightness-110 transition-all">
            Start Your Project
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
