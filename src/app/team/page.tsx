'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TeamRedirect() {
  const router = useRouter()

  useEffect(() => {
    const hasAccess = localStorage.getItem('team_access') === 'true'
    if (!hasAccess) {
      router.push('/team/login')
    } else {
      router.push('/team/dashboard')
    }
  }, [router])

  return null
} 