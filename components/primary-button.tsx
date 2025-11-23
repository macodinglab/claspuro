import type { ButtonHTMLAttributes, ReactNode } from "react"

type PrimaryButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function PrimaryButton({ children, className, type = "button", ...rest }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full hover:shadow-2xl transition-smooth hover:scale-105 ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  )
}
