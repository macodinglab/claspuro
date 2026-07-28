import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import Link from "next/link"
import { Factory, FlaskConical, Droplets, Briefcase, Sprout, ArrowRight } from "lucide-react"

// About Puroch Split Layout
const AboutPurochSection = () => {
  return (
    <section id="about" className="w-full bg-[#f8f7f5] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <p className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">About Puroch</p>
        <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-8 leading-tight">
          A circular economy <br/> company in Tamil Nadu.
        </h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            Puroch is developing a scalable model to convert banana peel waste into premium 80 gsm paper rolls and A4 notebooks.
          </p>
          <p>
            Using a low impact enzymatic pulping process with full Zero Liquid Discharge and biomass energy, our prototype creates truly sustainable paper while proposing a solution to two major problems: massive banana peel waste and deforestation caused by virgin wood pulp.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto">
        <img src="/banner_banana_peel_home.jpg" alt="Banana Farm" className="w-full h-full object-cover opacity-90" />
      </div>
    </section>
  )
}

// 3-Image Row
const ImageRowSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[40vh]">
      <div className="w-full md:w-1/3 h-64 md:h-full relative group overflow-hidden">
        <img src="/ruled-notebook-lined-pages.jpg" alt="Supply Chain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/20"></div>
        <p className="absolute bottom-6 left-6 text-white text-sm font-bold tracking-widest uppercase">Proposed Sourcing</p>
      </div>
      <div className="w-full md:w-1/3 h-64 md:h-full relative group overflow-hidden">
        <img src="/plain-blank-notebook-pages.jpg" alt="Production" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/20"></div>
        <p className="absolute bottom-6 left-6 text-white text-sm font-bold tracking-widest uppercase">Prototype Process</p>
      </div>
      <div className="w-full md:w-1/3 h-64 md:h-full relative group overflow-hidden">
        <img src="/grid-notebook-squared-paper.jpg" alt="Final Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/20"></div>
        <p className="absolute bottom-6 left-6 text-white text-sm font-bold tracking-widest uppercase">Target Product</p>
      </div>
    </section>
  )
}

// Why Puroch Grid
const WhyPurochSection = () => {
  const reasons = [
    { icon: Factory, title: "Industrial scale", desc: "Planned production from 100% banana peels" },
    { icon: FlaskConical, title: "Enzymatic process", desc: "Proprietary mild enzymatic process" },
    { icon: Droplets, title: "Zero Liquid Discharge", desc: "Complete water recycling system prototype" },
    { icon: Sprout, title: "Direct supply chain", desc: "Proposed sourcing from farmers in Tamil Nadu" },
    { icon: Briefcase, title: "Carbon & Jobs", desc: "Targeting carbon credits + rural job creation" }
  ]

  return (
    <section id="approach" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#f2efe9]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3">
          <p className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">Features</p>
          <h2 className="text-4xl font-serif text-[#1a1a1a] mb-6 leading-tight">
            Why our model <br/> stands apart.
          </h2>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className="bg-[#faf9f6] p-8 border border-black/5 hover:border-emerald-200 transition-colors">
                <Icon className="text-emerald-700 mb-6" size={24} />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Our Impact Section (Dark Map)
const OurImpactSection = () => {
  const impacts = [
    { value: "1,000+", label: "Target annual banana waste processing capacity (tons)" },
    { value: "CO2", label: "Projected to save trees and reduce methane emissions" },
    { value: "120+", label: "Targeted rural jobs, focusing on women & youth" },
    { value: "Premium", label: "Designed to deliver eco-paper at competitive prices" }
  ]

  return (
    <section id="impact" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden text-center">
      {/* Abstract Map Background Simulation */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-center bg-no-repeat bg-contain filter invert"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Projected Impact</p>
        <h2 className="text-4xl font-serif text-white mb-16 leading-tight">
          Global vision, local action.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {impacts.map((imp, i) => (
            <div key={i} className="p-4">
              <p className="text-3xl font-bold text-emerald-400 mb-3">{imp.value}</p>
              <p className="text-sm text-gray-400 leading-relaxed uppercase tracking-widest">{imp.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// The Process Banner
const ProcessSection = () => {
  const steps = [
    "1. Peel Collection from local farmers",
    "2. Washing & Shredding",
    "3. Enzymatic Pre-Treatment",
    "4. Mild Alkaline Cooking",
    "5. Mechanical Refining",
    "6. Screening & Cleaning",
    "7. Paper Formation → 80 gsm Eco-Paper"
  ]
  return (
    <section id="process" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-40">
        <img src="/banner_banana_peel_home.jpg" alt="Process" className="w-full h-full object-cover filter grayscale blur-sm" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">The Process</p>
          <h2 className="text-5xl font-serif text-white mb-6 leading-tight">
            A highly scalable <br/><span className="text-emerald-500 italic font-light">ecosystem</span><br/> for sustainable paper.
          </h2>
        </div>
        <div className="w-full md:w-1/2 bg-white/5 p-8 backdrop-blur-sm border border-white/10">
          <ul className="space-y-4 text-gray-300">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <span className="text-emerald-500 font-bold mt-1">✓</span>
                <span className="text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// Products Cards
const ProductsSection = () => {
  const products = [
    {
      name: "Paper Rolls (Prototype)",
      description: "Targeting premium 80 gsm for eco-friendly printing & packaging.",
      image: "/ruled-notebook-lined-pages.jpg", 
    },
    {
      name: "A4 Notebooks (Proposed)",
      description: "Planned high-quality, biodegradable pathway to FSC Recycled standards.",
      image: "/plain-blank-notebook-pages.jpg",
    },
    {
      name: "Custom Solutions (Future)",
      description: "Envisioned sustainable stationery for eco-conscious brands & institutions.",
      image: "/grid-notebook-squared-paper.jpg",
    }
  ]

  return (
    <section id="what-we-do" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <p className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">Target Products</p>
            <h2 className="text-4xl font-serif text-[#1a1a1a]">
              Explore our proposed <br/> product line.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group bg-white flex flex-col h-full border border-black/5 hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-3">Product</p>
                  <h3 className="text-2xl font-serif text-[#1a1a1a] mb-3">{p.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section
const TeamSection = () => {
  const team = [
    {
      name: "Aime Pacifique Ikuzwe Mugisha",
      role: "Founder & CEO",
      image: "/ceo-founder.JPG",
      desc: "Aime leads Puroch's vision of reducing deforestation by turning banana waste into sustainable, premium stationery while creating ethical jobs.",
      email: "aimeikuzwe@claspuro.com"
    },
    {
      name: "Kennedy Karegeya",
      role: "Co-founder",
      image: "/co-founder.jpg",
      desc: "Kennedy focuses on operations, partnerships, and community engagement, ensuring Puroch's impact reaches schools, offices, and organizations.",
      email: "kennedykaregeya@claspuro.com"
    }
  ]

  return (
    <section id="team" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#f2efe9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">The People</p>
          <h2 className="text-4xl font-serif text-[#1a1a1a] mb-6">
            Meet our dedicated team.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate founders dedicated to transforming banana waste into opportunity for communities and the planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-emerald-100">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-[#1a1a1a] mb-2">{member.name}</h3>
              <p className="text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{member.desc}</p>
              <a href={`mailto:${member.email}`} className="text-emerald-700 hover:text-emerald-900 text-sm font-semibold tracking-wide">
                 {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Get in Touch CTA
const GetInTouchSection = () => (
  <section id="contact" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden flex items-center justify-center text-center">
    <div className="absolute inset-0 z-0">
      <img src="/banner_banana_peel_home.jpg" alt="Forest Background" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]"></div>
    </div>
    
    <div className="relative z-10 max-w-3xl mx-auto">
      <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">Get In Touch</p>
      <h2 className="text-5xl md:text-6xl font-serif text-white mb-10 leading-tight">
        Ready to make an <br/> impact?
      </h2>
      <Link href="/#contact" className="inline-block px-10 py-4 bg-emerald-700 hover:bg-emerald-600 text-white text-sm uppercase tracking-widest font-bold transition-all duration-300 min-w-[200px]">
        Partner With Us
      </Link>
      <p className="mt-8 text-gray-400 text-sm tracking-widest uppercase">
        Tamil Nadu, India | <a href="mailto:aimeikuzwe@claspuro.com" className="hover:text-emerald-400 transition-colors">aimeikuzwe@claspuro.com</a>
      </p>
    </div>
  </section>
)

export default function Home() {
  return (
    <main className="w-full bg-[#f8f7f5]">
      <Navigation />
      <HeroSection />
      <AboutPurochSection />
      <ImageRowSection />
      <WhyPurochSection />
      <OurImpactSection />
      <ProcessSection />
      <ProductsSection />
      <TeamSection />
      <GetInTouchSection />
      <Footer />
    </main>
  )
}
