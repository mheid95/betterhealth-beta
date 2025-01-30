"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { MENU, BowlType, getBowlPrice } from "@/config/menu-prices"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"

interface BowlCustomizationDialogProps {
  bowl: BowlType | null
  onClose: () => void
}

export function BowlCustomizationDialog({ bowl, onClose }: BowlCustomizationDialogProps) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<'normal' | 'big'>('normal')
  const [selectedCooking, setSelectedCooking] = useState<string>('medium_rare')
  const [selectedBase, setSelectedBase] = useState<string>('protein_rice')
  const [selectedSides, setSelectedSides] = useState<string[]>([])
  const [selectedSalsas, setSelectedSalsas] = useState<string[]>([])

  if (!bowl) return null

  const bowlId = bowl
  const isTBoneBowl = bowlId === 't_bone_bowl'

  const cookingPreferences = [
    "Rare",
    "Medium Rare",
    "Medium",
    "Medium Well",
    "Well Done"
  ]

  const baseOptions = {
    carbs: [
      "Protein Rice",
      "Quinoa (+3.500)",
      "Sweet Potato (+5.000)"
    ],
    lowCarb: [
      "Fermented Cabbage (+3.500)",
      "Cucumber Salad (+3.500)",
      "Kimchi (+8.000)"
    ]
  }

  const handleAddToCart = () => {
    const customizations = [
      ...(!isTBoneBowl ? [`Size: ${selectedSize === 'normal' ? 'Regular' : 'Big'}`] : []),
      ...(isTBoneBowl ? [`Cooking: ${selectedCooking}`] : []),
      `Base: ${selectedBase}`,
      ...selectedSides.map(side => `Side: ${side}`),
      ...selectedSalsas.map(salsa => `Salsa: ${salsa}`)
    ]

    addItem({
      name: bowlId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      size: selectedSize,
      price: getBowlPrice(bowlId, selectedSize).replace(',', '.'),
      quantity: 1,
      customizations
    })
    onClose()
  }

  return (
    <Dialog open={!!bowl} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          {/* Bowl Image */}
          <div className="relative w-full h-[150px] sm:h-[200px] rounded-lg overflow-hidden bg-brand-light">
            <Image
              src="/menu/example-bowl.jpg"
              alt="Bowl Example"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <DialogTitle className="text-xl font-bold text-brand-green">
              {bowlId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </DialogTitle>
            <DialogDescription>
              Customize your bowl
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Size Selection (for non T-Bone bowls) */}
          {!isTBoneBowl && (
            <div className="space-y-3">
              <h3 className="font-medium text-brand-green">Choose your size</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedSize('normal')}
                  className={cn(
                    "p-3 rounded-lg border-2 transition-all",
                    selectedSize === 'normal'
                      ? "border-brand-green bg-brand-light"
                      : "border-gray-200 hover:border-brand-green/50"
                  )}
                >
                  <span className="font-medium text-brand-green">Regular</span>
                  <span className="block text-sm text-text-secondary mt-1">Perfect for lunch or dinner (350-400g)</span>
                  <span className="block text-sm font-medium text-brand-green mt-2">${getBowlPrice(bowlId, 'normal')}</span>
                </button>
                <button
                  onClick={() => setSelectedSize('big')}
                  className={cn(
                    "p-3 rounded-lg border-2 transition-all",
                    selectedSize === 'big'
                      ? "border-brand-green bg-brand-light"
                      : "border-gray-200 hover:border-brand-green/50"
                  )}
                >
                  <span className="font-medium text-brand-green">Hungry?</span>
                  <span className="block text-sm text-text-secondary mt-1">40% more food, great for athletes (570-620g)</span>
                  <span className="block text-sm font-medium text-brand-green mt-2">${getBowlPrice(bowlId, 'big')}</span>
                </button>
              </div>
            </div>
          )}

          {/* Cooking Preference (for T-Bone bowl only) */}
          {isTBoneBowl && (
            <div className="space-y-3">
              <h3 className="font-medium text-brand-green">How would you like your steak?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {cookingPreferences.map((pref) => (
                  <button
                    key={pref}
                    onClick={() => setSelectedCooking(pref.toLowerCase().replace(' ', '_'))}
                    className={cn(
                      "p-2 rounded-lg border-2 transition-all",
                      selectedCooking === pref.toLowerCase().replace(' ', '_')
                        ? "border-brand-green bg-brand-light"
                        : "border-gray-200 hover:border-brand-green/50"
                    )}
                  >
                    <span className="font-medium text-brand-green text-sm">{pref}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Base Selection */}
          <div className="space-y-3">
            <h3 className="font-medium text-brand-green">Choose your base</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Carb Options */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-brand-green">With Carbs</h4>
                <div className="space-y-2">
                  {baseOptions.carbs.map((base) => (
                    <button
                      key={base}
                      onClick={() => setSelectedBase(base.toLowerCase().replace(' ', '_').replace(/\s*\([^)]*\)/g, ''))}
                      className={cn(
                        "w-full p-2 rounded-lg border-2 transition-all text-left",
                        selectedBase === base.toLowerCase().replace(' ', '_').replace(/\s*\([^)]*\)/g, '')
                          ? "border-brand-green bg-brand-light"
                          : "border-gray-200 hover:border-brand-green/50"
                      )}
                    >
                      <span className="text-sm font-medium text-brand-green">{base}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Low Carb Options */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-brand-green">Low Carb</h4>
                <div className="space-y-2">
                  {baseOptions.lowCarb.map((base) => (
                    <button
                      key={base}
                      onClick={() => setSelectedBase(base.toLowerCase().replace(' ', '_').replace(/\s*\([^)]*\)/g, ''))}
                      className={cn(
                        "w-full p-2 rounded-lg border-2 transition-all text-left",
                        selectedBase === base.toLowerCase().replace(' ', '_').replace(/\s*\([^)]*\)/g, '')
                          ? "border-brand-green bg-brand-light"
                          : "border-gray-200 hover:border-brand-green/50"
                      )}
                    >
                      <span className="text-sm font-medium text-brand-green">{base}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Extra Sides */}
          <div className="space-y-3">
            <h3 className="font-medium text-brand-green">Add Extra Sides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(MENU.customizations.extra_sides).map(([id, price]) => {
                const name = id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                return (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedSides(prev => 
                        prev.includes(name) 
                          ? prev.filter(s => s !== name)
                          : [...prev, name]
                      )
                    }}
                    className={cn(
                      "p-2 rounded-lg border-2 transition-all text-left",
                      selectedSides.includes(name)
                        ? "border-brand-green bg-brand-light"
                        : "border-gray-200 hover:border-brand-green/50"
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-brand-green">{name}</span>
                      <span className="text-sm text-brand-green">+${price}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Salsas */}
          <div className="space-y-3">
            <h3 className="font-medium text-brand-green">Add Salsas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(MENU.customizations.salsas).map(([id, price]) => {
                const name = id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                return (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedSalsas(prev => 
                        prev.includes(name) 
                          ? prev.filter(s => s !== name)
                          : [...prev, name]
                      )
                    }}
                    className={cn(
                      "p-2 rounded-lg border-2 transition-all text-left",
                      selectedSalsas.includes(name)
                        ? "border-brand-green bg-brand-light"
                        : "border-gray-200 hover:border-brand-green/50"
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-brand-green">{name}</span>
                      <span className="text-sm text-brand-green">+${price}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="sticky bottom-0 pt-4 bg-white">
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-brand-green text-white hover:bg-brand-dark h-12 text-lg"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 