import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Puroch - Premium Tree-Free Banana Peel Paper",
  description:
    "Puroch transforms agricultural banana peel waste into high-quality, sustainable paper — profitably and responsibly for investors and partners.",
  metadataBase: new URL("https://puroch.com"),
  alternates: {
    canonical: "https://puroch.com",
  },
  keywords: [
    "Puroch",
    "eco friendly notebooks and papers",
    "banana peel notebooks and papers",
    "sustainable stationery",
    "recycled paper notebooks and papers",
    "biodegradable A4 notebooks and papers",
    "eco conscious school supplies",
  ],
  openGraph: {
    type: "website",
    url: "https://puroch.com",
    siteName: "Puroch",
    title: "Puroch - Premium Tree-Free Banana Peel Paper",
    description:
      "Puroch transforms agricultural banana peel waste into high-quality, sustainable paper — profitably and responsibly for investors and partners.",
    locale: "en_US",
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Puroch eco-friendly banana peel paper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puroch - Premium Tree-Free Banana Peel Paper",
    description:
      "Puroch transforms agricultural banana peel waste into high-quality, sustainable paper — profitably and responsibly for investors and partners.",
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
        url: "/icon-dark-32x32.png",
        type: "image/png",
      },
      {
        url: "/icon-dark-32x32.png",
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
