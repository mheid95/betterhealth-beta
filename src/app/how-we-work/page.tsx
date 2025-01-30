"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-brand-brown">
      {/* Hero Section */}
      <motion.section 
        className="relative py-16 bg-brand-green"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              How We Work
            </h1>
            <p className="text-lg text-white">
              Simple, convenient, and healthy meals delivered to your door
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Our Commitment */}
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-brand-green">Our Commitment</h2>
              <p className="text-text-secondary">
                At Betterhealth Medellin, we are dedicated to making healthy eating simple and convenient for you. We deliver fresh meals 7 days a week across Medellin and the surrounding areas, ensuring that you always have access to nutritious and delicious food when you need it.
              </p>
            </div>

            {/* Meal Options */}
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-brand-green">Flexible Meal Options</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-brand-green">Single Meals</h3>
                    <p className="text-text-secondary">Perfect for a quick, healthy bite.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-brand-green">Meal Prep Plans</h3>
                    <p className="text-text-secondary">Choose from weekly, monthly, or 3-month plans tailored to your individual needs and goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Order */}
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-brand-green">How to Order</h2>
              <div className="space-y-4">
                <p className="text-text-secondary">Ordering is easy! Simply:</p>
                <ol className="list-decimal list-inside space-y-2 text-text-secondary ml-4">
                  <li>Browse our website</li>
                  <li>Select your meals</li>
                  <li>Add your delivery address</li>
                  <li>Select your preferred delivery time</li>
                  <li>Choose your preferred payment method</li>
                </ol>
                <p className="text-text-secondary">Once your order is placed, our team will contact you to confirm the details and ensure a smooth delivery.</p>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-brand-green">Need Help?</h2>
              <p className="text-text-secondary">
                Need help deciding which meals are right for you? Feel free to contact us for personalized advice and recommendations. We&apos;re here to support you on your journey to better health!
              </p>
              <div className="pt-4 flex gap-4">
                <Button 
                  className="bg-brand-green text-white hover:bg-brand-dark"
                  onClick={() => {
                    const message = encodeURIComponent("Hello i am interested in Betterhealth Medellin, please give me the menu")
                    window.location.href = `https://wa.me/573044772814?text=${message}`
                  }}
                >
                  Contact Us
                </Button>
                <Link href="/menu">
                  <Button className="bg-brand-green text-white hover:bg-brand-dark">
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 