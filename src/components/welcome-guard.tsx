"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useLocation, Navigate } from "react-router-dom"

// Time in milliseconds (20 minutes = 20 * 60 * 1000)
const WELCOME_TIMEOUT = 20 * 60 * 1000

interface WelcomeGuardProps {
  children: React.ReactNode
}

export default function WelcomeGuard({ children }: WelcomeGuardProps) {
  const location = useLocation()
  const [shouldShowWelcome, setShouldShowWelcome] = useState<boolean | null>(null)

  useEffect(() => {
    // Get the last visit timestamp
    const lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp")
    const currentTime = Date.now()

    // Check if this is a new session (no timestamp or > 20 minutes since last visit)
    const isNewSession = !lastVisitTimestamp || currentTime - Number.parseInt(lastVisitTimestamp, 10) > WELCOME_TIMEOUT

    // If on welcome page already, don't redirect
    if (location.pathname === "/welcome") {
      setShouldShowWelcome(false)
      return
    }

    // Determine if we should show welcome page
    setShouldShowWelcome(isNewSession)

    // Update the timestamp for this visit (but not if we're about to redirect to welcome)
    if (!isNewSession) {
      localStorage.setItem("lastVisitTimestamp", currentTime.toString())
    }

    // Set up interval to update timestamp while user is active
    const intervalId = setInterval(() => {
      localStorage.setItem("lastVisitTimestamp", Date.now().toString())
    }, 60000) // Update every minute while active

    return () => clearInterval(intervalId)
  }, [location.pathname])

  // Show loading state while checking
  if (shouldShowWelcome === null) {
    return <div className="h-screen w-screen bg-black"></div>
  }

  // If should show welcome and not already on welcome page, redirect
  if (shouldShowWelcome && location.pathname !== "/welcome") {
    return <Navigate to="/welcome" replace />
  }

  // Otherwise, render children
  return <>{children}</>
}
