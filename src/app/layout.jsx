'use client'
import '../styles/globals.css'

import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
      </body>
    </html>
  )
}
