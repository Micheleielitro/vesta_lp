import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Vesta — Il tuo assistente shopping',
  description: 'Una mail dedicata per tracciare ordini, garanzie e resi da ogni store. Automaticamente.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${jakarta.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
