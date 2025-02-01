'use client'

import { useState } from 'react'
import type { DiscountType } from '@/config/affiliate'

export function PromotionManager() {
  const [newPromo, setNewPromo] = useState({
    code: '',
    affiliateId: '',
    affiliateName: '',
    commission: 0,
    type: 'percentage' as DiscountType,
    value: 0,
    maxUses: undefined as number | undefined
  })

  async function handleAddPromotion(e: React.FormEvent) {
    e.preventDefault()
    // Implementation here
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-medium mb-6">Add New Promotion</h2>
      
      <form onSubmit={handleAddPromotion} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Promo Code</label>
            <input
              type="text"
              value={newPromo.code}
              onChange={e => setNewPromo({...newPromo, code: e.target.value.toUpperCase()})}
              className="w-full p-2 border rounded"
              placeholder="SUMMER2024"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Affiliate Name</label>
            <input
              type="text"
              value={newPromo.affiliateName}
              onChange={e => setNewPromo({...newPromo, affiliateName: e.target.value})}
              className="w-full p-2 border rounded"
              placeholder="Instagram Influencer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Commission (%)</label>
            <input
              type="number"
              value={newPromo.commission}
              onChange={e => setNewPromo({...newPromo, commission: Number(e.target.value)})}
              className="w-full p-2 border rounded"
              placeholder="15"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Discount Type</label>
            <select
              value={newPromo.type}
              onChange={e => setNewPromo({...newPromo, type: e.target.value as DiscountType})}
              className="w-full p-2 border rounded"
            >
              <option value="percentage">Percentage Off</option>
              <option value="fixed">Fixed Amount Off</option>
              <option value="item">Free Item</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {newPromo.type === 'percentage' ? 'Discount %' : 
               newPromo.type === 'fixed' ? 'Amount Off' : 
               'Number of Items'}
            </label>
            <input
              type="number"
              value={newPromo.value}
              onChange={e => setNewPromo({...newPromo, value: Number(e.target.value)})}
              className="w-full p-2 border rounded"
              placeholder={newPromo.type === 'percentage' ? '10' : '20000'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Max Uses (optional)</label>
            <input
              type="number"
              value={newPromo.maxUses || ''}
              onChange={e => setNewPromo({...newPromo, maxUses: e.target.value ? Number(e.target.value) : undefined})}
              className="w-full p-2 border rounded"
              placeholder="100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-green text-white p-2 rounded mt-6"
        >
          Add Promotion
        </button>
      </form>
    </div>
  )
} 