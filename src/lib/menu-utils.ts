import { MENU, MenuCategory } from '@/config/menu-prices'

export function getItemCategory(itemId: string): MenuCategory | null {
  if (itemId in MENU.bowls) return 'bowls'
  if (itemId in MENU.desserts) return 'desserts'
  if (itemId in MENU.drinks) return 'drinks'
  if (itemId in MENU.fermented_foods) return 'fermented_foods'
  return null
} 