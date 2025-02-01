export type DiscountType = 'percentage' | 'fixed' | 'item';

interface BaseAffiliate {
  code: string;
  affiliateId: string;
  affiliateName: string;
  commission: number;
  active: boolean;
  usedCount: number;
  maxUses?: number;
  validUntil?: string;
}

interface PercentageDiscount {
  type: 'percentage';
  value: number;
}

interface FixedDiscount {
  type: 'fixed';
  value: number;
}

interface ItemDiscount {
  type: 'item';
  value: number;
}

type AffiliateConfig = BaseAffiliate & (PercentageDiscount | FixedDiscount | ItemDiscount);

export const AFFILIATES: AffiliateConfig[] = [
  {
    code: 'INSTA10',
    affiliateId: 'insta_1',
    affiliateName: 'Instagram Influencer',
    commission: 15,
    active: true,
    type: 'percentage',
    value: 10,
    usedCount: 0,
    maxUses: 100,
    validUntil: '2024-12-31'
  },
  {
    code: 'GYM20OFF',
    affiliateId: 'local_gym_1',
    affiliateName: 'Local Gym Partner',
    commission: 20,
    active: true,
    type: 'fixed',
    value: 20000,
    usedCount: 0,
    maxUses: 50,
    validUntil: '2024-12-31'
  }
]

export function validateCoupon(code: string): AffiliateConfig | null {
  const coupon = AFFILIATES.find(a => 
    a.code === code && 
    a.active && 
    (!a.maxUses || a.usedCount < a.maxUses) &&
    (!a.validUntil || new Date(a.validUntil) > new Date())
  );
  
  return coupon || null;
}

export function calculateDiscount(coupon: AffiliateConfig, subtotal: number): number {
  switch (coupon.type) {
    case 'percentage':
      return subtotal * (coupon.value / 100);
    case 'fixed':
      return coupon.value;
    case 'item':
      return 0;
    default:
      return 0;
  }
}

export type { AffiliateConfig }; 