"use client"

import { useState, useMemo } from "react"
import { MENU } from "@/config/menu-prices"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import Image from "next/image"

export default function FermentedFoodsPage() {
  const [selectedSize, setSelectedSize] = useState<'normal' | 'big'>('normal')
  const { addItem } = useCart()

  const ferments = useMemo(() => 
    Object.entries(MENU.fermented_foods).map(([id, item]) => ({
      id,
      name: item.name,
      ingredients: item.ingredients,
      hasBigSize: item.big !== null,
      price: selectedSize === 'big' && item.big ? item.big.price : item.normal.price,
      volume: selectedSize === 'big' && item.big ? item.big.volume : item.normal.volume
    })), [selectedSize]
  )

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-brand-green mb-8">Fermented Foods</h1>
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-lg font-medium text-brand-green mb-4">Choose Size</h2>
        <div className="flex gap-4">
          <Button
            onClick={() => setSelectedSize('normal')}
            className={`${selectedSize === 'normal' ? 'bg-brand-green text-white' : 'bg-white text-brand-green'}`}
          >
            Regular (400ml)
          </Button>
          <Button
            onClick={() => setSelectedSize('big')}
            className={`${selectedSize === 'big' ? 'bg-brand-green text-white' : 'bg-white text-brand-green'}`}
          >
            Large (900ml)
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ferments.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex items-center">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={`/images/fermented-foods/${item.id}.webp`}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="flex-1 p-4">
                <h3 className="font-medium text-brand-green text-lg">{item.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{item.ingredients}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-brand-green font-medium">${item.price}</span>
                    <span className="text-sm text-text-secondary">{item.volume}</span>
                  </div>
                  <Button
                    onClick={() => addItem({
                      name: item.name,
                      size: selectedSize,
                      price: item.price,
                      quantity: 1
                    })}
                    className="bg-brand-green text-white hover:bg-brand-dark"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 