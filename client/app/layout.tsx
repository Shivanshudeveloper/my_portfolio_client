import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import './globals.css'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Shivanshu Gupta - Profile',
  description: 'Get to know more about Shivanshu Gupta and the services he offers!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>
              <div className="md:container md:mx-auto py-20">
                {children}
                <Toaster />
              </div>
            </body>
      </ThemeProvider>
    </html>
  )
}
