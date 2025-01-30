"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/context/cart-context"
import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased flex flex-col`}>
        <CartProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
