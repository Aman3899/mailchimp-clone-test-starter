"use client"

import { useState } from "react"
import { ChevronDown, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useMobile } from "@/hooks/use-mobile"

export default function TagsPage() {
  const [isCreateTagOpen, setIsCreateTagOpen] = useState(false)
  const [newTagName, setNewTagName] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const isMobile = useMobile()

  const tags = [
    { id: "1", name: "asfda", createdDate: "May 19, 2025" },
    { id: "2", name: "ddgbgdfbgdf", createdDate: "May 19, 2025" },
  ]

  const handleSelectAll = () => {
    if (selectedTags.length === tags.length) {
      setSelectedTags([])
    } else {
      setSelectedTags(tags.map((tag) => tag.id))
    }
  }

  const handleSelectTag = (id: string) => {
    if (selectedTags.includes(id)) {
      setSelectedTags(selectedTags.filter((tagId) => tagId !== id))
    } else {
      setSelectedTags([...selectedTags, id])
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Tags</h1>
          <div className="mt-1 inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs">
            Audience: hawkerzzz
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Bulk tag
          </Button>
          <Button size="sm" onClick={() => setIsCreateTagOpen(true)}>
            Create new tag
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search tags" className="pl-10 pr-4" />
        <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={selectedTags.length === tags.length && tags.length > 0}
            onCheckedChange={handleSelectAll}
          />
          <div className="flex items-center gap-1 text-sm">
            Sort by:
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              Date created <ChevronDown className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <Button variant="outline" size="sm" disabled={selectedTags.length === 0}>
          Delete
        </Button>
      </div>

      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="sr-only">
              <tr>
                <th>Select</th>
                <th>Tag Name</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tags.map((tag) => (
                <tr key={tag.id} className="border-b">
                  <td className="w-[40px] px-4 py-4">
                    <Checkbox checked={selectedTags.includes(tag.id)} onCheckedChange={() => handleSelectTag(tag.id)} />
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-medium">{tag.name}</span>
                  </td>
                  <td className="px-4 py-4 text-sm text-muted-foreground">
                    <span className="hidden sm:inline">Created date</span>
                    <div>{tag.createdDate}</div>
                  </td>
                  <td className="px-4 py-4">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={isCreateTagOpen} onOpenChange={setIsCreateTagOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>What should we name this tag?</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <label className="mb-2 block text-sm font-medium">Tag name</label>
            <Input value={newTagName} onChange={(e) => setNewTagName(e.target.value)} placeholder="Enter tag name" />
            <p className="mt-2 text-xs text-muted-foreground">Examples: Conference Lead, Influencer, or Donor</p>
          </div>
          <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button variant="outline" onClick={() => setIsCreateTagOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                // Handle tag creation
                setIsCreateTagOpen(false)
                setNewTagName("")
              }}
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
