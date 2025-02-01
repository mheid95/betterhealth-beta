'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const hasAccess = localStorage.getItem('team_access') === 'true'
    if (!hasAccess && pathname !== '/team/login') {
      router.push('/team/login')
    } else {
      setIsAuthorized(true)
    }
    setIsLoading(false)
  }, [pathname, router])

  if (isLoading) {
    return null
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
} 