import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const INTERIOR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAmhUk_n9nnhu-qI0CCfncxqNZSEfxJpJh2Npu3QuUBK4pAGzVarLulMS3hI9IJdV5ENUl-7i0Z0ceiuAXXNrJbsbcxOGLSzpnGJuoVAbAJ2JxnNWBc4ssd-IUsjFVyr1YavQSs2O6rwYVuFlPOTn_zU-HtLyzQi82d8QPpGi2MMrWJworicXTCPvd0HkBMcMcyEotku7CX--M5s9wlx4QANx_Qi7QkZL1bqNaVM29-PWudTtYHYFGWN_d2Z0aNQl_t-Sjw2HEwBEg'

interface TimelinePhaseProps {
  number: string
  title: string
  description: string
}

function TimelinePhase({ number, title, description }: TimelinePhaseProps) {
  return (
    <div className="relative pl-lg">
      <span className="absolute -left-[5px] top-1 w-3 h-3 rounded-full bg-secondary border-4 border-surface block" />
      <p className="font-label-caps text-label-caps text-secondary tracking-widest mb-xs">
        {number}
      </p>
      <h4 className="font-headline-md text-headline-md text-on-surface mb-xs">
        {title}
      </h4>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  )
}

interface UrbanCardProps {
  icon: string
  label: string
  sub: string
}

function UrbanCard({ icon, label, sub }: UrbanCardProps) {
  return (
    <div className="bg-surface-container-high p-lg rounded-xl h-48 group hover:bg-secondary transition-colors duration-500 flex flex-col justify-between">
      <span
        className="material-symbols-outlined text-secondary group-hover:text-on-primary text-[36px] transition-colors duration-500"
        style={{ fontVariationSettings: "'FILL' 0" }}
      >
        {icon}
      </span>
      <div>
        <p className="font-label-caps text-label-caps text-on-surface group-hover:text-on-primary tracking-widest mb-xs transition-colors duration-500">
          {label}
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-primary/80 transition-colors duration-500">
          {sub}
        </p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-huge flex flex-col items-center text-center max-w-4xl mx-auto px-lg">
        <p className="font-label-caps text-label-caps text-secondary tracking-widest mb-md">
          CRAFTING PERMANENCE
        </p>
        <h1 className="font-display-xl text-display-xl text-primary mb-lg leading-tight">
          Architectural Precision, Cultural Depth.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
          From foundational architecture to curated interiors and regenerative
          urban frameworks, every Taxila engagement is a commitment to cultural
          memory, material honesty, and enduring form.
        </p>
      </section>

      {/* Architecture Service */}
      <section className="max-w-[1440px] mx-auto px-lg py-huge grid grid-cols-1 md:grid-cols-12 gap-xl items-start border-t border-outline-variant/20">
        {/* Left */}
        <div className="md:col-span-5">
          <div className="w-12 h-[2px] bg-secondary mb-lg" />
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            Architecture
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-xl">
            We design structures that emerge from the landscape rather than
            being imposed upon it. Each project begins with deep cultural
            listening — understanding place, memory, and material before a
            single line is drawn.
          </p>
          <a
            href="#"
            className="font-label-caps text-label-caps text-secondary border-b border-secondary/30 hover:border-secondary transition-colors duration-300 pb-xs"
          >
            VIEW ARCHIVE
          </a>
        </div>

        {/* Right — Timeline Card */}
        <div className="md:col-span-6 md:col-start-7">
          <div className="bg-surface-container-low p-xl rounded-xl">
            <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mb-xl">
              PROJECT LIFECYCLE
            </p>
            <div className="relative space-y-huge pl-lg">
              {/* Vertical gold line */}
              <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-secondary" />

              <TimelinePhase
                number="Phase 01"
                title="CONCEPT"
                description="Deep site analysis and cultural immersion to define the project's soul."
              />
              <TimelinePhase
                number="Phase 02"
                title="DESIGN"
                description="Iterative 3D modeling and material selection focusing on tactile honesty."
              />
              <TimelinePhase
                number="Phase 03"
                title="BUILD"
                description="Artisanal execution and site management for architectural permanence."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interior Design Service */}
      <section className="max-w-[1440px] mx-auto px-lg py-huge grid grid-cols-1 md:grid-cols-12 gap-xl items-center border-t border-outline-variant/20">
        {/* Image Left */}
        <div className="md:col-span-6 order-2 md:order-1 relative overflow-hidden rounded-xl">
          <div className="h-[600px] relative overflow-hidden rounded-xl group">
            <Image
              src={INTERIOR_IMG}
              alt="Interior design — curated textures and tones"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <p className="absolute bottom-md left-md font-label-caps text-label-caps text-white tracking-widest">
              CURATED TEXTURES &amp; TONES
            </p>
          </div>
        </div>

        {/* Content Right */}
        <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
          <div className="w-12 h-[2px] bg-secondary mb-lg" />
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            Interior Design
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-xl">
            Our interiors are not decorated — they are composed. Every surface,
            every material, every light source is chosen for its relationship
            to the architecture and to the human body that will inhabit the
            space.
          </p>

          {/* Feature rows */}
          <div className="space-y-md">
            <div className="flex items-center gap-md border-t border-outline-variant/20 pt-md">
              <span
                className="material-symbols-outlined text-secondary text-[28px]"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                palette
              </span>
              <p className="font-label-caps text-label-caps text-on-surface tracking-widest">
                BESPOKE MATERIAL PALETTES
              </p>
            </div>
            <div className="flex items-center gap-md border-t border-outline-variant/20 pt-md">
              <span
                className="material-symbols-outlined text-secondary text-[28px]"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                chair
              </span>
              <p className="font-label-caps text-label-caps text-on-surface tracking-widest">
                CUSTOM ARTISANAL FURNITURE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urban Planning Service */}
      <section className="max-w-[1440px] mx-auto px-lg py-huge grid grid-cols-1 md:grid-cols-12 gap-xl items-start border-t border-outline-variant/20">
        {/* Left */}
        <div className="md:col-span-5">
          <div className="w-12 h-[2px] bg-secondary mb-lg" />
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            Urban Planning
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Cities are living organisms. Our urban work does not impose grids
            — it traces the underlying logic of communities, ecologies, and
            movement patterns to create frameworks that grow with the people
            who inhabit them.
          </p>
        </div>

        {/* Right */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-md">
          {/* 2-column card grid */}
          <div className="grid grid-cols-2 gap-md">
            <UrbanCard
              icon="public"
              label="COMMUNITY FIRST"
              sub="Masterplanning"
            />
            <UrbanCard
              icon="eco"
              label="ECOLOGICAL FLOW"
              sub="Sustainability"
            />
          </div>

          {/* Black accent card */}
          <div className="bg-primary text-on-primary p-xl rounded-xl">
            <h5 className="font-headline-md text-headline-md text-on-primary mb-md">
              Integrated Ecosystems
            </h5>
            <p className="font-body-md text-body-md text-on-primary/70 leading-relaxed mb-xl">
              We weave infrastructure, biodiversity, and public life into a
              single coherent system — ensuring every development enhances
              rather than diminishes its surrounding environment.
            </p>
            <a
              href="#"
              className="inline-block font-label-caps text-label-caps text-on-primary px-lg py-sm border border-on-primary/30 hover:bg-on-primary hover:text-primary transition-colors duration-300 rounded"
            >
              EXPLORE METHODOLOGY
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-[1440px] mx-auto px-lg">
        <section className="my-huge bg-tertiary-fixed p-huge rounded-xl text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl">
            Have a project in mind?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-md">
            <a
              href="#"
              className="font-label-caps text-label-caps font-bold bg-secondary text-on-primary px-xl py-md rounded hover:bg-secondary/90 transition-colors duration-300"
            >
              INQUIRE NOW
            </a>
            <a
              href="#"
              className="font-label-caps text-label-caps font-bold border border-secondary text-secondary px-xl py-md rounded hover:bg-secondary hover:text-on-primary transition-colors duration-300"
            >
              PORTFOLIO
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
