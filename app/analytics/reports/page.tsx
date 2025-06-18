"use client"

import { useState } from "react"
import {
  Search,
  Plus,
  Mail,
  MessageSquare,
  Zap,
  Globe,
  Megaphone,
  Users,
  BarChart3,
  CheckCircle,
  Clock,
  Archive,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("campaigns")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [showCreateFolder, setShowCreateFolder] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  // Dummy data for campaigns
  const campaigns = [
    {
      id: 1,
      name: "Welcome Email Series",
      type: "email",
      status: "completed",
      sent: "2,450",
      opens: "1,225",
      clicks: "245",
      openRate: "50%",
      clickRate: "10%",
      date: "Jun 15, 2025",
    },
    {
      id: 2,
      name: "Summer Sale Campaign",
      type: "email",
      status: "ongoing",
      sent: "5,000",
      opens: "2,100",
      clicks: "420",
      openRate: "42%",
      clickRate: "8.4%",
      date: "Jun 18, 2025",
    },
    {
      id: 3,
      name: "Product Launch SMS",
      type: "sms",
      status: "completed",
      sent: "1,200",
      opens: "1,140",
      clicks: "228",
      openRate: "95%",
      clickRate: "19%",
      date: "Jun 10, 2025",
    },
  ]

  const statusOptions = [
    { id: "all", label: "All", icon: Archive, count: campaigns.length },
    { id: "ongoing", label: "Ongoing", icon: Clock, count: campaigns.filter((c) => c.status === "ongoing").length },
    {
      id: "completed",
      label: "Completed",
      icon: CheckCircle,
      count: campaigns.filter((c) => c.status === "completed").length,
    },
  ]

  const typeOptions = [
    { id: "all", label: "All", icon: Archive },
    { id: "emails", label: "Emails", icon: Mail },
    { id: "sms", label: "SMS", icon: MessageSquare },
    { id: "automations", label: "Automations", icon: Zap },
    { id: "landing-pages", label: "Landing pages", icon: Globe },
    { id: "ads", label: "Ads", icon: Megaphone },
    { id: "social-posts", label: "Social Posts", icon: Users },
    { id: "surveys", label: "Surveys", icon: BarChart3 },
  ]

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || campaign.status === selectedStatus
    const matchesType =
      selectedType === "all" ||
      (selectedType === "emails" && campaign.type === "email") ||
      (selectedType === "sms" && campaign.type === "sms")

    return matchesSearch && matchesStatus && matchesType
  })

  const FilterButton = ({ option, isSelected, onClick, showCount = false }) => {
    const Icon = option.icon
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-3 w-full px-3 py-2 text-left text-sm rounded-md transition-all duration-200 ${
          isSelected ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`}
      >
        <Icon className="h-4 w-4 flex-shrink-0" />
        <span className="flex-1">{option.label}</span>
        {showCount && option.count !== undefined && (
          <Badge variant="secondary" className="bg-gray-200 text-gray-600 text-xs">
            {option.count}
          </Badge>
        )}
      </button>
    )
  }

  const CampaignCard = ({ campaign }) => (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">{campaign.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {campaign.type === "email" ? <Mail className="h-3 w-3" /> : <MessageSquare className="h-3 w-3" />}
              <span className="capitalize">{campaign.type}</span>
              <span>•</span>
              <span>{campaign.date}</span>
            </div>
          </div>
          <Badge
            variant={campaign.status === "ongoing" ? "default" : "secondary"}
            className={campaign.status === "ongoing" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}
          >
            {campaign.status}
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-gray-600">Sent</div>
            <div className="font-medium">{campaign.sent}</div>
          </div>
          <div>
            <div className="text-gray-600">Opens</div>
            <div className="font-medium">
              {campaign.opens} ({campaign.openRate})
            </div>
          </div>
          <div>
            <div className="text-gray-600">Clicks</div>
            <div className="font-medium">
              {campaign.clicks} ({campaign.clickRate})
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" size="sm">
              View Report
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-32 h-32 mb-6 opacity-60">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Person illustration */}
          <circle cx="60" cy="40" r="15" fill="none" stroke="#6B7280" strokeWidth="2" />
          <path
            d="M45 55 Q60 50 75 55 L75 80 Q75 85 70 85 L50 85 Q45 85 45 80 Z"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
          />
          <line x1="60" y1="85" x2="60" y2="120" stroke="#6B7280" strokeWidth="2" />
          <line x1="60" y1="120" x2="45" y2="140" stroke="#6B7280" strokeWidth="2" />
          <line x1="60" y1="120" x2="75" y2="140" stroke="#6B7280" strokeWidth="2" />
          <line x1="60" y1="70" x2="45" y2="85" stroke="#6B7280" strokeWidth="2" />
          <line x1="60" y1="70" x2="100" y2="85" stroke="#6B7280" strokeWidth="2" />

          {/* Chart illustration */}
          <rect x="120" y="60" width="60" height="80" fill="none" stroke="#6B7280" strokeWidth="2" rx="4" />
          <rect x="130" y="70" width="15" height="15" fill="none" stroke="#6B7280" strokeWidth="1" />
          <rect x="155" y="70" width="15" height="15" fill="none" stroke="#6B7280" strokeWidth="1" />
          <rect x="130" y="95" width="15" height="15" fill="none" stroke="#6B7280" strokeWidth="1" />
          <rect x="155" y="95" width="15" height="15" fill="none" stroke="#6B7280" strokeWidth="1" />
          <rect x="130" y="120" width="40" height="10" fill="none" stroke="#6B7280" strokeWidth="1" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Nothing to report yet</h3>
      <p className="text-gray-600 text-center max-w-md">
        After you send your first campaign, you'll be able to see information about how it performed.
      </p>
    </div>
  )

  return (
      <div className="px-4 pt-20 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <h2 className="text-xl font-semibold text-gray-800">Amanullah</h2>
          <p className="text-gray-600">
            Your audience has <span className="font-medium text-teal-600">1 contact</span>.
            <span className="font-medium text-teal-600"> 1</span> of these is subscribed.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters - Hidden on mobile, shown in modal */}
          <div className="hidden lg:block w-64 space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-900">View by Status</h3>
              <div className="space-y-1">
                {statusOptions.map((option) => (
                  <FilterButton
                    key={option.id}
                    option={option}
                    isSelected={selectedStatus === option.id}
                    onClick={() => setSelectedStatus(option.id)}
                    showCount={true}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-900">View by Type</h3>
              <div className="space-y-1">
                {typeOptions.map((option) => (
                  <FilterButton
                    key={option.id}
                    option={option}
                    isSelected={selectedType === option.id}
                    onClick={() => setSelectedType(option.id)}
                  />
                ))}
              </div>
            </div>

            <Dialog open={showCreateFolder} onOpenChange={setShowCreateFolder}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="w-full justify-start text-teal-600 hover:text-teal-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Folder
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Folder</DialogTitle>
                  <DialogDescription>Organize your campaigns by creating custom folders.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Folder Name</label>
                    <Input placeholder="Enter folder name" />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white flex-1">Create Folder</Button>
                    <Button variant="outline" onClick={() => setShowCreateFolder(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 max-w-md mb-6">
                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                <TabsTrigger value="comparative">Comparative</TabsTrigger>
              </TabsList>

              <TabsContent value="campaigns" className="space-y-6">
                {/* Search Bar */}
                <div className="space-y-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search campaigns"
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    You can also search by{" "}
                    <Link href="/audience" className="text-teal-600 hover:text-teal-700 underline">
                      all audiences
                    </Link>
                    .
                  </p>
                </div>

                {/* Mobile Filters */}
                <div className="lg:hidden grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      {statusOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Type</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      {typeOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Campaign Results */}
                {filteredCampaigns.length > 0 ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        Showing {filteredCampaigns.length} of {campaigns.length} campaigns
                      </p>
                    </div>
                    <div className="space-y-4">
                      {filteredCampaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                      ))}
                    </div>
                  </div>
                ) : searchQuery || selectedStatus !== "all" || selectedType !== "all" ? (
                  <div className="text-center py-16">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedStatus("all")
                        setSelectedType("all")
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                ) : (
                  <EmptyState />
                )}
              </TabsContent>

              <TabsContent value="comparative">
                <Card className="border-2 border-dashed border-gray-200">
                  <CardContent className="p-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comparative Reports</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Comparative Reports are available for Standard and Premium users.
                    </p>
                    <div className="space-y-3 max-w-sm mx-auto">
                      <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                            Upgrade To Standard or Premium
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Upgrade Your Plan</DialogTitle>
                            <DialogDescription>
                              Get access to comparative reports and advanced analytics features.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Card className="p-4">
                                <h4 className="font-medium mb-2">Standard Plan</h4>
                                <p className="text-sm text-gray-600 mb-3">Perfect for growing businesses</p>
                                <ul className="text-sm space-y-1">
                                  <li>• Comparative reports</li>
                                  <li>• Advanced analytics</li>
                                  <li>• Custom segments</li>
                                </ul>
                                <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700">Choose Standard</Button>
                              </Card>
                              <Card className="p-4">
                                <h4 className="font-medium mb-2">Premium Plan</h4>
                                <p className="text-sm text-gray-600 mb-3">For advanced marketers</p>
                                <ul className="text-sm space-y-1">
                                  <li>• Everything in Standard</li>
                                  <li>• Advanced automation</li>
                                  <li>• Priority support</li>
                                </ul>
                                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                                  Choose Premium
                                </Button>
                              </Card>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" className="w-full">
                        Upgrade To Standard or Premium
                      </Button>
                      <Link href="#" className="text-teal-600 hover:text-teal-700 text-sm underline block">
                        Learn more
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
  )
}
