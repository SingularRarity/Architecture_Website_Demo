import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-surface/90 backdrop-blur-md dark:bg-primary/95 sticky top-0 w-full h-[80px] z-50 border-b border-outline-variant/10 shadow-sm">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-lg h-full">
        <div className="font-headline-md text-headline-md font-bold tracking-tight text-primary dark:text-primary-fixed">
          Taxila
        </div>
        <nav className="hidden md:flex items-center space-x-xl">
          <Link
            className="text-on-surface-variant dark:text-on-primary-fixed-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-all duration-300 font-label-caps text-label-caps"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-on-surface-variant dark:text-on-primary-fixed-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-all duration-300 font-label-caps text-label-caps"
            href="#philosophy"
          >
            Philosophy
          </Link>
          <Link
            className="text-on-surface-variant dark:text-on-primary-fixed-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-all duration-300 font-label-caps text-label-caps"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-on-surface-variant dark:text-on-primary-fixed-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed-dim transition-all duration-300 font-label-caps text-label-caps"
            href="#studio"
          >
            Studio
          </Link>
        </nav>
        <div className="flex items-center gap-md">
          <button className="font-label-caps text-label-caps font-bold text-primary px-lg py-sm border border-primary hover:bg-primary hover:text-white transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </header>
  )
}