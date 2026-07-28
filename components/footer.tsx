import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/#what-we-do", label: "What We Do" },
    { href: "/#about", label: "About Us" },
    { href: "/#approach", label: "Approach" },
    { href: "/#team", label: "Team" },
    { href: "/#contact", label: "Get In Touch" }
  ]

  return (
    <footer className="w-full bg-[#121212] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="w-full md:w-1/3">
            <Link href="/" className="inline-block mb-6">
              <span className="font-black text-white text-3xl tracking-wide uppercase">
                Puroch
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              From Banana Waste to Tree-Free Paper. We are developing a scalable model to transform agricultural waste into high-quality, sustainable paper profitably and responsibly.
            </p>
            <div className="text-sm font-medium tracking-widest text-emerald-400 uppercase">
              <a href="mailto:info@claspuro.com" className="hover:text-emerald-300 transition-colors">info@claspuro.com</a>
            </div>
          </div>

          {/* Links Column */}
          <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-12 justify-end">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-6">Explore</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col justify-center items-center pt-8 border-t border-white/10 text-xs text-gray-500 tracking-widest uppercase">
          <p>© {currentYear} Puroch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}