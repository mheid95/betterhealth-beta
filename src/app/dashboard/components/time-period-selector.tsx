'use client'

type PeriodType = 'day' | 'week' | 'month' | 'year'

export function TimePeriodSelector({ 
  period, 
  onChange 
}: { 
  period: PeriodType,
  onChange: (period: PeriodType) => void
}) {
  const periods: PeriodType[] = ['day', 'week', 'month', 'year']
  
  return (
    <div className="flex space-x-2">
      {periods.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-4 py-2 rounded ${
            period === p 
              ? 'bg-brand-green text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {p.charAt(0).toUpperCase() + p.slice(1)}
        </button>
      ))}
    </div>
  )
} 