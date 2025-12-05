import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import ProductsShowcase from "@/components/products-showcase"
import Footer from "@/components/footer"
import { BookOpen, Leaf, Shield, Sparkles, Star, CheckCircle2, Package, Truck, Award, Users, ArrowRight, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Eco-Friendly Banana Peel Notebooks | Claspuro Products",
  description:
    "Explore Claspuro's premium A4 eco-friendly notebooks made from banana peels, including ruled, plain, and grid options for students, professionals, and creatives.",
}

// Enhanced Page Hero
const EnhancedPageHero = () => (
  <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/banner_product.jpg"
        alt="Claspuro eco-friendly product range"
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
        <BookOpen size={20} />
        <span>Premium Eco-Friendly Stationery</span>
      </div>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
        Our Products
      </h1>
      
      <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed mb-8">
        Discover premium A4 notebooks crafted from 100% upcycled banana waste. Sustainable, durable, and designed for everyday excellence.
      </p>
      
      {/* Quick Stats */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
        <div className="text-center">
          <p className="text-3xl font-black text-white">100%</p>
          <p className="text-sm text-emerald-100">Biodegradable</p>
        </div>
        <div className="w-px h-12 bg-white/30"></div>
        <div className="text-center">
          <p className="text-3xl font-black text-white">A4 Size</p>
          <p className="text-sm text-emerald-100">Premium Quality</p>
        </div>
        <div className="w-px h-12 bg-white/30"></div>
        <div className="text-center">
          <p className="text-3xl font-black text-white">3 Types</p>
          <p className="text-sm text-emerald-100">Ruled, Plain, Grid</p>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-2 text-emerald-100">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white font-semibold">Products</span>
      </div>
    </div>
  </section>
)

// Why Choose Our Products Section
const WhyChooseSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "Made entirely from upcycled banana peels—zero trees harmed in production.",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Smooth writing surface with durable binding that lasts through heavy daily use.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Award,
      title: "Certified Sustainable",
      description: "Fully biodegradable and compostable—returns to nature without harmful residue.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Package,
      title: "Perfect Sizing",
      description: "Standard A4 format (210mm × 297mm) fits all standard bags and folders.",
      color: "from-amber-500 to-orange-600"
    }
  ]
  
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full mb-6 border border-emerald-200/50 shadow-lg backdrop-blur-sm">
            <Sparkles size={18} className="animate-pulse text-emerald-600" />
            <span className="text-sm font-semibold">Why Choose Claspuro</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Claspuro</span> Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            More than just notebooks—a commitment to quality, sustainability, and positive environmental impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Product Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      category: "For Students",
      items: [
        "Eco-conscious note-taking",
        "Durable for daily use",
        "Affordable pricing",
        "Perfect for all subjects"
      ]
    },
    {
      category: "For Professionals",
      items: [
        "Premium presentation",
        "Sustainable corporate choice",
        "Custom branding available",
        "Ideal for meetings"
      ]
    },
    {
      category: "For Creatives",
      items: [
        "Smooth sketching surface",
        "Versatile page options",
        "Inspiring eco-design",
        "Great for journaling"
      ]
    }
  ]
  
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Perfect For <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Everyone</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a student, professional, or creative—our notebooks adapt to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border-2 border-emerald-200/50 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors duration-300">
                {benefit.category}
              </h3>
              <div className="space-y-3">
                {benefit.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Sustainability Section
const SustainabilitySection = () => (
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
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="text-white">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Sustainability In Every Page
          </h2>
          <div className="space-y-4 text-emerald-50 text-lg leading-relaxed">
            <p>
              Each Claspuro notebook represents our commitment to environmental restoration. By choosing banana peel paper, you're actively participating in reducing deforestation and supporting a circular economy.
            </p>
            <p className="font-semibold text-white">
              Each tone of our paper saves approximately 17 trees and prevents agricultural waste from pollung our environment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-4xl font-black text-white mb-2">Zero</p>
              <p className="text-emerald-100 font-semibold">Trees Cut</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-4xl font-black text-white mb-2">100%</p>
              <p className="text-emerald-100 font-semibold">Compostable</p>
            </div>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/banana-peel-plant-based-material-sustainability.jpg"
              alt="Sustainable banana peel material"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Customer Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "These notebooks are incredible! The quality is outstanding, and knowing they're eco-friendly makes me feel great about every purchase.",
      author: "Sarah M.",
      role: "University Student",
      rating: 5
    },
    {
      quote: "We switched our entire office to Claspuro notebooks. Our team loves them, and it aligns perfectly with our sustainability goals.",
      author: "James K.",
      role: "Corporate Manager",
      rating: 5
    },
    {
      quote: "As an artist, I need quality paper. Claspuro delivers on quality while being kind to the planet. It's a win-win!",
      author: "Aisha R.",
      role: "Graphic Designer",
      rating: 5
    }
  ]
  
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers making a positive impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl relative"
            >
              <Quote size={32} className="text-emerald-200 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
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

// Ordering Information Section
const OrderingInfoSection = () => {
  const features = [
    { icon: Truck, title: "Fast Delivery", description: "2-5 business days across Rwanda" },
    { icon: Package, title: "Bulk Orders", description: "Custom pricing for large quantities" },
    { icon: Shield, title: "Quality Guarantee", description: "100% satisfaction or money back" },
    { icon: Users, title: "Custom Branding", description: "Logo printing for organizations" }
  ]
  
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-12 border-2 border-emerald-200/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Easy Ordering Process
            </h2>
            <p className="text-lg text-gray-600">
              Getting your eco-friendly notebooks is simple
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-lg"
            >
              <span>Contact Us to Order</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProductsPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Navigation />
      <EnhancedPageHero />
      <WhyChooseSection />
      <ProductsShowcase />
      <BenefitsSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <OrderingInfoSection />
      <Footer />
    </main>
  )
}