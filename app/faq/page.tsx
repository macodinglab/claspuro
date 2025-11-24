"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Search, Plus, Minus, HelpCircle, Package, Globe, Leaf, Sparkles, ArrowRight, MessageCircle } from "lucide-react"

// Enhanced Page Hero
const EnhancedPageHero = () => (
  <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/banner_banana_peel_whoweserve.jpg"
        alt="Claspuro FAQ"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/85 via-green-900/80 to-emerald-900/85"></div>
    </div>
    
    <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 border border-white/30">
        <HelpCircle size={20} />
        <span>Questions about Claspuro?</span>
      </div>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
        Frequently Asked Questions
      </h1>
      
      <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
        Find quick answers about our eco-friendly banana peel notebooks, production process, and ordering options.
      </p>
      
      <div className="mt-8 flex items-center justify-center gap-2 text-emerald-100">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white font-semibold">FAQ</span>
      </div>
    </div>
  </section>
)

// FAQ Component
export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqCategories = [
    {
      category: "About Our Products",
      icon: Leaf,
      color: "from-emerald-500 to-green-600",
      faqs: [
        {
          question: "What makes Claspuro notebooks eco-friendly?",
          answer: "Claspuro notebooks are made from upcycled banana waste instead of traditional wood-pulp paper. This reduces tree cutting, keeps agricultural waste out of landfills, and results in biodegradable A4 notebooks that are kinder to the planet."
        },
        {
          question: "Are Claspuro notebooks durable compared to regular notebooks?",
          answer: "Yes. Our notebooks are engineered for everyday use, with smooth pages suitable for writing, note-taking, and sketching. The production process focuses on both durability and sustainability."
        },
        {
          question: "Who are Claspuro notebooks designed for?",
          answer: "Claspuro notebooks are ideal for students, schools, universities, offices, NGOs, and eco-conscious individuals who want premium stationery that reflects their values."
        },
        {
          question: "Are the notebooks recyclable and biodegradable?",
          answer: "Claspuro notebooks are designed to be biodegradable and recyclable where local facilities allow. Our goal is to keep materials cycling through the economy instead of ending up as waste."
        }
      ]
    },
    {
      category: "Production & Sourcing",
      icon: Globe,
      color: "from-blue-500 to-indigo-600",
      faqs: [
        {
          question: "Where are Claspuro notebooks produced?",
          answer: "Claspuro is based in Rwanda and works with banana-growing regions across the country to source agricultural banana waste and transform it into sustainable paper. This model supports local communities in and around Kigali and reduces environmental impact in East Africa."
        },
        {
          question: "How is banana waste converted into paper?",
          answer: "We use an eco-friendly process that extracts fiber from banana peels and stems, processes it into pulp, and transforms it into high-quality paper—all without harmful chemicals or excessive water use."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      icon: Package,
      color: "from-purple-500 to-pink-600",
      faqs: [
        {
          question: "Can we place bulk or custom-branded orders?",
          answer: "Yes. We offer bulk orders and can discuss custom cover designs or branding for schools, offices, NGOs, and corporate gifting. Please reach out via our Contact page to discuss your requirements."
        },
        {
          question: "Do you ship outside Rwanda?",
          answer: "We are growing our distribution beyond Rwanda and the wider East African region. For regional or international shipping inquiries and pricing in local or international currencies, please contact us so we can confirm the best options for your location."
        },
        {
          question: "What is the minimum order quantity for bulk purchases?",
          answer: "Bulk orders typically start at 50 notebooks, but we're flexible based on your needs. Contact us to discuss custom quantities and pricing for your organization."
        },
        {
          question: "How long does delivery take?",
          answer: "Within Rwanda, delivery typically takes 2-5 business days. For international orders, shipping time varies by location. We'll provide specific timelines when you place your order."
        }
      ]
    }
  ]

  const allFaqs = faqCategories.flatMap((cat, catIndex) => 
    cat.faqs.map((faq, faqIndex) => ({
      ...faq,
      categoryIndex: catIndex,
      faqIndex: faqIndex,
      category: cat.category,
      globalIndex: catIndex * 100 + faqIndex
    }))
  )

  const filteredFaqs = searchQuery
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allFaqs

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <main className="w-full bg-white min-h-screen">
      <Navigation />
      <EnhancedPageHero />

      {/* Search Section */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 text-lg shadow-lg"
            />
          </div>
          
          {searchQuery && (
            <p className="mt-4 text-center text-gray-600">
              Found <span className="font-bold text-emerald-600">{filteredFaqs.length}</span> result{filteredFaqs.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {searchQuery ? (
            // Search Results View
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <div
                    key={faq.globalIndex}
                    className="bg-white border-2 border-gray-200 hover:border-emerald-400 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <button
                      onClick={() => toggleItem(faq.globalIndex)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <div className="flex-1">
                        <div className="text-xs font-bold text-emerald-600 mb-2">{faq.category}</div>
                        <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                      </div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        openItems.includes(faq.globalIndex) ? 'rotate-180' : ''
                      }`}>
                        {openItems.includes(faq.globalIndex) ? (
                          <Minus size={20} className="text-white" />
                        ) : (
                          <Plus size={20} className="text-white" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      openItems.includes(faq.globalIndex) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-5 border-t border-gray-200 pt-5">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search size={40} className="text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try searching with different keywords</p>
                </div>
              )}
            </div>
          ) : (
            // Category View
            <div className="space-y-12">
              {faqCategories.map((category, catIndex) => {
                const Icon = category.icon
                return (
                  <div key={catIndex}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                        <Icon size={28} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-black text-gray-900">{category.category}</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const globalIndex = catIndex * 100 + faqIndex
                        return (
                          <div
                            key={faqIndex}
                            className="bg-white border-2 border-gray-200 hover:border-emerald-400 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                          >
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                              <h3 className="text-lg font-bold text-gray-900 flex-1">{faq.question}</h3>
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                                openItems.includes(globalIndex) ? 'rotate-180' : ''
                              }`}>
                                {openItems.includes(globalIndex) ? (
                                  <Minus size={20} className="text-white" />
                                ) : (
                                  <Plus size={20} className="text-white" />
                                )}
                              </div>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-500 ${
                              openItems.includes(globalIndex) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                              <div className="px-6 pb-5 border-t border-gray-200 pt-5">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-12 text-center overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={40} className="text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
                If you need more details about our banana peel notebooks, bulk pricing, or regional partnerships in East Africa, our team is happy to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-emerald-900 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg"
                >
                  <span>View Products</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}