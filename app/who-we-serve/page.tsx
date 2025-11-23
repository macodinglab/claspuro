import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import Link from "next/link"
import { Users, GraduationCap, Building2, HeartHandshake, Briefcase, Palette, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Who We Serve | Claspuro Eco-Friendly Notebooks",
  description:
    "Discover who Claspuro serves: students, schools, NGOs, offices, retailers, and creatives choosing eco-friendly banana peel notebooks.",
}

const audience = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Clean, sustainable A4 notebooks for everyday school use, note-taking, and exams.",
  },
  {
    icon: Building2,
    title: "Educational Institutions",
    description: "Large orders with custom branding for schools, universities, and training centers.",
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Nonprofits",
    description: "Environmentally responsible campaign materials and program notebooks.",
  },
  {
    icon: Briefcase,
    title: "Offices & Startups",
    description: "Eco-aligned stationery that reflects your organization's sustainability values.",
  },
  {
    icon: Users,
    title: "Retailers & Shops",
    description: "Green product lines that appeal to eco-conscious customers and communities.",
  },
  {
    icon: Palette,
    title: "Artists & Writers",
    description: "Beautiful notebooks for sketching, journaling, gifting, and everyday creativity.",
  },
]

export default function WhoWeServePage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Navigation />

      <PageHero
        imageSrc="/banner_banana_peel_whoweserve.jpg"
        imageAlt="Claspuro customers and communities we serve"
        title="Who We Serve"
        description="Our eco-friendly banana peel notebooks are designed for students, schools, NGOs, offices, retailers, and creatives who care about the planet."
        breadcrumbCurrent="Who We Serve"
        maxWidth="5xl"
        badgeContent={<span>Communities & Partners</span>}
      />

      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full border border-emerald-200/50 shadow-lg backdrop-blur-sm mb-4">
              <Sparkles size={18} className="animate-pulse text-emerald-600" />
              <span className="text-sm font-semibold">Who We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3">
              Our Notebooks Are Ideal For
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Claspuro notebooks support learning, creativity, and professional work while reducing environmental impact
              across classrooms, offices, and creative studios.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audience.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-md mb-1">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Why Partners Choose Claspuro</h2>
          <p className="text-base sm:text-lg text-emerald-50 max-w-3xl mx-auto mb-10">
            Whether you're running a school, leading a nonprofit, stocking a retail shop, or growing a startup, our
            banana peel notebooks help you align everyday stationery with real environmental impact.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 flex flex-col items-center gap-3">
              <CheckCircle2 size={32} className="text-white" />
              <h3 className="font-bold text-lg">Tangible Sustainability</h3>
              <p className="text-sm text-emerald-50">
                Reduce tree cutting and support a circular economy by choosing notebooks made from upcycled banana waste.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 flex flex-col items-center gap-3">
              <CheckCircle2 size={32} className="text-white" />
              <h3 className="font-bold text-lg">Perfect For Bulk Orders</h3>
              <p className="text-sm text-emerald-50">
                Ideal for schools, NGOs, and organizations that need consistent, eco-friendly stationery at scale.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 flex flex-col items-center gap-3">
              <CheckCircle2 size={32} className="text-white" />
              <h3 className="font-bold text-lg">Inspires Users</h3>
              <p className="text-sm text-emerald-50">
                Students, teams, and creatives love writing in notebooks that tell a meaningful sustainability story.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-emerald-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <span>Request Bulk Quote</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
