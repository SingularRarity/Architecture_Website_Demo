export default function InteractiveMap() {
  // OpenStreetMap embed — Hyderabad studio location
  const osmSrc =
    'https://www.openstreetmap.org/export/embed.html' +
    '?bbox=78.3867%2C17.2850%2C78.5867%2C17.4850' +
    '&layer=mapnik' +
    '&marker=17.3850%2C78.4867'

  return (
    <section className="bg-surface-container-high h-[600px] flex flex-col md:flex-row overflow-hidden">
      <div className="flex-1 relative">
        <iframe
          src={osmSrc}
          title="Taxila Studio Location — Hyderabad"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
        {/* Studio pin overlay card */}
        <div className="absolute top-md left-md bg-primary text-white px-md py-sm rounded shadow-xl pointer-events-none">
          <p className="font-label-caps text-label-caps text-secondary-fixed">FLAGSHIP STUDIO</p>
          <p className="font-body-md text-body-md">Jubilee Hills, Hyderabad</p>
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
