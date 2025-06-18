"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen flex-col pt-[55px]">
      <div className="border-b border-yellow-400 bg-yellow-300 py-1 text-center text-xs text-black">
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
        <button className="absolute right-2 top-1">
          <span className="i-lucide-x h-3 w-3" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="mb-6">
          <img src="/placeholder.svg?height=40&width=40" alt="Mailchimp" className="h-10 w-10" />
        </div>

        <div className="w-full max-w-md rounded-lg border bg-white p-4 sm:p-6 shadow-sm">
          <div className="mb-4 rounded-md bg-green-100 p-4 text-sm text-green-800">
            <div className="flex items-center gap-2">
              <span className="i-lucide-check-circle h-5 w-5" />
              <p>You&apos;ve been logged out</p>
            </div>
            <p className="ml-7">Don&apos;t worry, you can log back in below</p>
          </div>

          <h1 className="mb-4 text-xl sm:text-2xl font-bold">Log in</h1>

          <div className="mb-4 flex items-center gap-1 text-sm">
            <span>Need a Mailchimp account?</span>
            <Link href="#" className="text-teal-600 hover:underline">
              Create an account
            </Link>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="mb-1 block font-medium">
                Username or Email
              </label>
              <Input id="username" type="text" />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block font-medium">
                Password
              </label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="keep-logged-in" />
              <label
                htmlFor="keep-logged-in"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Keep me logged in
              </label>
            </div>

            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
              Log in
            </Button>

            <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm">
              <Button variant="link" className="h-auto p-0 text-teal-600">
                Forgot username?
              </Button>
              <Button variant="link" className="h-auto p-0 text-teal-600">
                Forgot password?
              </Button>
              <Button variant="link" className="h-auto p-0 text-teal-600">
                Can&apos;t log in?
              </Button>
            </div>
          </form>

          <Separator className="my-6" />

          <div className="text-center text-sm">
            <p className="mb-2">Or, if you created your Mailchimp account with Google:</p>
            <Button variant="outline" className="w-full justify-center gap-2">
              <img src="/placeholder.svg?height=16&width=16" alt="Google" className="h-4 w-4" />
              Continue with Google
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>
            ©2025 Intuit Inc. All rights reserved. Mailchimp® is a registered trademark of The Rocket Science Group.
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
            <Link href="#" className="hover:underline">
              Cookie Preferences
            </Link>
            <span>•</span>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
