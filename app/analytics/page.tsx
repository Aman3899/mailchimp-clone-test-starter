"use client"

import { useState } from "react"
import { Edit2, AlertTriangle, TrendingUp, Mail, MousePointer, UserMinus, Send, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { motion, AnimatePresence } from "framer-motion"

// Sample JSON data
const performanceData = [
  { date: "May 19", sends: 50, openRate: 25, clickRate: 10, unsubscribeRate: 1 },
  { date: "May 26", sends: 75, openRate: 30, clickRate: 15, unsubscribeRate: 2 },
  { date: "Jun 02", sends: 100, openRate: 35, clickRate: 20, unsubscribeRate: 3 },
  { date: "Jun 09", sends: 120, openRate: 40, clickRate: 25, unsubscribeRate: 2 },
  { date: "Jun 16", sends: 150, openRate: 45, clickRate: 30, unsubscribeRate: 1 },
]

const deliveryData = [
  { date: "Jun 10", value: 12 },
  { date: "Jun 11", value: 8 },
  { date: "Jun 12", value: 15 },
  { date: "Jun 13", value: 3 },
  { date: "Jun 14", value: 18 },
  { date: "Jun 15", value: 12 },
  { date: "Jun 16", value: 20 },
]

const conversionData = [
  { name: "Deliveries", value: 150, percentage: 100 },
  { name: "Opened", value: 75, percentage: 50 },
  { name: "Clicked", value: 30, percentage: 20 },
  { name: "Orders", value: 15, percentage: 10 },
]

export default function AnalyticsPage() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [showAttributionModal, setShowAttributionModal] = useState(false)
  const [showSeeWhyModal, setShowSeeWhyModal] = useState(false)
  const [dateRange, setDateRange] = useState("Last 30 days")
  const [comparison, setComparison] = useState("Last 31 days")
  const [messageFilter, setMessageFilter] = useState("0 messages selected")
  const [excludeAppleMPP, setExcludeAppleMPP] = useState(false)
  const [activeTab, setActiveTab] = useState("performance")
  const [conversionTab, setConversionTab] = useState("funnel")
  const [deliveryPeriod, setDeliveryPeriod] = useState("Day")
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  const MetricCard = ({ icon: Icon, title, value, subtitle, color = "text-gray-600" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className={`p-2 sm:p-3 rounded-lg bg-gray-50 ${color}`}>
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="flex-1">
        <div className="text-xl sm:text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-xs sm:text-sm text-gray-600">{title}</div>
        {subtitle && <div className="text-xs sm:text-sm text-gray-500 mt-1">{subtitle}</div>}
      </div>
    </motion.div>
  )

  const handleDateChange = (e: any) => {
    setSelectedDate(e.target.value)
    console.log("Date changed to:", e.target.value)
  }

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-4 pt-16 sm:pt-20 space-y-4 sm:space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 bg-white p-2 sm:p-4 rounded-lg shadow-md"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-900">Marketing dashboard</h1>
          <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs sm:text-sm">
            Sample data
          </Badge>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white text-sm sm:text-base w-full sm:w-auto">
                Upgrade to Standard plan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Upgrade to Standard Plan</DialogTitle>
                <DialogDescription>
                  Unlock advanced analytics features and remove sample data limitations.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="text-sm text-gray-600">Standard plan includes:</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Real-time analytics data
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Advanced reporting features
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    Custom date ranges
                  </li>
                </ul>
                <div className="flex gap-2 pt-4">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white flex-1">Upgrade Now</Button>
                  <Button variant="outline" onClick={() => setShowUpgradeModal(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={showAttributionModal} onOpenChange={setShowAttributionModal}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-gray-300 text-gray-700 text-sm sm:text-base w-full sm:w-auto">
                Attribution settings
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Attribution Settings</DialogTitle>
                <DialogDescription>Configure how conversions are attributed to your campaigns.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Attribution Window</label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white flex-1">Save Settings</Button>
                  <Button variant="outline" onClick={() => setShowAttributionModal(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Sample Data Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-orange-50 border border-orange-200 rounded-lg p-2 sm:p-4"
      >
        <div className="flex items-start gap-2 sm:gap-3">
          <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
          <div className="text-sm">
            <div className="font-medium text-orange-900 mb-1">You're using sample data</div>
            <div className="text-orange-800">
              Use Mailchimp's sample data to explore the Marketing dashboard. In order to see your account activity,
              upgrade to a Standard plan.
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-lg border border-gray-200 p-2 sm:p-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 mb-2 sm:mb-4">
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-700">Date range</label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Last 7 days">Last 7 days</SelectItem>
                <SelectItem value="Last 30 days">Last 30 days</SelectItem>
                <SelectItem value="Last 90 days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-700">Comparison</label>
            <Select value={comparison} onValueChange={setComparison}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Last 31 days">Last 31 days</SelectItem>
                <SelectItem value="Previous period">Previous period</SelectItem>
                <SelectItem value="Same period last year">Same period last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-700">Filter by message name</label>
            <Select value={messageFilter} onValueChange={setMessageFilter}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0 messages selected">0 messages selected</SelectItem>
                <SelectItem value="All messages">All messages</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="apple-mpp" checked={excludeAppleMPP} onCheckedChange={setExcludeAppleMPP} />
            <label htmlFor="apple-mpp" className="text-xs sm:text-sm text-gray-700">
              Exclude Apple MPP for more accurate open data.
            </label>
          </div>
          <Dialog open={showSeeWhyModal} onOpenChange={setShowSeeWhyModal}>
            <DialogTrigger asChild>
              <button className="text-teal-600 hover:text-teal-700 text-xs sm:text-sm underline">See why</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Apple Mail Privacy Protection</DialogTitle>
                <DialogDescription>
                  Learn about how Apple's privacy features affect email analytics.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Apple Mail Privacy Protection can artificially inflate open rates by pre-loading email content.
                  Excluding these opens provides more accurate engagement metrics.
                </p>
                <Button onClick={() => setShowSeeWhyModal(false)} className="w-full">
                  Got it
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs sm:text-sm ml-0 sm:ml-2">
            New
          </Badge>
        </div>
      </motion.div>

      {/* Performance Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
        <TabsList className="grid w-full grid-cols-2 sm:max-w-md bg-white p-1 rounded-lg">
          <TabsTrigger value="performance" className="rounded-md text-xs sm:text-sm">Performance</TabsTrigger>
          <TabsTrigger value="compare" className="rounded-md text-xs sm:text-sm">Compare message performance</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4 sm:space-y-6">
          {/* Monitor Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg border border-gray-200"
          >
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  Monitor performance
                  <Edit2 className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </CardTitle>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  May 19, 2025 - Jun 18, 2025 • Compared to last 31 days •{" "}
                  <span className="text-red-600">{excludeAppleMPP ? "Excludes" : "Includes"} Apple MPP</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              <MetricCard icon={Send} title="Total sends" value={performanceData[performanceData.length - 1].sends} color="text-blue-600" />
              <MetricCard icon={Eye} title="Open rate" value={`${performanceData[performanceData.length - 1].openRate}%`} color="text-green-600" />
              <MetricCard icon={MousePointer} title="Click rate" value={`${performanceData[performanceData.length - 1].clickRate}%`} color="text-purple-600" />
              <MetricCard icon={UserMinus} title="Unsubscribe rate" value={`${performanceData[performanceData.length - 1].unsubscribeRate}%`} color="text-red-600" />
            </CardContent>
          </motion.div>

          {/* Performance Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg border border-gray-200"
          >
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Performance over time</CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-4">
              <div className="h-40 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" fontSize={10} />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" fontSize={10} />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" fontSize={10} />
                    <Tooltip />
                    <Line yAxisId="left" type="monotone" dataKey="sends" stroke="#8884d8" strokeWidth={2} name="Sends" />
                    <Line yAxisId="right" type="monotone" dataKey="openRate" stroke="#82ca9d" strokeWidth={2} name="Open Rate" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </motion.div>

          {/* Marketing Dashboard Promotion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-2 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Put your data to work for you with the Marketing dashboard
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  The Marketing dashboard summarizes metrics across multiple campaigns and channels so you can easily
                  see how they're performing, identify data trends, and more. Upgrade to our Standard plan to get
                  Marketing dashboard and the insights you need to improve your marketing.
                </p>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white text-sm sm:text-base w-full sm:w-auto">
                  Upgrade to Standard plan
                </Button>
              </div>
              <div className="w-full sm:w-80">
                <div className="bg-white rounded-lg p-2 sm:p-4 shadow-sm">
                  <div className="text-xs sm:text-sm text-gray-600 mb-2">Total messages sent</div>
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-4">{performanceData[performanceData.length - 1].sends}</div>
                  <div className="h-20 sm:h-32 bg-gradient-to-r from-teal-400 to-blue-400 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conversions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg border border-gray-200"
          >
            <CardHeader>
              <div className="flex items-center justify-between flex-col sm:flex-row">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Conversions</CardTitle>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    May 19, 2025 - Jun 18, 2025 • Compared to last 31 days •{" "}
                    <span className="text-red-600">{excludeAppleMPP ? "Excludes" : "Includes"} Apple MPP</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={conversionTab} onValueChange={setConversionTab}>
                <TabsList className="mb-2 sm:mb-4">
                  <TabsTrigger value="funnel" className="text-xs sm:text-sm">Conversion funnel</TabsTrigger>
                  <TabsTrigger value="overtime" className="text-xs sm:text-sm">Conversions over time</TabsTrigger>
                </TabsList>

                <TabsContent value="funnel">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Attributed revenue per recipient</div>
                        <div className="text-lg sm:text-2xl font-bold">$150</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-600">Channel:</span>
                        <Select defaultValue="email">
                          <SelectTrigger className="w-24 sm:w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                      {conversionData.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="text-center"
                        >
                          <div className="h-16 sm:h-32 bg-gray-100 rounded-lg mb-2 flex items-end justify-center p-1 sm:p-2">
                            <div
                              className="w-full bg-purple-300 rounded-t transition-all duration-300"
                              style={{ height: `${Math.max(item.percentage, 5)}%` }}
                            ></div>
                          </div>
                          <div className="font-medium text-sm sm:text-lg">{item.value}</div>
                          <div className="text-xs sm:text-sm text-gray-600">{item.name}</div>
                          <div className="text-xs sm:text-sm text-gray-500">
                            {item.percentage}% {index > 0 && "Drop-off"}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="overtime">
                  <div className="h-40 sm:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" fontSize={10} />
                        <YAxis fontSize={10} />
                        <Tooltip />
                        <Line type="monotone" dataKey="clickRate" stroke="#8884d8" strokeWidth={2} name="Click Rate" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </motion.div>

          {/* Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg border border-gray-200"
          >
            <CardHeader>
              <div className="flex items-center justify-between flex-col sm:flex-row">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Delivery</CardTitle>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    May 19, 2025 - Jun 18, 2025 • Compared to last 31 days
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Abuse report rate</div>
                    <div className="text-lg sm:text-2xl font-bold">2%</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-gray-600">Metric:</span>
                    <Button variant="outline" size="sm" className="text-teal-600 text-xs sm:text-sm">
                      Abuse report rate
                    </Button>
                    <Tabs value={deliveryPeriod} onValueChange={setDeliveryPeriod}>
                      <TabsList className="h-7 sm:h-8">
                        <TabsTrigger value="Day" className="text-xs sm:text-sm">Day</TabsTrigger>
                        <TabsTrigger value="Week" className="text-xs sm:text-sm">Week</TabsTrigger>
                        <TabsTrigger value="Month" className="text-xs sm:text-sm">Month</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>

                <div className="h-40 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={deliveryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" fontSize={10} />
                      <YAxis fontSize={10} />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base mb-2 sm:mb-3">Delivery details</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {[
                        { label: "Emails sent", value: 150 },
                        { label: "Deliveries", value: 145 },
                        { label: "Bounces", value: 5 },
                        { label: "Unsubscribed", value: 3 },
                        { label: "Abuse reports", value: 2 },
                      ].map((item) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="flex justify-between text-xs sm:text-sm"
                        >
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-medium">{item.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </motion.div>
        </TabsContent>

        <TabsContent value="compare" className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg border border-gray-200"
          >
            <CardContent className="p-4 sm:p-8">
              <div className="text-center text-gray-500">
                <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg sm:text-xl font-medium mb-2">Compare message performance</h3>
                <p className="text-sm sm:text-base">Select campaigns to compare their performance metrics side by side.</p>
                <Button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white text-sm sm:text-base w-full sm:w-auto" onClick={() => console.log("Compare clicked")}>
                  Select Campaigns
                </Button>
              </div>
            </CardContent>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}