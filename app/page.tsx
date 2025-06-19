"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChevronDown, ChevronLeft, ChevronRight, Mail, Zap, ArrowRight,
  Percent, FileText, Gift, UserPlus, Link2, Image, Users, CogIcon, Palette
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0)
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0)

  interface SetupTask {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    time?: string;
  }


  const setupTasks = [
    {
      id: 1,
      icon: <Users />,
      title: "Add your contacts",
      description: "Upload your list of subscribers or import them from another app.",
      time: "4 min",
    },
    {
      id: 2,
      icon: <CogIcon />,
      title: "Connect an integration",
      description: "Leverage data to create more automated, personalized omni-channel marketing communications.",
      time: "2 min",
    },
    {
      id: 3,
      icon: <Palette />,
      title: "Import your brand",
      description: "We’ll create email designs using your fonts, logos, colors and images.",
      time: "2 seconds",
    },
    {
      id: 4,
      icon: <UserPlus className="text-gray-500" />,
      title: "Additional Task",
      description: "This is an additional task for setup completion.",
      time: "3 min",
    },
  ];

  const emailTemplates = [
    {
      id: 1,
      title: "Custom email designs",
      type: "Made for you",
      category: "Email",
      image: "/placeholder.svg?height=300&width=200",
      description: "Professional designs tailored to your brand",
    },
    {
      id: 2,
      title: "Real estate invite",
      type: "Email",
      category: "Email",
      image: "/placeholder.svg?height=300&width=200",
      description: "Perfect for real estate professionals",
    },
    {
      id: 3,
      title: "Welcome new contacts",
      type: "Automation",
      category: "Automation",
      image: "/placeholder.svg?height=300&width=200",
      description: "Automated welcome series for new subscribers",
    },
    {
      id: 4,
      title: "Bold",
      type: "Email",
      category: "Email",
      image: "/placeholder.svg?height=300&width=200",
      description: "Eye-catching bold design template",
    },
    {
      id: 5,
      title: "Start from scratch",
      type: "Email",
      category: "Email",
      image: "/placeholder.svg?height=300&width=200",
      description: "Create your own unique design",
    },
  ]

  const popupForms = [
    {
      id: 1,
      title: "Discount popup",
      description: "Offer a discount to new subscribers",
      image: "/placeholder.svg?height=200&width=300",
      action: "See discount templates",
    },
    {
      id: 2,
      title: "Newsletter popup",
      description: "Stay in the know",
      image: "/placeholder.svg?height=200&width=300",
      action: "See newsletter templates",
    },
    {
      id: 3,
      title: "Free content popup",
      description: "Download an e-book or guide",
      image: "/placeholder.svg?height=200&width=300",
      action: "See free content templates",
    },
  ]

  const templatesPerPage = 4
  const totalTemplatePages = Math.ceil(emailTemplates.length / templatesPerPage)

  const nextTemplates = () => {
    setCurrentTemplateIndex((prev) => (prev + 1) % totalTemplatePages)
  }

  const prevTemplates = () => {
    setCurrentTemplateIndex((prev) => (prev - 1 + totalTemplatePages) % totalTemplatePages)
  }

  const getCurrentTemplates = () => {
    const start = currentTemplateIndex * templatesPerPage
    return emailTemplates.slice(start, start + templatesPerPage)
  }

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTasks = 3;

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(setupTasks.length - visibleTasks, prev + 1)
    );
  };

  const completedTasks = 0;
  const progress = (completedTasks / setupTasks.length) * 100;


  return (
    <div className="px-20 max-sm:px-4 pt-14 bg-gray-50 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed right-0 left-[17vw] max-sm:left-0 z-10 bg-white shadow-md px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl py-4 flex flex-col max-sm:flex-row sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-900 md:text-2xl max-sm:text-xl">
            Home
          </h1>
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 max-sm:px-3 max-sm:text-sm"
                >
                  Quick actions <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Create campaign</DropdownMenuItem>
                <DropdownMenuItem>Import contacts</DropdownMenuItem>
                <DropdownMenuItem>Create signup form</DropdownMenuItem>
                <DropdownMenuItem>View reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 transition-colors duration-200 max-sm:text-sm max-sm:px-3"
            >
              Create email
            </Button>
          </div>
        </div>
      </motion.div>


      {/* Account Setup Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8 mt-20"
      >
        <Card className="bg-gray-50 border-none">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Section */}
              <div className="lg:w-1/4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Finish setting up your account
                </h2>
                <div className="text-2xl font-bold text-gray-900 mb-1">0%</div>
                <div className="text-sm text-gray-600 mb-4">
                  {completedTasks} of {setupTasks.length} tasks completed
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Right Section */}
              <div className="lg:w-3/4">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                    >
                      {setupTasks
                        .slice(currentIndex, currentIndex + visibleTasks)
                        .map((task) => (
                          <motion.div key={task.id} className="h-full">
                            <Card className="h-full hover:shadow-md transition-shadow duration-200 cursor-pointer bg-white rounded-lg">
                              <CardContent className="p-4 flex items-start gap-3">
                                <div className="text-2xl text-gray-700 mt-1">{task.icon}</div>
                                <div className="flex-1">
                                  <h3 className="font-medium text-teal-700 mb-1">
                                    {task.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {task.description}
                                  </p>
                                  {task.time && (
                                    <div className="text-xs text-gray-500 mt-2">
                                      {task.time}
                                    </div>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-end mt-4 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePrevious}
                      disabled={currentIndex === 0}
                      className="border-gray-300 text-gray-700"
                    >
                      &lt;
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleNext}
                      disabled={currentIndex + visibleTasks >= setupTasks.length}
                      className="border-gray-300 text-gray-700"
                    >
                      &gt;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Email Templates Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-8 bg-white shadow-sm p-6 rounded-lg border-2"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Top templates for Amanullah</h2>
          <Link
            href="/templates"
            className="text-teal-600 hover:text-teal-700 flex items-center gap-1 text-sm font-medium"
          >
            View all email templates
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTemplateIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {getCurrentTemplates().map((template, index) => (
                <Card key={template.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] bg-gray-100 rounded-t-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white rounded-lg shadow-sm mx-auto mb-2 flex items-center justify-center">
                            {template.category === "Email" ? (
                              <Mail className="h-8 w-8 text-gray-400" />
                            ) : (
                              <Zap className="h-8 w-8 text-gray-400" />
                            )}
                          </div>
                          <div className="text-xs text-gray-500">{template.title}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {template.type === "Made for you" ? (
                          <Badge className="bg-blue-100 text-blue-700 text-xs">Made for you</Badge>
                        ) : template.category === "Email" ? (
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Mail className="h-3 w-3" />
                            Email
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Zap className="h-3 w-3" />
                            Automation
                          </div>
                        )}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">{template.title}</h3>
                      {template.id === emailTemplates.length && (
                        <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 h-auto text-sm">
                          Start from scratch
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTemplates}
              disabled={currentTemplateIndex === 0}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {currentTemplateIndex + 1} of {totalTemplatePages}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTemplates}
              disabled={currentTemplateIndex === totalTemplatePages - 1}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Popup Forms Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-8 bg-white shadow-sm p-6 rounded-lg border-2"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-gray-900">Grow your audience with custom popup forms</h2>
            <Badge className="bg-purple-100 text-purple-700">Beta</Badge>
          </div>
          <Link
            href="/forms/popup"
            className="text-teal-600 hover:text-teal-700 flex items-center gap-1 text-sm font-medium"
          >
            View all popup forms
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="text-gray-600 mb-6">
          Popups with incentives convert best. Choose the incentive you want to offer people who sign up through your
          form.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {popupForms.map((popup, index) => (
            <motion.div key={popup.id} variants={item}>
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white rounded-lg shadow-sm mx-auto mb-3 flex items-center justify-center">
                          {index === 0 && <Percent className="h-10 w-10 text-orange-500" />}
                          {index === 1 && <Mail className="h-10 w-10 text-blue-500" />}
                          {index === 2 && <Gift className="h-10 w-10 text-green-500" />}
                        </div>
                        <div className="text-sm font-medium text-gray-700">{popup.title}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {index === 0 && <Percent className="h-4 w-4 text-gray-600" />}
                      {index === 1 && <Zap className="h-4 w-4 text-gray-600" />}
                      {index === 2 && <FileText className="h-4 w-4 text-gray-600" />}
                      <h3 className="font-medium text-gray-900">{popup.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{popup.description}</p>
                    <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 h-auto text-sm">
                      {popup.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}