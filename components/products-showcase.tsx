"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Grid3x3, Ruler, Check, Sparkles, Package, ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Ruled Notebooks",
    description: "Perfect for note-taking with guided lines for organization and clarity.",
    icon: BookOpen,
    color: "from-emerald-500 to-green-600",
    features: ["80 pages", "A4 size", "Premium finish"],
    price: "$3",
    image: "/ruled-notebook-lined-pages.jpg",
    badge: "Popular"
  },
  {
    id: 2,
    name: "Plain Notebooks",
    description: "Blank canvas for creativity—ideal for sketching, journaling, and planning.",
    icon: Grid3x3,
    color: "from-teal-500 to-emerald-600",
    features: ["120 pages", "A4 size", "Ultra smooth"],
    price: "$3",
    image: "/plain-blank-notebook-pages.jpg",
    badge: "Best Seller"
  },
  {
    id: 3,
    name: "Grid Notebooks",
    description: "Structured grid layout perfect for technical work, sketches, and layouts.",
    icon: Ruler,
    color: "from-green-500 to-teal-600",
    features: ["100 pages", "A4 size", "Professional"],
    price: "$3",
    image: "/grid-notebook-squared-paper.jpg",
    badge: "New"
  },
]

export default function ProductsShowcase() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = containerRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-green-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full mb-6 border border-emerald-200/50 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <Sparkles size={18} className="animate-pulse text-emerald-600" />
            <span className="text-sm font-semibold">Our Collections</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 animate-gradient bg-[length:200%_auto] mb-2">
              Premium Eco-Friendly
            </span>
            <span className="block text-emerald-900">Notebooks</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Choose from our sustainable A4 notebooks. Each crafted with premium quality, attention to detail, and
            environmental responsibility.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => {
            const Icon = product.icon
            const isVisible = visibleCards.includes(index)
            const isActive = activeCard === index

            return (
              <div
                key={product.id}
                data-index={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative bg-white rounded-3xl overflow-hidden h-full border-2 transition-all duration-500 ${
                  isActive ? 'border-emerald-500 shadow-2xl -translate-y-6 scale-105' : 'border-emerald-200/50 shadow-lg hover:shadow-xl hover:-translate-y-2'
                }`}>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20 px-4 py-1.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold rounded-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    {product.badge}
                  </div>

                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                  {/* Product Image */}
                  <div className="relative w-full h-72 overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'scale-110 rotate-1' : 'scale-100'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-50'}`}></div>
                    
                    {/* Floating icon */}
                    <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg transition-all duration-500 ${isActive ? 'scale-110 rotate-12' : 'scale-100'}`}>
                      <Icon size={28} className="text-emerald-600" />
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Animated icon background - moved below image */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 shadow-xl -mt-16 relative z-10 transition-all duration-500 ${isActive ? 'scale-125 rotate-6' : 'scale-100'}`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Price Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 font-bold rounded-full mb-4 text-sm border border-emerald-200 transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                      <span className="text-lg">{product.price}</span>
                      <span className="text-xs opacity-75">per notebook</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-base">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                          style={{ transitionDelay: `${(index * 150) + (i * 100)}ms` }}
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors duration-300">
                            <Check size={14} className="text-emerald-600 font-bold" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3.5 bg-gradient-to-r ${product.color} text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${isActive ? 'shadow-2xl' : 'hover:shadow-xl'}`}>
                      <span>Request Sample</span>
                      <ArrowRight size={18} className={`transition-transform duration-300 ${isActive ? 'translate-x-2' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Decorative shadow */}
                <div className={`absolute -bottom-4 left-8 right-8 h-8 bg-gradient-to-r ${product.color} opacity-0 blur-2xl transition-all duration-500 ${isActive ? 'opacity-30' : 'group-hover:opacity-20'}`}></div>
              </div>
            )
          })}
        </div>

        {/* Bulk Orders CTA */}
        <div className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-12 text-center overflow-hidden shadow-2xl hover:shadow-[0_20px_80px_-20px_rgba(16,185,129,0.5)] transition-all duration-500 group">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Package size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 group-hover:scale-105 transition-transform duration-300">
              Bulk Orders Available
            </h3>
            
            <p className="text-base sm:text-lg text-emerald-50 mb-8 max-w-2xl mx-auto leading-relaxed">
              Custom branding and packaging for schools, offices, NGOs, and organizations. Perfect for corporate gifts and
              environmental initiatives.
            </p>
            
            <button className="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group/btn text-lg">
              <span>Request Bulk Quote</span>
              <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  )
}