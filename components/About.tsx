const CREDENTIALS = [
  'PEC Registered & ISO 9001:2015 Certified',
  'Advanced BIM Implementation for precision delivery',
  'Zero-incident safety culture across all sites',
  'Real-time drone footage auditing for client transparency',
]

export default function About() {
  return (
    <section id="about" className="bg-gc-bg py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=900"
              alt="Ghazi Construction team on site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00184a]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-[40px] font-semibold leading-none">1996</div>
              <div className="text-[13px] font-semibold tracking-widest uppercase opacity-80 mt-1">
                Est. Lahore, Pakistan
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary text-[11px] font-semibold tracking-widest uppercase mb-3">
              About Ghazi Construction
            </span>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-on-surface tracking-tight leading-tight mb-6">
              Engineering Lahore's Landscape with Integrity
            </h2>

            <p className="text-on-surface-variant text-[15px] leading-relaxed mb-5">
              Founded in 1996 by <strong className="text-on-surface">Ansar Ahmad Siddiqui</strong>,
              Ghazi Construction Company has been at the forefront of Lahore's construction
              sector for 28+ years. Under his visionary leadership, we have grown from a
              single-site contractor to one of the city's most trusted names.
            </p>
            <p className="text-on-surface-variant text-[15px] leading-relaxed mb-8">
              We specialise in high-end turnkey projects, bringing Modern Minimalist and
              Spanish/Classic luxury aesthetics to Lahore's structural landscape with technical
              precision. From gray structure to final handover — one team, one standard.
            </p>

            <ul className="space-y-3 mb-10">
              {CREDENTIALS.map(c => (
                <li key={c} className="flex items-start gap-3 text-[14px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check_circle</span>
                  {c}
                </li>
              ))}
            </ul>

            <a href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-lg text-[14px] font-semibold hover:brightness-110 transition-all">
              Work With Us
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
