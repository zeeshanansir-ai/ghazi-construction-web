const LINKS = {
  Services: ['Gray Structure', 'Architectural Design', 'Interior Finishing', 'Turnkey Solutions', 'Waterproofing & MEP', 'Real Estate Consultancy'],
  Company:  ['About Us', 'Our Projects', 'Safety Standards', 'Sustainability', 'Portal Login'],
}

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-inverse-primary text-3xl">architecture</span>
              <div>
                <div className="text-[15px] font-semibold tracking-tight leading-tight">Ghazi Construction</div>
                <div className="text-[10px] opacity-60 font-medium tracking-widest uppercase">Est. 1996</div>
              </div>
            </div>
            <p className="text-[13px] opacity-70 leading-relaxed max-w-sm mb-6">
              Building Lahore's structural integrity and sustainable futures through
              high-precision engineering since 1996. Structural Integrity Guaranteed.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[16px] opacity-60">star</span>
              <span className="text-[13px] font-semibold">4.69 Google Rating</span>
              <span className="text-[11px] opacity-60">· 500+ Happy Clients</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.facebook.com/GhaziConstructions/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@ghaziconstructioncompany"
                target="_blank" rel="noopener noreferrer"
                aria-label="TikTok"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[11px] font-semibold tracking-widest uppercase opacity-60 mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    <a href={l === 'Our Projects' ? '/projects' : l === 'Portal Login' ? '/portal' : '/#services'}
                      className="text-[13px] opacity-70 hover:opacity-100 transition-opacity">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-[12px] opacity-50">
            © {new Date().getFullYear()} Ghazi Construction Company. All rights reserved. Founded by Ansar Ahmad Siddiqui.
          </div>
          <div className="flex items-center gap-1.5 text-[12px] opacity-50">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            Office No. 2, Defence Rd, Block B-1 Engineers Town, Lahore 54000
          </div>
        </div>
      </div>
    </footer>
  )
}
