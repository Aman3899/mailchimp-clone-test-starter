"use client"

import { useState } from "react"
import { Search, X, ChevronRight, Globe, ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react"
import Link from "next/link"
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
import { Skeleton } from "@/components/ui/skeleton"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("Contacts")
  const [helpSearchQuery, setHelpSearchQuery] = useState("")
  const [isHelpLoading, setIsHelpLoading] = useState(false)
  const isMobile = useMobile()

  const searchFilters = ["Contacts", "Campaigns", "Pages", "Quick actions", "Integrations", "Help articles"]

  const recommendedPages = [
    {
      title: "SMS",
      description: "Create, schedule and send text messages with SMS Marketing.",
    },
    {
      title: "Automations",
      description: "Automate an email series that delivers a unique experience to each of your contacts.",
    },
    {
      title: "Signup form",
      description: "Add a pop-up or embedded form to your website to collect new subscribers.",
    },
    {
      title: "Account overview",
      description: "Manage your account settings, billing information and history, domains, and API keys here.",
    },
  ]

  const helpArticles = [
    {
      title: "Import Contacts to Mailchimp",
      type: "External",
      author: "by Mailchimp",
      description:
        "Our import tool helps you add or update email contacts in Mailchimp. Import from a connected app, upload a comma-separated value file (CSV), copy and paste contacts, or add them one by one. Learn about the different import methods and best practices for organizing your audience data.",
      category: "Getting Started",
    },
    {
      title: "Getting Started with Mailchimp",
      type: "External",
      author: "by Mailchimp",
      description:
        "Mailchimp is an all-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties. This comprehensive guide covers account setup, audience building, campaign creation, and essential features to get you started on your marketing journey.",
      category: "Getting Started",
    },
    {
      title: "Create Your First Campaign",
      type: "External",
      author: "by Mailchimp",
      description:
        "Learn how to create and send your first email campaign with Mailchimp. This guide covers everything from design to delivery, including template selection, content creation, audience targeting, scheduling, and performance tracking to ensure your campaign success.",
      category: "Campaigns",
    },
    {
      title: "Understanding Audience Management",
      type: "External",
      author: "by Mailchimp",
      description:
        "Manage your contacts effectively with tags, segments, and groups. Learn best practices for organizing your audience, creating targeted segments, managing subscriber preferences, and maintaining clean contact lists for better engagement rates.",
      category: "Audience",
    },
    {
      title: "Setting Up Automation Workflows",
      type: "External",
      author: "by Mailchimp",
      description:
        "Create automated email sequences that engage your subscribers at the right time with personalized content. Learn about welcome series, abandoned cart emails, birthday campaigns, and advanced automation triggers to nurture your audience effectively.",
      category: "Automations",
    },
    {
      title: "Analyzing Campaign Performance",
      type: "External",
      author: "by Mailchimp",
      description:
        "Use Mailchimp's analytics tools to track opens, clicks, and conversions. Learn how to interpret your campaign data, understand engagement metrics, identify trends, and optimize your email marketing strategy based on performance insights.",
      category: "Analytics",
    },
    {
      title: "Email Design Best Practices",
      type: "External",
      author: "by Mailchimp",
      description:
        "Create visually appealing and effective email campaigns with our design guidelines. Learn about responsive design, color theory, typography, image optimization, and accessibility standards to ensure your emails look great on all devices.",
      category: "Design",
    },
    {
      title: "Managing Subscriber Preferences",
      type: "External",
      author: "by Mailchimp",
      description:
        "Give your subscribers control over their email preferences with preference centers and subscription management. Learn how to reduce unsubscribes, improve engagement, and maintain compliance with email marketing regulations.",
      category: "Audience",
    },
    {
      title: "A/B Testing Your Campaigns",
      type: "External",
      author: "by Mailchimp",
      description:
        "Optimize your email performance with A/B testing. Learn how to test subject lines, content, send times, and design elements to improve open rates, click-through rates, and overall campaign effectiveness.",
      category: "Optimization",
    },
    {
      title: "Integrating with E-commerce Platforms",
      type: "External",
      author: "by Mailchimp",
      description:
        "Connect your online store with Mailchimp to create targeted campaigns based on purchase behavior. Learn about product recommendations, abandoned cart recovery, customer lifetime value tracking, and revenue optimization strategies.",
      category: "Integrations",
    },
    {
      title: "GDPR Compliance and Email Marketing",
      type: "External",
      author: "by Mailchimp",
      description:
        "Ensure your email marketing complies with GDPR and other privacy regulations. Learn about consent management, data processing, subscriber rights, and best practices for maintaining compliant email marketing campaigns.",
      category: "Compliance",
    },
    {
      title: "Mobile Email Optimization",
      type: "External",
      author: "by Mailchimp",
      description:
        "Optimize your emails for mobile devices where most emails are opened. Learn about responsive design techniques, mobile-friendly layouts, touch-friendly buttons, and testing strategies to ensure great mobile experiences.",
      category: "Design",
    },
  ]

  const handleHelpOpen = () => {
    setIsHelpOpen(true)
    setIsHelpLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsHelpLoading(false)
    }, 1500)
  }

  const HelpSkeleton = () => (
    <div className="space-y-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      ))}
    </div>
  )

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🐵</span>
            </div>
          </Link>
        </div>

        {/* Center Search Bar - Rectangular and White */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-none pl-10 pr-4 bg-white border-gray-300 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              onClick={() => setIsSearchOpen(true)}
              readOnly
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Help Button - Rectangular with Border */}
          <Button
            variant="outline"
            size="sm"
            className="text-gray-600 hover:text-gray-900 border-gray-300 bg-white hover:bg-gray-50 rounded-none hidden sm:flex"
            onClick={handleHelpOpen}
          >
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
            <DropdownMenuContent align="end" className="w-64 p-0">
              {/* User Info Header */}
              <div className="flex items-center gap-3 p-4 border-b">
                <Avatar className="h-10 w-10 rounded-full bg-yellow-400 text-black">
                  <AvatarFallback className="bg-yellow-400 text-black font-bold text-lg">A</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">Aman</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Owner</span>
                  </div>
                  <span className="text-sm text-gray-600">Amanullah</span>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <DropdownMenuItem className="flex items-center justify-between px-4 py-2 text-sm">
                  <span>Notifications</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </DropdownMenuItem>

                <DropdownMenuItem className="px-4 py-2 text-sm">Profile</DropdownMenuItem>

                <DropdownMenuItem className="px-4 py-2 text-sm">Account & billing</DropdownMenuItem>

                <DropdownMenuItem className="px-4 py-2 text-sm">Pricing plans</DropdownMenuItem>

                <DropdownMenuItem className="px-4 py-2 text-sm">Hire an expert</DropdownMenuItem>

                <DropdownMenuItem className="flex items-center justify-between px-4 py-2 text-sm">
                  <span>Support</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </DropdownMenuItem>

                <DropdownMenuItem className="px-4 py-2 text-sm">Get cobrowse code</DropdownMenuItem>

                <DropdownMenuItem className="flex items-center justify-between px-4 py-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>US | English</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </DropdownMenuItem>
              </div>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="px-4 py-2 text-sm">Log out</DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Footer Links */}
              <div className="py-1">
                <DropdownMenuItem className="px-4 py-1 text-xs text-gray-500 hover:text-gray-700">
                  Privacy and Terms
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-1 text-xs text-gray-500 hover:text-gray-700">
                  Cookie Preferences
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-start justify-center pt-16">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
            {/* Search Header */}
            <div className="p-6 border-b">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-teal-600" />
                <Input
                  type="search"
                  placeholder="What can we help you find today?"
                  className="w-full pl-12 pr-12 py-4 text-lg border-2 border-teal-500 rounded-lg focus:ring-0 focus:border-teal-600 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-gray-100"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Search Content */}
            <div className="max-h-[70vh] overflow-y-auto">
              {/* Filter Section */}
              <div className="p-6 border-b bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Filter by</span>
                  <button
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedFilter("Contacts")
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchFilters.map((filter) => (
                    <Badge
                      key={filter}
                      variant="secondary"
                      className={cn(
                        "cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition-colors",
                        selectedFilter === filter
                          ? "bg-teal-100 text-teal-700 border-teal-200"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50",
                      )}
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Recommended Pages */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Recommended pages</h3>
                <div className="space-y-6">
                  {recommendedPages.map((page, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
                    >
                      <div className="mt-1 p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                        <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                          {page.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{page.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t bg-gray-50 flex items-center justify-between">
                <span className="text-sm text-gray-600">Not the results you expected? Leave feedback</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-200">
                    <ThumbsUp className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-200">
                    <ThumbsDown className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Panel */}
      <div
        className={cn(
          "fixed top-14 right-0 h-[calc(100vh-56px)] w-96 bg-white border-l shadow-2xl transform transition-transform duration-300 ease-in-out z-40",
          isHelpOpen ? "translate-x-0" : "translate-x-full",
          isMobile && "w-full",
        )}
      >
        {/* Help Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <h2 className="text-lg font-semibold text-gray-900">Help & Support</h2>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-gray-200"
            onClick={() => setIsHelpOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Help Search */}
        <div className="p-4 border-b bg-gray-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search help center"
              className="w-full pl-10 pr-4 bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={helpSearchQuery}
              onChange={(e) => setHelpSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Help Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">People like you viewed these answers</h3>

            {isHelpLoading ? (
              <HelpSkeleton />
            ) : (
              <div className="space-y-6">
                {helpArticles.map((article, index) => (
                  <div key={index} className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors group">
                    <h4 className="font-medium text-teal-600 hover:text-teal-700 mb-2 group-hover:underline">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                      <span className="font-medium">{article.type}</span>
                      <span>•</span>
                      <span>{article.author}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Help Footer - Styled Contact Us Button */}
        <div className="p-4 border-t bg-gray-50">
          <Button
            variant="outline"
            className="w-full border-2 border-teal-600 text-teal-600 bg-white hover:bg-teal-50 hover:text-teal-700 hover:border-teal-700 rounded-none font-medium py-2 h-10 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>
      </div>

      {/* Help Panel Backdrop */}
      {isHelpOpen && <div className="fixed inset-0 bg-black/20 z-30 lg:hidden" onClick={() => setIsHelpOpen(false)} />}
    </>
  )
}