export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  size: 'normal' | 'big';
  customizations?: string[];
}

export interface Order {
  id: string;
  customerName: string;
  items: OrderItem[];
  total: number;
  timestamp: Date;
  status: 'pending' | 'completed' | 'cancelled';
  paymentMethod: 'crypto' | 'bancolombia' | 'nequi' | 'other';
  deliveryAddress?: {
    street: string;
    number: string;
    building?: string;
    apartment?: string;
  };
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: 'ingredients' | 'equipment' | 'utilities' | 'rent' | 'marketing' | 'other';
  date: Date;
  receipt?: string; // URL to receipt image
}

export interface DailyReport {
  date: Date;
  orders: Order[];
  totalRevenue: number;
  expenses: Expense[];
  totalExpenses: number;
  netProfit: number;
}

export interface DailySales {
  date: string;
  orders: {
    id: string;
    total: number;
    items: {
      name: string;
      quantity: number;
      price: number;
      couponApplied?: string;
    }[];
    couponUsed?: string;
  }[];
  totalRevenue: number;
  totalOrders: number;
}

export interface WeeklySales {
  startDate: string;
  endDate: string;
  dailySales: DailySales[];
  totalRevenue: number;
  totalOrders: number;
  popularItems: {
    name: string;
    quantity: number;
    revenue: number;
  }[];
} 