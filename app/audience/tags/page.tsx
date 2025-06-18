"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, X, ChevronDown, ChevronLeft, ChevronRight, Info, Trash2 } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

interface Tag {
  id: string
  name: string
  createdDate: string
  contactCount: number
}

export default function TagsPage() {
  const [tags, setTags] = useState<Tag[]>([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showBulkModal, setShowBulkModal] = useState(false)
  const [showGettingStartedModal, setShowGettingStartedModal] = useState(false)
  const [newTagName, setNewTagName] = useState("")
  const [bulkTagsText, setBulkTagsText] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("date-created")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(25)
  const [showSuccessMessage, setShowSuccessMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Filter and sort tags
  const filteredTags = tags.filter(tag =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedTags = [...filteredTags].sort((a, b) => {
    switch (sortBy) {
      case "date-created":
        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      case "name":
        return a.name.localeCompare(b.name)
      case "contact-count":
        return b.contactCount - a.contactCount
      default:
        return 0
    }
  })

  // Pagination
  const totalPages = Math.ceil(sortedTags.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTags = sortedTags.slice(startIndex, startIndex + itemsPerPage)

  const handleCreateTag = async () => {
    if (!newTagName.trim()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))

    const newTag: Tag = {
      id: Date.now().toString(),
      name: newTagName.trim(),
      createdDate: new Date().toISOString(),
      contactCount: Math.floor(Math.random() * 50)
    }

    setTags(prev => [newTag, ...prev])
    setNewTagName("")
    setShowCreateModal(false)
    setIsLoading(false)

    // Show success message
    setShowSuccessMessage(`Successfully created your new tag "${newTag.name}"`)
    setTimeout(() => setShowSuccessMessage(null), 5000)
  }

  const handleBulkCreate = async () => {
    if (!bulkTagsText.trim()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))

    const tagNames = bulkTagsText
      .split('\n')
      .map(name => name.trim())
      .filter(name => name.length > 0)

    const newTags: Tag[] = tagNames.map(name => ({
      id: Date.now().toString() + Math.random(),
      name,
      createdDate: new Date().toISOString(),
      contactCount: Math.floor(Math.random() * 50)
    }))

    setTags(prev => [...newTags, ...prev])
    setBulkTagsText("")
    setShowBulkModal(false)
    setIsLoading(false)

    // Show success message
    setShowSuccessMessage(`Successfully created ${newTags.length} new tags`)
    setTimeout(() => setShowSuccessMessage(null), 5000)
  }

  const handleDeleteSelected = () => {
    setTags(prev => prev.filter(tag => !selectedTags.includes(tag.id)))
    setSelectedTags([])
    setShowSuccessMessage(`Successfully deleted ${selectedTags.length} tags`)
    setTimeout(() => setShowSuccessMessage(null), 5000)
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTags(paginatedTags.map(tag => tag.id))
    } else {
      setSelectedTags([])
    }
  }

  const handleSelectTag = (tagId: string, checked: boolean) => {
    if (checked) {
      setSelectedTags(prev => [...prev, tagId])
    } else {
      setSelectedTags(prev => prev.filter(id => id !== tagId))
    }
  }

  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center justify-center min-h-[500px] gap-8 lg:gap-16"
    >
      <div className="flex-1 max-w-md text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Create your first tag
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Tags are static labels you apply to contacts to organize them. (Example: VIPs.) Use tags to personalize your
          marketing based on criteria you define.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={() => setShowCreateModal(true)}
          >
            Create tag
          </Button>
          <div>
            <Button
              variant="ghost"
              className="text-teal-600 hover:text-teal-700 flex items-center gap-2 p-0"
              onClick={() => setShowGettingStartedModal(true)}
            >
              <Info className="h-4 w-4" />
              Getting started with tags
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex-1 max-w-md"
      >
        <div className="relative">
          {/* Profile pictures with tag illustration */}
          <div className="relative w-80 h-80 mx-auto">
            {/* Background circles and connecting lines */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 320 320" className="w-full h-full">
                <defs>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.1" />
                  </filter>
                </defs>

                {/* Connecting lines */}
                <line x1="160" y1="80" x2="160" y2="160" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="160" y1="160" x2="240" y2="160" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="160" y1="160" x2="80" y2="240" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="160" y1="160" x2="240" y2="240" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* Profile pictures */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-400 shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
              className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-400 shadow-lg"
            />

            {/* Central tag icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            </motion.div>

            {/* Numbers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.3 }}
              className="absolute top-1/2 right-8 transform translate-x-full -translate-y-1/2 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">42</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">21</span>
                <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">12</span>
                <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">30</span>
                <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  const PopulatedState = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Search and Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="search"
            placeholder="Search tags"
            className="pl-10 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Table Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <Checkbox
            checked={selectedTags.length === paginatedTags.length && paginatedTags.length > 0}
            onCheckedChange={handleSelectAll}
          />
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-created">Date created</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="contact-count">Contact count</SelectItem>
              </SelectContent>
            </Select>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
          {selectedTags.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700"
              onClick={handleDeleteSelected}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete ({selectedTags.length})
            </Button>
          )}
        </div>
      </div>

      {/* Tags Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3"></th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Tag Name</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Created date</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Contacts</th>
                <th className="w-24 px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <AnimatePresence>
                {paginatedTags.map((tag, index) => (
                  <motion.tr
                    key={tag.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-4 py-4">
                      <Checkbox
                        checked={selectedTags.includes(tag.id)}
                        onCheckedChange={(checked) => handleSelectTag(tag.id, checked as boolean)}
                      />
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-medium text-gray-900">{tag.name}</div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-600">
                        {new Date(tag.createdDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-900">{tag.contactCount}</div>
                    </td>
                    <td className="px-4 py-4">
                      <Select>
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="View" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="view">View</SelectItem>
                          <SelectItem value="edit">Edit</SelectItem>
                          <SelectItem value="delete">Delete</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-600">
            {startIndex + 1} of {sortedTags.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="px-12 max-sm:px-4 pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">Tags</h1>
        <div className="flex items-center gap-3">
          <Dialog open={showBulkModal} onOpenChange={setShowBulkModal}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-gray-300 text-gray-700">
                Bulk tag
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Multiple Tags</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Enter tag names (one per line)
                  </label>
                  <textarea
                    className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="VIP Customer&#10;Newsletter Subscriber&#10;Event Attendee"
                    value={bulkTagsText}
                    onChange={(e) => setBulkTagsText(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={handleBulkCreate}
                    disabled={!bulkTagsText.trim() || isLoading}
                    className="bg-teal-600 hover:bg-teal-700 text-white flex-1"
                  >
                    {isLoading ? "Creating..." : "Create Tags"}
                  </Button>
                  <Button variant="outline" onClick={() => setShowBulkModal(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Create new tag
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Tag</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Tag name</label>
                  <Input
                    placeholder="Enter tag name"
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCreateTag()}
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={handleCreateTag}
                    disabled={!newTagName.trim() || isLoading}
                    className="bg-teal-600 hover:bg-teal-700 text-white flex-1"
                  >
                    {isLoading ? "Creating..." : "Create Tag"}
                  </Button>
                  <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {tags.length === 0 ? (
          <EmptyState key="empty" />
        ) : (
          <PopulatedState key="populated" />
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
              <span>{showSuccessMessage}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-gray-700"
                onClick={() => setShowSuccessMessage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Getting Started Modal */}
      <Dialog open={showGettingStartedModal} onOpenChange={setShowGettingStartedModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Getting Started with Tags</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              Tags are a powerful way to organize and segment your contacts. Here's how to make the most of them:
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-900">What are tags?</h4>
                <p className="text-sm text-gray-600">
                  Tags are labels you can apply to contacts to group them by any criteria you choose.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">How to use tags effectively</h4>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>Use descriptive names like "VIP Customer" or "Newsletter Subscriber"</li>
                  <li>Create tags for different customer segments or interests</li>
                  <li>Use tags to personalize your email campaigns</li>
                  <li>Combine multiple tags for advanced targeting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Best practices</h4>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  <li>Keep tag names consistent and clear</li>
                  <li>Don't create too many similar tags</li>
                  <li>Review and clean up unused tags regularly</li>
                  <li>Use tags alongside segments for powerful targeting</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}