import Image from 'next/image'

export default function HorizontalGallery() {
  const projects = [
    {
      title: 'Courtyard Residence',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf8IzUoyoMbBTQD2ddB-WKSJ1Kk37wQ8qlvqWf9xnDevB9XaqvbXH9MNz4Anaw-hB2Kl_Vgol8tJ_wSe3kOBkI2Be1YrJQa-I6t52_lB6VcaQZQHcGy9U2pEz2CnUcIWfxRjV4C7nR0nrElWmg1BdNsxmrTNOm3jAn7Ty2YVSA2EK0lKDLUBCeW3fAzFFPVyvZj4TG-PY6DyrwYHvMFxkznxWjWYRRT2UEp87ZmcVJG19CfN3Ai4ZkVdVWNMhlssCySKRep04RuIw'
    },
    {
      title: 'The Ridge Villa',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzVQ1o-vfjC1LnEYFPDL4pX1qYAdPGZaWkifLBCdF2sIJHa72pDOzDs0eg9QkyTO5BjP4vNIyYicCbiG-gA1kX6oWtKXY403hGyEeZPsEWLcNzc-GJ3Gk6pqwckfU-XSvIkXgW3fHq6ge__ENXjWefxwriNeuC9RmNkNdBaWcxB11aWgCWYYqUQ1Yty2-2kFGDwxapn7CgtbcUvIn5KhZwkQomp2N_-vidtndy1jfAlXmInLL6dRrXxsDACYgfr_Btjn0iv9quxbc'
    },
    {
      title: 'Zenith Office',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcOg4BfuKIKr_NWzpuO9cvSuQCArEzIJTdOK_5mF0HZLhpmIfFeM_P4STm1sGbRJk5gkX7xu3nlkTx_RmahH-t8kPbSpLKHPkawRuqIh0gfx_nQsLhEGvxz5cLiJdPKS2HkA9QkHhXlqdYvZ4dG12oRlBvWJzyqjcUEqMzo5pUnv-ugrzjtqiZy-sXJ1MJ4HQZhxzXKBW_b5jEk6V3byb8Q6ikk0P6Wh4NCncDNDzAA0iJUkoKGX8whbjjYWbDJrxYNwMa_TNqVLo'
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
