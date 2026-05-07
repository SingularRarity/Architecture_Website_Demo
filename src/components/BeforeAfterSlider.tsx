import Image from 'next/image'

export default function BeforeAfterSlider() {
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
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden group">
          {/* After Image */}
          <Image
            alt="Transformation After"
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=85&auto=format&fit=crop"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
          {/* Before Image (Overlayed) */}
          <div className="absolute inset-0 w-1/2 overflow-hidden border-r-4 border-secondary-fixed">
            <Image
              alt="Transformation Before"
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85&auto=format&fit=crop"
              fill
              sizes="50vw"
              unoptimized
              className="object-cover grayscale opacity-60"
            />
          </div>
          {/* Labels */}
          <div className="absolute top-md left-md">
            <span className="font-label-caps text-label-caps text-white/80 bg-black/40 px-sm py-xs rounded">BEFORE</span>
          </div>
          <div className="absolute top-md right-md">
            <span className="font-label-caps text-label-caps text-white/80 bg-black/40 px-sm py-xs rounded">AFTER</span>
          </div>
          {/* Slider Handle */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-secondary-fixed flex items-center justify-center -translate-x-1/2">
            <div className="w-12 h-12 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined" data-icon="unfold_more">
                unfold_more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
