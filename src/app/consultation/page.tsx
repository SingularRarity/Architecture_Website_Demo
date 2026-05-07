'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type ProjectType = 'Residential' | 'Commercial' | 'Renovation' | 'Landscape' | null
type CurrencyCode = 'INR' | 'USD' | 'AED' | 'EUR'

interface CurrencyConfig {
  symbol: string
  min: number
  max: number
  step: number
  minLabel: string
  maxLabel: string
  format: (v: number) => string
}

const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    symbol: '₹',
    min: 2500000,
    max: 100000000,
    step: 2500000,
    minLabel: '₹25L',
    maxLabel: '₹10Cr+',
    format: (v) =>
      v >= 10000000
        ? `₹${(v / 10000000).toFixed(1)}Cr`
        : `₹${(v / 100000).toFixed(0)}L`,
  },
  USD: {
    symbol: '$',
    min: 50000,
    max: 1000000,
    step: 50000,
    minLabel: '$50K',
    maxLabel: '$1M+',
    format: (v) => (v >= 1000000 ? '$1M+' : `$${(v / 1000).toFixed(0)}K`),
  },
  AED: {
    symbol: 'AED',
    min: 200000,
    max: 4000000,
    step: 200000,
    minLabel: 'AED 200K',
    maxLabel: 'AED 4M+',
    format: (v) =>
      v >= 4000000 ? 'AED 4M+' : `AED ${(v / 1000).toFixed(0)}K`,
  },
  EUR: {
    symbol: '€',
    min: 50000,
    max: 1000000,
    step: 50000,
    minLabel: '€50K',
    maxLabel: '€1M+',
    format: (v) => (v >= 1000000 ? '€1M+' : `€${(v / 1000).toFixed(0)}K`),
  },
}

// OpenStreetMap embed — Hyderabad (default location)
const MAP_SRC =
  'https://www.openstreetmap.org/export/embed.html' +
  '?bbox=78.3867%2C17.2850%2C78.5867%2C17.4850' +
  '&layer=mapnik' +
  '&marker=17.3850%2C78.4867'

export default function ConsultationPage() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<ProjectType>(null)
  const [location, setLocation] = useState('')
  const [currency, setCurrency] = useState<CurrencyCode>('INR')
  const [budget, setBudget] = useState(CURRENCIES.INR.min * 4) // ~1 Cr default
  const [timeline, setTimeline] = useState('Planning (3-6 months)')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [vision, setVision] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 5
  const progress = (step / totalSteps) * 100
  const cfg = CURRENCIES[currency]

  function handleCurrencyChange(code: CurrencyCode) {
    setCurrency(code)
    setBudget(CURRENCIES[code].min * 4)
  }

  const projectTypes: { label: ProjectType; icon: string }[] = [
    { label: 'Residential', icon: 'home' },
    { label: 'Commercial', icon: 'corporate_fare' },
    { label: 'Renovation', icon: 'architecture' },
    { label: 'Landscape', icon: 'landscape' },
  ]

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
                            className={`flex flex-col items-center justify-center p-lg border rounded-lg transition-all ${
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
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="City or Region"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary placeholder:text-outline-variant transition-colors outline-none"
                        />
                        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-outline-variant">
                          location_on
                        </span>
                      </div>
                      <div className="mt-xl rounded-lg overflow-hidden" style={{ height: 220 }}>
                        <iframe
                          src={MAP_SRC}
                          title="Select project location"
                          className="w-full h-full border-0"
                          loading="lazy"
                          allowFullScreen
                        />
                      </div>
                      <p className="font-label-caps text-[10px] text-outline-variant mt-xs text-center">
                        Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">OpenStreetMap</a> contributors
                      </p>
                    </div>
                  )}

                  {/* Step 3: Investment Range */}
                  {step === 3 && (
                    <div>
                      {/* Currency selector */}
                      <div className="flex items-center justify-between mb-md">
                        <label className="font-label-caps text-label-caps text-on-surface-variant">
                          3. Investment Range
                        </label>
                        <div className="relative">
                          <select
                            value={currency}
                            onChange={(e) => handleCurrencyChange(e.target.value as CurrencyCode)}
                            className="appearance-none bg-surface-container border border-outline-variant rounded-md pl-sm pr-xl py-xs font-label-caps text-label-caps text-on-surface focus:border-secondary focus:ring-0 outline-none cursor-pointer"
                          >
                            <option value="INR">₹ INR</option>
                            <option value="USD">$ USD</option>
                            <option value="AED">AED</option>
                            <option value="EUR">€ EUR</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-xs top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none text-base">
                            expand_more
                          </span>
                        </div>
                      </div>

                      {/* Budget display */}
                      <div className="text-right mb-sm">
                        <span className="font-headline-md text-secondary">
                          {cfg.format(Math.max(cfg.min, budget - cfg.step))} – {cfg.format(budget)}
                        </span>
                      </div>

                      <div className="py-lg">
                        <input
                          type="range"
                          min={cfg.min}
                          max={cfg.max}
                          step={cfg.step}
                          value={budget}
                          onChange={(e) => setBudget(Number(e.target.value))}
                          className="w-full cursor-pointer"
                          style={{ accentColor: '#775a19' }}
                        />
                        <div className="flex justify-between mt-sm">
                          <span className="font-label-caps text-[10px] text-outline-variant">{cfg.minLabel}</span>
                          <span className="font-label-caps text-[10px] text-outline-variant">{cfg.maxLabel}</span>
                        </div>
                      </div>

                      <p className="font-body-md text-on-surface-variant/70 text-sm mt-md">
                        This estimate helps us tailor spatial complexity and material palette to your vision.
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
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary appearance-none transition-colors outline-none"
                        >
                          <option>Immediate (1–3 months)</option>
                          <option>Planning (3–6 months)</option>
                          <option>Future (6–12 months)</option>
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
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary placeholder:text-outline-variant transition-colors outline-none"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-md px-xs focus:ring-0 focus:border-secondary font-body-lg text-primary placeholder:text-outline-variant transition-colors outline-none"
                        />
                        <textarea
                          value={vision}
                          onChange={(e) => setVision(e.target.value)}
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
                      onClick={() => setStep((s) => Math.max(1, s - 1))}
                      className={`flex items-center gap-xs font-label-caps text-label-caps text-outline-variant hover:text-primary transition-colors ${step === 1 ? 'invisible' : ''}`}
                    >
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                      Back
                    </button>
                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
                        className="bg-secondary text-surface px-[40px] py-md font-label-caps text-label-caps tracking-widest hover:bg-primary transition-all shadow-md active:scale-95"
                      >
                        NEXT STEP
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSubmitted(true)}
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
