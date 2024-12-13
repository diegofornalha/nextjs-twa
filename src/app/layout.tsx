import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | ChatGPT Clone',
    default: 'ChatGPT Clone',
  },
  description: 'Um clone do ChatGPT usando Next.js e NextUI',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 