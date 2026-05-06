export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Master Planning',
      description: 'Conceptualizing large-scale ecosystems that harmonize urban density with natural respite. We read the land before we draw a line.',
    },
    {
      number: '02',
      title: 'Residential Design',
      description: 'Crafting private sanctuaries that reflect the unique heritage and future of the modern individual. Each home is a single unrepeatable thing.',
    },
    {
      number: '03',
      title: 'Interior Architecture',
      description: 'Curating tactile environments where materiality and light create an immersive sensory experience. Surface is structure.',
    },
  ]

  return (
    <section className="py-huge max-w-[1440px] mx-auto px-lg">
      <div className="flex flex-col md:flex-row md:items-start gap-xl md:gap-xxl">
        <div className="md:w-1/3 shrink-0">
          <span className="font-label-caps text-label-caps text-secondary block mb-sm">
            WHAT WE DO
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Built on three disciplines.
          </h2>
        </div>
        <div className="md:w-2/3 divide-y divide-outline-variant/30">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex gap-lg py-xl group"
            >
              <span className="font-label-caps text-label-caps text-outline-variant pt-[6px] shrink-0 w-8">
                {service.number}
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-md group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
