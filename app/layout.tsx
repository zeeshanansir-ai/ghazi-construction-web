import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ghazi Constructions | Structural Integrity Guaranteed',
  description:
    'Premium turnkey construction, architectural design, and interior finishing. 15+ years of excellence in Pakistan — DHA Lahore, Islamabad, Gujranwala.',
  keywords: ['construction', 'Pakistan', 'DHA Lahore', 'building', 'architecture', 'Ghazi'],
  openGraph: {
    title: 'Ghazi Constructions',
    description: 'Structural Integrity Guaranteed.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlex.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  )
}
