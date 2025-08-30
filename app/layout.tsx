import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import ThemeRegistry from './ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sonnet Model School - Nurturing Excellence, Inspiring Innovation',
  description: 'A leading educational institution that combines academic excellence with character development to shape tomorrow\'s leaders.',
  keywords: 'school, education, elementary, high school, STEAM, Nigeria, Lagos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
} 