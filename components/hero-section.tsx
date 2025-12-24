"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Leaf, Recycle, Sparkles } from "lucide-react"

const PARTICLES = [
  { left: "12%", top: "18%", delay: "0s", duration: "18s" },
  { left: "28%", top: "72%", delay: "1.2s", duration: "22s" },
  { left: "45%", top: "35%", delay: "2.4s", duration: "20s" },
  { left: "62%", top: "80%", delay: "0.8s", duration: "24s" },
  { left: "78%", top: "28%", delay: "1.8s", duration: "19s" },
  { left: "88%", top: "60%", delay: "3.2s", duration: "23s" },
  { left: "6%", top: "55%", delay: "2.1s", duration: "21s" },
  { left: "35%", top: "90%", delay: "3.8s", duration: "25s" },
  { left: "54%", top: "12%", delay: "1.5s", duration: "17s" },
  { left: "70%", top: "48%", delay: "2.9s", duration: "22s" },
  { left: "18%", top: "82%", delay: "0.6s", duration: "19s" },
  { left: "82%", top: "10%", delay: "3.4s", duration: "24s" },
  { left: "40%", top: "65%", delay: "1.1s", duration: "21s" },
  { left: "90%", top: "40%", delay: "2.7s", duration: "23s" },
  { left: "50%", top: "50%", delay: "4s", duration: "26s" },
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner_banana_peel_home.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-emerald-50/95"></div>
      </div>
      {/* Enhanced animated background blobs */}
      <div
        className="absolute top-10 right-5 w-96 h-96 bg-gradient-to-br from-emerald-300/30 to-green-400/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div
        className="absolute bottom-20 left-5 w-96 h-96 bg-gradient-to-tr from-teal-300/25 to-emerald-400/20 rounded-full blur-3xl animate-pulse"
        style={{
          animationDelay: "1s",
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-bl from-lime-300/20 to-green-400/15 rounded-full blur-3xl animate-pulse"
        style={{
          animationDelay: "2s",
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>

      {/* Floating particles (deterministic for consistent hydration) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-hero-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Badge with icon animation */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full mb-8 border border-emerald-200/50 shadow-lg backdrop-blur-sm transition-all duration-700 hover:shadow-xl hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Leaf size={18} className="animate-pulse text-emerald-600" />
          <span className="text-sm font-semibold">Sustainable Stationery Revolution</span>
          <Sparkles size={16} className="text-emerald-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Enhanced Heading with gradient animation */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 transition-all duration-700 leading-tight ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 animate-hero-gradient bg-[length:200%_auto] mb-2">
            Transforming Banana Peels
          </span>
          <span className="block text-emerald-900">into Premium Notebooks and Papers</span>
        </h1>

        {/* Enhanced Description */}
        <p
          className={`text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 transition-all duration-700 leading-relaxed font-medium ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "200ms" }}
        >
          Eco-conscious A4 notebooks and papers crafted from upcycled banana waste. Premium quality, biodegradable, and
          purpose-driven for students, schools, and changemakers.
        </p>

        {/* Enhanced CTAs with better hover effects */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <button
            className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-emerald-700 hover:to-green-700 flex items-center justify-center gap-2 group text-lg relative overflow-hidden"
          >
            <span className="relative z-10">Discover Products</span>
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            className="px-10 py-4 bg-white text-emerald-900 font-bold rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-lg hover:shadow-xl hover:scale-105 hover:border-emerald-700"
          >
            Learn Our Story
          </button>
        </div>

        {/* Enhanced Stats Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="group text-center bg-white/80 backdrop-blur-md p-8 rounded-2xl border-2 border-emerald-200/50 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-green-600 mb-3">25%</div>
            <p className="text-sm md:text-base text-gray-700 font-semibold">Trees cutting reduction goal</p>
            <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-green-500 mx-auto transition-all duration-500 rounded-full"></div>
          </div>
          <div className="group text-center bg-white/80 backdrop-blur-md p-8 rounded-2xl border-2 border-green-200/50 hover:border-green-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-teal-600 mb-3">100%</div>
            <p className="text-sm md:text-base text-gray-700 font-semibold">Biodegradable</p>
            <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-teal-500 mx-auto transition-all duration-500 rounded-full"></div>
          </div>
          <div className="group text-center bg-white/80 backdrop-blur-md p-8 rounded-2xl border-2 border-teal-200/50 hover:border-teal-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <div className="flex items-center justify-center mb-3">
              <Recycle className="text-teal-600 group-hover:rotate-180 transition-transform duration-700" size={48} />
            </div>
            <p className="text-sm md:text-base text-gray-700 font-semibold">Upcycled Material</p>
            <div className="mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto transition-all duration-500 rounded-full"></div>
          </div>
        </div>


      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex items-start justify-center p-2 hover:border-emerald-700 transition-colors cursor-pointer">
          <div className="w-1.5 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
        </div>
      </div>

    </section>
  )
}