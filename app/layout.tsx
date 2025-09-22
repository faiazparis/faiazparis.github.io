import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abrar Fayaz',
  description: 'French-Asian Entrepreneur & AI Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
