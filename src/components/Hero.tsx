'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100]) // Parallax effect

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Video Background Simulator with Image */}
      <motion.div className="absolute inset-0 z-0 bg-primary" style={{ y }}>
        <Image
          alt="Taxila Architecture Hero"
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85&auto=format&fit=crop"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto px-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-2xl">
          <motion.h1
            className="font-display-xl text-display-xl text-white mb-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Designing Legacy Structures
          </motion.h1>
          <motion.p
            className="font-body-lg text-body-lg text-white/90 mb-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Architecture rooted in timeless principles.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button className="bg-gold text-on-surface px-xl py-md font-label-caps text-label-caps font-bold tracking-widest transition-all hover:brightness-90">
              View Our Work
            </button>
            <button className="border border-white/60 text-white/80 px-xl py-md font-label-caps text-label-caps transition-all hover:border-white hover:text-white">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}