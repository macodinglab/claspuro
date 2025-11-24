import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Users, GraduationCap, Building2, HeartHandshake, Briefcase, Palette, Sparkles, CheckCircle2, ArrowRight, Quote, Star, Package, TrendingUp, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Who We Serve | Claspuro Eco-Friendly Notebooks",
  description:
    "Discover who Claspuro serves: students, schools, NGOs, offices, retailers, and creatives choosing eco-friendly banana peel notebooks.",
}

// Enhanced Page Hero Component
const EnhancedPageHero = () => (
  <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/banner_banana_peel_whoweserve.jpg"
        alt="Claspuro customers and communities we serve"
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
        <Users size={20} />
        <span>Communities & Partners</span>
      </div>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
        Who We Serve
      </h1>
      
      <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed mb-8">
        Our eco-friendly banana peel notebooks empower students, schools, NGOs, offices, retailers, and creatives who care about the planet.
      </p>
      
      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-2 text-emerald-100">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white font-semibold">Who We Serve</span>
      </div>
    </div>
  </section>
)

// Audience Section with Enhanced Cards
const AudienceSection = () => {
  const audience = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Clean, sustainable A4 notebooks for everyday school use, note-taking, and exams.",
      color: "from-emerald-500 to-green-600",
      stats: "1000+ students"
    },
    {
      icon: Building2,
      title: "Educational Institutions",
      description: "Large orders with custom branding for schools, universities, and training centers.",
      color: "from-blue-500 to-indigo-600",
      stats: "50+ schools"
    },
    {
      icon: HeartHandshake,
      title: "NGOs & Nonprofits",
      description: "Environmentally responsible campaign materials and program notebooks.",
      color: "from-purple-500 to-pink-600",
      stats: "30+ organizations"
    },
    {
      icon: Briefcase,
      title: "Offices & Startups",
      description: "Eco-aligned stationery that reflects your organization's sustainability values.",
      color: "from-teal-500 to-cyan-600",
      stats: "100+ companies"
    },
    {
      icon: Users,
      title: "Retailers & Shops",
      description: "Green product lines that appeal to eco-conscious customers and communities.",
      color: "from-amber-500 to-orange-600",
      stats: "25+ retailers"
    },
    {
      icon: Palette,
      title: "Artists & Writers",
      description: "Beautiful notebooks for sketching, journaling, gifting, and everyday creativity.",
      color: "from-rose-500 to-red-600",
      stats: "500+ creatives"
    },
  ]

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full mb-6 border border-emerald-200/50 shadow-lg backdrop-blur-sm">
            <Sparkles size={18} className="animate-pulse text-emerald-600" />
            <span className="text-sm font-semibold">Who We Serve</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Our Notebooks Are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Ideal For
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Supporting learning, creativity, and professional work while reducing environmental impact across classrooms, offices, and creative studios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {audience.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-emerald-400 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-full border border-emerald-200/50">
                  <span className="text-sm font-bold text-emerald-700">{item.stats}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Use Cases Section
const UseCasesSection = () => {
  const useCases = [
    {
      category: "Educational Excellence",
      description: "Schools use our notebooks for student assignments, teacher planning, and administrative work while teaching environmental responsibility.",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600"
    },
    {
      category: "Corporate Sustainability",
      description: "Companies choose Claspuro for meetings, onboarding materials, and branded corporate gifts that align with ESG goals.",
      icon: Briefcase,
      color: "from-emerald-500 to-green-600"
    },
    {
      category: "Creative Expression",
      description: "Artists and writers trust our smooth paper for sketches, poetry, journaling, and creative projects that inspire action.",
      icon: Palette,
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Real-World{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Use Cases
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how different communities are making an impact with Claspuro notebooks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border-2 border-emerald-200/50 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{useCase.category}</h3>
                <p className="text-gray-700 leading-relaxed">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Our entire school switched to Claspuro notebooks. Students love them and it's teaching them about sustainability in a practical way.",
      author: "Principal Sarah M.",
      role: "Green Valley Secondary School",
      category: "Education",
      rating: 5
    },
    {
      quote: "We ordered 500 branded notebooks for our nonprofit campaign. Quality exceeded expectations and they align perfectly with our environmental mission.",
      author: "David K.",
      role: "EcoAction Rwanda",
      category: "NGO",
      rating: 5
    },
    {
      quote: "As a designer, paper quality matters. These notebooks are perfect for sketching and the eco-story makes them even better.",
      author: "Grace N.",
      role: "Freelance Designer",
      category: "Creative",
      rating: 5
    }
  ]

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Partners Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from schools, organizations, and individuals making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl relative"
            >
              <Quote size={40} className="text-emerald-200 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-4">
                {testimonial.category}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-black text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Section
const WhyChooseSection = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Tangible Sustainability",
      description: "Reduce tree cutting and support a circular economy by choosing notebooks made from upcycled banana waste."
    },
    {
      icon: Package,
      title: "Perfect For Bulk Orders",
      description: "Ideal for schools, NGOs, and organizations that need consistent, eco-friendly stationery at scale."
    },
    {
      icon: Award,
      title: "Inspires Users",
      description: "Students, teams, and creatives love writing in notebooks that tell a meaningful sustainability story."
    },
    {
      icon: TrendingUp,
      title: "Custom Branding Available",
      description: "Add your logo and messaging to create branded notebooks that reflect your organization's values."
    }
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
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Why Partners Choose Claspuro
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            Whether you're running a school, leading a nonprofit, stocking a retail shop, or growing a startup, our banana peel notebooks help you align everyday stationery with real environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 text-center"
              >
                <Icon size={40} className="text-white mx-auto mb-4" />
                <h3 className="font-black text-lg text-white mb-3">{benefit.title}</h3>
                <p className="text-sm text-emerald-50 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <span>Explore Products</span>
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg"
          >
            <span>Request Bulk Quote</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function WhoWeServePage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Navigation />
      <EnhancedPageHero />
      <AudienceSection />
      <UseCasesSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <Footer />
    </main>
  )
}