import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Claspuro - Eco-Friendly Banana Peel Notebooks",
  description:
    "Premium sustainable A4 notebooks made from banana peels. Transforming banana waste into quality stationery for students, schools, offices, and eco-conscious consumers.",
  metadataBase: new URL("https://claspuro.com"),
  alternates: {
    canonical: "https://claspuro.com",
  },
  keywords: [
    "Claspuro",
    "eco friendly notebooks",
    "banana peel notebooks",
    "sustainable stationery",
    "recycled paper notebooks",
    "biodegradable A4 notebooks",
    "eco conscious school supplies",
  ],
  openGraph: {
    type: "website",
    url: "https://claspuro.com",
    siteName: "Claspuro",
    title: "Claspuro - Eco-Friendly Banana Peel Notebooks",
    description:
      "Premium sustainable A4 notebooks made from banana peels. Transforming banana waste into quality stationery for students, schools, offices, and eco-conscious consumers.",
    locale: "en_US",
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Claspuro eco-friendly banana peel notebooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claspuro - Eco-Friendly Banana Peel Notebooks",
    description:
      "Premium sustainable A4 notebooks made from banana peels. Transforming banana waste into quality stationery for students, schools, offices, and eco-conscious consumers.",
    images: ["/og-banner.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/placeholder-logo.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
