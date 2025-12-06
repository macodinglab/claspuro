import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import Link from "next/link"
import { Leaf, Recycle, Users, Target, BookOpen, Sparkles, ArrowRight, CheckCircle2, TrendingUp, Award, Heart, Globe, Package, Shield, Star, Quote } from "lucide-react"

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "Every notebook is crafted from upcycled banana peels, saving trees and reducing waste.",
      color: "from-emerald-500 to-green-600",
      stat: "Zero trees cut"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Transforming agricultural waste into premium products that give back to nature.",
      color: "from-teal-500 to-cyan-600",
      stat: "100% biodegradable"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Smooth writing surface with durable binding for professionals, students, and creatives.",
      color: "from-amber-500 to-orange-600",
      stat: "A4 standard size"
    }
  ]
  
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full mb-6 border border-emerald-200/50 shadow-lg backdrop-blur-sm">
            <Sparkles size={18} className="animate-pulse text-emerald-600" />
            <span className="text-sm font-semibold">Why Choose Claspuro</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Sustainable Notebooks,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Extraordinary Impact
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every Claspuro notebook represents a commitment to environmental restoration and premium quality
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-full border border-emerald-200/50">
                  <span className="text-sm font-bold text-emerald-700">{feature.stat}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Collect Banana Waste",
      description: "We source banana peels from local farms and markets, preventing organic waste from polluting the environment.",
      color: "from-emerald-500 to-green-600"
    },
    {
      number: "02",
      title: "Transform Into Fiber",
      description: "Through our eco-friendly process, banana peels are converted into premium paper fiber without harmful chemicals.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      number: "03",
      title: "Craft Premium Notebooks",
      description: "Expert craftsmanship transforms the fiber into beautiful, durable A4 notebooks ready for your ideas.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: "04",
      title: "Deliver Sustainability",
      description: "Your notebook arrives, representing zero trees cut and a positive step toward environmental restoration.",
      color: "from-purple-500 to-pink-600"
    }
  ]
  
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Waste</span> to Wonder
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our innovative process transforms banana peels into premium notebooks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group"
            >
              <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                <span className="text-2xl font-black text-white">{step.number}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Impact Stats Section
const ImpactStatsSection = () => {
  const stats = [
    { icon: TrendingUp, value: "25%", label: "Trees cutting reduction goal ", subtext: "Annual target" },
    { icon: Users, value: "1000+", label: "Happy Customers", subtext: "And growing" },
    { icon: Globe, value: "50+", label: "Communities Supported", subtext: "Across Rwanda" },
    { icon: Award, value: "100%", label: "Biodegradable", subtext: "Eco-certified" }
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
            Making a Measurable Difference
          </h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Our commitment to sustainability shows in the numbers
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
                <Icon size={48} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-lg text-white font-bold mb-1">{stat.label}</p>
                <p className="text-sm text-emerald-100">{stat.subtext}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Product Preview Section
const ProductPreviewSection = () => {
  const products = [
    {
      name: "Ruled Notebooks",
      description: "Perfect for structured note-taking",
      image: "/ruled-notebook-lined-pages.jpg",
      price: "$3"
    },
    {
      name: "Plain Notebooks",
      description: "Ideal for sketching and creativity",
      image: "/plain-blank-notebook-pages.jpg",
      price: "$3"
    },
    {
      name: "Grid Notebooks",
      description: "Great for technical work",
      image: "/grid-notebook-squared-paper.jpg",
      price: "$3"
    }
  ]
  
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Product Range
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Premium A4 notebooks in three versatile formats
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-emerald-600">{product.price}</span>
                  <span className="text-sm text-gray-500">per notebook</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-lg"
          >
            <span>View All Products</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Switching to Claspuro notebooks was the best decision. Quality is amazing and I feel good about helping the environment!",
      author: "Marie K.",
      role: "University Student",
      rating: 5
    },
    {
      quote: "Our school ordered 500 notebooks for students. The quality exceeded expectations and the kids love the eco-story behind them.",
      author: "David M.",
      role: "School Administrator",
      rating: 5
    },
    {
      quote: "As a designer, I need great paper. Claspuro delivers premium quality while being sustainable. It's perfect!",
      author: "Grace N.",
      role: "Graphic Designer",
      rating: 5
    }
  ]
  
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their Claspuro experience
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

// CTA Section
const CTASection = () => (
  <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-8 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <BookOpen size={40} className="text-white" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
            Join the sustainable stationery revolution. Every notebook makes an impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-lg"
            >
              <span>Shop Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ImpactStatsSection />
      <ProductPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}