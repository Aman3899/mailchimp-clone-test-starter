"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Filter, SlidersHorizontal, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMobile } from "@/hooks/use-mobile"

export default function ContactsPage() {
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const isMobile = useMobile()

  const contacts = [
    {
      id: "1",
      email: "warhawk0047@gmail.com",
      firstName: "Steve",
      lastName: "hawk",
      address: {
        street: "243 Sof",
        city: "S Golra",
        state: "Golra 45200",
        country: "Pakistan",
        usa: "USA",
      },
      phone: "",
      birthday: "",
      company: "",
      tags: [],
      emailMarketing: "Subscribed",
      source: "Admin Add",
      rating: 3,
      dateAdded: "5/19/25 3:03PM",
    },
  ]

  const handleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(contacts.map((contact) => contact.id))
    }
  }

  const handleSelectContact = (id: string) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter((contactId) => contactId !== id))
    } else {
      setSelectedContacts([...selectedContacts, id])
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold md:text-2xl">Contacts</h1>
          <div className="mt-1 inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs">
            Audience: hawkerzzz
          </div>
        </div>
        <Button>Add contacts</Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="w-full max-w-none grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="manage" className="flex items-center gap-1">
              Manage <span className="hidden md:inline">audience</span> <ChevronDown className="h-3 w-3" />
            </TabsTrigger>
            <TabsTrigger value="add" className="flex items-center gap-1">
              Add <span className="hidden md:inline">contacts</span> <ChevronDown className="h-3 w-3" />
            </TabsTrigger>
            <TabsTrigger value="subscriber" className="hidden md:flex">
              Subscriber preferences
            </TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview" className="mt-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Segments <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>New segment</DropdownMenuItem>
                  <DropdownMenuItem>Manage segments</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Status <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Subscribed</DropdownMenuItem>
                  <DropdownMenuItem>Unsubscribed</DropdownMenuItem>
                  <DropdownMenuItem>Pending</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {!isMobile && (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        Tags <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Manage tags</DropdownMenuItem>
                      <DropdownMenuItem>Create new tag</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        Signup source <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>API</DropdownMenuItem>
                      <DropdownMenuItem>Admin</DropdownMenuItem>
                      <DropdownMenuItem>Import</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}

              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <SlidersHorizontal className="h-4 w-4" /> <span className="hidden sm:inline">Advanced</span> filters
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">1 total contact. 1 email subscriber.</div>

            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <div></div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" /> Columns
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  Export audience
                </Button>
              </div>
            </div>

            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="w-[40px] px-4 py-3">
                        <Checkbox
                          checked={selectedContacts.length === contacts.length && contacts.length > 0}
                          onCheckedChange={handleSelectAll}
                        />
                      </th>
                      <th className="w-[40px] px-2 py-3 hidden sm:table-cell"></th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium hidden md:table-cell">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium hidden lg:table-cell">Address</th>
                      <th className="px-4 py-3 text-left text-sm font-medium hidden lg:table-cell">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium hidden xl:table-cell">Rating</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Date Added</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id} className="border-b">
                        <td className="px-4 py-3">
                          <Checkbox
                            checked={selectedContacts.includes(contact.id)}
                            onCheckedChange={() => handleSelectContact(contact.id)}
                          />
                        </td>
                        <td className="px-2 py-3 hidden sm:table-cell"></td>
                        <td className="px-4 py-3 text-sm">
                          <Link href="#" className="text-teal-600 dark:text-teal-400 hover:underline">
                            {contact.email}
                          </Link>
                          <div className="md:hidden mt-1">
                            <div>
                              {contact.firstName} {contact.lastName}
                            </div>
                            <span className="rounded-full bg-green-100 dark:bg-green-900 px-2 py-1 text-xs text-green-800 dark:text-green-100">
                              {contact.emailMarketing}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm hidden md:table-cell">
                          {contact.firstName} {contact.lastName}
                        </td>
                        <td className="px-4 py-3 text-sm hidden lg:table-cell">
                          <div className="flex flex-col">
                            <span>{contact.address.street}</span>
                            <span>{contact.address.city}</span>
                            <span>{contact.address.state}</span>
                            <span>{contact.address.country}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm hidden lg:table-cell">
                          <span className="rounded-full bg-green-100 dark:bg-green-900 px-2 py-1 text-xs text-green-800 dark:text-green-100">
                            {contact.emailMarketing}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm hidden xl:table-cell">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < contact.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-300 dark:text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">{contact.dateAdded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
