import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ success: true })
}

export async function GET() {
  const reports = [
    {
      date: new Date(),
      orders: [],
      totalRevenue: 0,
      expenses: [],
      totalExpenses: 0,
      netProfit: 0
    }
  ]
  return NextResponse.json(reports)
} 