'use client'

import { useState, useEffect } from 'react'
import { DailyReport } from '@/types/accounting'

export default function DashboardPage() {
  const [reports, setReports] = useState<DailyReport[]>([])

  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetch('/api/accounting')
        const data = await res.json()
        setReports(data)
      } catch (err) {
        console.error('Failed to fetch reports:', err)
      }
    }
    fetchReports()
  }, [])

  function calculateTotalRevenue(reports: DailyReport[]): string {
    return reports.reduce((sum, report) => sum + report.totalRevenue, 0).toFixed(3)
  }

  function calculateTotalExpenses(reports: DailyReport[]): string {
    return reports.reduce((sum, report) => sum + report.totalExpenses, 0).toFixed(3)
  }

  function calculateNetProfit(reports: DailyReport[]): string {
    return reports.reduce((sum, report) => sum + report.netProfit, 0).toFixed(3)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Financial Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-medium mb-2">Total Revenue</h2>
          <p className="text-2xl">${calculateTotalRevenue(reports)}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-medium mb-2">Total Expenses</h2>
          <p className="text-2xl">${calculateTotalExpenses(reports)}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-medium mb-2">Net Profit</h2>
          <p className="text-2xl">${calculateNetProfit(reports)}</p>
        </div>
      </div>
    </div>
  )
} 
