import Link from "next/link"
import { ReactNode } from "react"
import SectionBadge from "./section-badge"

const PAGE_HERO_PARTICLES = [
  { left: "15%", top: "22%", delay: "0s", duration: "18s" },
  { left: "32%", top: "68%", delay: "0.8s", duration: "22s" },
  { left: "55%", top: "30%", delay: "1.5s", duration: "20s" },
  { left: "72%", top: "76%", delay: "2.1s", duration: "24s" },
  { left: "85%", top: "40%", delay: "2.9s", duration: "21s" },
]

type PageHeroProps = {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  breadcrumbCurrent?: string
  badgeContent?: ReactNode
  badgeClassName?: string
  maxWidth?: "5xl" | "6xl"
}

export default function PageHero({
  imageSrc,
  imageAlt,
  title,
  description,
  breadcrumbCurrent,
  badgeContent,
  badgeClassName,
  maxWidth = "6xl",
}: PageHeroProps) {
  const maxWidthClass = maxWidth === "5xl" ? "max-w-5xl" : "max-w-6xl"

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-emerald-50/95" />
      </div>

      {/* Subtle animated blobs */}
      <div className="pointer-events-none">
        <div className="absolute top-12 right-10 w-80 h-80 bg-gradient-to-br from-emerald-300/25 to-green-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-8 w-72 h-72 bg-gradient-to-tr from-teal-300/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating particles (deterministic) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PAGE_HERO_PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/25 rounded-full animate-hero-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 ${maxWidthClass} mx-auto text-center`}>
        {badgeContent && (
          <SectionBadge className={badgeClassName || "mb-6"}>{badgeContent}</SectionBadge>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          {description}
        </p>

        {breadcrumbCurrent && (
          <div className="text-sm text-muted-foreground/90 flex items-center justify-center gap-1">
            <Link href="/" className="hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">{breadcrumbCurrent}</span>
          </div>
        )}
      </div>
    </section>
  )
}
