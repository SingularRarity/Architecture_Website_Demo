export default function Services() {
  const services = [
    {
      icon: 'architecture',
      title: 'Master Planning',
      description: 'Conceptualizing large-scale ecosystems that harmonize urban density with natural respite.'
    },
    {
      icon: 'home_storage',
      title: 'Residential Design',
      description: 'Crafting private sanctuaries that reflect the unique heritage and future of the modern individual.'
    },
    {
      icon: 'chair',
      title: 'Interior Architecture',
      description: 'Curating tactile environments where materiality and light create an immersive sensory experience.'
    }
  ]

  return (
    <section className="py-huge max-w-[1440px] mx-auto px-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
        {services.map((service, index) => (
          <div key={index} className="p-xl border border-outline-variant/20 rounded-xl hover:bg-surface-container-low hover:-translate-y-2 transition-all duration-500 group shadow-sm">
            <div className="mb-lg">
              <span className="material-symbols-outlined text-[48px] text-secondary group-hover:scale-110 transition-transform duration-500" data-icon={service.icon}>
                {service.icon}
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-md">
              {service.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}