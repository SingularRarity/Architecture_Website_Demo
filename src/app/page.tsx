import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProject from '@/components/FeaturedProject'
import HorizontalGallery from '@/components/HorizontalGallery'
import Philosophy from '@/components/Philosophy'
import Services from '@/components/Services'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import InteractiveMap from '@/components/InteractiveMap'
import SocialHub from '@/components/SocialHub'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProject />
      <HorizontalGallery />
      <Philosophy />
      <Services />
      <BeforeAfterSlider />
      <InteractiveMap />
      <SocialHub />
      <FinalCTA />
      <Footer />
    </main>
  )
}