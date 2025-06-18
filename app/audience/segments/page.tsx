"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Info, ChevronRight, Users, Mail, ShoppingCart, Store, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

export default function SegmentsPage() {
    const [showCreateSegmentModal, setShowCreateSegmentModal] = useState(false)
    const [showAboutSegmentsModal, setShowAboutSegmentsModal] = useState(false)

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <div className="px-12 max-sm:px-4 pt-20 space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
                <h1 className="text-3xl font-bold text-gray-900">Segments</h1>
                <Dialog open={showCreateSegmentModal} onOpenChange={setShowCreateSegmentModal}>
                    <DialogTrigger asChild>
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white">Create segment</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle>Create a New Segment</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <h3 className="font-medium">Choose segment type:</h3>
                                <div className="space-y-2">
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <div>
                                            <div className="font-medium">Basic segment</div>
                                            <div className="text-sm text-gray-500">Create a segment based on simple conditions</div>
                                        </div>
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <div>
                                            <div className="font-medium">Advanced segment</div>
                                            <div className="text-sm text-gray-500">Use complex conditions and groups</div>
                                        </div>
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <div>
                                            <div className="font-medium">Saved segment</div>
                                            <div className="text-sm text-gray-500">Create a segment from a previous campaign</div>
                                        </div>
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-gray-50 rounded-lg p-8 md:p-12"
            >
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">Create your first segment</h2>
                        <p className="text-gray-600">
                            A segment is a dynamic set of contacts that you create. Use segments to target contacts by location,
                            engagement, behavior, and more.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                className="bg-teal-600 hover:bg-teal-700 text-white"
                                onClick={() => setShowCreateSegmentModal(true)}
                            >
                                Create segment
                            </Button>
                            <Dialog open={showAboutSegmentsModal} onOpenChange={setShowAboutSegmentsModal}>
                                <DialogTrigger asChild>
                                    <Button variant="ghost" className="text-teal-600 hover:text-teal-700 flex items-center gap-2">
                                        <Info className="h-4 w-4" />
                                        About segments
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>About Segments</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                        <p className="text-gray-600">
                                            Segments are dynamic groups of contacts that update automatically based on the conditions you set.
                                            They're perfect for targeting specific groups within your audience.
                                        </p>
                                        <h4 className="font-medium">With segments, you can:</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                            <li>Target contacts based on their behavior</li>
                                            <li>Group contacts by location or demographics</li>
                                            <li>Identify your most engaged subscribers</li>
                                            <li>Find potential customers who haven't purchased yet</li>
                                            <li>Create personalized marketing campaigns</li>
                                        </ul>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-2/5">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="bg-white rounded-lg shadow-lg p-6"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">ESCUTERA</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">42</span>
                                            <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">21</span>
                                            <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">12</span>
                                            <div className="w-1/3 h-2 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">30</span>
                                            <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4"
                            >
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">
                                        ?
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-200 -ml-2 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200"></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-200 -ml-2 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200"></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-200 -ml-2 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-green-200 to-teal-200"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Pre-built Segments Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-6"
            >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900">Need help getting started?</h3>
                        <p className="text-gray-600">Choose one of our pre-built segments.</p>
                    </div>
                    <Link
                        href="#"
                        className="text-teal-600 hover:text-teal-700 flex items-center gap-1 text-sm font-medium"
                    >
                        View all pre-built segments
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <motion.div variants={item}>
                        <Card className="hover:shadow-md transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gray-100 rounded-full">
                                        <Users className="h-5 w-5 text-gray-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-gray-900">New subscribers</h4>
                                        <p className="text-gray-600 text-sm">
                                            Find contacts who signed up for your marketing in the last 7 days.
                                        </p>
                                        <Link href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                                            View segment details
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card className="hover:shadow-md transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gray-100 rounded-full">
                                        <Mail className="h-5 w-5 text-gray-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-gray-900">Engaged subscribers</h4>
                                        <p className="text-gray-600 text-sm">
                                            Find contacts who have opened any or all of your last 5 emails.
                                        </p>
                                        <Link href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                                            View segment details
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card className="hover:shadow-md transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gray-100 rounded-full">
                                        <ShoppingCart className="h-5 w-5 text-gray-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-gray-900">Potential customers</h4>
                                        <p className="text-gray-600 text-sm">
                                            Find contacts who haven't placed an order in your store.
                                        </p>
                                        <Link href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                                            View segment details
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Footer Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600"
            >
                <div className="flex items-center gap-2">
                    <Store className="h-4 w-4" />
                    <span>Build targeted customer segments.</span>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="#" className="text-teal-600 hover:text-teal-700">
                        Connect a store
                    </Link>
                    <span>and</span>
                    <Link href="#" className="text-teal-600 hover:text-teal-700">
                        send an email
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}