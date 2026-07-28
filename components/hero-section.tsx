"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#121212]"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner_banana_peel_home.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#121212]/90"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        {/* Minimalist Subheading */}
        <p 
          className={`text-emerald-400 text-sm md:text-sm font-semibold tracking-[0.2em] uppercase mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Puroch
        </p>

        {/* Elegant Serif-style Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 transition-all duration-1000 leading-tight ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="block italic font-light opacity-90 mb-2">Turning Banana Peel Waste</span>
          <span className="block font-medium">into Premium Tree-Free Paper</span>
        </h1>

        {/* Description */}
        <p
          className={`text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 transition-all duration-1000 leading-relaxed ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms" }}
        >
          We are developing a scalable model to transform agricultural waste into high-quality, sustainable paper profitably and responsibly.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link
            href="/#what-we-do"
            className="px-8 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white text-sm uppercase tracking-widest font-bold transition-all duration-300 min-w-[200px]"
          >
            Explore Our Work
          </Link>
          <Link
            href="/#team"
            className="px-8 py-3.5 bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white text-sm uppercase tracking-widest font-bold transition-all duration-300 min-w-[200px]"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  )
}