"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Info, Plus, Users, FileText, Share2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AudienceDashboardPage() {
    const [showAddContactsModal, setShowAddContactsModal] = useState(false)
    const [showLearnMoreModal, setShowLearnMoreModal] = useState(false)

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
        <div className="px-14 max-sm:px-4 pt-20 space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
            >
                <h1 className="text-3xl font-bold text-gray-900">Audience Dashboard</h1>
            </motion.div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-gray-50 rounded-lg p-8 md:p-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Grow Your Mailchimp Audience</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Your audience is where you'll store and manage your contacts. Once you add your contacts,
                    you'll be able to send your first campaign. We'll walk you through the process.
                </p>
                <Dialog open={showAddContactsModal} onOpenChange={setShowAddContactsModal}>
                    <DialogTrigger asChild>
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">Add Your Contacts</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle>Add Your Contacts</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <h3 className="font-medium">Choose how to add contacts:</h3>
                                <div className="space-y-2">
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <FileText className="mr-2 h-4 w-4" />
                                        <div>
                                            <div className="font-medium">Import from CSV or Excel</div>
                                            <div className="text-sm text-gray-500">Upload a spreadsheet with your contacts</div>
                                        </div>
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <Users className="mr-2 h-4 w-4" />
                                        <div>
                                            <div className="font-medium">Add contacts manually</div>
                                            <div className="text-sm text-gray-500">Enter contact information one by one</div>
                                        </div>
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <Share2 className="mr-2 h-4 w-4" />
                                        <div>
                                            <div className="font-medium">Sync from another service</div>
                                            <div className="text-sm text-gray-500">Connect to your existing tools</div>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </motion.div>

            {/* Get Started Cards */}
            <div className="space-y-6">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-semibold text-gray-900"
                >
                    Get started with your audience
                </motion.h3>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <motion.div variants={item}>
                        <Card className="h-full hover:shadow-md transition-shadow duration-300">
                            <CardContent className="p-6 flex flex-col h-full">
                                <div className="mb-4 h-40 bg-green-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-gray-700">
                                        <circle cx="50" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="30" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="70" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="40" cy="70" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="60" cy="70" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-teal-600 mb-2">Mailchimp audience 101</h4>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    Here's what you need to know before you start importing contacts.
                                </p>
                                <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 justify-start">
                                    Learn more
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card className="h-full hover:shadow-md transition-shadow duration-300">
                            <CardContent className="p-6 flex flex-col h-full">
                                <div className="mb-4 h-40 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-gray-700">
                                        <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <rect x="30" y="60" width="40" height="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <line x1="40" y1="55" x2="40" y2="60" stroke="currentColor" strokeWidth="1.5" />
                                        <line x1="60" y1="55" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="70" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-teal-600 mb-2">Start with a webinar</h4>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    Learn how to import and organize various contacts in this free, introductory lesson.
                                </p>
                                <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 justify-start">
                                    Watch now
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={item}>
                        <Card className="h-full hover:shadow-md transition-shadow duration-300">
                            <CardContent className="p-6 flex flex-col h-full">
                                <div className="mb-4 h-40 bg-yellow-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-gray-700">
                                        <path d="M30,70 C20,60 20,40 30,30 C40,20 60,20 70,30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M70,30 C80,40 80,60 70,70 C60,80 40,80 30,70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="50" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="70" cy="50" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="50" cy="70" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="30" cy="50" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-teal-600 mb-2">More ways to grow</h4>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    Browse our collection of resources, case studies and tips for growing your audience.
                                </p>
                                <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 justify-start">
                                    Explore resources
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>

            {/* No Contacts Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="border-t border-gray-200 pt-8 mt-8"
            >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No contacts? No problem.</h3>
                <p className="text-gray-600 mb-8">We'll show you how to grow your audience and add contacts quickly.</p>

                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-64 bg-amber-100 rounded-lg p-4 flex items-center justify-center">
                            <div className="w-full max-w-[200px] aspect-square relative">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <rect x="10" y="20" width="80" height="60" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
                                    <rect x="20" y="30" width="60" height="10" rx="2" fill="#e5e7eb" />
                                    <rect x="20" y="45" width="60" height="10" rx="2" fill="#e5e7eb" />
                                    <rect x="20" y="60" width="30" height="10" rx="2" fill="#d1d5db" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Create a signup form</h4>
                            <p className="text-gray-600 mb-4">
                                Capture contacts and collect the data you need to grow your Mailchimp audience.
                            </p>
                            <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                                Create Form
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-64 bg-amber-100 rounded-lg p-4 flex items-center justify-center">
                            <div className="w-full max-w-[200px] aspect-square relative">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <rect x="20" y="20" width="60" height="60" rx="4" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
                                    <circle cx="50" cy="40" r="10" fill="#e5e7eb" />
                                    <rect x="30" y="55" width="40" height="5" rx="1" fill="#e5e7eb" />
                                    <rect x="35" y="65" width="30" height="5" rx="1" fill="#e5e7eb" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Create a social post</h4>
                            <p className="text-gray-600 mb-4">
                                Share posts across multiple channels to increase the reach of your brand.
                            </p>
                            <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                                Create Post
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}