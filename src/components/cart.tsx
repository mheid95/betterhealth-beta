"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useState, useEffect } from "react"
import { 
  getBowlMacros, 
  getDessertMacros, 
  getDrinkMacros, 
  getFermentedFoodMacros as getFermentMacros,
  getExtraSideMacros,
  getSalsaMacros,
  getBaseMacros,
  combineMacros
} from "@/config/nutritional-info"
import { MENU, BowlType } from "@/config/menu-prices"
import Link from "next/link"
import { calculateDeposits, calculateItemsTotal } from "@/lib/cart-calculations"

export function Cart() {
  const { state, removeItem, updateQuantity } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  // Calculate total macros
  const totalMacros = state.items.reduce((acc, item) => {
    try {
      const itemId = item.name.toLowerCase().replace(/ /g, '_')
      let itemMacros = null

      // Check which type of item it is and get its macros
      const itemType = 
        itemId in MENU.bowls ? 'bowls' :
        itemId in MENU.desserts ? 'desserts' :
        itemId in MENU.drinks ? 'drinks' :
        itemId in MENU.fermented_foods ? 'fermented_foods' : null;

      if (itemType) {
        if (itemType === 'bowls') {
          let totalMacros = getBowlMacros(itemId as BowlType, item.size)
          
          // Add macros from customizations
          if (item.customizations?.length) {
            item.customizations.forEach(customization => {
              // Extract the ID part from customization string (e.g., "Base: Kimchi (+8.000)" -> "kimchi_base")
              const customText = customization.toLowerCase()
              
              // Handle base substitutions
              if (customText.startsWith('base:')) {
                // Remove base rice macros first
                const riceSubtraction = {
                  calories: -150,  // Adjust these values to match your protein rice macros
                  protein: -4,
                  carbs: -30,
                  fat: -1,
                  fiber: -2
                }
                totalMacros = combineMacros(totalMacros, riceSubtraction)

                // Add new base macros
                const baseId = customText.includes('kimchi') ? 'kimchi_base' :
                              customText.includes('cabbage') ? 'fermented_cabbage_base' :
                              customText.includes('cucumber') ? 'cucumber_salad_base' :
                              customText.includes('quinoa') ? 'quinoa' :
                              customText.includes('sweet potato') ? 'sweet_potato' : null

                if (baseId) {
                  try {
                    const baseMacros = getBaseMacros(baseId as keyof typeof MENU.customizations.base_options)
                    totalMacros = combineMacros(totalMacros, baseMacros)
                  } catch {
                    console.warn(`Could not add macros for base substitution: ${baseId}`)
                  }
                }
              }
              // Handle sides and salsas
              else if (customText.startsWith('side:')) {
                const sideId = customText.split(':')[1].trim().replace(/ \(\+.*\)/, '').replace(/ /g, '_')
                try {
                  totalMacros = combineMacros(totalMacros, 
                    getExtraSideMacros(sideId as keyof typeof MENU.customizations.extra_sides))
                } catch {
                  console.warn(`Could not add macros for side: ${sideId}`)
                }
              }
              else if (customText.startsWith('salsa:')) {
                const salsaId = customText.split(':')[1].trim().replace(/ \(\+.*\)/, '').replace(/ /g, '_')
                try {
                  totalMacros = combineMacros(totalMacros, 
                    getSalsaMacros(salsaId as keyof typeof MENU.customizations.salsas))
                } catch {
                  console.warn(`Could not add macros for salsa: ${salsaId}`)
                }
              }
            })
          }
          itemMacros = totalMacros
        } else if (itemType === 'desserts') {
          itemMacros = getDessertMacros(itemId as keyof typeof MENU.desserts, item.size)
        } else if (itemType === 'drinks') {
          itemMacros = getDrinkMacros(itemId as keyof typeof MENU.drinks, item.size)
        } else if (itemType === 'fermented_foods') {
          itemMacros = getFermentMacros(itemId as keyof typeof MENU.fermented_foods, item.size)
        }
      }

      if (itemMacros) {
        return {
          calories: acc.calories + (itemMacros.calories * item.quantity),
          protein: acc.protein + (itemMacros.protein * item.quantity),
          carbs: acc.carbs + (itemMacros.carbs * item.quantity),
          fat: acc.fat + (itemMacros.fat * item.quantity),
          fiber: acc.fiber + (itemMacros.fiber * item.quantity)
        }
      }
      return acc
    } catch {
      return acc
    }
  }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 })

  // Effect to show sidebar when items are added
  useEffect(() => {
    if (state.items.length > 0) {
      setIsOpen(true)
    }
  }, [state.items.length])

  return (
    <>
      <Link href="/cart">
        <Button 
          variant="outline" 
          size="icon"
          className="relative bg-white text-brand-green border-brand-green hover:bg-brand-light"
        >
          <ShoppingCart className="h-5 w-5" />
          {state.items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {state.items.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Button>
      </Link>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-lg overflow-hidden flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-brand-green">Your Cart</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto mt-8">
            {state.items.length === 0 ? (
              <p className="text-text-secondary text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-6">
                  {state.items.map((item) => {
                    const itemId = item.name.toLowerCase().replace(/ /g, '_')
                    let itemMacros = null

                    // Check which type of item it is and get its macros
                    const itemType = 
                      itemId in MENU.bowls ? 'bowls' :
                      itemId in MENU.desserts ? 'desserts' :
                      itemId in MENU.drinks ? 'drinks' :
                      itemId in MENU.fermented_foods ? 'fermented_foods' : null;

                    try {
                      if (itemType) {
                        if (itemType === 'bowls') {
                          let totalMacros = getBowlMacros(itemId as BowlType, item.size)
                          
                          // Add macros from customizations
                          if (item.customizations?.length) {
                            item.customizations.forEach(customization => {
                              // Extract the ID part from customization string (e.g., "Base: Kimchi (+8.000)" -> "kimchi_base")
                              const customText = customization.toLowerCase()
                              
                              // Handle base substitutions
                              if (customText.startsWith('base:')) {
                                // Remove base rice macros first
                                const riceSubtraction = {
                                  calories: -150,  // Adjust these values to match your protein rice macros
                                  protein: -4,
                                  carbs: -30,
                                  fat: -1,
                                  fiber: -2
                                }
                                totalMacros = combineMacros(totalMacros, riceSubtraction)

                                // Add new base macros
                                const baseId = customText.includes('kimchi') ? 'kimchi_base' :
                                              customText.includes('cabbage') ? 'fermented_cabbage_base' :
                                              customText.includes('cucumber') ? 'cucumber_salad_base' :
                                              customText.includes('quinoa') ? 'quinoa' :
                                              customText.includes('sweet potato') ? 'sweet_potato' : null

                                if (baseId) {
                                  try {
                                    const baseMacros = getBaseMacros(baseId as keyof typeof MENU.customizations.base_options)
                                    totalMacros = combineMacros(totalMacros, baseMacros)
                                  } catch {
                                    console.warn(`Could not add macros for base substitution: ${baseId}`)
                                  }
                                }
                              }
                              // Handle sides and salsas
                              else if (customText.startsWith('side:')) {
                                const sideId = customText.split(':')[1].trim().replace(/ \(\+.*\)/, '').replace(/ /g, '_')
                                try {
                                  totalMacros = combineMacros(totalMacros, 
                                    getExtraSideMacros(sideId as keyof typeof MENU.customizations.extra_sides))
                                } catch {
                                  console.warn(`Could not add macros for side: ${sideId}`)
                                }
                              }
                              else if (customText.startsWith('salsa:')) {
                                const salsaId = customText.split(':')[1].trim().replace(/ \(\+.*\)/, '').replace(/ /g, '_')
                                try {
                                  totalMacros = combineMacros(totalMacros, 
                                    getSalsaMacros(salsaId as keyof typeof MENU.customizations.salsas))
                                } catch {
                                  console.warn(`Could not add macros for salsa: ${salsaId}`)
                                }
                              }
                            })
                          }
                          itemMacros = totalMacros
                        } else if (itemType === 'desserts') {
                          itemMacros = getDessertMacros(itemId as keyof typeof MENU.desserts, item.size)
                        } else if (itemType === 'drinks') {
                          itemMacros = getDrinkMacros(itemId as keyof typeof MENU.drinks, item.size)
                        } else if (itemType === 'fermented_foods') {
                          itemMacros = getFermentMacros(itemId as keyof typeof MENU.fermented_foods, item.size)
                        }
                      }
                    } catch {
                      // Item doesn't have macros or there was an error
                    }

                    return (
                      <div key={item.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-1">
                          <h3 className="font-medium text-brand-green">{item.name}</h3>
                          <p className="text-sm text-text-secondary">Size: {item.size}</p>
                          {item.customizations && item.customizations.length > 0 && (
                            <p className="text-sm text-text-secondary">
                              Customizations: {item.customizations.join(', ')}
                            </p>
                          )}
                          {itemMacros && (
                            <div className="flex flex-wrap gap-2 mt-2 text-xs text-text-secondary">
                              <span>🔥 {itemMacros.calories * item.quantity} cal</span>
                              <span>💪 {itemMacros.protein * item.quantity}g protein</span>
                              <span>🍚 {itemMacros.carbs * item.quantity}g carbs</span>
                              <span>🥑 {itemMacros.fat * item.quantity}g fat</span>
                            </div>
                          )}
                          <p className="text-sm font-medium text-brand-green mt-1">
                            ${item.price.includes('.') ? item.price : `${item.price}.000`}
                            {item.customizations?.map(customization => {
                              const extraPrice = 
                                MENU.customizations.extra_sides[customization as keyof typeof MENU.customizations.extra_sides] ||
                                MENU.customizations.salsas[customization as keyof typeof MENU.customizations.salsas]
                              return extraPrice ? (
                                <span key={customization} className="text-xs ml-1">
                                  + ${extraPrice}
                                </span>
                              ) : null
                            })}
                          </p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-status-error hover:text-status-error/80"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-6 space-y-4">
                  {/* Total Macros */}
                  <div className="p-4 bg-brand-light rounded-lg">
                    <h4 className="font-medium text-brand-green mb-2">Total Macros</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary">
                      <span>🔥 {totalMacros.calories} calories</span>
                      <span>💪 {totalMacros.protein}g protein</span>
                      <span>🍚 {totalMacros.carbs}g carbs</span>
                      <span>🥑 {totalMacros.fat}g fat</span>
                    </div>
                  </div>
                  {/* Price Total */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary">Subtotal</span>
                      <span className="text-brand-green">
                        ${calculateItemsTotal(state.items).toLocaleString().replace(/,/g, '.')}
                      </span>
                    </div>
                    {calculateDeposits(state.items) > 0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-text-secondary">Deposits (refundable)</span>
                        <span className="text-brand-green">
                          ${calculateDeposits(state.items).toLocaleString().replace(/,/g, '.')}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-medium text-text-secondary">Total</span>
                      <span className="font-bold text-brand-green">
                        ${state.total.toLocaleString().replace(/,/g, '.')}
                      </span>
                    </div>
                  </div>
                  <Link href="/cart" className="block" onClick={() => setIsOpen(false)}>
                    <Button 
                      className="w-full bg-brand-green text-white hover:bg-brand-dark"
                    >
                      View Cart & Checkout
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
} 