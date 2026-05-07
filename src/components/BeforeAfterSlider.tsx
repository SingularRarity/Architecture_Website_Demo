'use client'

import Image from 'next/image'
import { useState, useRef, useCallback } from 'react'

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const moveTo = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    const pct = Math.max(5, Math.min(95, ((clientX - left) / width) * 100))
    setPosition(pct)
  }, [])

  return (
    <section className="py-huge overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-lg">
        <div className="text-center mb-xl">
          <span className="font-label-caps text-label-caps text-secondary font-bold block mb-sm">
            THE TRANSFORMATION
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Transforming Landscapes
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden select-none cursor-col-resize"
          onMouseMove={(e) => { if (dragging.current) moveTo(e.clientX) }}
          onMouseUp={() => { dragging.current = false }}
          onMouseLeave={() => { dragging.current = false }}
          onTouchMove={(e) => moveTo(e.touches[0].clientX)}
          onTouchEnd={() => { dragging.current = false }}
        >
          {/* After image — full width baseline */}
          <Image
            alt="Transformation After"
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=85&auto=format&fit=crop"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover"
          />

          {/* Before image — clipped to slider position */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <Image
              alt="Transformation Before"
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85&auto=format&fit=crop"
              fill
              sizes="50vw"
              unoptimized
              className="object-cover grayscale opacity-70"
            />
          </div>

          {/* Corner labels */}
          <div className="absolute top-md left-md pointer-events-none">
            <span className="font-label-caps text-label-caps text-white bg-black/50 px-sm py-xs rounded">BEFORE</span>
          </div>
          <div className="absolute top-md right-md pointer-events-none">
            <span className="font-label-caps text-label-caps text-white bg-black/50 px-sm py-xs rounded">AFTER</span>
          </div>

          {/* Divider + drag handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/80"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl cursor-col-resize touch-none"
                onMouseDown={(e) => { dragging.current = true; e.preventDefault() }}
                onTouchStart={() => { dragging.current = true }}
              >
                <span className="material-symbols-outlined text-primary text-lg select-none">unfold_more</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center font-label-caps text-label-caps text-outline-variant mt-md">
          Drag to compare
        </p>
      </div>
    </section>
  )
}
