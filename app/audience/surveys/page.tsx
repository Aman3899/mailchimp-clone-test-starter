"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SurveysPage() {
    const [showCreateSurveyModal, setShowCreateSurveyModal] = useState(false)
    const [showHelpModal, setShowHelpModal] = useState(false)

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

    const surveyTemplates = [
        {
            category: "Satisfaction",
            title: "Post-purchase (1-10 scale) survey",
            description: "Post-purchase satisfaction survey on 1-10 scale. Includes an intro and 2 questions.",
        },
        {
            category: "Satisfaction",
            title: "Post-purchase emojis survey",
            description: "Post-purchase satisfaction survey using emojis. Includes an intro and 2 questions.",
        },
        {
            category: "Satisfaction",
            title: "Post-event (1-10 scale) survey",
            description: "Post-event satisfaction survey on 1-10 scale. Includes an intro and 2 questions.",
        },
        {
            category: "Satisfaction",
            title: "Post-event emojis survey",
            description: "Post-event satisfaction survey using emojis. Includes an intro and 2 questions.",
        },
        {
            category: "Marketing effectiveness",
            title: "Where did you hear about us?",
            description: "A simple one question survey to assess which marketing channels are most effective for you.",
        },
        {
            category: "Growth strategy",
            title: "Growth opportunities",
            description: "A five question survey to engage customers and identify new products/services to foster growth.",
        },
    ]

    return (
        <div className="px-10 max-sm:px-3 pt-20 space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
                <h1 className="text-3xl font-bold text-gray-900">Surveys</h1>
                <Dialog open={showCreateSurveyModal} onOpenChange={setShowCreateSurveyModal}>
                    <DialogTrigger asChild>
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white">Create new survey</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle>Create a New Survey</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <h3 className="font-medium">Choose how to start:</h3>
                                <div className="space-y-2">
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <div>
                                            <div className="font-medium">Start from scratch</div>
                                            <div className="text-sm text-gray-500">Create a custom survey with your own questions</div>
                                        </div>
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <div>
                                            <div className="font-medium">Use a template</div>
                                            <div className="text-sm text-gray-500">Choose from our pre-built survey templates</div>
                                        </div>
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                                        <div>
                                            <div className="font-medium">Duplicate existing</div>
                                            <div className="text-sm text-gray-500">Copy one of your previous surveys</div>
                                        </div>
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </motion.div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-green-50 rounded-lg p-8 md:p-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Go from responses to results</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Our surveys let you target, gather, and manage customer feedback that can turn reviews and requests into
                    research-based products and services.
                </p>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative max-w-xl w-full"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <div className="mb-2 font-bold uppercase text-gray-800">TANDU</div>
                                <div className="aspect-video bg-gray-100 rounded mb-2 flex items-center justify-center">
                                    <svg viewBox="0 0 100 60" className="w-full h-full p-4">
                                        <rect x="10" y="10" width="80" height="40" rx="2" fill="#d1d5db" />
                                        <line x1="20" y1="20" x2="80" y2="20" stroke="#9ca3af" strokeWidth="2" />
                                        <line x1="20" y1="30" x2="60" y2="30" stroke="#9ca3af" strokeWidth="2" />
                                        <line x1="20" y1="40" x2="70" y2="40" stroke="#9ca3af" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
                                        ))}
                                    </div>
                                    <div className="w-16 h-4 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <div className="mb-2 font-bold uppercase text-gray-800">TANDU</div>
                                <div className="aspect-video bg-gray-100 rounded mb-2 flex items-center justify-center">
                                    <svg viewBox="0 0 100 60" className="w-full h-full p-4">
                                        <rect x="10" y="10" width="80" height="40" rx="2" fill="#d1d5db" />
                                    </svg>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="w-16 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-8 h-4 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 right-4 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Survey Templates */}
            <div className="space-y-6 px-32 max-sm:px-6">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-semibold text-gray-900"
                >
                    Start with a template
                </motion.h3>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {surveyTemplates.map((template, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full hover:shadow-md transition-shadow duration-300">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <Badge className="self-start mb-2 bg-gray-100 text-gray-700 hover:bg-gray-200">
                                        {template.category}
                                    </Badge>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{template.title}</h4>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">{template.description}</p>
                                    <Button
                                        variant="outline"
                                        className="self-start mt-2"
                                        onClick={() => setShowCreateSurveyModal(true)}
                                    >
                                        Use template
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Help Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-8 px-32 max-sm:px-6"
            >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Need some help?</h3>

                <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="w-48 h-48 relative">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <rect x="10" y="10" width="40" height="30" rx="2" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
                                <rect x="60" y="10" width="30" height="30" rx="2" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
                                <rect x="10" y="50" width="80" height="40" rx="2" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
                                <path d="M70,70 C60,50 90,50 80,70" fill="none" stroke="#9ca3af" strokeWidth="2" />
                                <circle cx="75" cy="60" r="5" fill="#d1d5db" />
                            </svg>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="text-xs text-gray-500 mb-1">Guide</div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">How to create a Survey</h4>
                        <p className="text-gray-600 mb-4">
                            Follow this guide to create a survey and collect valuable feedback from your audience.
                        </p>
                        <Dialog open={showHelpModal} onOpenChange={setShowHelpModal}>
                            <DialogTrigger asChild>
                                <Button variant="outline">Read the guide</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                                <DialogHeader>
                                    <DialogTitle>How to Create an Effective Survey</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-lg">1. Define your goals</h3>
                                        <p className="text-gray-600">
                                            Start by clearly defining what information you want to collect and how you'll use it. Having
                                            clear goals will help you create focused, effective questions.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-lg">2. Choose the right question types</h3>
                                        <p className="text-gray-600">
                                            Select from multiple choice, rating scales, open-ended questions, and more based on the type of
                                            feedback you need.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-lg">3. Keep it concise</h3>
                                        <p className="text-gray-600">
                                            Respect your audience's time by keeping surveys short and focused. Aim for 5-10 questions that
                                            directly relate to your goals.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-lg">4. Test before sending</h3>
                                        <p className="text-gray-600">
                                            Always preview and test your survey to catch any errors or confusing questions.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-lg">5. Analyze and act on results</h3>
                                        <p className="text-gray-600">
                                            Once responses come in, analyze the data and take action based on the insights you've gathered.
                                        </p>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}