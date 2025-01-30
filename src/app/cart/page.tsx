"use client"

import { useCart } from "@/context/cart-context"
import { getBowlMacros, getDessertMacros, getDrinkMacros, getFermentMacros } from "@/config/nutritional-info"
import { MENU, BowlType } from "@/config/menu-prices"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useMemo, ChangeEvent, Suspense } from "react"
import { Plus, Minus, Trash2, Bitcoin, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { generateTimeSlots, formatTimeSlot } from "@/lib/time-slots"
import { calculateDeposits, calculateItemsTotal } from "@/lib/cart-calculations"

interface AddressForm {
  name: string
  street: string
  number: string
  building: string
  apartment: string
  deliveryTime: string
  paymentMethod: string
  comments: string
}

const paymentMethods = [
  {
    id: 'crypto',
    name: 'Crypto',
    icon: <Bitcoin className="w-5 h-5" />,
    description: 'Pay with BTC, ETH, or USDT'
  },
  {
    id: 'bancolombia',
    name: 'Bancolombia',
    icon: '🏦',
    description: 'Transfer to our Bancolombia account'
  },
  {
    id: 'nequi',
    name: 'Nequi',
    icon: '📱',
    description: 'Quick payment via Nequi'
  },
  {
    id: 'other',
    name: 'Other',
    icon: <CreditCard className="w-5 h-5" />,
    description: 'Cash, Credit Card, or Revolut'
  }
]

function CartContent() {
  const { state, removeItem, updateQuantity, sendToWhatsApp } = useCart()
  const [address, setAddress] = useState<AddressForm>({
    name: "",
    street: "",
    number: "",
    building: "",
    apartment: "",
    deliveryTime: "",
    paymentMethod: "",
    comments: ""
  })

  const timeSlots = useMemo(() => generateTimeSlots(), [])

  // Calculate total macros
  const totalMacros = state.items.reduce((acc, item) => {
    try {
      const itemId = item.name.toLowerCase().replace(/ /g, '_')
      let itemMacros = null

      // Check which type of item it is and get its macros
      if (itemId in MENU.bowls) {
        itemMacros = getBowlMacros(itemId as BowlType, item.size)
      } else if (itemId in MENU.desserts) {
        itemMacros = getDessertMacros(itemId as keyof typeof MENU.desserts, item.size)
      } else if (itemId in MENU.drinks) {
        itemMacros = getDrinkMacros(itemId as keyof typeof MENU.drinks, item.size)
      } else if (itemId in MENU.ferments) {
        itemMacros = getFermentMacros(itemId as keyof typeof MENU.ferments, item.size)
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

  const handleCheckout = () => {
    // Include address, delivery time, and payment method in WhatsApp message
    const addressText = `
Delivery Address:
Name: ${address.name}
Street: ${address.street}
Number: ${address.number}
Building: ${address.building}
Apartment: ${address.apartment}
Delivery Time: ${formatTimeSlot(address.deliveryTime)}
Payment Method: ${address.paymentMethod}
${address.comments ? `\nSpecial Instructions:\n${address.comments}` : ''}`
    sendToWhatsApp(addressText)
  }

  const handleInputChange = (field: keyof AddressForm) => (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setAddress(prev => ({ ...prev, [field]: e.target.value }))
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-brown py-16">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-brand-green mb-4">Your Cart</h1>
          <p className="text-text-secondary mb-8">Your cart is empty</p>
          <Button 
            onClick={() => window.location.href = '/menu'}
            className="bg-brand-green text-white hover:bg-brand-dark"
          >
            View Menu
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-brown py-16">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-green mb-8 text-center">Your Cart</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-brand-green mb-4">Items</h2>
            {state.items.map((item) => {
              const itemId = item.name.toLowerCase().replace(/ /g, '_')
              let itemMacros = null

              // Check which type of item it is and get its macros
              try {
                if (itemId in MENU.bowls) {
                  itemMacros = getBowlMacros(itemId as BowlType, item.size)
                } else if (itemId in MENU.desserts) {
                  itemMacros = getDessertMacros(itemId as keyof typeof MENU.desserts, item.size)
                } else if (itemId in MENU.drinks) {
                  itemMacros = getDrinkMacros(itemId as keyof typeof MENU.drinks, item.size)
                } else if (itemId in MENU.ferments) {
                  itemMacros = getFermentMacros(itemId as keyof typeof MENU.ferments, item.size)
                }
              } catch {
                // Item doesn't have macros or there was an error
              }

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-lg shadow-sm p-4"
                >
                  <div className="flex justify-between items-start">
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
                </motion.div>
              )
            })}

            {/* Total Macros */}
            <div className="bg-brand-light rounded-lg p-4 mt-6">
              <h3 className="font-medium text-brand-green mb-2">Total Macros</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary">
                <span>🔥 {totalMacros.calories} calories</span>
                <span>💪 {totalMacros.protein}g protein</span>
                <span>🍚 {totalMacros.carbs}g carbs</span>
                <span>🥑 {totalMacros.fat}g fat</span>
              </div>
            </div>
          </div>

          {/* Address Form */}
          <div>
            <h2 className="text-xl font-semibold text-brand-green mb-4">Delivery Details</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Delivery Time</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={address.deliveryTime}
                  onChange={handleInputChange('deliveryTime')}
                >
                  <option value="">Select a delivery time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>
                      {formatTimeSlot(time)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Name</label>
                <Input
                  placeholder="Your full name"
                  value={address.name}
                  onChange={handleInputChange('name')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Street</label>
                <Input
                  placeholder="Street name"
                  value={address.street}
                  onChange={handleInputChange('street')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Number</label>
                <Input
                  placeholder="Street number"
                  value={address.number}
                  onChange={handleInputChange('number')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Building Name</label>
                <Input
                  placeholder="Building name (optional)"
                  value={address.building}
                  onChange={handleInputChange('building')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Apartment</label>
                <Input
                  placeholder="Apartment number"
                  value={address.apartment}
                  onChange={handleInputChange('apartment')}
                />
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Comments about the delivery (food allergies, number of your porteria, etc.)</label>
                <textarea
                  placeholder="Please add any relevant delivery information (porteria number, food allergies, special delivery instructions, etc.)"
                  value={address.comments}
                  onChange={handleInputChange('comments')}
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-text-secondary">Payment Method</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setAddress(prev => ({ ...prev, paymentMethod: method.name }))}
                      className={`p-3 rounded-lg border-2 transition-all text-left ${
                        address.paymentMethod === method.name
                          ? "border-brand-green bg-brand-light"
                          : "border-gray-200 hover:border-brand-green/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex-shrink-0">
                          {typeof method.icon === 'string' ? method.icon : method.icon}
                        </span>
                        <div>
                          <div className="font-medium text-brand-green">{method.name}</div>
                          <div className="text-xs text-text-secondary">{method.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Total and Checkout */}
              <div className="pt-6 border-t">
                <div className="flex flex-col gap-2 mb-4">
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
                    <span className="text-2xl font-bold text-brand-green">
                      ${state.total.toLocaleString().replace(/,/g, '.')}
                    </span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-brand-green text-white hover:bg-brand-dark h-12 text-lg"
                  onClick={handleCheckout}
                  disabled={!address.name || !address.street || !address.number || !address.apartment || !address.deliveryTime || !address.paymentMethod}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CartPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-brown py-16">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-brand-green mb-4">Loading Cart...</h1>
        </div>
      </div>
    }>
      <CartContent />
    </Suspense>
  )
} 