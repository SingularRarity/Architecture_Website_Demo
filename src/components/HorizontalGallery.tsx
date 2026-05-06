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
    <section className="w-full overflow-x-auto hide-scrollbar">
      <div className="flex w-fit">
        {projects.map((project, index) => (
          <div key={index} className="relative w-[80vw] md:w-[40vw] h-[600px] flex-shrink-0 group overflow-hidden">
            <Image
              alt={`Gallery ${index + 1}`}
              src={project.image}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex flex-col justify-end p-xl">
              <h4 className="text-white font-headline-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                {project.title}
              </h4>
              <div className="w-0 group-hover:w-1/4 h-0.5 bg-secondary-fixed mt-sm transition-all duration-700 delay-100"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}