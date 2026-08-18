import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

import './globals.css'
import ChatbotWidget from '@/components/chatbot/chatbot-widget'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-sans'
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'SCI LMS | Phần mềm quản lý trường học',
  description: 'SCI LMS cung cấp giải pháp quản lý trường học toàn diện, số hóa công tác quản lý, giảng dạy và kết nối nhà trường với phụ huynh học sinh.',
  generator: 'v0.app',
  keywords: ['data infrastructure', 'real-time analytics', 'data pipelines', 'event streaming', 'data engineering'],
  openGraph: {
    title: 'DataFlow | Real-Time Data Infrastructure',
    description: 'Process millions of events per second. Build data pipelines in minutes, not months.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataFlow | Real-Time Data Infrastructure',
    description: 'Process millions of events per second. Build data pipelines in minutes, not months.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  )
}
