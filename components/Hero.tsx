export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
          alt="Ghazi Construction site Lahore"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00184a]/88 via-[#00184a]/55 to-transparent" />
      </div>

      <div className="relative z-10 px-4 md:px-12 max-w-[1440px] mx-auto w-full pt-20">
        <div className="max-w-2xl text-white">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-8">
            <span className="text-yellow-400">★</span>
            4.69 Google Rating · Building Lahore Since 1996
          </div>

          <h1 className="text-[44px] md:text-[62px] font-semibold leading-tight tracking-tight mb-5">
            Construction &amp;<br />Renovation Experts<br />in Lahore
          </h1>
          <p className="text-[17px] leading-relaxed opacity-90 mb-10 max-w-lg">
            From gray structure to turnkey finishing — Ghazi Construction delivers
            precision-built homes and commercial spaces across Lahore with 28+ years
            of trusted expertise.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/#contact"
              className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-lg text-[16px] font-semibold hover:brightness-110 transition-all">
              Get a Free Quote
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a href="/#projects"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-[16px] font-semibold hover:bg-white/20 transition-all">
              View Our Work
            </a>
          </div>

          {/* Phone */}
          <a href="tel:+923216666906"
            className="inline-flex items-center gap-2 mt-8 text-white/70 hover:text-white text-[14px] font-medium transition-colors">
            <span className="material-symbols-outlined text-[18px]">phone</span>
            Call us: +92 321 6666906
          </a>
        </div>
      </div>
    </section>
  )
}
