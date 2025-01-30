"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { CreditCard, Clock, Leaf, UtensilsCrossed } from "lucide-react"

const slides = [
  {
    image: "/images/slide/slide1.jpg",
    alt: "Fresh healthy meals",
    title: "Premium Organic Meals",
    description: "Clean ingredients, exceptional taste"
  },
  {
    image: "/images/slide/slide2.jpg",
    alt: "Fermented foods",
    title: "High-Performance Nutrition",
    description: "Fuel your body with the best"
  },
  {
    image: "/images/slide/slide3.jpg",
    alt: "Fresh ingredients",
    title: "Fresh Daily Preparation",
    description: "Made fresh every morning"
  }
]

const features = [
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: "Fresh Daily",
    description: "All meals are prepared fresh every morning"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Flexible Payment",
    description: "Multiple payment options including crypto"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Convenient Delivery",
    description: "Choose your preferred delivery time"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Premium Quality",
    description: "Organic ingredients, no seed oils"
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const handleContact = () => {
    const message = encodeURIComponent("Hello i am interested in Betterhealth Medellin, please give me the menu")
    window.location.href = `https://wa.me/573044772814?text=${message}`
  }

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero Section with Slideshow */}
      <section className="relative h-[90vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              fill
              className="object-cover"
              priority
              quality={100}
              onError={(e) => {
                console.error(`Error loading image: ${slides[currentSlide].image}`);
                const imgElement = e.target as HTMLImageElement;
                console.log('Current src:', imgElement.src);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                key={slides[currentSlide].title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-white"
              >
                {slides[currentSlide].title}
                <span className="block mt-4 text-3xl md:text-4xl text-brand-green">
                  {slides[currentSlide].description}
                </span>
              </motion.h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Premium organic meals that fuel your performance. No seed oils, no BPA&apos;s - just clean, locally-sourced ingredients.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-brand-green text-white hover:bg-brand-dark text-lg h-14 px-8"
                  onClick={handleContact}
                >
                  Contact Us
                </Button>
                <Link href="/menu">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg h-14 px-8 border-white text-white hover:bg-white/10"
                  >
                    View Menu
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modern slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-brand-green" : "w-4 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-green">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-brand-green">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-light">
        <motion.div 
          className="container max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-green">Ready to transform your nutrition?</h2>
          <p className="text-xl text-text-secondary">
            Join the growing community of high-performers who trust Better Health for their daily nutrition.
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-brand-green text-white hover:bg-brand-dark text-lg h-14 px-8"
              onClick={handleContact}
            >
              Contact Us
            </Button>
          </div>
          <p className="text-sm text-text-secondary pt-4">
            Orders before 8 PM are prepared fresh for next-day delivery
          </p>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white">
        <motion.div 
          className="container max-w-4xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-brand-green">Accepted Payments</h3>
              <div className="space-y-2 text-text-secondary">
                <p>Credit/Debit Cards</p>
                <p>Crypto</p>
                <p>Bank Transfer</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-brand-green">Delivery Areas</h3>
              <div className="space-y-2 text-text-secondary">
                <p>El Poblado</p>
                <p>Laureles</p>
                <p>Envigado</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
