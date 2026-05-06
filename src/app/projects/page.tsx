'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Project {
  id: number
  title: string
  category: 'Residential' | 'Commercial' | 'Interiors'
  location: string
  imageUrl: string
  colSpan: string
  aspectRatio: string
}

type FilterCategory = 'All' | 'Residential' | 'Commercial' | 'Interiors'

const FILTER_TABS: FilterCategory[] = ['All', 'Residential', 'Commercial', 'Interiors']

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'The Obsidian House',
    category: 'Residential',
    location: 'Hyderabad',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdahRE6pZbdzHzF4zaxND0y_ASxrf1FfCQ8zmfxOREa-6yz2oEBygj87sgj48oOLrvp_cqzOPm8TzeY3uFDkdEbz_xeDgsW2NvNLXc0gL6y7E0GqXou2eyghQZKdXb76oRWC5Cdg3O7Wo8tjvoaK2K2B7iiAVgC1bNdGW8H0UTPEpJUvTrEWArdXA2a2RzbHKLq3-0Ce5cWlBX0Y1nZIAZPnYa5hcx50oUCFP2BaqHNlqwack3S707aDwzQowmxKkvhMFlRhmZI-A',
    colSpan: 'md:col-span-8',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 2,
    title: 'Mono Studio',
    category: 'Interiors',
    location: 'Bangalore',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC839pl3sabExlnu1SKkf74ji8L9wQIcVs5VK2P6zty6vo0v1xTBUF8X_eARtKmMva_q86cQdK8uJwk9o2C2WUpOrvP_29X6tO8DkxQlcAuFXL5JhmdJ3jkLYfPfsD_UhQoVWJ5lCXrKTmD3Sq_0PcRhYzHihv2JpC0LJfedCIeehW4ZxmHA5hrseZY9QB3y5sZRPjR0BuSoWJABGjFp5ffIBrOtRcc-YtCsschUwKExSyXe7Ma0JkrvgxUMGZSVQcYo3ALhH-CZag',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[1/1]',
  },
  {
    id: 3,
    title: 'The Pivot Plaza',
    category: 'Commercial',
    location: 'Pune',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGDpx_dTAa-_Gs99PaKRLkQ2CscdT25bIl5t642luN8PJ38k7VFn0EHEjDvIkd4QHR2Fki3U6vl083bh00bTGs3GfpZ6aGHNawI2Hkc8ukT5TkK-3mIOShs6maakAWCvVcEmFVW8fEoDniN3yJ8ikHJ9_u8Q3uxMilpIiitGMGSi8V7WMIa8pF5TVnWoyQvSgvwIeq0cklIb8m7a5Cf9pf0DDvtyCrS6KROipX3xQx6MA_WIBAV-Ih6RXpJmzm2OUOx_TcsAeMJIc',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[1/1]',
  },
  {
    id: 4,
    title: 'Lattice Manor',
    category: 'Residential',
    location: 'Chennai',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVRhnnPy7mvgEU425NMAMxx7RP9EqMPseprCpUhUJGXCphnFdhb6TuZu9KIDytBPaYdQ5Ppopuv6JvBVeFb4pLUCbQwLKHNWayUCyF1Km4j0OLfTdnx-Ir-GRipT2JCDxGO6sS_59KGkZIthgw063z6J6hzStbkRlxlZ9VI5J_FMlQn6TeLxszVF6eXvuj7mP3yLBZd5lKW_ncZOQpdNSO7Yo93m5GHgCuREygmBtk9q-ozVYxoJKlKW3LmR07S2GK9BlyM7nDToQ',
    colSpan: 'md:col-span-8',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 5,
    title: 'Nera Kitchen',
    category: 'Interiors',
    location: 'Hyderabad',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_zbxgzzcFa7SjYaAWJxOlzCcpIpRAaCDO-Cd3b8m_tM6N1vp4Ai6c-YmyyDfnvg5ggI-brFqSxOMlLgH2QbbAkFebzqUdUtrEGvO7gi6WclV87e5euLAQqKBZOalbjXPpWyUvSfeE25a7Iik64M-65qrRdNt2C8cHD8IBGgpm4NzcqQFPTqY_02XkMEYKTgsStuGNzeR7vKhTf7YfRrPrS28qjba-40erdEIB0-mbYOrfHYEoTzEjMNWsG2LqZiA4Kg4WkkH8eNg',
    colSpan: 'md:col-span-6',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 6,
    title: 'The Cantilever House',
    category: 'Residential',
    location: 'Alibaug',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA07OVqkbeklRF_EZIduNwAhj1vgzbi4lRvGXwe_KBXTs_J22zXflWTAA4mui5f0xa07JwNUQG7Vj73K81M-twrlLVw194Lr0GIp7KKkWDClKEVdpAvWQak2sO3B1viEQVsfulldNMLwOxYPtSrCjsSRY3QUywli2HfkU2IE4ypUsE7WwGEfOn1RebSSGuUp5473CY-SWv9zmYW6WqJD73uUQ5F2j1sPWbk8u2_kV1lH4EJDk3SIIHROD5fgHEoFwfNOyKut75mByg',
    colSpan: 'md:col-span-6',
    aspectRatio: 'aspect-[4/3]',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`${project.colSpan} group relative overflow-hidden rounded-xl project-card bg-surface-container-low cursor-pointer`}>
      <div className={`relative w-full ${project.aspectRatio}`}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
          className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] flex flex-col justify-end p-xl">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-xs block">
            {project.category}
          </span>
          <h3 className="font-headline-md text-headline-md text-surface-container-lowest leading-tight mb-xs">
            {project.title}
          </h3>
          <p className="font-label-caps text-label-caps text-on-primary-fixed-variant">
            {project.location}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All')

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <main>
      <Header />

      <div className="max-w-[1440px] mx-auto px-lg">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-huge pt-xl">
          <div>
            <h1 className="font-display-xl text-display-xl text-primary mb-md">
              Projects
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
              A curated portfolio of residential, commercial, and interior works — each shaped by place, purpose, and permanence.
            </p>
          </div>

          {/* Filter Tabs */}
          <nav className="flex items-center gap-xl mt-lg md:mt-0">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`font-label-caps text-label-caps pb-xs transition-all duration-200 ${
                  activeFilter === tab
                    ? 'text-secondary border-b-2 border-secondary'
                    : 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg pb-huge">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="py-huge text-center">
          <p className="font-headline-lg text-headline-lg text-primary mb-xl">
            Start your architectural journey.
          </p>
          <button className="bg-secondary text-on-secondary px-xxl py-sm rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-opacity duration-200">
            Get in Touch
          </button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
