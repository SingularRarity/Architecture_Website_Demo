import Image from 'next/image'

export default function BeforeAfterSlider() {
  return (
    <section className="py-huge overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl text-center">
          Transforming Landscapes
        </h2>
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden group">
          {/* After Image */}
          <Image
            alt="Transformation After"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS6QVzgAJoo-DdnrUwlFrq43H7uwo9Cm-yBaFJ5CTsrxf4dVn8vQ-S6wXCsufufAAY91zrWh5BiAyJPZ9NGnFrYpalMYGs6aYdkKPVKGJ2q880ShhKdZj6mjSbb0ZC6qF7M5nGvgAVVOB0wD4dSNe0Vidk2Shz6klzEUWuU7Y6pelxjZPCIzOeVRbpcxiKKzTcLdoUPDNpZAylQOlsYjMnD4ZQqOFeaE3cLkib9bDzRdYpqMCjkpIY2VR-rHVWbNcLdfmxNKD6G7E"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
          {/* Before Image (Overlayed) */}
          <div className="absolute inset-0 w-1/2 overflow-hidden border-r-4 border-secondary-fixed">
            <Image
              alt="Transformation Before"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2z0XbGGXBrwuJ9hui4q2ZztfSsjgp_LPra-4G15j4RTnHFxu6OiwsUXAJPV9Cv1iGe1QqdVsq6D8zdsubSScX-L2DW2UBWbxp4jzG8uhoygrfjoqDewzimjAemFPWLMx-59fiYMPmOAB_cZ5GLHLOSN9pfYyLLdxWYcVCx5pvdvMEKgpzBtc0Uo2IEf2cj_kPpQsah266QnpnTRu6WF4FVRQwrSmkGOwIJRPBzXZDXY6TyYJv7IRtJw9ZoczZrkYNFj3nBzmpI"
              fill
              sizes="50vw"
              unoptimized
              className="object-cover grayscale opacity-60"
            />
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