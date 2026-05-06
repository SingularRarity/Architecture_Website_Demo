'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

type ProjectType = 'Residential' | 'Commercial' | 'Renovation' | 'Landscape' | null

export default function ConsultationPage() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<ProjectType>(null)
  const [location, setLocation] = useState('')
  const [budget, setBudget] = useState(150000)
  const [timeline, setTimeline] = useState('Planning (3-6 months)')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [vision, setVision] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const projectTypes: { label: ProjectType; icon: string }[] = [
    { label: 'Residential', icon: 'home' },
    { label: 'Commercial', icon: 'corporate_fare' },
    { label: 'Renovation', icon: 'architecture' },
    { label: 'Landscape', icon: 'landscape' },
  ]

  function formatBudget(val: number) {
    if (val >= 1000000) return '$1M+'
    return `$${(val / 1000).toFixed(0)}k`
  }

  function handleSubmit() {
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-md py-huge bg-surface">
        <div className="w-full max-w-[600px] bg-surface-container-lowest rounded-xl shadow-[0_30px_60px_-12px_rgba(26,26,26,0.04)] overflow-hidden border border-outline-variant/20">
          {/* Progress bar */}
          <div className="h-1 w-full bg-surface-container-high">
            <div
              className="h-full bg-secondary-container transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-xl md:p-xxl">
            {submitted ? (
              <div className="text-center py-xl">
                <span className="material-symbols-outlined text-secondary text-[64px] block mb-md">check_circle</span>
                <h2 className="font-headline-md text-headline-md text-primary mb-sm">Vision Received</h2>
                <p className="font-body-lg text-on-surface-variant">
                  Our studio will be in touch within 48 hours to begin crafting your blueprint.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-xl">
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                    Blueprint Consult
                  </span>
                  <h1 className="font-headline-md text-headline-md text-primary mt-xs">Define Your Vision</h1>
                </div>

                <div className="space-y-xl">
                  {/* Step 1: Project Type */}
                  {step === 1 && (
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-md block">
                        1. Project Type
                      </label>
                      <div className="grid grid-cols-2 gap-md">
                        {projectTypes.map(({ label, icon }) => (
                          <button
                            key={label}
                            type="button"
                            onClick={() => setProjectType(label)}
                            className={`flex flex-col items-center justify-center p-lg border rounded-lg transition-all text-left w-full ${
                              projectType === label
                                ? 'border-secondary bg-secondary/5'
                                : 'border-outline-variant hover:border-secondary hover:bg-secondary/5'
                            }`}
                          >
                            <span className="material-symbols-outlined text-secondary mb-sm">{icon}</span>
                            <span className="font-body-md text-primary">{label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Location */}
                  {step === 2 && (
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-md block">
                        2. Location
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={location}
                          onChange={e => setLocation(e.target.value)}
                          placeholder="City or Region"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary placeholder:text-outline-variant transition-colors outline-none"
                        />
                        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-outline-variant">
                          location_on
                        </span>
                      </div>
                      <div className="mt-xl aspect-video bg-surface-container-high rounded-lg overflow-hidden relative">
                        <Image
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmel2lIfKL8jS_I_unxUupSll6oQ2yHLEqcjLEMG7Ac7-PO8-QUR0_hE4WwO3eCuRTxPK8sxWTLLBywH9mLWLeDFp4FZpFDpMGBcsxZJ6BBck_SQzE-up-51fZathRkonnDUvuRYP5P5OKOCl-FODnQuvWMNKLFZ3gKrVAjzpqWKG8AZAd9pWSmyPCKBhVQHuEMIjQipk7hxX6RPLRhBsPYw4aOD7L8tmlUJ6xYbBz_ffwdMtw8xQUYC4anvkAvr-oLVic5nU5bHs"
                          alt="Site map preview"
                          fill
                          unoptimized
                          className="object-cover grayscale opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-surface px-md py-xs rounded-full font-label-caps text-[10px] text-secondary shadow-sm">
                            SELECT ON MAP
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Investment Range */}
                  {step === 3 && (
                    <div>
                      <div className="flex justify-between items-end mb-md">
                        <label className="font-label-caps text-label-caps text-on-surface-variant block">
                          3. Investment Range
                        </label>
                        <span className="font-headline-md text-secondary">
                          {formatBudget(Math.max(50000, budget - 100000))} – {formatBudget(budget)}
                        </span>
                      </div>
                      <div className="py-lg">
                        <input
                          type="range"
                          min={50000}
                          max={1000000}
                          step={50000}
                          value={budget}
                          onChange={e => setBudget(Number(e.target.value))}
                          className="w-full accent-secondary cursor-pointer"
                          style={{ accentColor: '#775a19' }}
                        />
                        <div className="flex justify-between mt-sm">
                          <span className="font-label-caps text-[10px] text-outline-variant">$50k</span>
                          <span className="font-label-caps text-[10px] text-outline-variant">$1M+</span>
                        </div>
                      </div>
                      <p className="font-body-md text-on-surface-variant/70 text-sm mt-md">
                        This estimate helps us tailor the spatial complexity and material palette to your vision.
                      </p>
                    </div>
                  )}

                  {/* Step 4: Timeline */}
                  {step === 4 && (
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-md block">
                        4. Ideal Timeline
                      </label>
                      <div className="relative">
                        <select
                          value={timeline}
                          onChange={e => setTimeline(e.target.value)}
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary appearance-none transition-colors outline-none"
                        >
                          <option>Immediate (1-3 months)</option>
                          <option>Planning (3-6 months)</option>
                          <option>Future (6-12 months)</option>
                          <option>Flexible</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Contact Information */}
                  {step === 5 && (
                    <div>
                      <label className="font-label-caps text-label-caps text-on-surface-variant mb-md block">
                        5. Contact Information
                      </label>
                      <div className="space-y-lg">
                        <input
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary placeholder:text-outline-variant transition-colors outline-none"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="Email Address"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary placeholder:text-outline-variant transition-colors outline-none"
                        />
                        <textarea
                          value={vision}
                          onChange={e => setVision(e.target.value)}
                          placeholder="Tell us about your dream space..."
                          rows={3}
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary placeholder:text-outline-variant transition-colors outline-none resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="pt-xl flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(s => Math.max(1, s - 1))}
                      className={`flex items-center gap-xs font-label-caps text-label-caps text-outline-variant hover:text-primary transition-colors ${step === 1 ? 'invisible' : ''}`}
                    >
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                      Back
                    </button>
                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={() => setStep(s => Math.min(totalSteps, s + 1))}
                        className="bg-secondary text-surface px-[40px] py-md font-label-caps text-label-caps tracking-widest hover:bg-primary transition-all shadow-md active:scale-95"
                      >
                        NEXT STEP
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-secondary text-surface px-[40px] py-md font-label-caps text-label-caps tracking-widest hover:bg-primary transition-all shadow-md active:scale-95"
                      >
                        SUBMIT
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
