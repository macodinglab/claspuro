"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Grid3x3, Ruler, Check } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Ruled Notebooks",
    description: "Perfect for note-taking with guided lines for organization and clarity.",
    icon: BookOpen,
    color: "from-primary to-primary/70",
    features: ["80 pages", "A4 size", "Premium finish"],
    price: "$12",
    image: "/ruled-notebook-lined-pages.jpg",
  },
  {
    id: 2,
    name: "Plain Notebooks",
    description: "Blank canvas for creativity—ideal for sketching, journaling, and planning.",
    icon: Grid3x3,
    color: "from-secondary/80 to-accent",
    features: ["120 pages", "A4 size", "Ultra smooth"],
    price: "$14",
    image: "/plain-blank-notebook-pages.jpg",
  },
  {
    id: 3,
    name: "Grid Notebooks",
    description: "Structured grid layout perfect for technical work, sketches, and layouts.",
    icon: Ruler,
    color: "from-accent to-primary/50",
    features: ["100 pages", "A4 size", "Professional"],
    price: "$13",
    image: "/grid-notebook-squared-paper.jpg",
  },
]

export default function ProductsShowcase() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
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
    <section id="products" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 animate-pulse-soft">
            Our Collections
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Premium <span className="text-primary">Eco-Friendly</span> Notebooks
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our sustainable A4 notebooks. Each crafted with premium quality, attention to detail, and
            environmental responsibility.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-10 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={product.id}
                data-index={index}
                className={`group relative transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-card rounded-2xl overflow-hidden h-full border-2 border-border hover:border-primary/50 transition-smooth hover:shadow-2xl hover:-translate-y-4">
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-smooth"></div>

                  {/* Product Image */}
                  <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="p-10">
                    {/* Icon Background */}
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-8 group-hover:scale-125 transition-smooth shadow-lg -mt-14 relative z-10`}
                    >
                      <Icon size={40} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{product.name}</h3>

                    {/* Price Badge */}
                    <div className="inline-block px-3 py-1 bg-secondary/20 text-accent font-bold rounded-full mb-4 text-sm animate-bounce-slow">
                      {product.price} per notebook
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-8 leading-relaxed text-base sm:text-lg">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-10">
                      {product.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 animate-slide-in-right"
                          style={{ transitionDelay: `${i * 100}ms` }}
                        >
                          <Check size={20} className="text-primary flex-shrink-0 animate-scale-pulse" />
                          <span className="text-foreground/80 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-xl hover:shadow-xl transition-smooth group-hover:scale-105 text-base sm:text-lg">
                      Request Sample
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/15 to-secondary/15 rounded-3xl p-12 border-2 border-primary/30 text-center hover:border-primary/60 transition-smooth hover:shadow-lg hover:scale-105 group">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:scale-110 transition-smooth inline-block">
            Bulk Orders Available
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Custom branding and packaging for schools, offices, NGOs, and organizations. Perfect for corporate gifts and
            environmental initiatives.
          </p>
          <button className="px-12 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-xl transition-smooth hover:scale-110 text-lg inline-block">
            Request Bulk Quote
          </button>
        </div>
      </div>
    </section>
  )
}
