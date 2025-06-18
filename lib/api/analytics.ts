// Mock analytics data generator and API service

import { addDays, format, subDays } from "date-fns"

// Types for our analytics data
export interface AnalyticsDataPoint {
  date: string
  sends: number
  opens: number
  clicks: number
  unsubscribes: number
}

export interface AnalyticsMetrics {
  totalSends: number
  openRate: number
  clickRate: number
  unsubscribeRate: number
  messageCount: number
}

export interface AnalyticsData {
  metrics: AnalyticsMetrics
  dataPoints: AnalyticsDataPoint[]
  comparisonMetrics?: AnalyticsMetrics
}

export interface AnalyticsFilters {
  dateRange: string
  comparison: string
  messageFilter: string
  excludeAppleMpp: boolean
}

// Helper to generate random numbers within a range
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Generate a series of data points for a given date range
const generateDataPoints = (startDate: Date, days: number): AnalyticsDataPoint[] => {
  const dataPoints: AnalyticsDataPoint[] = []

  for (let i = 0; i < days; i++) {
    const date = addDays(startDate, i)
    const sends = randomInRange(100, 500)
    const opens = randomInRange(Math.floor(sends * 0.3), Math.floor(sends * 0.7))
    const clicks = randomInRange(Math.floor(opens * 0.1), Math.floor(opens * 0.4))
    const unsubscribes = randomInRange(0, Math.floor(sends * 0.02))

    dataPoints.push({
      date: format(date, "yyyy-MM-dd"),
      sends,
      opens,
      clicks,
      unsubscribes,
    })
  }

  return dataPoints
}

// Calculate metrics from data points
const calculateMetrics = (dataPoints: AnalyticsDataPoint[]): AnalyticsMetrics => {
  const totalSends = dataPoints.reduce((sum, point) => sum + point.sends, 0)
  const totalOpens = dataPoints.reduce((sum, point) => sum + point.opens, 0)
  const totalClicks = dataPoints.reduce((sum, point) => sum + point.clicks, 0)
  const totalUnsubscribes = dataPoints.reduce((sum, point) => sum + point.unsubscribes, 0)

  return {
    totalSends,
    openRate: totalSends > 0 ? (totalOpens / totalSends) * 100 : 0,
    clickRate: totalSends > 0 ? (totalClicks / totalSends) * 100 : 0,
    unsubscribeRate: totalSends > 0 ? (totalUnsubscribes / totalSends) * 100 : 0,
    messageCount: dataPoints.length,
  }
}

// Apply filters to modify the data
const applyFilters = (filters: AnalyticsFilters): AnalyticsData => {
  let days = 30
  let comparisonDays = 31

  // Determine date range based on filter
  switch (filters.dateRange) {
    case "Last 30 days":
      days = 30
      break
    case "Last 60 days":
      days = 60
      break
    case "Last 90 days":
      days = 90
      break
    case "Custom":
      days = 45 // Just a default for the mock
      break
  }

  // Determine comparison period
  switch (filters.comparison) {
    case "Last 31 days":
      comparisonDays = 31
      break
    case "Last 61 days":
      comparisonDays = 61
      break
    case "Last 91 days":
      comparisonDays = 91
      break
    case "Custom":
      comparisonDays = 45
      break
  }

  // Generate current period data
  const endDate = new Date()
  const startDate = subDays(endDate, days)
  let dataPoints = generateDataPoints(startDate, days)

  // Apply message filter if specified
  if (filters.messageFilter === "All messages") {
    // No filtering needed, use all data
  } else if (filters.messageFilter === "0 messages selected") {
    // Reduce data by 30% to simulate filtering
    dataPoints = dataPoints.map((point) => ({
      ...point,
      sends: Math.floor(point.sends * 0.7),
      opens: Math.floor(point.opens * 0.7),
      clicks: Math.floor(point.clicks * 0.7),
      unsubscribes: Math.floor(point.unsubscribes * 0.7),
    }))
  }

  // Apply Apple MPP exclusion if enabled
  if (filters.excludeAppleMpp) {
    // Reduce open rates by 20% to simulate excluding Apple MPP
    dataPoints = dataPoints.map((point) => ({
      ...point,
      opens: Math.floor(point.opens * 0.8),
    }))
  }

  // Calculate metrics for current period
  const metrics = calculateMetrics(dataPoints)

  // Generate comparison period data
  const comparisonStartDate = subDays(startDate, comparisonDays)
  const comparisonDataPoints = generateDataPoints(comparisonStartDate, comparisonDays)
  const comparisonMetrics = calculateMetrics(comparisonDataPoints)

  return {
    metrics,
    dataPoints,
    comparisonMetrics,
  }
}

// Mock API function to fetch analytics data
export const fetchAnalyticsData = async (filters: AnalyticsFilters): Promise<AnalyticsData> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Randomly fail sometimes to test error handling
  if (Math.random() < 0.05) {
    throw new Error("Failed to fetch analytics data")
  }

  return applyFilters(filters)
}
