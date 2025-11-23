import Link from "next/link"
import { Globe2, Handshake, Leaf, Recycle, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight, Heart, Sparkles } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/who-we-serve", label: "Who We Serve" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Blog" }
  ]

  const company = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Sustainability Report" },
    { href: "/faq", label: "FAQ" }
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500" }
  ]

  const sustainabilityBadges = [
    { icon: Globe2, text: "Eco-Friendly", color: "from-emerald-500 to-green-600" },
    { icon: Recycle, text: "100% Recyclable", color: "from-teal-500 to-cyan-600" },
    { icon: Handshake, text: "Fair Trade", color: "from-blue-500 to-indigo-600" }
  ]

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
                  <Sparkles size={16} className="text-white" />
                  <span className="text-sm font-semibold text-white">Stay Updated</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  Join Our Eco-Community
                </h3>
                <p className="text-emerald-50">
                  Get exclusive updates, sustainability tips, and special offers
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:w-64 md:w-80 px-6 py-3 rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 font-medium outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                />
                <button className="w-full sm:w-auto px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
                  <span>Subscribe</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                <Leaf className="text-white" size={24} />
              </div>
              <span className="font-black text-3xl">Claspuro</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Transforming banana waste into premium sustainable notebooks. Every page is a step toward environmental restoration and a greener future.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@claspuro.com" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <span className="font-medium">hello@claspuro.com</span>
              </a>
              <a href="tel:+250788123456" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <span className="font-medium">+250 788 123 456</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="font-medium">Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium flex items-center gap-2 group"
                  >
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium flex items-center gap-2 group"
                  >
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white">Follow Us</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-3 text-gray-400 ${social.color} transition-colors duration-300 group`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                      <Icon size={18} />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Sustainability Badges */}
        <div className="border-t border-white/10 pt-10 pb-8">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {sustainabilityBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${badge.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="font-bold text-white">{badge.text}</span>
                </div>
              )
            })}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Claspuro. All rights reserved. Made with{" "}
              <Heart size={14} className="inline text-red-500 fill-red-500" />{" "}
              for a sustainable future.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}