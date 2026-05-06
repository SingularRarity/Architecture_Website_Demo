'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FeaturedProject() {
  return (
    <motion.section
      className="py-huge max-w-[1440px] mx-auto px-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl items-center">
        <motion.div
          className="md:col-span-6 relative h-[600px] overflow-hidden rounded-lg group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            alt="Featured Project: The Stone Pavilion"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLe1eYy1dR7U-hWUH0o6VVxAnQrZJvPabNfaXlaUTcvNG54L_BLlJkIp7q4YOCFkOv5rdh7g9iYXt_GP5s70lIz1cJQDn3IxQl_09rtDoam2FFagJpB7o9L11txjxqprb-FAK0hdiW_QXpmi-K-S9R5A6LMvT16GAhnAh4vN4oxivf4t7_5TDOJoGPqLaRf-Dp4_KDCqXWBAwJCnAirLylFSIcJ5BNJxcVD_BAo6N_aJ4oLU8fL-VC2tlNfrzjtqiZy-sXJ1MJ4HQZhxzXKBW_b5jEk6V3byb8Q6ikk0P6Wh4NCncDNDzAA0iJUkoKGX8whbjjYWbDJrxYNwMa_TNqVLo"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
        <motion.div
          className="md:col-span-6 md:pl-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="font-label-caps text-label-caps text-secondary font-bold block mb-sm">
            FEATURED WORK
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            The Stone Pavilion
          </h2>
          <p className="font-label-caps text-label-caps text-on-surface-variant mb-md">
            Hyderabad, India • 2023
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed">
            A dialogue between geological permanence and modern spatial fluidity. Designed for a multigenerational family, this estate utilizes local basalt and teak wood to ground its contemporary silhouette in the regional landscape.
          </p>
          <a
            className="inline-flex items-center font-label-caps text-label-caps text-secondary font-bold group"
            href="#"
          >
            View Project{' '}
            <span className="material-symbols-outlined ml-xs transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}