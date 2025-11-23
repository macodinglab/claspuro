import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building2, Users, ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Claspuro | Eco-Friendly Notebook Orders & Partnerships",
  description:
    "Contact Claspuro for eco-friendly banana peel notebook inquiries, bulk orders, school and office partnerships, or sustainability collaborations.",
}

// Enhanced Page Hero Component
const EnhancedPageHero = () => (
  <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/banner_contact.jpg"
        alt="Contact Claspuro team in Rwanda"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-900/70 to-emerald-900/80"></div>
    </div>
    
    {/* Decorative animated blobs */}
    <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    
    {/* Hero Content */}
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 border border-white/30 hover:bg-white/30 transition-all duration-300">
        <Mail size={20} />
        <span>We'd love to hear from you</span>
      </div>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
        Get In Touch
      </h1>
      
      <p className="text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
        Questions, collaborations, or bulk notebook orders—we're here to help make your eco-friendly vision a reality.
      </p>
      
      {/* Breadcrumb */}
      <div className="mt-8 flex items-center justify-center gap-2 text-emerald-100">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white font-semibold">Contact</span>
      </div>
    </div>
  </section>
)

// Enhanced Contact Section Component
const EnhancedContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@claspuro.com",
      subtext: "We'll respond within 24 hours",
      color: "from-emerald-500 to-green-600",
      href: "mailto:hello@claspuro.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+250 788 123 456",
      subtext: "Mon-Fri 9AM-5PM EAT",
      color: "from-blue-500 to-indigo-600",
      href: "tel:+250788123456"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Kigali, Rwanda",
      subtext: "East Africa",
      color: "from-purple-500 to-pink-600",
      href: "#location"
    }
  ]
  
  const inquiryTypes = [
    {
      icon: Building2,
      title: "Bulk Orders",
      description: "Schools, offices, NGOs"
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Collaborations & distributors"
    },
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions & feedback"
    }
  ]

  const benefits = [
    "100% eco-friendly banana peel notebooks",
    "Custom branding for bulk orders",
    "Fast & reliable shipping across Rwanda",
    "Dedicated customer support",
    "Sustainable partnership opportunities"
  ]

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <Link
                key={index}
                href={info.href}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg text-emerald-600 font-semibold mb-1">{info.value}</p>
                <p className="text-sm text-gray-600">{info.subtext}</p>
              </Link>
            )
          })}
        </div>
        
        {/* Inquiry Types */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full mb-4 border border-emerald-200/50 shadow-lg backdrop-blur-sm">
              <Sparkles size={18} className="animate-pulse text-emerald-600" />
              <span className="text-sm font-semibold">How Can We Help?</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {inquiryTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border-2 border-emerald-200/50 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                >
                  <Icon size={32} className="text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-black text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-200">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Send Us A Message
            </h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you soon.</p>
            
            {/* Form Fields Layout */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-emerald-300 focus:border-emerald-500 focus:shadow-lg transition-all duration-300 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-emerald-300 focus:border-emerald-500 focus:shadow-lg transition-all duration-300 outline-none"
                    placeholder="email@claspuro.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-emerald-300 focus:border-emerald-500 focus:shadow-lg transition-all duration-300 outline-none"
                    placeholder="+250 788 123 456"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-emerald-300 focus:border-emerald-500 focus:shadow-lg transition-all duration-300 outline-none">
                    <option>Select a subject</option>
                    <option>Bulk Order Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-emerald-300 focus:border-emerald-500 focus:shadow-lg transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* Right: Additional Info */}
          <div className="space-y-8">
            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-6">Why Choose Claspuro?</h3>
                <div className="space-y-4">
                  {benefits.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight size={14} className="text-white" />
                      </div>
                      <p className="text-emerald-50">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Monday - Friday</span>
                  <span className="text-emerald-600 font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Saturday</span>
                  <span className="text-emerald-600 font-bold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-700">Sunday</span>
                  <span className="text-gray-500 font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Navigation />
      <EnhancedPageHero />
      <EnhancedContactSection />
      <Footer />
    </main>
  )
}