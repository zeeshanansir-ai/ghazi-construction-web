'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/#services',  label: 'Services'  },
  { href: '/#projects',  label: 'Projects'  },
  { href: '/#about',     label: 'About Us'  },
  { href: '/#contact',   label: 'Contact'   },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-outline-variant'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-[1440px] mx-auto px-4 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
          <div>
            <div className="text-[15px] font-semibold text-primary tracking-tight leading-tight">
              Ghazi Construction
            </div>
            <div className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">
              Est. 1996
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="text-[13px] font-semibold tracking-wide text-on-surface-variant hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+923216666906"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[16px]">phone</span>
            +92 321 6666906
          </a>
          <a href="/#contact"
            className="bg-primary text-on-primary px-5 py-2 rounded-lg text-[13px] font-semibold hover:bg-primary-container transition-colors">
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-on-surface p-2" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-[14px] font-semibold text-on-surface-variant py-2 hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="tel:+923216666906"
            className="flex items-center gap-1.5 text-[14px] font-semibold text-primary py-2">
            <span className="material-symbols-outlined text-[16px]">phone</span>
            +92 321 6666906
          </a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}
            className="bg-primary text-on-primary text-center px-6 py-3 rounded-lg text-[14px] font-semibold">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
