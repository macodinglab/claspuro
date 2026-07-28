"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const links = [
    { label: "About", href: "/#about" },
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Approach", href: "/#approach" },
    { label: "Team", href: "/#team" },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-4'
          : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group relative z-50 w-1/4">
              <span className="font-black text-white text-2xl tracking-wide uppercase">
                Puroch
              </span>
            </Link>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center justify-center gap-8 w-2/4">
              {links.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href)

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-widest font-semibold transition-all duration-300 group ${isActive
                        ? "text-emerald-400"
                        : "text-white/80 hover:text-white"
                      }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {!isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center justify-end w-1/4">
              <Link
                href="/#contact"
                className="px-6 py-2.5 bg-emerald-700/90 hover:bg-emerald-600 text-white text-xs uppercase tracking-widest font-bold rounded shadow-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white transition-all duration-300 z-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {links.map((link, index) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href)

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm uppercase tracking-widest font-bold transition-all duration-300 ${isActive
                        ? "text-emerald-400"
                        : "text-white/80 hover:text-white"
                      }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="pt-6 mt-4 border-t border-white/10">
                <Link
                  href="/#contact"
                  className="inline-block px-6 py-3 bg-emerald-700/90 hover:bg-emerald-600 text-white text-xs uppercase tracking-widest font-bold rounded shadow-lg transition-all duration-300 text-center w-full"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer removed because the hero image should go underneath the transparent nav */}
    </>
  )
}