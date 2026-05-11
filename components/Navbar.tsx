'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/#services',  label: 'Services'  },
  { href: '/#projects',  label: 'Projects'  },
  { href: '/#about',     label: 'About'     },
  { href: '/#contact',   label: 'Contact'   },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeHash,   setActiveHash]   = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-outline-variant' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
          <span className="text-[20px] font-semibold text-primary tracking-tight leading-tight">
            Ghazi Constructions
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[14px] font-semibold tracking-wide transition-colors duration-150 ${
                activeHash === l.href.replace('/', '')
                  ? 'text-primary border-b-2 border-primary pb-0.5'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="bg-primary text-on-primary px-6 py-2 rounded-lg text-[14px] font-semibold hover:bg-primary-container transition-colors"
          >
            Request Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[14px] font-semibold text-on-surface-variant py-2 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-on-primary text-center px-6 py-3 rounded-lg text-[14px] font-semibold"
          >
            Request Consultation
          </a>
        </div>
      )}

      {/* Material Symbols */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
    </header>
  )
}
