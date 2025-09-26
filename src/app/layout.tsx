import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kai · The Integrated Path · A Full Story & Framework',
  description: 'An integrated path for those who have exhausted the maps of self-improvement and are ready for the real journey home.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;1,300&family=Noto+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}