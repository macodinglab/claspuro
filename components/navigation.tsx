"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transition-smooth group-hover:scale-110 group-hover:shadow-lg shadow-md">
              <Leaf className="text-primary-foreground" size={24} />
            </div>
            <span className="font-bold text-2xl text-primary hidden sm:inline">Claspuro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            {links.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href)

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm md:text-base font-semibold transition-smooth underline-offset-4 px-4 py-2 rounded-full ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-sm border border-primary/70"
                      : "text-foreground/80 hover:text-primary hover:underline"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-full border border-primary/70 hover:shadow-lg transition-smooth hover:scale-105 text-base">
            Order Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 animate-fade-in-up">
            {links.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href)

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-smooth font-semibold ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <button className="w-full px-4 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-smooth">
              Order Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
