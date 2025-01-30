"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { MENU, BowlType, getBowlPrice } from "@/config/menu-prices"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
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
  const [currentTotal, setCurrentTotal] = useState<number>(0)

  useEffect(() => {
    if (!bowl) return

    // 1. Base bowl price (including size)
    const baseBowlPrice = Number(getBowlPrice(bowl, selectedSize))
    
    // 2. Base substitution price (if not protein_rice)
    let baseSubPrice = 0
    if (selectedBase !== 'protein_rice') {
      baseSubPrice = Number(
        MENU.customizations.base_options[selectedBase as keyof typeof MENU.customizations.base_options]
      )
    }

    // 3. Extra sides total
    const sidesTotal = selectedSides.reduce((total, sideId) => {
      const sidePrice = MENU.customizations.extra_sides[sideId as keyof typeof MENU.customizations.extra_sides]
      return total + Number(sidePrice)
    }, 0)

    // 4. Salsas total
    const salsasTotal = selectedSalsas.reduce((total, salsaId) => {
      const salsaPrice = MENU.customizations.salsas[salsaId as keyof typeof MENU.customizations.salsas]
      return total + Number(salsaPrice)
    }, 0)

    // Set total price
    const total = baseBowlPrice + baseSubPrice + sidesTotal + salsasTotal
    setCurrentTotal(total)

    // Debug logs
    console.log({
      baseBowlPrice,
      baseSubPrice,
      sidesTotal,
      salsasTotal,
      total
    })
  }, [bowl, selectedSize, selectedBase, selectedSides, selectedSalsas])

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
      { id: "protein_rice", name: "Protein Rice", price: "0.000" },
      { id: "quinoa", name: "Quinoa", price: "3.500" },
      { id: "sweet_potato", name: "Sweet Potato", price: "5.000" }
    ],
    lowCarb: [
      { id: "fermented_cabbage_base", name: "Fermented Cabbage", price: "3.500" },
      { id: "cucumber_salad_base", name: "Cucumber Salad", price: "3.500" },
      { id: "kimchi_base", name: "Kimchi", price: "8.000" }
    ]
  }

  // Format price for display
  const formatPrice = (price: number) => {
    return `$${price.toFixed(3)}`
  }

  const handleAddToCart = () => {
    // Format customizations for display
    const displayCustomizations = [
      // Size for non T-Bone bowls
      ...(!isTBoneBowl ? [`Size: ${selectedSize === 'normal' ? 'Regular' : 'Big'}`] : []),
      
      // Base substitution (only if not protein rice)
      ...(selectedBase !== 'protein_rice' ? [
        `Base: ${selectedBase.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} (+${
          MENU.customizations.base_options[selectedBase as keyof typeof MENU.customizations.base_options]
        })`
      ] : []),
      
      // Selected sides with prices
      ...selectedSides.map(sideId => {
        const price = MENU.customizations.extra_sides[sideId as keyof typeof MENU.customizations.extra_sides]
        const name = sideId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        return `Side: ${name} (+${price})`
      }),
      
      // Selected salsas with prices
      ...selectedSalsas.map(salsaId => {
        const price = MENU.customizations.salsas[salsaId as keyof typeof MENU.customizations.salsas]
        const name = salsaId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        return `Salsa: ${name} (+${price})`
      })
    ]

    addItem({
      name: bowl!.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      size: selectedSize,
      price: formatPrice(currentTotal).replace('$', ''),
      quantity: 1,
      customizations: displayCustomizations
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
                      key={base.id}
                      onClick={() => setSelectedBase(base.id)}
                      className={cn(
                        "w-full p-2 rounded-lg border-2 transition-all text-left",
                        selectedBase === base.id
                          ? "border-brand-green bg-brand-light"
                          : "border-gray-200 hover:border-brand-green/50"
                      )}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-brand-green">{base.name}</span>
                        {base.price !== "0.000" && (
                          <span className="text-sm text-brand-green">+${base.price}</span>
                        )}
                      </div>
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
                      key={base.id}
                      onClick={() => setSelectedBase(base.id)}
                      className={cn(
                        "w-full p-2 rounded-lg border-2 transition-all text-left",
                        selectedBase === base.id
                          ? "border-brand-green bg-brand-light"
                          : "border-gray-200 hover:border-brand-green/50"
                      )}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-brand-green">{base.name}</span>
                        {base.price !== "0.000" && (
                          <span className="text-sm text-brand-green">+${base.price}</span>
                        )}
                      </div>
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
                        prev.includes(id)
                          ? prev.filter(s => s !== id)
                          : [...prev, id]
                      )
                    }}
                    className={cn(
                      "p-2 rounded-lg border-2 transition-all text-left",
                      selectedSides.includes(id)
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
                        prev.includes(id)
                          ? prev.filter(s => s !== id)
                          : [...prev, id]
                      )
                    }}
                    className={cn(
                      "p-2 rounded-lg border-2 transition-all text-left",
                      selectedSalsas.includes(id)
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

          {/* Show running total */}
          <div className="sticky bottom-0 pt-4 bg-white space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-brand-green">Total:</span>
              <span className="text-xl font-bold text-brand-green">{formatPrice(currentTotal)}</span>
            </div>
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