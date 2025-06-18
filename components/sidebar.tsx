"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Globe, Home, Layers, Menu, Pencil, Settings, Users, Megaphone, Workflow, LayoutPanelTop, BarChart2Icon, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [pathname, isMobile])

  // Auto-expand parent items based on current path
  useEffect(() => {
    const currentItem = navItems.find(item => 
      item.subItems?.some(subItem => pathname === subItem.href) ||
      (item.href !== "/" && pathname.startsWith(item.href))
    )
    
    if (currentItem && currentItem.subItems && !expandedItems.includes(currentItem.name)) {
      setExpandedItems([currentItem.name])
    }
  }, [pathname])

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) => {
      // Close all other dropdowns and toggle the clicked one
      if (prev.includes(itemName)) {
        return prev.filter((item) => item !== itemName)
      } else {
        return [itemName] // Only keep the clicked item open
      }
    })
  }

  const handleItemClick = (item: any) => {
    if (item.subItems && item.subItems.length > 0) {
      // Navigate to parent route and toggle dropdown
      router.push(item.href)
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
      href: "/audience/contacts",
      subItems: [
        { name: "Audience dashboard", href: "/audience/dashboard" },
        { name: "Tags", href: "/audience/tags" },
        { name: "Segments", href: "/audience/segments" },
        { name: "Surveys", href: "/audience/surveys" },
        { name: "Inbox", href: "/login" },
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

  const SidebarContent = ({ collapsed = false }: { collapsed?: boolean }) => (
    <div className="flex h-full w-full flex-col bg-white border-r border-gray-200">
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
          const isExpanded = expandedItems.includes(item.name)
          const hasSubItems = item.subItems && item.subItems.length > 0

          if (item.isCreateButton) {
            return (
              <Link key={item.name} href={item.href} className="block">
                <div className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-200",
                  collapsed && "justify-center"
                )}>
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
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
                  collapsed && "justify-center"
                )}
                onClick={() => handleItemClick(item)}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                {!collapsed && (
                  <>
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
                  </>
                )}
              </div>

              {hasSubItems && !collapsed && (
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

      {/* Footer */}
      <div className="mt-auto px-3 pb-4 space-y-3">
        {!collapsed && <div className="text-xs text-gray-500 px-3 font-medium">Time sensitive</div>}
        <Button
          className={cn(
            "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 rounded-full font-medium text-sm py-2 h-9 transition-all duration-200 hover:shadow-sm",
            collapsed ? "w-10 px-0" : "w-full"
          )}
          variant="outline"
        >
          {collapsed ? "↑" : "Upgrade"}
        </Button>
      </div>
    </div>
  )

  // Mobile implementation
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

  // Desktop implementation
  return (
    <>
      <div className={cn(
        "hidden lg:flex h-[calc(100vh-56px)] sticky top-14 transition-all duration-300",
        isCollapsed ? "w-[60px]" : "w-[260px]"
      )}>
        <SidebarContent collapsed={isCollapsed} />
      </div>

      {/* Toggle button - bottom right corner */}
      <Button
        variant="outline"
        size="icon"
        className="hidden lg:flex fixed bottom-6 right-6 z-50 bg-white shadow-lg border-gray-300 h-10 w-10 rounded-full hover:shadow-xl transition-all duration-200"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        <span className="sr-only">Toggle sidebar</span>
      </Button>
    </>
  )
}