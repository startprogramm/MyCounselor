import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MyCounselor',
  description: 'School Admissions Made Simple',
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
