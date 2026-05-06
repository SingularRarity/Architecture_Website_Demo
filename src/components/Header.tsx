import Link from 'next/link'

const navLinkClass =
  'text-on-surface-variant font-medium hover:text-secondary transition-all duration-300 font-label-caps text-label-caps py-md px-xs inline-flex items-center'

export default function Header() {
  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 w-full h-[80px] z-50 border-b border-outline-variant/10 shadow-sm">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-lg h-full">
        <Link href="/" className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
          Taxila
        </Link>
        <nav className="hidden md:flex items-center space-x-xl">
          <Link className={navLinkClass} href="/projects">Projects</Link>
          <Link className={navLinkClass} href="/philosophy">Philosophy</Link>
          <Link className={navLinkClass} href="/services">Services</Link>
          <Link className={navLinkClass} href="/consultation">Studio</Link>
        </nav>
        <div className="flex items-center gap-md">
          <Link
            href="/consultation"
            className="font-label-caps text-label-caps font-bold text-primary px-lg py-sm border border-primary hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
