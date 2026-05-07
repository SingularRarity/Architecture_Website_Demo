import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-huge mt-huge">
      <div className="max-w-[1440px] mx-auto px-lg grid grid-cols-1 md:grid-cols-4 gap-xl">
        <div className="md:col-span-1">
          <Link href="/" className="font-headline-md text-headline-md text-primary block mb-md">
            Taxila
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2026 Taxila Architecture.<br />Crafted for permanence.
          </p>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-md text-on-surface">
            OFFICE
          </h5>
          <p className="font-body-md text-body-md text-on-surface-variant">
            304 Stone Plaza, Jubilee Hills<br />
            Hyderabad, TG 500033
          </p>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-md text-on-surface">
            LINKS
          </h5>
          <ul className="space-y-sm">
            {[
              { label: 'Philosophy', href: '/philosophy' },
              { label: 'Services', href: '/services' },
              { label: 'Projects', href: '/projects' },
              { label: 'Consultation', href: '/consultation' },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-200"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-md text-on-surface">
            NEWSLETTER
          </h5>
          <div className="flex items-end gap-sm">
            <input
              className="bg-transparent border-b border-outline w-full py-sm focus:border-secondary focus:ring-0 focus:outline-none transition-all font-body-md placeholder:text-outline-variant"
              placeholder="Email address"
              type="email"
              aria-label="Newsletter email"
            />
            <button
              className="border-b border-outline hover:border-secondary transition-all pb-sm shrink-0"
              aria-label="Subscribe to newsletter"
            >
              <span className="material-symbols-outlined text-secondary">north_east</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
