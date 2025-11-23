"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Infinity, Recycle, Sprout, Star, Zap, Sparkles, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Sprout,
    title: "Sustainability",
    description: "Transforming waste into premium products while protecting our planet for future generations.",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Heart,
    title: "Community Empowerment",
    description: "Supporting local communities through ethical practices and fair trade principles.",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50"
  },
  {
    icon: Star,
    title: "Quality Craftsmanship",
    description: "Premium notebooks designed for durability, comfort, and everyday inspiration.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pioneering eco-friendly solutions that redefine what sustainable stationery can be.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50"
  },
]

export default function MissionSection() {
  const [visibleValues, setVisibleValues] = useState<number[]>([])
  const [activeValue, setActiveValue] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-value-index") || "0")
            setVisibleValues((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = containerRef.current?.querySelectorAll("[data-value-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full border border-emerald-200/50 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Sparkles size={18} className="animate-pulse text-emerald-600" />
              <span className="text-sm font-semibold">Our Purpose</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Mission</span> & Vision
            </h2>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We are pioneers in sustainable stationery, transforming banana waste into premium, eco-friendly A4
                notebooks that protect trees and promote a circular economy.
              </p>
              
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border-2 border-emerald-200/50 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-black text-emerald-900 text-lg mb-2">Our Vision</p>
                    <p className="text-gray-700 leading-relaxed">
                      To reduce global tree cutting by <span className="font-bold text-emerald-700">25% every year</span> through sustainable, banana-based stationery solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75"></div>
            
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)] transition-all duration-500">
              <img
                src="/banana-peel-plant-based-material-sustainability.jpg"
                alt="Eco-friendly banana peel material"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-emerald-200/50 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-emerald-900 font-bold text-sm flex items-center gap-2">
                  <Sprout size={20} className="text-emerald-600" />
                  100% Natural Banana Waste Material
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Values</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              const isVisible = visibleValues.includes(index)
              const isActive = activeValue === index

              return (
                <div
                  key={index}
                  data-value-index={index}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                  className={`transition-all duration-700 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`bg-white rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer h-full ${
                    isActive ? 'border-emerald-400 shadow-2xl -translate-y-3 scale-105' : 'border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
                  }`}>
                    {/* Icon with gradient background */}
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg transition-all duration-500 ${
                      isActive ? 'scale-110 rotate-6' : 'scale-100'
                    }`}>
                      <Icon size={36} className="text-white" />
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${
                        isActive ? 'opacity-50' : ''
                      }`}></div>
                    </div>
                    
                    <h4 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-base">
                      {value.description}
                    </p>
                    
                    {/* Progress bar */}
                    <div className={`mt-6 h-1 bg-gray-100 rounded-full overflow-hidden ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                      <div className={`h-full bg-gradient-to-r ${value.color} rounded-full transition-all duration-1000 ${isActive ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
              Our Environmental Impact
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  <p className="text-6xl md:text-7xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </p>
                  <p className="text-lg text-emerald-50 font-semibold">Biodegradable Materials</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-3">
                    <Recycle className="text-white group-hover:rotate-180 transition-transform duration-700" size={72} />
                  </div>
                  <p className="text-lg text-emerald-50 font-semibold">Waste to Premium Product</p>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-3">
                    <Infinity className="text-white group-hover:scale-125 transition-transform duration-500" size={72} />
                  </div>
                  <p className="text-lg text-emerald-50 font-semibold">Circular Economy Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}