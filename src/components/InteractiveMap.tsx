import Image from 'next/image'

export default function InteractiveMap() {
  return (
    <section className="bg-surface-container-high h-[600px] flex flex-col md:flex-row overflow-hidden">
      <div className="flex-1 relative bg-surface-dim">
        {/* Simulated Map */}
        <Image
          alt="Project Locations Map"
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80&auto=format&fit=crop"
          fill
          sizes="(max-width: 768px) 100vw, calc(100vw - 400px)"
          unoptimized
          className="object-cover mix-blend-multiply opacity-50"
        />
        {/* Map Pin */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative group cursor-pointer">
            <span className="material-symbols-outlined text-secondary text-[40px]" data-icon="location_on" data-weight="fill">
              location_on
            </span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-sm bg-primary text-white p-sm rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <p className="font-label-caps text-label-caps">Flagship Studio: Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[400px] bg-primary-container p-xl flex flex-col justify-center">
        <h2 className="font-headline-md text-headline-md text-white mb-md">
          Global Presence
        </h2>
        <p className="font-body-md text-body-md text-on-primary-fixed-variant mb-xl">
          From our roots in the Deccan to international shores, we build wherever vision meets necessity.
        </p>
        <ul className="space-y-md">
          <li className="flex items-center text-white font-label-caps text-label-caps">
            <span className="w-2 h-2 bg-secondary-fixed rounded-full mr-sm"></span>
            Hyderabad, IN
          </li>
          <li className="flex items-center text-white font-label-caps text-label-caps">
            <span className="w-2 h-2 bg-secondary-fixed rounded-full mr-sm"></span>
            Dubai, UAE
          </li>
          <li className="flex items-center text-white font-label-caps text-label-caps">
            <span className="w-2 h-2 bg-secondary-fixed rounded-full mr-sm"></span>
            Singapore
          </li>
        </ul>
      </div>
    </section>
  )
}