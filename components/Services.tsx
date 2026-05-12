const SERVICES = [
  {
    icon: 'architecture',
    title: 'Architectural Design',
    desc: 'Customized 3D modelling and structural planning tailored to your vision, site constraints, and budget from concept to approved drawings.',
  },
  {
    icon: 'foundation',
    title: 'Gray Structure',
    desc: 'Engineer-certified foundation, columns, beams, brickwork, and roof slab with real-time video progress updates for full transparency.',
  },
  {
    icon: 'format_paint',
    title: 'Interior Finishing',
    desc: 'Luxury finishes, custom woodwork, imported tile installation, and bespoke fixtures — crafted for lasting elegance and daily comfort.',
  },
  {
    icon: 'domain',
    title: 'Real Estate Consultancy',
    desc: 'Strategic plot selection in DHA and Bahria Town with investment guidance for maximum asset appreciation and resale value.',
  },
  {
    icon: 'home_work',
    title: 'Turnkey Solutions',
    desc: 'End-to-end project management from plot to possession. One contract, one team, zero coordination headaches.',
  },
  {
    icon: 'water_damage',
    title: 'Waterproofing & MEP',
    desc: 'Chemical and membrane waterproofing for roofs and basements, plus concealed electrical, CPVC plumbing, and HVAC installations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gc-bg py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">

        <div className="text-center mb-14">
          <span className="inline-block text-primary text-[11px] font-semibold tracking-widest uppercase mb-3">
            Our Expertise
          </span>
          <h2 className="text-[32px] md:text-[42px] font-semibold text-on-surface tracking-tight leading-tight">
            Comprehensive Engineering &amp; Construction Services
          </h2>
          <p className="mt-4 text-on-surface-variant text-[15px] max-w-2xl mx-auto leading-relaxed">
            We deliver end-to-end turnkey solutions for Lahore's most prestigious projects —
            Modern Minimalist and Spanish/Classic luxury aesthetics with rigid project management protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <div key={s.title}
              className="bg-surface rounded-2xl p-7 border border-outline-variant hover:shadow-md transition-shadow group">
              <span className="material-symbols-outlined text-primary text-[36px] mb-4 block">
                {s.icon}
              </span>
              <h3 className="text-on-surface text-[17px] font-semibold mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-on-surface-variant text-[13px] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-lg text-[14px] font-semibold hover:brightness-110 transition-all">
            Discuss Your Project
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
