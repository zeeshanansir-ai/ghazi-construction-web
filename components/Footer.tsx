export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-inverse-primary text-3xl">architecture</span>
              <span className="text-[18px] font-semibold text-white tracking-tight">Ghazi Constructions</span>
            </div>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-xs">
              Structural Integrity Guaranteed. Building Pakistan&apos;s infrastructure with precision,
              transparency, and 15+ years of engineering excellence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[12px] font-semibold text-white/40 uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'Projects', 'About', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`/#${l.toLowerCase()}`} className="text-[14px] text-white/70 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-semibold text-white/40 uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3 text-[14px] text-white/70">
              <li>
                <a href="tel:+923214441444" className="hover:text-white transition-colors">+92 321 4441444</a>
              </li>
              <li>
                <a href="mailto:info@ghaziconstructions.pk" className="hover:text-white transition-colors">
                  info@ghaziconstructions.pk
                </a>
              </li>
              <li>DHA Phase 6/8, Lahore</li>
              <li>Islamabad · Gujranwala</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
          <span>© {new Date().getFullYear()} Ghazi Constructions. All rights reserved.</span>
          <span>PEC Registered · ISO 9001:2015 Certified</span>
        </div>
      </div>
    </footer>
  )
}
