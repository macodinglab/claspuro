"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2, Mail, MessageSquare, Users } from "lucide-react"
import SectionBadge from "./section-badge"
import PrimaryButton from "./primary-button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <SectionBadge className="mb-4 animate-pulse-soft">
            <span>Get In Touch</span>
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 text-balance">
            Let's Connect & <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our eco-friendly notebooks or interested in bulk orders? Get in touch with our team
            today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/50 hover:shadow-xl transition-smooth hover:-translate-y-2 group animate-slide-in-left">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/30 shadow-lg">
              <img
                src="/ceo-founder.JPG"
                alt="Claspuro CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-center">CEO</h3>
            <p className="text-muted-foreground mb-4 text-center font-medium">Aime Pacifique Ikuzwe Mugisha</p>
            <a
              href="mailto:ikuzwepacem5@gmail.com"
              className="text-primary hover:text-primary/80 transition-smooth font-semibold text-center block hover:underline"
            >
              ikuzwepacem5@gmail.com
            </a>
          </div>

          <div
            className="bg-card rounded-2xl p-8 border-2 border-border hover:border-accent/50 hover:shadow-xl transition-smooth hover:-translate-y-2 group animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-accent/30 shadow-lg">
              <img
                src="/co-founder.jpg"
                alt="Claspuro Co-founder"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-center">Co-founder</h3>
            <p className="text-muted-foreground mb-4 text-center font-medium">Kennedy Karegeya</p>
            <a
              href="mailto:kenndeykaregeya12@gmail.com"
              className="text-primary hover:text-primary/80 transition-smooth font-semibold text-center block hover:underline"
            >
              kenndeykaregeya12@gmail.com
            </a>
          </div>

          <div className="bg-card rounded-2xl p-8 border-2 border-border hover:border-secondary/50 hover:shadow-xl transition-smooth hover:-translate-y-2 group animate-slide-in-right">
            <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 group-hover:scale-110 transition-smooth">
              <MessageSquare size={28} className="text-secondary-foreground animate-bounce-slow" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-center">Newsletter</h3>
            <p className="text-muted-foreground mb-6 text-center font-medium">
              Stay updated on new products and offers
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-primary focus:outline-none transition-smooth font-medium hover:scale-105 transition-smooth"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-3xl p-10 md:p-16 border-2 border-border hover:shadow-2xl transition-smooth animate-slide-in-up">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12">Send us a Message</h3>

          {submitted ? (
            <div className="text-center py-16 animate-scale-pulse">
              <div className="mb-6 inline-block animate-bounce-slow">
                <CheckCircle2 className="text-primary" size={72} />
              </div>
              <p className="text-xl md:text-2xl text-primary font-bold mb-2">Thank you for reaching out!</p>
              <p className="text-base sm:text-lg text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="animate-slide-in-left">
                  <label className="block text-foreground font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:border-primary focus:outline-none transition-smooth font-medium hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="animate-slide-in-right">
                  <label className="block text-foreground font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:border-primary focus:outline-none transition-smooth font-medium hover:scale-105 transition-smooth"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up">
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your inquiry or bulk order needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:border-primary focus:outline-none transition-smooth resize-none font-medium hover:scale-105 transition-smooth"
                ></textarea>
              </div>

              <PrimaryButton
                type="submit"
                className="w-full text-base sm:text-lg animate-pulse-soft"
              >
                Send Message
              </PrimaryButton>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
