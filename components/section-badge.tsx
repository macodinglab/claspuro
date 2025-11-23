import type { ReactNode } from "react"

type SectionBadgeProps = {
  children: ReactNode
  className?: string
}

export default function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full border border-emerald-200/50 shadow-lg backdrop-blur-sm text-sm font-semibold ${className || ""}`}
    >
      {children}
    </div>
  )
}
