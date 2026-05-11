const credentials = [
  'ISO 9001:2015 Certified Quality Management',
  'PEC Registered — Pakistan Engineering Council',
  'Advanced BIM Implementation (Level 3)',
  'Zero-Incident Safety Culture Across All Sites',
  'Real-time Drone Video Auditing for Clients',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-primary/20 rounded-tl-sm" />
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=900"
              alt="Ghazi Constructions engineers on site"
              className="rounded-xl shadow-2xl relative z-10 w-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <div>
                <div className="text-[12px] font-semibold text-on-surface">ISO 9001:2015</div>
                <div className="text-[10px] text-on-surface-variant">Quality Certified</div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 md:order-2">
            <span className="text-primary text-[14px] font-semibold tracking-widest uppercase mb-4 block">
              About Ghazi Constructions
            </span>
            <h2 className="text-[32px] font-semibold tracking-tight text-on-background mb-8 leading-10">
              Engineering Excellence with Integrity and Innovation
            </h2>
            <div className="space-y-5 text-on-surface-variant text-[16px] leading-relaxed mb-8">
              <p>
                For over 15 years, Ghazi Constructions has been at the forefront of Pakistan&apos;s
                construction sector. Our firm is built on the pillars of technical precision and
                transparent communication — ensuring every stakeholder is aligned from groundbreaking
                to possession.
              </p>
              <p>
                We leverage cutting-edge technology including real-time drone footage and predictive
                budget analysis to eliminate the traditional risks associated with high-stakes
                infrastructure projects across DHA Lahore, Islamabad, and Gujranwala.
              </p>
            </div>

            <ul className="space-y-3">
              {credentials.map(c => (
                <li key={c} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 flex-shrink-0">check_circle</span>
                  <span className="text-[14px] text-on-surface leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
