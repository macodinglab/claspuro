import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Claspuro | Eco-Friendly Notebook Orders & Partnerships",
  description:
    "Contact Claspuro for eco-friendly banana peel notebook inquiries, bulk orders, school and office partnerships, or sustainability collaborations.",
}

export default function ContactPage() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Navigation />
      <PageHero
        imageSrc="/banner_contact.jpg"
        imageAlt="Contact Claspuro team in Rwanda"
        title="Contact Us"
        description="Get in touch for questions, collaborations, or bulk notebook orders."
        breadcrumbCurrent="Contact"
        badgeClassName="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-6"
        badgeContent={
          <>
            <Mail size={20} />
            <span>We’d love to hear from you</span>
          </>
        }
      />
      <ContactSection />
      <Footer />
    </main>
  )
}
