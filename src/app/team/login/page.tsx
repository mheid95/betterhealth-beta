'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TeamLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (credentials.username === 'amor' && credentials.password === 'princessa1995!!!') {
      localStorage.setItem('team_access', 'true')
      router.push('/team')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Team Access</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            className="w-full p-2 border rounded"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            className="w-full p-2 border rounded"
            placeholder="Enter password"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-brand-green text-white p-2 rounded hover:bg-brand-green/90"
        >
          Access Team Dashboard
        </button>
      </form>
    </div>
  )
} 