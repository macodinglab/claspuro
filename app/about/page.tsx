import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import MissionSection from "@/components/mission-section"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Sprout } from "lucide-react"

export const metadata: Metadata = {
  title: "About Claspuro | Sustainable Banana Peel Notebook Innovators",
  description:
    "Discover Claspuro's mission to reduce tree cutting by turning banana waste into premium eco-friendly notebooks and driving a circular, community-focused economy.",
}

export default function AboutPage() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Navigation />
      <PageHero
        imageSrc="/banner_peel_about.jpg"
        imageAlt="About Claspuro sustainable banana peel notebooks"
        title="About Claspuro"
        description="Learn more about our mission, vision, and the positive impact of our sustainable stationery."
        breadcrumbCurrent="About"
        badgeContent={
          <>
            <Sprout size={20} />
            <span>Mission, Vision & Impact</span>
          </>
        }
      />
      <MissionSection />
      <Footer />
    </main>
  )
}
