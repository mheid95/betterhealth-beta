"use client"

import { MENU, getDrinkPrice } from "@/config/menu-prices"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"
import { useCart } from "@/context/cart-context"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export default function DrinksPage() {
  const [selectedSize, setSelectedSize] = useState<'normal' | 'big'>('normal')
  const { addItem } = useCart()

  // Memoize drinks data to prevent unnecessary recalculations
  const drinks = useMemo(() => 
    Object.entries(MENU.drinks).map(([id, item]) => ({
      id,
      name: item.name,
      ingredients: item.ingredients,
      hasBigSize: item.big !== null,
      price: item.normal.price,
      volume: item.normal.volume
    })), []
  )

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
              Drinks
            </h1>
            <p className="text-lg text-white">
              Fresh, healthy, and delicious beverages
            </p>
            <p className="text-sm text-white">
              Glass deposit: $3.500 per bottle (refundable)
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
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSize}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 gap-6"
            >
              {drinks.map((item, index) => {
                // Skip items that don't have big size when big size is selected
                if (selectedSize === 'big' && !item.hasBigSize) return null;

                // Get the correct price and volume based on size
                const currentPrice = selectedSize === 'big' && item.hasBigSize
                  ? getDrinkPrice(item.id as keyof typeof MENU.drinks, 'big')
                  : item.price;

                // Display text for volume
                const volumeDisplay = selectedSize === 'big' ? '1L' : '350ml';

                return (
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
                              ${currentPrice.includes('.') ? currentPrice : `${currentPrice}.000`}
                            </span>
                            <span className="text-sm text-brand-dark">{volumeDisplay}</span>
                          </div>
                          <Button 
                            className="bg-brand-green text-white hover:bg-brand-dark font-medium px-6 transform transition-all duration-200 hover:scale-105"
                            onClick={() => addItem({
                              name: item.name,
                              size: selectedSize,
                              price: currentPrice.includes('.') ? currentPrice : `${currentPrice}.000`,
                              quantity: 1
                            })}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
} 