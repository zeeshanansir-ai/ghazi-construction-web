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
  title: 'Ghazi Construction Company | Building Lahore Since 1996',
  description:
    'Ghazi Construction Company — founded 1996 by Ansar Ahmad Siddiqui. Premium construction, renovation, and structural engineering in Lahore. 4.69★ Google rating.',
  keywords: ['construction Lahore', 'renovation Lahore', 'Ghazi Construction', 'Engineers Town', 'DHA Lahore builder'],
  openGraph: {
    title: 'Ghazi Construction Company',
    description: 'Building Lahore Since 1996. Structural Integrity Guaranteed.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlex.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  )
}
