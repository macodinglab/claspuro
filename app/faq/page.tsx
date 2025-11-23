import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export const metadata: Metadata = {
  title: "FAQ | Claspuro Eco-Friendly Banana Peel Notebooks",
  description:
    "Frequently asked questions about Claspuro's eco-friendly banana peel notebooks, production in Rwanda, bulk orders, shipping, and sustainability.",
}

const faqs = [
  {
    question: "What makes Claspuro notebooks eco-friendly?",
    answer:
      "Claspuro notebooks are made from upcycled banana waste instead of traditional wood-pulp paper. This reduces tree cutting, keeps agricultural waste out of landfills, and results in biodegradable A4 notebooks that are kinder to the planet.",
  },
  {
    question: "Where are Claspuro notebooks produced?",
    answer:
      "Claspuro is based in Rwanda and works with banana-growing regions across the country to source agricultural banana waste and transform it into sustainable paper. This model supports local communities in and around Kigali and reduces environmental impact in East Africa.",
  },
  {
    question: "Are Claspuro notebooks durable compared to regular notebooks?",
    answer:
      "Yes. Our notebooks are engineered for everyday use, with smooth pages suitable for writing, note-taking, and sketching. The production process focuses on both durability and sustainability.",
  },
  {
    question: "Who are Claspuro notebooks designed for?",
    answer:
      "Claspuro notebooks are ideal for students, schools, universities, offices, NGOs, and eco-conscious individuals who want premium stationery that reflects their values.",
  },
  {
    question: "Can we place bulk or custom-branded orders?",
    answer:
      "Yes. We offer bulk orders and can discuss custom cover designs or branding for schools, offices, NGOs, and corporate gifting. Please reach out via our Contact page to discuss your requirements.",
  },
  {
    question: "Do you ship outside Rwanda?",
    answer:
      "We are growing our distribution beyond Rwanda and the wider East African region. For regional or international shipping inquiries and pricing in local or international currencies, please contact us so we can confirm the best options for your location.",
  },
  {
    question: "Are the notebooks recyclable and biodegradable?",
    answer:
      "Claspuro notebooks are designed to be biodegradable and recyclable where local facilities allow. Our goal is to keep materials cycling through the economy instead of ending up as waste.",
  },
]

export default function FAQPage() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Navigation />
      <PageHero
        imageSrc="/banner_banana_peel_whoweserve.jpg"
        imageAlt="Claspuro customers and communities we serve"
        title="Frequently Asked Questions"
        description="Find quick answers about our eco-friendly banana peel notebooks, how they are made in Rwanda, and how to order for your school, office, or organization."
        maxWidth="5xl"
        badgeContent={<span>Questions about Claspuro?</span>}
      />

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group border border-border rounded-2xl bg-card/60 hover:border-primary/50 transition-smooth overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 cursor-pointer list-none">
                <h2 className="text-base sm:text-lg font-semibold text-foreground text-left">
                  {item.question}
                </h2>
                <span className="text-xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/60">
                {item.answer}
              </div>
            </details>
          ))}

          <div className="mt-10 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 sm:px-8 py-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Still have questions?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you need more details about our banana peel notebooks, bulk pricing in Rwandan Francs or other currencies,
              or regional partnerships in East Africa, our team is happy to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:shadow-lg hover:scale-105 transition-smooth"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
