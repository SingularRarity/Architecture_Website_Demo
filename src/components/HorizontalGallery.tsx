import Image from 'next/image'

export default function HorizontalGallery() {
  const projects = [
    {
      title: 'Courtyard Residence',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85&auto=format&fit=crop'
    },
    {
      title: 'The Ridge Villa',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85&auto=format&fit=crop'
    },
    {
      title: 'Zenith Office',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85&auto=format&fit=crop'
    }
  ]

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-lg pt-xl pb-md flex items-end justify-between">
        <div>
          <span className="font-label-caps text-label-caps text-secondary font-bold block mb-sm">
            OUR WORK
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Selected Projects
          </h2>
        </div>
        <a
          href="/projects"
          className="font-label-caps text-label-caps text-secondary font-bold inline-flex items-center gap-xs group"
        >
          View All
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
      <div className="w-full overflow-x-auto hide-scrollbar">
        <div className="flex w-fit">
          {projects.map((project, index) => (
            <div key={index} className="relative w-[80vw] md:w-[40vw] h-[600px] flex-shrink-0 group overflow-hidden">
              <Image
                alt={project.title}
                src={project.image}
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-xl">
                <h4 className="text-white font-headline-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {project.title}
                </h4>
                <div className="w-0 group-hover:w-1/4 h-0.5 bg-secondary-fixed mt-sm transition-all duration-700 delay-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
