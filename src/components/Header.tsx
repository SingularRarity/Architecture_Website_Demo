'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/services', label: 'Services' },
  { href: '/consultation', label: 'Studio' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant/10 shadow-sm">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-lg h-[80px]">
        <Link href="/" className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
          Taxila
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-xl" aria-label="Primary navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-on-surface-variant font-medium hover:text-secondary transition-all duration-300 font-label-caps text-label-caps py-md px-xs inline-flex items-center"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-md">
          <Link
            href="/consultation"
            className="hidden md:inline-flex font-label-caps text-label-caps font-bold text-primary px-lg py-sm border border-primary hover:bg-primary hover:text-white transition-all duration-300 items-center"
          >
            Contact
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-[44px] h-[44px] gap-[5px]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[400px] border-b border-outline-variant/10' : 'max-h-0'}`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-lg py-md bg-surface" aria-label="Mobile navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-200 py-md border-b border-outline-variant/10 last:border-0"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/consultation"
            onClick={() => setMenuOpen(false)}
            className="mt-md mb-xs font-label-caps text-label-caps font-bold text-primary border border-primary px-lg py-sm text-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
