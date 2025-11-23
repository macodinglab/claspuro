"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf, Menu, X, ShoppingBag, Phone, ChevronRight } from "lucide-react"

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
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Who We Serve", href: "/who-we-serve" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100/50' 
          : 'bg-white/90 backdrop-blur-sm border-b border-emerald-100/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-50">
              <div className={`rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center transition-all duration-300 shadow-lg ${
                scrolled ? 'w-10 h-10' : 'w-12 h-12'
              } group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                <Leaf className="text-white" size={scrolled ? 20 : 24} />
              </div>
              <div className="flex flex-col">
                <span className={`font-black text-gray-900 transition-all duration-300 ${
                  scrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  Claspuro
                </span>
                <span className="text-xs text-emerald-600 font-semibold -mt-1 hidden sm:block">
                  Eco-Friendly Notebooks
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {links.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href)

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative text-sm lg:text-base font-bold transition-all duration-300 px-4 py-2.5 rounded-xl group ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 hover:text-emerald-700"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl shadow-md"></span>
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {link.label}
                      {!isActive && (
                        <ChevronRight 
                          size={16} 
                          className="opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-300" 
                        />
                      )}
                    </span>
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 text-emerald-700 font-bold rounded-xl border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
              >
                <Phone size={18} />
                <span>Get Quote</span>
              </Link>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <ShoppingBag size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
                isOpen 
                  ? 'bg-emerald-600 text-white shadow-lg rotate-90' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-2 pt-4">
              {links.map((link, index) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href)

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-xl font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md scale-105"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={20} className={isActive ? 'text-white' : 'text-emerald-600'} />
                  </Link>
                )
              })}
              
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-emerald-700 font-bold rounded-xl border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>Get Quote</span>
                </Link>
                <button className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <ShoppingBag size={18} />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content jump */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-20' : 'h-24'}`}></div>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}