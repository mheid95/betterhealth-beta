'use client'

import { Order } from '@/types/accounting'
import { MENU } from '@/config/menu-prices'

// Only include categories that exist in MENU
type ValidCategory = 'bowls' | 'drinks' | 'fermented_foods' | 'desserts'

interface SaleItem {
  count: number;
  revenue: number;
}

interface SalesBreakdown {
  bowls: Record<string, SaleItem>;
  drinks: Record<string, SaleItem>;
  fermented_foods: Record<string, SaleItem>;
  desserts: Record<string, SaleItem>;
  customizations: Record<string, SaleItem>;
}

export function SalesBreakdown({ orders }: { orders: Order[] }) {
  const initialBreakdown: SalesBreakdown = {
    bowls: {},
    drinks: {},
    fermented_foods: {},
    desserts: {},
    customizations: {}
  }

  const validCategories: ValidCategory[] = ['bowls', 'drinks', 'fermented_foods', 'desserts']

  const breakdown = orders.reduce((acc: SalesBreakdown, order) => {
    order.items.forEach(item => {
      const itemId = item.name.toLowerCase().replace(/ /g, '_')
      
      // Track item in appropriate category
      validCategories.forEach(category => {
        if (category in MENU && itemId in MENU[category]) {
          if (!acc[category][itemId]) {
            acc[category][itemId] = { count: 0, revenue: 0 }
          }
          acc[category][itemId].count += item.quantity
          acc[category][itemId].revenue += item.price * item.quantity
        }
      })

      // Track customizations separately
      item.customizations?.forEach(customization => {
        const customId = customization.toLowerCase().replace(/ /g, '_')
        if (!acc.customizations[customId]) {
          acc.customizations[customId] = { count: 0, revenue: 0 }
        }
        acc.customizations[customId].count += item.quantity
      })
    })
    return acc
  }, initialBreakdown)

  return (
    <div className="grid grid-cols-2 gap-6">
      {Object.entries(breakdown).map(([category, items]) => (
        <div key={category} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium capitalize mb-4">{category.replace('_', ' ')}</h3>
          <div className="space-y-2">
            {Object.entries(items as Record<string, SaleItem>)
              .sort((a, b) => b[1].count - a[1].count)
              .map(([item, data]) => (
                <div key={item} className="flex justify-between items-center">
                  <span className="capitalize">{item.replace('_', ' ')}</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">{data.count}x</div>
                    <div className="font-medium">${data.revenue.toFixed(2)}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
} 