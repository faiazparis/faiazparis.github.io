import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sabal Hero',
  description: 'PhD Student in Computer Science at UT Austin',
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
