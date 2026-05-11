const projects = [
  {
    title: 'Lahore Heights',
    category: 'Residential Development',
    desc: 'Luxury residential development in DHA Phase 6 — multi-phase community with state-of-the-art climate control systems.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000',
    featured: true,
  },
  {
    title: 'Port Qasim Logistics',
    category: 'Industrial & Infrastructure',
    desc: 'Industrial warehousing and structural infrastructure for cross-border logistics.',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    title: 'Bahria Town Expansion',
    category: 'Residential Development',
    desc: 'Multi-unit luxury villa complex with Spanish architectural influences.',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
  {
    title: 'Chenab River Crossing',
    category: 'Infrastructure Engineering',
    desc: 'Significant infrastructure engineering project bridging major commercial corridors.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800',
    featured: false,
  },
]

const STATUS_COLORS: Record<string, string> = {
  Completed: 'bg-green-100 text-green-800',
  Ongoing:   'bg-blue-100 text-blue-800',
  Active:    'bg-amber-100 text-amber-800',
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="py-24 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary text-[14px] font-semibold tracking-widest uppercase mb-4 block">Portfolio</span>
            <h2 className="text-[32px] font-semibold tracking-tight text-on-background leading-10">
              Landmark Developments
            </h2>
          </div>
          <a
            href="/projects"
            className="border border-primary text-primary px-6 py-3 rounded-lg text-[14px] font-semibold hover:bg-primary/5 transition-colors whitespace-nowrap"
          >
            View All Projects
          </a>
        </div>

        {/* Asymmetric grid — mirrors Stitch layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          {/* Featured (8-col) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl aspect-video">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181c20]/90 via-[#181c20]/20 to-transparent flex flex-col justify-end p-6">
              <span className="text-primary-fixed-dim text-[12px] font-medium mb-2">{featured.category}</span>
              <h3 className="text-white text-[24px] font-semibold mb-2">{featured.title}</h3>
              <p className="text-surface-variant text-[14px] max-w-md">{featured.desc}</p>
              <span className={`mt-3 self-start text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_COLORS[featured.status]}`}>
                {featured.status}
              </span>
            </div>
          </div>

          {/* Side column (4-col) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {rest.slice(0, 2).map(p => (
              <div key={p.title} className="group relative overflow-hidden rounded-xl flex-1 min-h-[180px]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c20]/90 via-[#181c20]/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-primary-fixed-dim text-[10px] font-medium mb-1">{p.category}</span>
                  <h3 className="text-white text-[16px] font-semibold">{p.title}</h3>
                  <span className={`mt-2 self-start text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_COLORS[p.status]}`}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.slice(2).map(p => (
            <div key={p.title} className="group relative overflow-hidden rounded-xl aspect-video">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181c20]/90 via-[#181c20]/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-primary-fixed-dim text-[12px] font-medium mb-2">{p.category}</span>
                <h3 className="text-white text-[24px] font-semibold mb-1">{p.title}</h3>
                <p className="text-surface-variant text-[14px]">{p.desc}</p>
                <span className={`mt-3 self-start text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_COLORS[p.status]}`}>
                  {p.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
