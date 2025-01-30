"use client"

import { createContext, useContext, useReducer, ReactNode } from 'react'
import { MENU } from '@/config/menu-prices'
import { CartItem, calculateTotal, calculateDeposits, calculateItemsTotal } from '@/lib/cart-calculations'

type CartState = {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

type CartContextType = {
  state: CartState
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  sendToWhatsApp: (addressText?: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => 
          item.name === action.payload.name && 
          item.size === action.payload.size &&
          JSON.stringify(item.customizations) === JSON.stringify(action.payload.customizations)
      )

      if (existingItemIndex > -1) {
        const newItems = [...state.items]
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + action.payload.quantity
        }
        return {
          ...state,
          items: newItems,
          total: calculateTotal(newItems)
        }
      }

      const newItems = [...state.items, action.payload]
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems)
      }
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload)
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems)
      }
    }
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems)
      }
    }
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0
      }
    default:
      return state
  }
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

function formatWhatsAppMessage(items: CartItem[], addressText?: string): string {
  const orderDetails = items
    .map(item => {
      const itemId = item.name.toLowerCase().replace(/ /g, '_')
      const customizations = item.customizations?.length 
        ? `\nCustomizations: ${item.customizations.join(', ')}`
        : ''
      const hasDeposit = itemId in MENU.drinks || (itemId in MENU.ferments && itemId !== 'sourdough_protein_bread')
      const depositInfo = hasDeposit ? `\nDeposit: $3.500 (refundable)` : ''
      return `• ${item.quantity}x ${item.name} (${item.size})\nPrice: $${item.price}${depositInfo}${customizations}`
    })
    .join('\n\n')

  const itemsTotal = calculateItemsTotal(items)
  const deposits = calculateDeposits(items)
  const total = calculateTotal(items)
  const formattedTotal = total.toLocaleString().replace(/,/g, '.')
  const formattedDeposits = deposits.toLocaleString().replace(/,/g, '.')

  return `🥗 New Order from Better Health!\n\n${orderDetails}\n\n💰 Subtotal: $${itemsTotal.toLocaleString().replace(/,/g, '.')}\n🏺 Deposits: $${formattedDeposits} (refundable)\n💳 Total: $${formattedTotal}${addressText ? `\n\n${addressText}` : ''}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  const addItem = (item: Omit<CartItem, 'id'>) => {
    const id = generateId()
    dispatch({ type: 'ADD_ITEM', payload: { ...item, id } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const sendToWhatsApp = (addressText?: string) => {
    const message = formatWhatsAppMessage(state.items, addressText)
    const whatsappNumber = "573044772814"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    clearCart()
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        sendToWhatsApp
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 