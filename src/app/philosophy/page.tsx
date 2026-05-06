import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ANCIENT_TAXILA_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVUmY9fbZWg9kwSGsSPMIut1c57-YYET0Q6MMwIrYX8wljEvQWDPqRM3jfqC7LL7FmyHFpQ5ItYnyxehBhCeB8_OoI4EiIVWuIROBgGkBER_vkuublzALvdzNzobcj-whTN_JFKKAA8W3EEnYriJ_qfZHuNjfXWl9bH1rGpBvcQRyuP_bm_zDKQws7n2-ZurfHcZseFDioRJk6WUJFxjIfanTejNxvueLkhslHxsudr5lXy2VhwioCIJ1pfXZe45VWb2OYcz_nqRA'

const MODERN_EXECUTION_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCLqyzRgdKXbs09SDlaCAq7NPPNGJCzYHxEvkJp40ySsgHS3_E8OnOmSdIEnDa5u81hoKY3hx9ervmbWvTtNGatyZtwjVAIOdIQII_vUCBERQg7ey9eYn_3GbMyyWM-0Zq7PO9ts6P9Bj63hcEWSF91gxysJZvLlsh2ZJ-JSKpBRMay-hZqscZ5uT-xFlMtBWIR_WxYseF6o9jw5hJR9f4mlIHk_8QNJ3aLhhvB1Vr6wBWIAd6Jp3RMv1qAOFUEVT1BSPVaDuEIv40'

const BENTO_LARGE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBLv4StRPtcH1n7dW9cqCgC0WKtiCwHtBiBSgxLlVzE8DBlOx68GG0f-RA_TDJ0zYXg4KhPZs2lOeUPe4VHuJLT973hi-5T78WUAQnEiTFhFBWZOAx7F4dlBaaYnFc_R6v3QfQswVgie1QtDhHqTVL-s7e45hV0Uw4vxGBWeiJxZJ_bdpHWfX92pbrySPjw08jraSuAnRYtPzIZHt7WzwCrqJ2RtGoRMMFlWnc3UkdyOTHveHiSxf7k5VGSi1I1iUXaTpqtuKHF7jc'

const BASALT_TEXTURE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKDMrFzSlxTHThNur6SrnB9PbuUJnj5g6BY41lu3XGT6YJBkW0y6tccudtcNfVcFBbJFgGmWCXqjmA1LVMZ35Bt2gAA115AI6f9C_Cg17D7qL4GFkTXj-nrJ_N6qogWdr7w87HwNjviR1MbboW6jMrg8LZqZUlJ-Rm79JV52Na3WJDr3X9BbLYlrK-rFTB9KUVkgL2KK9WZjRTEQTCUtslqYVSPHWMKSxkWvRiPjkTUJ0nrexNZx03TRzPdP1OXesKP6zJTbiyFDk'

export default function PhilosophyPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Header />

      <section className="max-w-[1440px] mx-auto px-lg pt-huge pb-xxl">
        <p className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-md">
          OUR MANIFESTO
        </p>
        <h1 className="font-display-xl text-display-xl text-on-surface leading-tight max-w-4xl mb-xl">
          Architecture is the silent{' '}
          <em className="italic text-secondary">dialogue</em> between history
          and the horizon.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          At Taxila, we believe every structure carries the memory of the land
          it stands on. Our work is an act of translation — decoding ancient
          wisdom and rendering it in the grammar of the present, building spaces
          that endure across generations.
        </p>
      </section>

      <section className="max-w-[1440px] mx-auto px-lg pb-huge">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
          <div className="flex flex-col gap-md">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <Image
                src={ANCIENT_TAXILA_IMG}
                alt="Ancient Taxila ruins — historical inspiration"
                fill
                unoptimized
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-xs">
                ANCIENT INSPIRATION
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The ruins of Taxila taught us that permanence is not achieved
                through rigidity but through harmony — structures that belong
                to their landscape as naturally as the rock from which they
                rise.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-md md:mt-xxl">
            <div>
              <p className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-xs">
                MODERN EXECUTION
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Contemporary tools and engineering precision allow us to honour
                tradition without being bound by it. We translate inspiration
                into inhabitable form — precise, resolved, and built to last.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden group">
              <Image
                src={MODERN_EXECUTION_IMG}
                alt="Modern architectural execution — Taxila studio"
                fill
                unoptimized
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-lg pb-huge">
        <p className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-md">
          MATERIALITY
        </p>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl">
          Deccan Modern
        </h2>

        <div className="grid grid-cols-12 grid-rows-2 gap-md h-[640px]">
          <div className="col-span-12 md:col-span-8 row-span-2 relative overflow-hidden">
            <Image
              src={BENTO_LARGE_IMG}
              alt="Deccan Modern — materiality and craft"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="col-span-12 md:col-span-4 row-span-1 relative overflow-hidden">
            <Image
              src={BASALT_TEXTURE_IMG}
              alt="Basalt texture — Deccan stone"
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/30 flex items-end p-md">
              <p className="font-label-caps text-label-caps text-white tracking-[0.2em]">
                BASALT &amp; LATERITE
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 row-span-1 bg-tertiary-container border border-gold/20 flex flex-col justify-between p-md">
            <div className="w-8 h-[1px] bg-gold mb-md" />
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-1">
              Every material is chosen for its relationship to the Deccan
              plateau — stone that weathers beautifully, finishes that age
              with grace.
            </p>
            <div className="flex items-center justify-end mt-md">
              <span
                className="material-symbols-outlined text-gold text-[40px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-lg my-huge bg-tertiary p-xxl text-center">
        <h2 className="font-headline-lg text-headline-lg text-white mb-xl">
          Build for Permanence.
        </h2>
        <a
          href="#"
          className="inline-block font-label-caps text-label-caps font-bold text-primary bg-gold px-xl py-md hover:bg-secondary-fixed transition-colors duration-300"
        >
          START A PROJECT
        </a>
      </section>

      <Footer />
    </main>
  )
}
