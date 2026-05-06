import Image from 'next/image'

export default function SocialHub() {
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDWOW9-CFX7-YsKBPb-zm39ZSBsFwXIVXr5ZQ0mQ48dSuulhs8b2gfBa3PUIV3P_xPmnHZAaRO1W1_YkM3Goal4P76m4ztvaJE-pYCN1aSn_Wq0gKFG6oU6pGhlbhlqxmgZDS-ZKz_2ieC9QufDk4MdLFw0HjOJgVE1W04r1ic1PauNyFzzOH030clHXvF4IFkAmKSVqwJhe06iMi1WKP1qgV7LitpUWiZtAAXNh5PpnuDSd8T4WH0ved432q4MZ2JKQZOOb2dIqdQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuButdqqSAXkWYZYhZ_fLrndXfQI0mrkXSF7vXKsimqNrtd9JDzY9EJgSY-Yq533Q-lmS6NHumxBWSX6GtUlgb4kv5yEXnpylaUGwC__mDjPGsYfEpgIkFaYiGjSWCTR6WzEGG-6wErtIvKD8BPXMCWHia-mkoy2T_uNtkbxmDZE226pnBnQ3hG6kIhBDBlBF2mNJkVV-DRHxgTA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCtL5TxpVt74YiRhoOCdDPtOY60xC3DQ8B11c6mQ-YKLRmGBA8flxJ7r8kmO76EFN9oABic1Nfg1jQPmgszwoO09tJiu-WOyNk_2cwdayu3sVSI2X-k1diyVrkBK2q9pH7OqGqJaxEwEm5M678-BGYkysLh5XZDjgv_np-SAeOdw-Nk7BXxP0IAOK84XMVyc_Uu1UuY55DIZ7LmYydQxwwXr-vIVVG_6l1MCxCB31wUZjz-yU9Ev3ZE3KlhENJRQb95kEQTREJ4',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_H-PwS8qfq-8nZSpGwd6L-ozuBPmjyhlJSl2HHd6Z5XrS1HudLR_AD_r1oqtmb0JzGPz1rs_XUb_dVx3MF9vM1g7cJX-3L5_0Js9N0Jov53-O-1iD9y2RNcsY1-PQ9m7_eCLm3INaxCcDicatHLINRvLWLRID6UWNzkTxRLNvn2S6HkAyzhYhw0zEshB7NmnmE_dQLMgGdv7atExzvaPEjasEap4578yNrRzv02rLGatHfF7tIXwTPFtEYNoU1FC1szLCBd3pEk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDIXvB73Fni0RdEnhscclen48d8cMrkVWbNO6q75rgodw3lhSQJJCMvy3GBLCBtRiDBVMYHMHZfIj-S5BnmYh1-dR7VP_8ENaQwVzYe63jMl9O_gqwVEMg0UGFTLdtfknzLmvgGW6Z35LYjiGK5B2TMA3bvYRKPmzR9dvsek_q5TLcn5Pz0jHPFkfeM-1-LxlrBkjcWhlpBnv15nSVjCeUNaO3pqRRUY14IjJICByjQPADeO02IPb39mt9_tB4FyXePcp0PFoBndt0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC206zzZlQWABdZpZfxrDJxyHP47BJDQbgfdc_0n_WGHk3y8ohk8oNG4v7ggorKwjx1esm7539a340EQLjvX8zHRoYcYkeVAxbTtWN_C7jumAY8-7WJhF6t85ainLecofrPmIm7K2S8ba9nPe8o814PcBHx57NGswNq58uGAz0g_wileI8Cfua0-B1cm1bgVRO0MuDpdS6exA51smfxVlOL2w1E9qFFRKYtAGGLLvq7c5IYD_xuNsRZp_L-eip9XjTeK_rNJRcels'
  ]

  return (
    <section className="py-huge max-w-[1440px] mx-auto px-lg">
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
            alt={`IG ${index + 1}`}
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