import type { Metadata } from 'next'
import { Petit_Formal_Script } from 'next/font/google'
import './globals.css'

const petit = Petit_Formal_Script({subsets:["latin"],weight:"400"})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={petit.className}>{children}</body>
    </html>
  )
}
