import type { Metadata } from 'next'
import { Wix_Madefor_Display } from 'next/font/google'

const inter = Wix_Madefor_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Palette UI',
  description: 'Minimalist color palette generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
