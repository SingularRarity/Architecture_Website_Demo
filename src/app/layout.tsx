import type { Metadata } from 'next'
import { Inter, Noto_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Taxila Architecture | Designing Legacy Structures',
  description: 'Professional architecture firm specializing in timeless, premium designs. From Deccan heritage to modern luxury estates.',
  keywords: 'architecture, design, luxury homes, Deccan, Hyderabad, modern architecture',
  authors: [{ name: 'Taxila Architecture' }],
  openGraph: {
    title: 'Taxila Architecture | Designing Legacy Structures',
    description: 'Professional architecture firm specializing in timeless, premium designs.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="bg-surface text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        {children}
      </body>
    </html>
  )
}