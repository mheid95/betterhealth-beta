"use client"

import { MENU } from "@/config/menu-prices"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo, useEffect } from "react"
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

export default function FermentedFoodsPage() {
  const [selectedSize, setSelectedSize] = useState<'normal' | 'big'>('normal')
  const { addItem } = useCart()

  // Memoize ferments data to prevent unnecessary recalculations
  const ferments = useMemo(() => 
    Object.entries(MENU.fermented_foods).map(([id, item]) => ({
      id,
      name: item.name,
      ingredients: item.ingredients,
      hasBigSize: item.big !== null,
      price: item.normal.price,
      volume: item.normal.volume
    })), []
  )

  useEffect(() => {
    console.log('Available items:', ferments);
    ferments.forEach(item => {
      const imagePath = `/images/food/${item.id}`;
      console.log(`Item ${item.id}:`, {
        webp: `${imagePath}.webp`,
        jpg: `${imagePath}.jpg`,
        png: `${imagePath}.png`
      });
    });
  }, [ferments]);

  return (
    <div className="min-h-screen bg-brand-brown">
      {/* Hero Section */}
      <motion.section 
        className="relative py-12 md:py-16 bg-brand-green"
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
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Fermented Foods
            </h1>
            <p className="text-lg text-white">
              Traditional fermented foods rich in probiotics and enzymes
            </p>
            <p className="text-sm text-white/90">
              Glass deposit: $3.500 per jar (refundable)
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Size Selection */}
      <section className="py-6 bg-white">
        <div className="container max-w-6xl">
          <div className="flex flex-col items-center space-y-3">
            <h2 className="text-xl font-semibold text-brand-green mb-2">Choose Your Size</h2>
            <div className="flex gap-4">
              <Button
                onClick={() => setSelectedSize('normal')}
                className={`px-6 py-4 text-base font-medium transform transition-all duration-200 ${
                  selectedSize === 'normal'
                    ? "bg-brand-green text-white scale-105"
                    : "bg-brand-light text-brand-green hover:bg-brand-green/10"
                }`}
              >
                Regular (400ml)
              </Button>
              <Button
                onClick={() => setSelectedSize('big')}
                className={`px-6 py-4 text-base font-medium transform transition-all duration-200 ${
                  selectedSize === 'big'
                    ? "bg-brand-green text-white scale-105"
                    : "bg-brand-light text-brand-green hover:bg-brand-green/10"
                }`}
              >
                Large (900ml)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-8 md:py-12">
        <div className="container max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSize}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 gap-4 md:gap-6"
            >
              {ferments.map((item, index) => {
                // Skip items that don't have big size when big size is selected
                if (selectedSize === 'big' && !item.hasBigSize) return null;

                // Get the correct price and volume based on size
                const currentPrice = selectedSize === 'big' && item.hasBigSize
                  ? MENU.fermented_foods[item.id as keyof typeof MENU.fermented_foods].big?.price ?? item.price
                  : item.price;

                // Display text for volume
                const volumeDisplay = item.id === 'sourdough_protein_bread' 
                  ? '600g'
                  : selectedSize === 'big' ? '900ml' : '400ml';

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 transform hover:scale-[1.01]"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image Container */}
                      <div className="relative w-full sm:w-28 h-48 sm:h-28 flex-shrink-0">
                        <Image
                          src={`/images/food/${item.id}.jpg`}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 112px"
                          quality={90}
                          onError={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            const basePath = `/images/food/${item.id}`;
                            
                            // Try each format in sequence
                            const formats = ['.jpg', '.png', '.webp', '.jpeg'];
                            const currentFormat = formats.find(format => imgElement.src.endsWith(format));
                            const currentIndex = formats.indexOf(currentFormat || '');
                            const nextFormat = formats[(currentIndex + 1) % formats.length];
                            
                            console.log(`Image load failed for ${imgElement.src}, trying ${basePath}${nextFormat}`);
                            imgElement.src = basePath + nextFormat;
                          }}
                        />
                      </div>
                      <div className="flex-1 p-4 space-y-3">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-brand-green">{item.name}</h3>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-brand-dark">{item.ingredients}</p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex flex-col">
                            <span className="text-lg font-semibold text-brand-green">
                              ${currentPrice?.includes('.') ? currentPrice : `${currentPrice}.000`}
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

      {/* Info Section */}
      <section className="py-8 bg-brand-light">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-brand-green">Storage Instructions</h2>
            <p className="text-brand-dark">
              Keep your fermented foods refrigerated to maintain their probiotic benefits. 
              Once opened, consume within 2-3 weeks for optimal freshness and flavor.
            </p>
            <p className="text-sm text-brand-dark">
              Remember to return clean jars to get your deposit back!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 