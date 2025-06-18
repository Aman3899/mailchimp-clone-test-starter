"use client"

import { useState } from "react"
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, List, Info, Check, X, Mail, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"

// --- Interface for Campaign ---
interface Campaign {
  id: number
  name: string
  type: "Email" | "SMS" | "Form" | "Lead Ad"
  status: "Draft" | "Sent" | "Scheduled"
  audience: string
  analytics: string
  lastModified: string
  lastEditedBy: string
}

const MainNavbar = ({ onCreateClick }: { onCreateClick: () => void }) => {
  const router = useRouter()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="z-[1000] bg-white shadow-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900 md:text-2xl max-sm:text-xl">
            All campaigns
          </h1>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 max-sm:text-sm"
              onClick={() => router.push("/analytics/reports")}
            >
              View analytics
            </Button>
            <Button
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 transition-colors duration-200 max-sm:text-sm"
              onClick={onCreateClick}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

// --- Create Campaign Modal ---
const CreateCampaignModal = ({
  isOpen,
  onClose,
  onCreateCampaign,
}: {
  isOpen: boolean
  onClose: () => void
  onCreateCampaign: (campaign: Campaign) => void
}) => {
  const [name, setName] = useState("")
  const [type, setType] = useState<Campaign["type"]>("Email")

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      alert("Please enter a campaign name.")
      return
    }
    const newCampaign: Campaign = {
      id: Date.now(),
      name,
      type,
      status: "Draft",
      audience: "—",
      analytics: "—",
      lastModified: new Date().toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      lastEditedBy: "Steve Hawk",
    }
    onCreateCampaign(newCampaign)
    setName("")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[900] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Create new campaign</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="campaign-name" className="block text-sm font-medium text-gray-700">
              Campaign Name
            </label>
            <Input
              id="campaign-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Summer Sale Newsletter"
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="campaign-type" className="block text-sm font-medium text-gray-700">
              Campaign Type
            </label>
            <select
              id="campaign-type"
              value={type}
              onChange={(e) => setType(e.target.value as Campaign["type"])}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
            >
              <option>Email</option>
              <option>SMS</option>
              <option>Form</option>
              <option>Lead Ad</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white">
              Create Campaign
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

// --- Campaign List Component ---
const CampaignList = ({
  campaigns,
  onEditCampaign,
  onClearData,
}: {
  campaigns: Campaign[]
  onEditCampaign: (id: number) => void
  onClearData: () => void
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter ? campaign.type === typeFilter : true
    const matchesStatus = statusFilter ? campaign.status === statusFilter : true
    return matchesSearch && matchesType && matchesStatus
  })

  const clearFiltersAndData = () => {
    setSearchTerm("")
    setTypeFilter(null)
    setStatusFilter(null)
    onClearData() // Clear all campaigns
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search campaigns"
            className="pl-10 pr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-sm">
            Type:
            <select
              className="ml-2 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-teal-500 focus:ring-teal-500"
              value={typeFilter || "All"}
              onChange={(e) => setTypeFilter(e.target.value === "All" ? null : e.target.value)}
            >
              <option>All</option>
              <option>Email</option>
              <option>SMS</option>
              <option>Form</option>
              <option>Lead Ad</option>
            </select>
          </div>
          <div className="flex items-center gap-1 text-sm">
            Status:
            <select
              className="ml-2 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-teal-500 focus:ring-teal-500"
              value={statusFilter || "All"}
              onChange={(e) => setStatusFilter(e.target.value === "All" ? null : e.target.value)}
            >
              <option>All</option>
              <option>Draft</option>
              <option>Sent</option>
              <option>Scheduled</option>
            </select>
          </div>
          <Button
            variant="link"
            size="sm"
            className="text-teal-600 hover:underline"
            onClick={clearFiltersAndData}
          >
            Clear
          </Button>
          <div className="ml-auto hidden sm:flex items-center gap-1 text-sm">
            Sort by:
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              Date edited <ChevronDown className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-[40px] px-4 py-3">
                  <Checkbox />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider hidden sm:table-cell">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider hidden md:table-cell">
                  Audience
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                  Analytics
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <AnimatePresence>
                {filteredCampaigns.map((campaign) => (
                  <motion.tr
                    key={campaign.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      <Checkbox />
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col">
                        <Link
                          href="#"
                          className="font-medium text-gray-800 hover:text-teal-600 hover:underline"
                        >
                          {campaign.name}
                        </Link>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Mail className="h-3 w-3" /> {campaign.type}
                        </div>
                        <div className="mt-1 text-xs text-gray-400">
                          Last edited {campaign.lastModified} by {campaign.lastEditedBy}
                        </div>
                        <div className="sm:hidden mt-2">
                          <Badge variant={campaign.status === "Draft" ? "outline" : "default"}>
                            {campaign.status}
                          </Badge>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                      <Badge variant={campaign.status === "Draft" ? "outline" : "default"}>
                        {campaign.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">
                      {campaign.audience}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 hidden lg:table-cell">
                      {campaign.analytics}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEditCampaign(campaign.id)}
                      >
                        Edit
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}

export default function CampaignsPage() {
  const [viewType, setViewType] = useState<"list" | "calendar">("list")
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1))
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreateCampaign = (newCampaign: Campaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign])
  }

  const handleEditCampaign = (id: number) => {
    console.log(`Editing campaign with ID: ${id}`)
  }

  const handleClearData = () => {
    setCampaigns([]) // Clear all campaigns
  }

  const navigateMonth = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate
    })
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const today = 18
  const goodDays = [26, 27, 30, 1, 3, 4]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    const days = []
    const prevMonth = new Date(year, month - 1, 0)
    const prevMonthDays = prevMonth.getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, isCurrentMonth: false })
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isToday: day === today,
        isGoodDay: goodDays.includes(day),
      })
    }
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      days.push({ day, isCurrentMonth: false })
    }
    return days
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <MainNavbar onCreateClick={() => setIsModalOpen(true)} />
      <div className="mx-auto max-w-7xl pt-5 px-4 sm:px-6 lg:px-8 pb-6">
        <div className="mb-6 flex items-center border-b border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-2 rounded-none border-b-2 px-4 py-3 transition-all duration-200 ${viewType === "list"
                ? "border-teal-500 text-teal-600 bg-white"
                : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            onClick={() => setViewType("list")}
          >
            <List className="h-4 w-4" /> List
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-2 rounded-none border-b-2 px-4 py-3 transition-all duration-200 ${viewType === "calendar"
                ? "border-teal-500 text-teal-600 bg-white"
                : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            onClick={() => setViewType("calendar")}
          >
            <Calendar className="h-4 w-4" /> Calendar
          </Button>
        </div>
        <AnimatePresence mode="wait">
          {viewType === "list" ? (
            campaigns.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex min-h-[500px] items-center justify-center"
              >
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
                  <div className="max-w-md text-center lg:text-left">
                    <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                      {"Let's get started"}
                    </h2>
                    <p className="mb-6 text-lg text-gray-600">
                      Create content to share with your audience using:
                    </p>
                    <div className="mb-8 space-y-3 text-left">
                      {["Email", "SMS", "Forms", "Lead Ads and more"].map(
                        (item) => (
                          <div key={item} className="flex items-center gap-3">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100">
                              <Check className="h-3 w-3 text-teal-600" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        )
                      )}
                    </div>
                    <Button
                      className="mb-4 bg-teal-600 hover:bg-teal-700 text-white px-8 transition-colors duration-200"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Create
                    </Button>
                    <div className="flex items-center gap-2 text-teal-600">
                      <Info className="h-4 w-4" />
                      <Link
                        href="#"
                        className="text-sm hover:underline"
                      >
                        Getting started with campaigns
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-80 w-80 lg:h-96 lg:w-96">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-teal-50 p-8">
                      <div className="h-full w-full rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
                        <div className="p-6 space-y-4">
                          <div className="h-4 bg-teal-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-8 bg-pink-200 rounded-full w-16"></div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                          </div>
                          <div className="h-6 bg-teal-500 rounded w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <CampaignList
                key="list"
                campaigns={campaigns}
                onEditCampaign={handleEditCampaign}
                onClearData={handleClearData}
              />
            )
          ) : (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => navigateMonth(-1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-2">
                      <Input
                        value={`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
                        readOnly
                        className="w-32 text-center border-gray-300"
                      />
                      <Calendar className="h-4 w-4 text-gray-400" />
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => navigateMonth(1)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-teal-600 border-teal-200 hover:bg-teal-50 transition-colors duration-200"
                  >
                    Today
                  </Button>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    Month <ChevronDown className="h-3 w-3" />
                  </Button>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      Send day optimization:
                    </span>
                    <Switch
                      defaultChecked
                      className="data-[state=checked]:bg-teal-600"
                    />
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="p-3 text-center text-sm font-medium text-gray-700"
                    >
                      <span className="hidden sm:inline">{day}</span>
                      <span className="sm:hidden">{day.slice(0, 3)}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7">
                  {getDaysInMonth(currentDate).map((dayObj, index) => (
                    <div
                      key={index}
                      className={`relative min-h-[80px] border-b border-r border-gray-100 p-2 transition-colors hover:bg-gray-50 ${!dayObj.isCurrentMonth ? "bg-gray-50/50 text-gray-400" : ""
                        } ${index % 7 === 6 ? "border-r-0" : ""}`}
                    >
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium transition-all ${dayObj.isToday
                            ? "bg-gray-900 text-white"
                            : dayObj.isCurrentMonth
                              ? "text-gray-900 hover:bg-gray-100"
                              : "text-gray-400"
                          }`}
                      >
                        {dayObj.day}
                      </div>
                      {dayObj.isGoodDay && dayObj.isCurrentMonth && (
                        <div className="absolute bottom-2 left-2">
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 border border-green-200">
                            GOOD
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CreateCampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateCampaign={handleCreateCampaign}
      />
    </div>
  )
}