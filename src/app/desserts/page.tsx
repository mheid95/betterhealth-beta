"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { MENU } from "@/config/menu-prices"
import { getDessertPrice } from "@/config/menu-prices"
import { useCart } from "@/context/cart-context"
import Image from "next/image"

export default function DessertsPage() {
  const [selectedSize, setSelectedSize] = useState<'normal' | 'big'>('normal')
  const { addItem } = useCart()

  const desserts = Object.entries(MENU.desserts).map(([id, item]) => ({
    id,
    name: item.name,
    ingredients: item.ingredients,
    price: getDessertPrice(id as keyof typeof MENU.desserts, selectedSize)
  }))

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
              Healthy Desserts
            </h1>
            <p className="text-lg text-white">
              Delicious treats made with natural ingredients
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Size Selection */}
      <section className="py-8 bg-brand-light">
        <div className="container max-w-6xl">
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setSelectedSize('normal')}
              className={`px-8 py-6 text-lg font-medium transform transition-all duration-200 ${
                selectedSize === 'normal'
                  ? "bg-brand-green text-white scale-105"
                  : "bg-white text-brand-green hover:bg-brand-green/10"
              }`}
            >
              Normal
            </Button>
            <Button
              onClick={() => setSelectedSize('big')}
              className={`px-8 py-6 text-lg font-medium transform transition-all duration-200 ${
                selectedSize === 'big'
                  ? "bg-brand-green text-white scale-105"
                  : "bg-white text-brand-green hover:bg-brand-green/10"
              }`}
            >
              Big
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {desserts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]"
              >
                <div className="flex items-center p-4 gap-4">
                  {/* Image Container */}
                  <div className="relative w-28 h-28 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={`/images/food/${item.id}.webp`}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                      quality={90}
                      onError={(e) => {
                        const imgElement = e.target as HTMLImageElement;
                        if (imgElement.src.endsWith('.webp')) {
                          imgElement.src = imgElement.src.replace('.webp', '.PNG');
                        } else if (imgElement.src.endsWith('.PNG')) {
                          imgElement.src = imgElement.src.replace('.PNG', '.jpg');
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-brand-green">{item.name}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-brand-dark">{item.ingredients}</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex flex-col">
                        <span className="text-lg font-semibold text-brand-green">
                          ${item.price.includes('.') ? item.price : `${item.price}.000`}
                        </span>
                      </div>
                      <Button 
                        className="bg-brand-green text-white hover:bg-brand-dark font-medium px-6 transform transition-all duration-200 hover:scale-105"
                        onClick={() => addItem({
                          name: item.name,
                          size: selectedSize,
                          price: item.price.includes('.') ? item.price : `${item.price}.000`,
                          quantity: 1
                        })}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 