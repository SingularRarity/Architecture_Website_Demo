import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-tertiary-container w-full py-huge mt-huge">
      <div className="max-w-[1440px] mx-auto px-lg grid grid-cols-1 md:grid-cols-4 gap-xl">
        <div className="md:col-span-1">
          <div className="font-headline-md text-headline-md text-primary dark:text-on-primary-fixed mb-md">
            Taxila
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-variant">
            © 2024 Taxila Architecture. Crafted for permanence.
          </p>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-md text-on-surface dark:text-on-tertiary-container">
            OFFICE
          </h5>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-variant">
            304 Stone Plaza, Jubilee Hills<br />
            Hyderabad, TG 500033
          </p>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-md text-on-surface dark:text-on-tertiary-container">
            LINKS
          </h5>
          <ul className="space-y-sm">
            <li>
              <Link
                className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200"
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200"
                href="#"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200"
                href="#"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="font-label-caps text-label-caps text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200"
                href="#"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps font-bold mb-md text-on-surface dark:text-on-tertiary-container">
            NEWSLETTER
          </h5>
          <div className="flex">
            <input
              className="bg-transparent border-b border-outline w-full py-sm focus:border-secondary focus:ring-0 transition-all font-body-md"
              placeholder="Email"
              type="email"
            />
            <button className="ml-sm border-b border-outline hover:border-secondary transition-all">
              <span className="material-symbols-outlined text-secondary" data-icon="north_east">
                north_east
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}