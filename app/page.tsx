import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Navigation />
      <HeroSection />
      <Footer />
    </main>
  )
}
