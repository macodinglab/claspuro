import Link from "next/link"
import { Globe2, Handshake, Leaf, Recycle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Leaf className="text-primary-foreground" size={22} />
              </div>
              <span className="font-bold text-2xl">Claspuro</span>
            </div>
            <p className="text-primary-foreground/90 text-base leading-relaxed">
              Transforming banana waste into premium sustainable notebooks for a better planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/products" className="hover:text-secondary transition-smooth font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-smooth font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-smooth font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-smooth font-medium">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="hover:text-secondary transition-smooth font-medium">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth font-medium">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth font-medium">
                  Sustainability Report
                </a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-secondary transition-smooth font-medium">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="hover:text-secondary transition-smooth font-medium">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth font-medium">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth font-medium">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth font-medium">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base text-primary-foreground/90">
              © {currentYear} Claspuro. All rights reserved. Designed for a sustainable future.
            </p>
            <div className="flex gap-6 text-base font-medium items-center">
              <span className="flex items-center gap-2">
                <Globe2 size={18} />
                Eco-Friendly
              </span>
              <span className="flex items-center gap-2">
                <Recycle size={18} />
                100% Recyclable
              </span>
              <span className="flex items-center gap-2">
                <Handshake size={18} />
                Fair Trade
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
