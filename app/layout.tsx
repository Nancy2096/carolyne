import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Albert_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Albert_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carolyn Martinez | Consultoría en Real Estate",
  description: "Consultoría especializada en estrategias comerciales para el sector inmobiliario",
  icons: {
    icon: '/favicon.png', // o favicon.png
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
