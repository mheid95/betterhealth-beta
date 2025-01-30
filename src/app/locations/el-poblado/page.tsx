"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ElPobladoPage() {
  const handleContact = () => {
    const message = encodeURIComponent("Hello i am interested in Betterhealth Medellin, please give me the menu")
    window.location.href = `https://wa.me/573044772814?text=${message}`
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-accent/5">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Healthy Food Delivery in
              <span className="block mt-2 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                El Poblado
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Premium organic meal prep delivered fresh to your door in El Poblado, Medellín. Fast, reliable delivery within your preferred time window.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-14 px-8"
                onClick={handleContact}
              >
                Contact Us
              </Button>
              <Link href="/menu">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg h-14 px-8"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-24">
        <motion.div 
          className="container max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Delivery Times</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Morning Delivery</h3>
                  <p className="text-gray-500">7:00 AM - 10:00 AM</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Afternoon Delivery</h3>
                  <p className="text-gray-500">12:00 PM - 2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Coverage Areas</h2>
              <ul className="space-y-2 text-gray-500">
                <li>Manila</li>
                <li>Provenza</li>
                <li>Parque Lleras</li>
                <li>La Calera</li>
                <li>Los Balsos</li>
                <li>And surrounding areas</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 bg-accent/5">
        <motion.div 
          className="container max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Free Delivery</h3>
              <p className="text-gray-500">No delivery fee for orders over $150.000 in El Poblado</p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Real-Time Updates</h3>
              <p className="text-gray-500">Track your delivery status via WhatsApp</p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Flexible Scheduling</h3>
              <p className="text-gray-500">Choose your preferred delivery time slot</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <motion.div 
          className="container max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Ready for healthy, delicious meals?</h2>
          <p className="text-xl text-gray-500">
            Join your neighbors in El Poblado who trust Better Health for their daily nutrition
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-14 px-8"
              onClick={handleContact}
            >
              Contact Us
            </Button>
          </div>
          <p className="text-sm text-gray-500 pt-4">
            Order before 8 PM for next-day delivery
          </p>
        </motion.div>
      </section>
    </>
  )
} 