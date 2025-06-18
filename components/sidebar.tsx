"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  ChevronDown,
  Globe,
  Home,
  Layers,
  Menu,
  Pencil,
  Settings,
  Users,
  Megaphone,
  Workflow,
  LayoutPanelTop,
  BarChart2Icon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState([])

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [pathname, isMobile])

  const toggleExpanded = (itemName:any) => {
    setExpandedItems((prev:any) =>
      prev.includes(itemName) ? prev.filter((item:any) => item !== itemName) : [...prev, itemName],
    )
  }

  const handleItemClick = (item:any) => {
    if (item.subItems && item.subItems.length > 0) {
      toggleExpanded(item.name)
    } else {
      router.push(item.href)
    }
  }

  const navItems = [
    {
      name: "Create",
      icon: Pencil,
      href: "/create",
      isCreateButton: true,
    },
    {
      name: "Home",
      icon: Home,
      href: "/",
    },
    {
      name: "Campaigns",
      icon: Megaphone,
      href: "/campaigns",
    },
    {
      name: "Automations",
      icon: Workflow,
      href: "/automations",
      subItems: [
        { name: "All", href: "/automations/all" },
        { name: "Flow", href: "/automations/flow" },
        { name: "Flow Templates", href: "/automations/templates" },
        { name: "Transaction Emails", href: "/automations/transaction" },
      ],
    },
    {
      name: "Forms",
      icon: LayoutPanelTop,
      href: "/forms",
      badge: "Beta",
      subItems: [{ name: "Other forms", href: "/forms/other" }],
    },
    {
      name: "Audience",
      icon: Users,
      href: "/audience",
      subItems: [
        { name: "Audience dashboard", href: "/audience/dashboard" },
        { name: "Tags", href: "/audience/tags" },
        { name: "Segments", href: "/audience/segments" },
        { name: "Surveys", href: "/audience/surveys" },
        { name: "Inbox", href: "/audience/inbox" },
      ],
    },
    {
      name: "Analytics",
      icon: BarChart2Icon,
      href: "/analytics",
      subItems: [
        { name: "Reports", href: "/analytics/reports" },
        { name: "Custom reports", href: "/analytics/custom-reports" },
      ],
    },
    {
      name: "Website",
      icon: Globe,
      href: "/website",
      subItems: [
        { name: "Settings", href: "/website/settings" },
        { name: "Report", href: "/website/report" },
      ],
    },
    {
      name: "Content",
      icon: Layers,
      href: "/content",
      subItems: [
        { name: "Creative Assistant", href: "/content/creative-assistant" },
        { name: "Email templates", href: "/content/email-templates" },
        { name: "Brand Kit", href: "/content/brand-kit" },
      ],
    },
    {
      name: "Integrations",
      icon: Settings,
      href: "/integrations",
      subItems: [{ name: "Manage", href: "/integrations/manage" }],
    },
  ]

  const SidebarContent = () => (
    <div className="flex h-full w-full flex-col bg-white border-r border-gray-200">
      {/* Navigation - starts immediately without logo */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
          const isExpanded = expandedItems.includes(item.name)
          const hasSubItems = item.subItems && item.subItems.length > 0

          if (item.isCreateButton) {
            return (
              <Link key={item.name} href={item.href} className="block">
                <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </div>
              </Link>
            )
          }

          return (
            <div key={item.name}>
              <div
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer",
                  isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
                onClick={() => handleItemClick(item)}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1 truncate">{item.name}</span>
                {item.badge && (
                  <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                {hasSubItems && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 flex-shrink-0 transition-transform duration-200",
                      isExpanded ? "rotate-180" : "",
                    )}
                  />
                )}
              </div>

              {hasSubItems && (
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="ml-7 mt-1 space-y-0.5 border-l border-gray-200 pl-3">
                    {item.subItems?.map((subItem) => {
                      const isSubActive = pathname === subItem.href
                      return (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "block px-3 py-1.5 text-sm rounded-md transition-all duration-200",
                            isSubActive
                              ? "bg-gray-100 text-gray-900 font-medium"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          )}
                        >
                          {subItem.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer with time sensitive note and upgrade button */}
      <div className="mt-auto px-3 pb-4 space-y-3">
        <div className="text-xs text-gray-500 px-3 font-medium">Time sensitive</div>
        <Button
          className="w-full bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 rounded-full font-medium text-sm py-2 h-9 transition-all duration-200 hover:shadow-sm"
          variant="outline"
        >
          Upgrade
        </Button>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden fixed top-16 left-4 z-40 bg-white shadow-sm border border-gray-200 h-9 w-9"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="p-0 w-[260px] mt-14" overlayClassName="lg:hidden">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </>
    )
  }

  return (
    <div className="hidden lg:flex w-[260px] h-[calc(100vh-56px)] sticky top-14">
      <SidebarContent />
    </div>
  )
}