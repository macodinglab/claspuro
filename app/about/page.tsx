import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Sprout, Users, Target, Lightbulb, Award, TrendingUp, Heart, Globe, Sparkles, ArrowRight, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "About Claspuro | Sustainable Banana Peel Notebook Innovators",
  description:
    "Discover Claspuro's mission to reduce tree cutting by turning banana waste into premium eco-friendly notebooks and papers and driving a circular, community-focused economy.",
}

// Enhanced Page Hero
const EnhancedPageHero = () => (
  <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/banner_peel_about.jpg"
        alt="About Claspuro sustainable banana peel notebooks and papers"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/85 via-green-900/80 to-emerald-900/85"></div>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

    {/* Hero Content */}
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 border border-white/30 hover:bg-white/30 transition-all duration-300">
        <Sprout size={20} />
        <span>Mission, Vision & Impact</span>
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
        About Claspuro
      </h1>

      <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed mb-8">
        Pioneering the transformation of banana waste into premium eco-friendly notebooks and papers, one sustainable page at a time.
      </p>

      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-2 text-emerald-100">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white font-semibold">About</span>
      </div>
    </div>
  </section>
)

// Our Story Section
const OurStorySection = () => (
  <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Story Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full border border-emerald-200/50 shadow-lg backdrop-blur-sm">
            <Sparkles size={18} className="animate-pulse text-emerald-600" />
            <span className="text-sm font-semibold">Our Story</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            From Waste to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Wonder</span>
          </h2>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Claspuro was born from a simple observation: World  produces over 40million tons of banana waste annually, while traditional paper manufacturing continues to devastate our forests. We asked ourselves—what if we could solve both problems at once?
            </p>
            <p>
              Founded in 2025, we began with a vision to revolutionize the stationery industry by creating premium notebooks and papers from 100% upcycled banana peels. What started as an experiment in sustainability has grown into a movement.
            </p>
            <p className="font-semibold text-emerald-700">
              Today, every Claspuro notebook and paper represents not just a commitment to quality, but a promise to our planet and future generations.
            </p>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border-2 border-emerald-200/50 relative mt-8">
            <Quote size={32} className="text-emerald-300 absolute top-4 left-4" />
            <p className="text-gray-800 italic text-lg pl-8 pt-4">
              "We don't just make notebooks and papers. We're creating a sustainable future where waste becomes opportunity, and every page written is a step toward environmental restoration."
            </p>
            <p className="text-emerald-700 font-bold mt-4 pl-8">— Claspuro Founders</p>
          </div>
        </div>

        {/* Right: Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="/banana-peel-plant-based-material-sustainability.jpg"
              alt="Banana peel material"
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/ruled-notebook-lined-pages.jpg"
              alt="Notebook product"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/plain-blank-notebook-pages.jpg"
              alt="Notebook pages"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Mission & Vision Section
const MissionVisionSection = () => {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To transform agricultural waste into premium sustainable stationery, reducing deforestation while empowering local communities through ethical manufacturing practices.",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50"
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "A world where 25% of tree cutting is reduced annually through innovative, banana-based paper alternatives that redefine sustainable stationery for generations to come.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    }
  ]

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Vision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Driven by purpose, guided by sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{card.description}</p>
              </div>
            )
          })}
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-black text-center text-gray-900 mb-12">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Values</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Sprout, title: "Sustainability", description: "Environmental stewardship in every action", color: "from-emerald-500 to-green-600" },
              { icon: Heart, title: "Community", description: "Empowering local partnerships", color: "from-rose-500 to-pink-600" },
              { icon: Award, title: "Quality", description: "Premium craftsmanship always", color: "from-amber-500 to-orange-600" },
              { icon: Lightbulb, title: "Innovation", description: "Pioneering eco-solutions", color: "from-blue-500 to-indigo-600" }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg group text-center"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Leadership Section
const LeadershipSection = () => (
  <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full border border-emerald-200/50 shadow-lg backdrop-blur-sm mb-4">
          <Sparkles size={18} className="animate-pulse text-emerald-600" />
          <span className="text-sm font-semibold">Leadership Team</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">
          The People Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Claspuro</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Passionate founders dedicated to transforming banana waste into opportunity for communities and the planet.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* CEO */}
        <div className="bg-gradient-to-b from-emerald-50 to-white rounded-3xl p-8 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-200 flex-shrink-0">
              <img
                src="/ceo-founder.JPG"
                alt="Claspuro CEO - Aime Pacifique Ikuzwe Mugisha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h3 className="text-2xl font-black text-gray-900">Aime Pacifique Ikuzwe Mugisha</h3>
              <p className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">Founder & CEO</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Aime leads Claspuro's vision of reducing deforestation by turning banana waste into sustainable, premium
                stationery while creating ethical jobs across Rwanda.
              </p>
              <a
                href="mailto:aimeikuzwe@claspuro.com"
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold text-sm mt-2"
              >
                <ArrowRight size={16} />
                <span>aimeikuzwe@claspuro.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Co-founder */}
        <div className="bg-gradient-to-b from-emerald-50 to-white rounded-3xl p-8 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-200 flex-shrink-0">
              <img
                src="/co-founder.jpg"
                alt="Claspuro Co-founder - Kennedy Karegeya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h3 className="text-2xl font-black text-gray-900">Kennedy Karegeya</h3>
              <p className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">Co-founder</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Kennedy focuses on operations, partnerships, and community engagement, ensuring Claspuro's impact reaches
                schools, offices, and organizations across East Africa.
              </p>
              <a
                href="mailto:kennedykaregeya@claspuro.com"
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold text-sm mt-2"
              >
                <ArrowRight size={16} />
                <span>kennedykaregeya@claspuro.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Impact Stats Section
const ImpactSection = () => {
  const stats = [
    { icon: TrendingUp, value: "25%", label: "Tree Reduction Goal", color: "from-emerald-500 to-green-600" },
    { icon: Users, value: "50+", label: "Communities Supported", color: "from-blue-500 to-indigo-600" },
    { icon: Globe, value: "100%", label: "Biodegradable Products", color: "from-purple-500 to-pink-600" },
    { icon: Award, value: "1000+", label: "Happy Customers", color: "from-amber-500 to-orange-600" }
  ]

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Impact By The Numbers
          </h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Making a measurable difference for our planet and communities
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  <Icon size={28} className="text-white" />
                </div>
                <p className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                <p className="text-emerald-50 font-semibold">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Call to Action Section
const CTASection = () => (
  <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
        Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Sustainable Journey</span>
      </h2>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Be part of the solution. Choose Claspuro for your stationery needs and help us create a greener future.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-lg"
        >
          <span>Explore Products</span>
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-900 font-bold rounded-full border-2 border-emerald-600 hover:bg-emerald-50 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
        >
          <span>Get In Touch</span>
        </Link>
      </div>
    </div>
  </section>
)

export default function AboutPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Navigation />
      <EnhancedPageHero />
      <OurStorySection />
      <MissionVisionSection />
      <LeadershipSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </main>
  )
}