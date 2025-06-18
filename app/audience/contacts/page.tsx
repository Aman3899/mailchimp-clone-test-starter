"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Search, ChevronDown, Filter, Settings, Download, BarChart3, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Contact {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  birthday: string;
  company: string;
  tags: string[];
  subscriptionStatus: "subscribed" | "unsubscribed" | "non-subscribed" | "cleaned";
  signupSource: string;
  dateAdded: string;
}

interface FilterState {
  segments: string[];
  subscriptionStatus: string[];
  tags: string[];
  signupSource: string[];
}

interface ColumnVisibility {
  email: boolean;
  firstName: boolean;
  lastName: boolean;
  address: boolean;
  phoneNumber: boolean;
  birthday: boolean;
  company: boolean;
  tags: boolean;
  subscriptionStatus: boolean;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      email: "m.amanullah0830@gmail.com",
      firstName: "Aman",
      lastName: "Ullah",
      address: "Mohallah Insariyan, Chiniot",
      phoneNumber: "+92 300 1234567",
      birthday: "2004-01-10",
      company: "Tech",
      tags: ["VIP", "Newsletter"],
      subscriptionStatus: "subscribed",
      signupSource: "Website",
      dateAdded: "2025-06-18",
    },
  ]);

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showColumnSettings, setShowColumnSettings] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const [filters, setFilters] = useState<FilterState>({
    segments: [],
    subscriptionStatus: [],
    tags: [],
    signupSource: [],
  });

  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>({
    email: true,
    firstName: true,
    lastName: true,
    address: true,
    phoneNumber: true,
    birthday: true,
    company: true,
    tags: true,
    subscriptionStatus: true,
  });

  const [segmentSearch, setSegmentSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");
  const [signupSourceSearch, setSignupSourceSearch] = useState("");

  // Sample data
  const availableSegments = ["New Subscribers", "VIP Customers", "Engaged Users", "Inactive Users"];
  const availableTags = ["VIP", "Newsletter", "Customer", "Lead", "Event Attendee"];
  const availableSignupSources = ["Website", "Admin", "Import", "API", "Social Media"];

  const subscriptionStatusOptions = [
    { value: "subscribed", label: "Email subscribed" },
    { value: "unsubscribed", label: "Email unsubscribed" },
    { value: "non-subscribed", label: "Email non-subscribed" },
    { value: "cleaned", label: "Email cleaned" },
  ];

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSubscriptionStatus =
      filters.subscriptionStatus.length === 0 || filters.subscriptionStatus.includes(contact.subscriptionStatus);

    const matchesTags = filters.tags.length === 0 || filters.tags.some((tag) => contact.tags.includes(tag));

    const matchesSignupSource = filters.signupSource.length === 0 || filters.signupSource.includes(contact.signupSource);

    return matchesSearch && matchesSubscriptionStatus && matchesTags && matchesSignupSource;
  });

  const handleFilterChange = (filterType: keyof FilterState, value: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: checked ? [...prev[filterType], value] : prev[filterType].filter((item) => item !== value),
    }));
  };

  const handleColumnToggle = (column: keyof ColumnVisibility) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedContacts(checked ? filteredContacts.map((contact) => contact.id) : []);
  };

  const handleSelectContact = (contactId: string, checked: boolean) => {
    setSelectedContacts((prev) => (checked ? [...prev, contactId] : prev.filter((id) => id !== contactId)));
  };

  const exportData = (format: "csv" | "json") => {
    const data = filteredContacts.map((contact) => ({
      Email: contact.email,
      "First Name": contact.firstName,
      "Last Name": contact.lastName,
      Address: contact.address,
      "Phone Number": contact.phoneNumber,
      Birthday: contact.birthday,
      Company: contact.company,
      Tags: contact.tags.join(", "),
      "Subscription Status": contact.subscriptionStatus,
      "Signup Source": contact.signupSource,
    }));

    if (format === "csv") {
      const headers = Object.keys(data[0] || {});
      const csvContent = [
        headers.join(","),
        ...data.map((row) => headers.map((header) => `"${row[header as keyof typeof row]}"`).join(",")),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "contacts.csv";
      a.click();
    } else {
      const jsonContent = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonContent], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "contacts.json";
      a.click();
    }

    setShowExportModal(false);
  };

  const AdvancedFiltersModal = () => (
    <Dialog open={showAdvancedFilters} onOpenChange={setShowAdvancedFilters}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Segment builder
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowAdvancedFilters(false)}>
                Cancel
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setShowAdvancedFilters(false)}>
                Apply filters
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Filter contacts for Amanullah</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Segment Filters</span>
            </div>

            {/* Segments Filter */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Segments</h4>
                <Link href="/audience/segments" className="text-teal-600 hover:text-teal-700 text-sm">
                  Manage Segments
                </Link>
              </div>
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Search segments..."
                  className="pl-10"
                  value={segmentSearch}
                  onChange={(e) => setSegmentSearch(e.target.value)}
                />
              </div>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {availableSegments
                  .filter((segment) => segment.toLowerCase().includes(segmentSearch.toLowerCase()))
                  .map((segment) => (
                    <div key={segment} className="flex items-center space-x-2">
                      <Checkbox
                        id={`segment-${segment}`}
                        checked={filters.segments.includes(segment)}
                        onCheckedChange={(checked) => handleFilterChange("segments", segment, checked as boolean)}
                      />
                      <label htmlFor={`segment-${segment}`} className="text-sm">
                        {segment}
                      </label>
                    </div>
                  ))}
              </div>
            </div>

            {/* Subscription Status Filter */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Subscription Status</h4>
              <div className="space-y-2">
                {subscriptionStatusOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`status-${option.value}`}
                      checked={filters.subscriptionStatus.includes(option.value)}
                      onCheckedChange={(checked) =>
                        handleFilterChange("subscriptionStatus", option.value, checked as boolean)
                      }
                    />
                    <label htmlFor={`status-${option.value}`} className="text-sm">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Tags</h4>
                <Link href="/audience/tags" className="text-teal-600 hover:text-teal-700 text-sm">
                  Manage Tags
                </Link>
              </div>
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Search tags..."
                  className="pl-10"
                  value={tagSearch}
                  onChange={(e) => setTagSearch(e.target.value)}
                />
              </div>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {availableTags
                  .filter((tag) => tag.toLowerCase().includes(tagSearch.toLowerCase()))
                  .map((tag) => (
                    <div key={tag} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tag-${tag}`}
                        checked={filters.tags.includes(tag)}
                        onCheckedChange={(checked) => handleFilterChange("tags", tag, checked as boolean)}
                      />
                      <label htmlFor={`tag-${tag}`} className="text-sm">
                        {tag}
                      </label>
                    </div>
                  ))}
              </div>
            </div>

            {/* Signup Source Filter */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Signup Source</h4>
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Search signup sources..."
                  className="pl-10"
                  value={signupSourceSearch}
                  onChange={(e) => setSignupSourceSearch(e.target.value)}
                />
              </div>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {availableSignupSources
                  .filter((source) => source.toLowerCase().includes(signupSourceSearch.toLowerCase()))
                  .map((source) => (
                    <div key={source} className="flex items-center space-x-2">
                      <Checkbox
                        id={`source-${source}`}
                        checked={filters.signupSource.includes(source)}
                        onCheckedChange={(checked) => handleFilterChange("signupSource", source, checked as boolean)}
                      />
                      <label htmlFor={`source-${source}`} className="text-sm">
                        {source}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="px-4 pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
      >
        <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-gray-300 text-gray-700">
                More options <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Import contacts</DropdownMenuItem>
              <DropdownMenuItem>Export contacts</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Bulk actions</DropdownMenuItem>
              <DropdownMenuItem>Manage preferences</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Add contacts <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Add a contact</DropdownMenuItem>
              <DropdownMenuItem>Import contacts</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Create signup form</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 mb-4"
      >
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Segments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All segments</SelectItem>
            {availableSegments.map((segment) => (
              <SelectItem key={segment} value={segment}>
                {segment}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Subscription status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {subscriptionStatusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Tags" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All tags</SelectItem>
            {availableTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Signup source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All sources</SelectItem>
            {availableSignupSources.map((source) => (
              <SelectItem key={source} value={source}>
                {source}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
          onClick={() => setShowAdvancedFilters(true)}
        >
          <Filter className="h-4 w-4" />
          Advanced filters
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
      >
        <div className="text-gray-600">
          <span className="font-medium text-teal-600">{filteredContacts.length}</span> total contact
          {filteredContacts.length !== 1 ? "s" : ""}. <span className="font-medium text-teal-600">1</span> email
          subscriber.
        </div>
        <Button
          variant="ghost"
          className="text-teal-600 hover:text-teal-700"
          onClick={() => setShowAnalyticsModal(true)}
        >
          See audience analytics
        </Button>
      </motion.div>

      {/* Search and Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="search"
            placeholder="Search contacts"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowColumnSettings(true)}>
            <Settings className="h-4 w-4" />
            Columns
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowExportModal(true)}>
            <Download className="h-4 w-4" />
            Export audience
          </Button>
        </div>
      </motion.div>

      {/* Contacts Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
      >
        <div className="overflow-auto max-h-[60vh]">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="w-12 px-4 py-3">
                  <Checkbox
                    checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </th>
                {columnVisibility.email && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Email Address</th>
                )}
                {columnVisibility.firstName && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">First Name</th>
                )}
                {columnVisibility.lastName && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Last Name</th>
                )}
                {columnVisibility.address && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Address</th>
                )}
                {columnVisibility.phoneNumber && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Phone Number</th>
                )}
                {columnVisibility.birthday && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Birthday</th>
                )}
                {columnVisibility.company && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Company</th>
                )}
                {columnVisibility.tags && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Tags</th>
                )}
                {columnVisibility.subscriptionStatus && (
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-900">Status</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <AnimatePresence>
                {filteredContacts.map((contact, index) => (
                  <motion.tr
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-4 py-4">
                      <Checkbox
                        checked={selectedContacts.includes(contact.id)}
                        onCheckedChange={(checked) => handleSelectContact(contact.id, checked as boolean)}
                      />
                    </td>
                    {columnVisibility.email && (
                      <td className="px-4 py-4">
                        <div className="text-teal-600 hover:text-teal-700 cursor-pointer">{contact.email}</div>
                      </td>
                    )}
                    {columnVisibility.firstName && (
                      <td className="px-4 py-4">
                        <div className="text-gray-900">{contact.firstName}</div>
                      </td>
                    )}
                    {columnVisibility.lastName && (
                      <td className="px-4 py-4">
                        <div className="text-gray-900">{contact.lastName}</div>
                      </td>
                    )}
                    {columnVisibility.address && (
                      <td className="px-4 py-4">
                        <div className="text-gray-600 text-sm max-w-xs truncate">{contact.address}</div>
                      </td>
                    )}
                    {columnVisibility.phoneNumber && (
                      <td className="px-4 py-4">
                        <div className="text-gray-900">{contact.phoneNumber}</div>
                      </td>
                    )}
                    {columnVisibility.birthday && (
                      <td className="px-4 py-4">
                        <div className="text-gray-900">{contact.birthday}</div>
                      </td>
                    )}
                    {columnVisibility.company && (
                      <td className="px-4 py-4">
                        <div className="text-gray-900">{contact.company}</div>
                      </td>
                    )}
                    {columnVisibility.tags && (
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1">
                          {contact.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    )}
                    {columnVisibility.subscriptionStatus && (
                      <td className="px-4 py-4">
                        <Badge
                          variant={contact.subscriptionStatus === "subscribed" ? "default" : "secondary"}
                          className={
                            contact.subscriptionStatus === "subscribed"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }
                        >
                          {contact.subscriptionStatus === "subscribed" ? "Subscribed" : "Unsubscribed"}
                        </Badge>
                      </td>
                    )}
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Advanced Filters Modal */}
      <AdvancedFiltersModal />

      {/* Column Settings Modal */}
      <Dialog open={showColumnSettings} onOpenChange={setShowColumnSettings}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Column Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Choose which columns to display in the contacts table.</p>
            <div className="space-y-3">
              {Object.entries(columnVisibility).map(([column, visible]) => (
                <div key={column} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {visible ? (
                      <Eye className="h-4 w-4 text-green-600" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    )}
                    <span className="capitalize">{column.replace(/([A-Z])/g, " $1").trim()}</span>
                  </div>
                  <Checkbox
                    checked={visible}
                    onCheckedChange={() => handleColumnToggle(column as keyof ColumnVisibility)}
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Export Modal */}
      <Dialog open={showExportModal} onOpenChange={setShowExportModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export Audience</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Export {filteredContacts.length} contact{filteredContacts.length !== 1 ? "s" : ""} in your preferred
              format.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Select Format:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center"
                    onClick={() => exportData("csv")}
                  >
                    <div className="text-lg font-bold">CSV</div>
                    <div className="text-xs text-gray-500">Comma-separated values</div>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center"
                    onClick={() => exportData("json")}
                  >
                    <div className="text-lg font-bold">JSON</div>
                    <div className="text-xs text-gray-500">JavaScript Object Notation</div>
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-medium text-sm mb-2">Preview (CSV format):</h5>
                <pre className="text-xs text-gray-600 overflow-x-auto">
                  {`Email,First Name,Last Name,Company
m.amanullah0830@gmail.com,Aman,Ullah,Tech Solutions`}
                </pre>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Analytics Modal */}
      <Dialog open={showAnalyticsModal} onOpenChange={setShowAnalyticsModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Audience Analytics
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">1</div>
                <div className="text-sm text-blue-800">Total Contacts</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">1</div>
                <div className="text-sm text-green-800">Subscribed</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">0</div>
                <div className="text-sm text-orange-800">Unsubscribed</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-purple-800">Engagement Rate</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Signup Sources</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Website</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-full bg-teal-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Top Tags</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-100 text-teal-700">VIP (1)</Badge>
                <Badge className="bg-blue-100 text-blue-700">Newsletter (1)</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Recent Activity</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• 1 contact added today</div>
                <div>• 0 unsubscribes this week</div>
                <div>• 1 active subscriber</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}