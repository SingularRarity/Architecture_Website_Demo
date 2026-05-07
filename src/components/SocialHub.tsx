import Image from 'next/image'

export default function SocialHub() {
  const images = [
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=400&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80&auto=format&fit=crop',
  ]

  return (
    <section className="pt-xxl pb-huge max-w-[1440px] mx-auto px-lg">
      <div className="text-center mb-xl">
        <span className="font-label-caps text-label-caps text-secondary font-bold block mb-sm">
          FOLLOW THE PROCESS
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Digital Archive
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-sm mb-xl">
        {images.map((src, index) => (
          <Image
            key={index}
            alt={`Archive ${index + 1}`}
            src={src}
            width={200}
            height={200}
            unoptimized
            className="aspect-square object-cover rounded-lg w-full"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <div className="bg-surface-container p-xl rounded-xl">
          <div className="flex items-center mb-md">
            <span className="material-symbols-outlined text-secondary mr-sm" data-icon="podcasts">
              podcasts
            </span>
            <h4 className="font-label-caps text-label-caps font-bold">
              LATEST DISCOURSE
            </h4>
          </div>
          <p className="font-body-lg text-on-surface mb-md">
            &ldquo;The future of stone is not in preservation, but in re-invention.&rdquo; — Interview with Lead Architect on &apos;Deccan Today&apos;.
          </p>
          <a className="text-secondary font-bold font-label-caps text-label-caps" href="#">
            Read More →
          </a>
        </div>
        <div className="bg-surface-container p-xl rounded-xl">
          <div className="flex items-center mb-md">
            <span className="material-symbols-outlined text-secondary mr-sm" data-icon="videocam">
              videocam
            </span>
            <h4 className="font-label-caps text-label-caps font-bold">
              STUDIO FILMS
            </h4>
          </div>
          <p className="font-body-lg text-on-surface mb-md">
            Behind the scenes of the Deccan Pavilion: A study of material journey and local artisanry.
          </p>
          <a className="text-secondary font-bold font-label-caps text-label-caps" href="#">
            Watch Now →
          </a>
        </div>
      </div>
    </section>
  )
}
