import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import ProductsShowcase from "@/components/products-showcase"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Eco-Friendly Banana Peel Notebooks | Claspuro Products",
  description:
    "Explore Claspuro's premium A4 eco-friendly notebooks made from banana peels, including ruled, plain, and grid options for students, professionals, and creatives.",
}

export default function ProductsPage() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Navigation />
      <PageHero
        imageSrc="/banner_product.jpg"
        imageAlt="Claspuro eco-friendly product range"
        title="Our Products"
        description="Explore our range of eco-friendly A4 notebooks crafted from upcycled banana waste."
        breadcrumbCurrent="Products"
        badgeContent={
          <>
            <BookOpen size={20} />
            <span>Premium Eco-Friendly Stationery</span>
          </>
        }
      />
      <ProductsShowcase />
      <Footer />
    </main>
  )
}
