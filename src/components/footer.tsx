"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Get your better health</h3>
            <div className="space-y-2 text-gray-400">
              <p>El Poblado, Better Health Medellin</p>
              <p>Contact: +57 304 477 2814</p>
              <p>Orders until 8 PM daily</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Delivery Areas</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Link href="/locations/el-poblado" className="block text-brand-green hover:text-brand-light">
                  El Poblado
                </Link>
                <p className="text-sm text-gray-400">Premium delivery service throughout El Poblado area</p>
              </div>
              <div className="space-y-2">
                <Link href="/locations/laureles" className="block text-brand-green hover:text-brand-light">
                  Laureles
                </Link>
                <p className="text-sm text-gray-400">Fast delivery service in Laureles</p>
              </div>
              <div className="space-y-2">
                <Link href="/locations/envigado" className="block text-brand-green hover:text-brand-light">
                  Envigado
                </Link>
                <p className="text-sm text-gray-400">Reliable delivery throughout Envigado</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/menu" className="block text-gray-400 hover:text-brand-green">
                Our Bowls
              </Link>
              <Link href="/desserts" className="block text-gray-400 hover:text-brand-green">
                Desserts
              </Link>
              <Link href="/how-we-work" className="block text-gray-400 hover:text-brand-green">
                How We Work
              </Link>
              <Link href="/fermented-foods" className="block text-gray-400 hover:text-brand-green">
                Fermented Foods
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-brand-green">
                About Us
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Payment Methods</h3>
            <div className="space-y-2 text-gray-400">
              <p>Credit/Debit Cards</p>
              <p>Crypto</p>
              <p>Bank Transfer</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Better Health Medellin - Your Organic Meals! All rights reserved.
          </p>
          <div className="mt-4">
            <Link 
              href="https://www.instagram.com/betterhealth.mde" 
              target="_blank" 
              className="text-brand-green hover:text-brand-light"
            >
              Follow us @betterhealth.mde
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 