const services = [
  {
    icon: 'domain',
    title: 'Architectural Design',
    desc: 'Customized 3D modeling, structural planning, and BIM Level 3 implementation for residential and commercial projects.',
  },
  {
    icon: 'foundation',
    title: 'Gray Structure Construction',
    desc: 'High-quality foundational and structural work with real-time drone video auditing for full client transparency.',
  },
  {
    icon: 'chair',
    title: 'Interior Finishing',
    desc: 'Luxury finishes, custom woodwork, and imported tile installation — from DHA villas to commercial plazas.',
  },
  {
    icon: 'location_city',
    title: 'Real Estate Consultancy',
    desc: 'Strategic plot selection in DHA and Bahria Town for maximum asset appreciation and long-term returns.',
  },
  {
    icon: 'account_tree',
    title: 'Turnkey Solutions',
    desc: 'End-to-end project management from plot acquisition to possession — one point of accountability.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Infrastructure Development',
    desc: 'Major highway networks, bridges, and industrial utilities designed for longevity and extreme conditions.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gc-surface">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-primary text-[14px] font-semibold tracking-widest uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-[32px] font-semibold tracking-tight text-on-background mb-6 leading-10">
            Comprehensive Engineering &amp; Construction Services
          </h2>
          <p className="text-on-surface-variant text-[16px] leading-relaxed">
            We deliver end-to-end solutions for the most complex structural challenges — combining
            technical mastery with rigid project management protocols.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="group bg-surface-container-lowest p-6 rounded-xl border border-outline-variant hover:border-primary hover:shadow-lg transition-all duration-200 cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="text-[20px] font-medium text-on-surface mb-3">{s.title}</h3>
              <p className="text-on-surface-variant text-[14px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
