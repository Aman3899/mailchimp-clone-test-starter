"use client"

import { X } from "lucide-react"
import { useAlertStore } from "@/lib/store/alert-store"
import { useEffect } from "react"

export function AlertBanner() {
  const { isAlertVisible, hideAlert } = useAlertStore()

  // Initialize from localStorage on component mount
  useEffect(() => {
    const storedValue = localStorage.getItem("alertHidden")
    if (storedValue === "true") {
      hideAlert()
    }
  }, [hideAlert])

  if (!isAlertVisible) {
    return null
  }

  const handleClose = () => {
    hideAlert()
    localStorage.setItem("alertHidden", "true")
  }

  return (
    <div className="relative border-b border-yellow-400 bg-yellow-300 py-1 text-center text-xs text-black dark:border-yellow-600 dark:bg-yellow-800 dark:text-white">
      <span className="inline-flex items-center">
        <span className="i-lucide-alert-circle mr-1 h-3 w-3" />
        <span className="hidden sm:inline">
          Reminder: Intuit Mailchimp will never call, email, or text you for your password or 1-time passcode.
        </span>
        <span className="sm:hidden">Security reminder</span>
        <a href="#" className="ml-2 underline">
          Learn more
        </a>
      </span>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-yellow-400 dark:hover:bg-yellow-700 p-0.5 rounded-sm"
        onClick={handleClose}
        aria-label="Close alert"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  )
}
