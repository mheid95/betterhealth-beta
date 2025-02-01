'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const hasAccess = localStorage.getItem('dashboard_access') === 'true'
    if (!hasAccess) {
      router.push('/dashboard/login')
    } else {
      setIsAuthorized(true)
    }
  }, [router])

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
} 