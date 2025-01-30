"use client"

import { MENU, getBowlPrice, getBowlIngredients, getBowlTags, BowlType } from "@/config/menu-prices"
import { Button } from "@/components/ui/button"
import { BowlCustomizationDialog } from "@/components/bowl-customization-dialog"
import { motion } from "framer-motion"
import { Leaf, Flame, Fish } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function MenuPage() {
  const [selectedBowl, setSelectedBowl] = useState<BowlType | null>(null)

  const bowls = Object.entries(MENU.bowls).map(([id]) => ({
    id: id as BowlType,
    name: id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    price: getBowlPrice(id as BowlType, 'normal'),
    ingredients: getBowlIngredients(id as BowlType, 'normal'),
    tags: getBowlTags(id as BowlType)
  }))

  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price.replace(',', '.'))
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(numericPrice * 1000)
  }

  return (
    <div className="min-h-screen bg-brand-brown">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-brand-green">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Fresh Meals
            </h1>
            <p className="text-lg text-white/90 px-4">
              Premium organic meal prep crafted with care in Medellín
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-8 md:py-12">
        <div className="container max-w-6xl px-4">
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {bowls.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
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
                      <div className="space-y-3">
                        <div>
                          <div className="flex flex-wrap items-start gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-brand-green">{item.name}</h3>
                            <div className="flex flex-wrap gap-1">
                              {item.tags.map((tag) => (
                                <span 
                                  key={tag}
                                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-brand-light text-brand-green whitespace-nowrap"
                                >
                                  {tag === "high_protein" && <Flame className="w-3 h-3 mr-1" />}
                                  {tag === "vegetarian" && <Leaf className="w-3 h-3 mr-1" />}
                                  {tag === "omega_3" && <Fish className="w-3 h-3 mr-1" />}
                                  {tag === "high_protein" ? "High Protein" : 
                                   tag === "vegetarian" ? "Vegetarian" : 
                                   tag === "premium" ? "Premium" :
                                   tag === "omega_3" ? "Omega 3" : tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-text-secondary line-clamp-2">{item.ingredients}</p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-lg font-semibold text-brand-green">
                            {formatPrice(item.price)}
                          </span>
                          <Button
                            onClick={() => setSelectedBowl(item.id)}
                            className="bg-brand-green text-white hover:bg-brand-dark"
                          >
                            Customize
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BowlCustomizationDialog
        bowl={selectedBowl}
        onClose={() => setSelectedBowl(null)}
      />
    </div>
  )
} 