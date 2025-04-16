/**
 * Utility functions for the welcome page
 */

// Time in milliseconds (20 minutes = 20 * 60 * 1000)
export const WELCOME_TIMEOUT = 20 * 60 * 1000

/**
 * Force the welcome page to show on next visit
 * Useful for testing
 */
export function resetWelcomePage(): void {
  localStorage.removeItem("lastVisitTimestamp")
}

/**
 * Check if the welcome page should be shown
 * @returns boolean
 */
export function shouldShowWelcome(): boolean {
  const lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp")
  const currentTime = Date.now()

  return !lastVisitTimestamp || currentTime - Number.parseInt(lastVisitTimestamp, 10) > WELCOME_TIMEOUT
}

/**
 * Update the last visit timestamp
 */
export function updateLastVisitTimestamp(): void {
  localStorage.setItem("lastVisitTimestamp", Date.now().toString())
}
