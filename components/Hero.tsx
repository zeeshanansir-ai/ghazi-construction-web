export default function Hero() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2070"
          alt="Modern construction site"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00184a]/85 via-[#00184a]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 max-w-[1440px] mx-auto w-full pt-16">
        <div className="max-w-2xl text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim inline-block" />
            PEC Registered · ISO 9001:2015 Certified
          </div>

          <h1 className="text-[48px] md:text-[64px] font-semibold leading-tight tracking-tight mb-6">
            Building Pakistan&apos;s Future Infrastructure
          </h1>
          <p className="text-[18px] leading-relaxed opacity-90 mb-10 max-w-xl">
            Pioneering excellence in construction through precision engineering, real-time site auditing, and a commitment to global standards.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-lg text-[20px] font-medium hover:brightness-110 transition-all"
            >
              Request a Consultation
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-[20px] font-medium hover:bg-white/20 transition-all"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
