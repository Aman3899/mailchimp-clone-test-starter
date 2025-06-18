"use client"

import { useState } from "react"
import { Search, X, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All")
  const isMobile = useMobile()

  const searchFilters = ["Contacts", "Campaigns", "Pages", "Quick actions", "Integrations", "Help articles"]

  const recommendedPages = [
    {
      title: "SMS",
      description: "Create, schedule and send text messages with SMS Marketing.",
      icon: LinkIcon,
    },
    {
      title: "Automations",
      description: "Automate an email series that delivers a unique experience to each of your contacts.",
      icon: LinkIcon,
    },
    {
      title: "Signup form",
      description: "Add a pop-up or embedded form to your website to collect new subscribers.",
      icon: LinkIcon,
    },
    {
      title: "Account overview",
      description: "Manage your account settings, billing information and history, domains, and API keys here.",
      icon: LinkIcon,
    },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">🐵</span>
            </div>
          </div>
        </div>

        {/* Center Search Bar */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search Mailchimp"
              className="w-full rounded-full pl-10 pr-4 bg-gray-100 border-gray-200 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              onClick={() => setIsSearchOpen(true)}
              readOnly
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hidden sm:flex">
            Help
          </Button>

          <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold"
              >
                A
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-8 w-8 rounded-full bg-yellow-400 text-black">
                  <AvatarFallback className="bg-yellow-400 text-black font-bold">A</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-sm">
                  <span className="font-medium">Account</span>
                  <span className="text-xs text-muted-foreground">user@example.com</span>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Notifications</span>
                <span className="ml-auto">→</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Account & billing</DropdownMenuItem>
              <DropdownMenuItem>Pricing plans</DropdownMenuItem>
              <DropdownMenuItem>Hire an expert</DropdownMenuItem>
              <DropdownMenuItem>
                <span>Support</span>
                <span className="ml-auto">→</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Get cobrowse code</DropdownMenuItem>
              <DropdownMenuItem>
                <span>EN | English</span>
                <span className="ml-auto">→</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-xs">Privacy and Terms</DropdownMenuItem>
              <DropdownMenuItem className="text-xs">Cookie Preferences</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-start justify-center pt-16">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden">
            {/* Search Header */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="What can we help you find today?"
                  className="w-full pl-10 pr-12 py-3 text-lg border-2 border-teal-500 rounded-lg focus:ring-0 focus:border-teal-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Search Content */}
            <div className="max-h-[70vh] overflow-y-auto">
              {/* Filter Tabs */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-600">Filter by</span>
                  <button
                    className="text-sm text-teal-600 hover:text-teal-700 ml-auto"
                    onClick={() => setSearchQuery("")}
                  >
                    Reset
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchFilters.map((filter) => (
                    <Badge
                      key={filter}
                      variant={selectedFilter === filter ? "default" : "secondary"}
                      className={cn(
                        "cursor-pointer px-3 py-1 text-sm",
                        selectedFilter === filter
                          ? "bg-teal-600 hover:bg-teal-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700",
                      )}
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Recommended Pages */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recommended pages</h3>
                <div className="space-y-4">
                  {recommendedPages.map((page, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="mt-1">
                        <LinkIcon className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{page.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{page.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t bg-gray-50 flex items-center justify-between text-sm text-gray-600">
                <span>Not the results you expected? Leave feedback</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    👍
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    👎
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}