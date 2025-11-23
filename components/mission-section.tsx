"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Infinity, Recycle, Sprout, Star, Zap } from "lucide-react"
import SectionBadge from "./section-badge"

const values = [
  {
    icon: Sprout,
    title: "Sustainability",
    description: "Transforming waste into premium products while protecting our planet for future generations.",
  },
  {
    icon: Heart,
    title: "Community Empowerment",
    description: "Supporting local communities through ethical practices and fair trade principles.",
  },
  {
    icon: Star,
    title: "Quality Craftsmanship",
    description: "Premium notebooks designed for durability, comfort, and everyday inspiration.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pioneering eco-friendly solutions that redefine what sustainable stationery can be.",
  },
]

export default function MissionSection() {
  const [visibleValues, setVisibleValues] = useState<number[]>([])
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
    <section id="about" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="animate-slide-in-left">
            <SectionBadge className="mb-6 animate-pulse-soft">
              <span>Our Purpose</span>
            </SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
              Our <span className="text-emerald-700">Mission</span> & Vision
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              We are pioneers in sustainable stationery, transforming banana waste into premium, eco-friendly A4
              notebooks that protect trees and promote a circular economy.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="font-bold text-primary">Our Vision:</span>{" "}
              <span className="text-muted-foreground">
                To reduce global tree cutting by 25% every year through sustainable, banana-based stationery solutions.
              </span>
            </p>
          </div>
          <div className="relative group animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-smooth opacity-75"></div>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-smooth">
              <img
                src="/banana-peel-plant-based-material-sustainability.jpg"
                alt="Eco-friendly banana peel material"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground text-center mb-16 animate-fade-in-up">
            Core Values
          </h3>
          <div ref={containerRef} className="grid md:grid-cols-2 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon
              const isVisible = visibleValues.includes(index)

              return (
                <div
                  key={index}
                  data-value-index={index}
                  className={`transition-all duration-700 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card rounded-2xl p-10 border-2 border-border hover:border-primary/50 transition-smooth hover:shadow-xl hover:-translate-y-2 group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 group-hover:scale-110 transition-smooth">
                      <Icon size={32} className="text-primary animate-bounce-slow" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t-2 border-border">
          <div className="text-center group hover:scale-105 transition-smooth">
            <p className="text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-smooth animate-scale-pulse">
              100%
            </p>
            <p className="text-lg text-muted-foreground font-medium">Biodegradable Materials</p>
          </div>
          <div className="text-center group hover:scale-105 transition-smooth">
            <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth animate-rotate-slow">
              <Recycle className="text-accent" size={56} />
            </div>
            <p className="text-lg text-muted-foreground font-medium">Waste to Premium Product</p>
          </div>
          <div className="text-center group hover:scale-105 transition-smooth">
            <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth animate-pulse-soft">
              <Infinity className="text-secondary" size={56} />
            </div>
            <p className="text-lg text-muted-foreground font-medium">Circular Economy Impact</p>
          </div>
        </div>
      </div>
    </section>
  )
}
