'use client'

import { SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/dashboard')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) return null

  if (!isSignedIn) {
    return <div className='flex justify-center items-center h-screen w-screen'><SignIn afterSignOutUrl="/dashboard" /></div>
  }

  return null
}
