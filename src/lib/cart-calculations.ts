import { MENU } from '@/config/menu-prices'

export interface CartItem {
  id: string
  name: string
  size: 'normal' | 'big'
  price: string
  quantity: number
  customizations?: string[]
}

export function calculateDeposits(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const itemId = item.name.toLowerCase().replace(/ /g, '_')
    const hasDeposit = itemId in MENU.drinks || 
      (itemId in MENU.fermented_foods && itemId !== 'sourdough_protein_bread')
    return total + (hasDeposit ? 3500 * item.quantity : 0)
  }, 0)
}

export function calculateItemsTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const price = parseFloat(item.price.replace('.', ''))
    return total + (price * item.quantity)
  }, 0)
}

export function calculateTotal(items: CartItem[]): number {
  return calculateItemsTotal(items) + calculateDeposits(items)
} 