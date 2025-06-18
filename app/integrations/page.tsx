"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronRight, Star, Users, ShoppingCart, Palette, BarChart3, FileText, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function DiscoverPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)

    const categories = [
        { id: "all", name: "Connect apps & integrations", count: null },
        { id: "recent", name: "Recent", count: null },
        { id: "advertising", name: "Advertising", count: 15 },
        { id: "analytics", name: "Analytics", count: 12 },
        { id: "audience-building", name: "Audience Building", count: 8 },
        { id: "automation", name: "Automation", count: 25 },
        { id: "commerce", name: "Commerce", count: 18 },
        { id: "content-management", name: "Content Management", count: 10 },
        { id: "crm", name: "Customer Relationship Management", count: 14 },
        { id: "design", name: "Design", count: 7 },
        { id: "ecommerce", name: "Ecommerce", count: 22 },
        { id: "events", name: "Events", count: 6 },
        { id: "finance", name: "Finance & Accounting", count: 9 },
        { id: "forms", name: "Forms & Surveys", count: 11 },
        { id: "health", name: "Health", count: 4 },
        { id: "marketing", name: "Marketing", count: 28 },
        { id: "productivity", name: "Productivity", count: 16 },
        { id: "sales", name: "Sales", count: 13 },
        { id: "social", name: "Social Media", count: 19 },
        { id: "support", name: "Support", count: 8 },
        { id: "website", name: "Website", count: 15 },
    ]

    const featuredIntegrations = [
        {
            id: "wix",
            name: "Wix",
            description: "Create your website with Wix",
            longDescription:
                "Build a professional website with Wix's drag-and-drop website builder. Connect your Mailchimp audience to grow your business.",
            logo: "/placeholder.svg?height=60&width=60",
            image: "/placeholder.svg?height=200&width=300",
            category: "Website",
            featured: true,
            rating: 4.5,
            installs: "50K+ installs",
            tags: ["Website Builder", "Drag & Drop", "Professional"],
        },
    ]

    const integrations = [
        {
            id: "snapchat",
            name: "Snapchat Lead Generation",
            description: "Snapchat lead generation",
            longDescription: "Generate leads directly from Snapchat ads and sync them to your Mailchimp audience.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Advertising",
            rating: 4.2,
            installs: "10K+ installs",
            tags: ["Lead Generation", "Social Media"],
        },
        {
            id: "meta",
            name: "Meta Lead Ads",
            description: "Meta Lead Ads",
            longDescription: "Automatically sync leads from Facebook and Instagram Lead Ads to your Mailchimp audience.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Advertising",
            rating: 4.6,
            installs: "100K+ installs",
            tags: ["Facebook", "Instagram", "Lead Ads"],
        },
        {
            id: "google-ads",
            name: "Google Lead Ads",
            description: "Google Lead Ads",
            longDescription: "Connect Google Lead Ads to automatically import leads into your Mailchimp audience.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Advertising",
            rating: 4.4,
            installs: "75K+ installs",
            tags: ["Google", "Lead Generation"],
        },
        {
            id: "canva",
            name: "Canva",
            description: "Create custom designs in Canva and seamlessly share them in Mailchimp using our new integration.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Design",
            rating: 4.8,
            installs: "200K+ installs",
            tags: ["Design", "Graphics", "Templates"],
        },
        {
            id: "zapier",
            name: "Zapier",
            description: "Zapier is the easiest way to connect Mailchimp with the other apps you use.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Automation",
            rating: 4.7,
            installs: "500K+ installs",
            tags: ["Automation", "Workflow", "Integration"],
        },
        {
            id: "woocommerce",
            name: "WooCommerce",
            description: "Connect your WooCommerce store to Mailchimp to sync customer data and create targeted campaigns.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Ecommerce",
            rating: 4.5,
            installs: "300K+ installs",
            tags: ["WordPress", "Ecommerce", "Store"],
        },
        {
            id: "shopify",
            name: "Shopify",
            description: "Sync Shopify customers, products, and orders to Mailchimp to create highly targeted campaigns.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Ecommerce",
            rating: 4.6,
            installs: "400K+ installs",
            tags: ["Ecommerce", "Store", "Sync"],
        },
        {
            id: "squarespace",
            name: "Squarespace Integration",
            description: "Squarespace & Mailchimp integration with beautiful forms and email marketing.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Website",
            rating: 4.3,
            installs: "80K+ installs",
            tags: ["Website", "Forms", "Design"],
        },
        {
            id: "instagram",
            name: "Instagram Content Blocks",
            description: "Show engagement with your Instagram posts by adding Instagram content blocks to your campaigns.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Social Media",
            rating: 4.4,
            installs: "150K+ installs",
            tags: ["Instagram", "Social", "Content"],
        },
        {
            id: "wordpress",
            name: "WordPress",
            description: "Easily add Mailchimp signup forms to your WordPress site with the Mailchimp block.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Website",
            rating: 4.5,
            installs: "250K+ installs",
            tags: ["WordPress", "Forms", "Website"],
        },
    ]

    const spotlightIntegrations = [
        {
            id: "quickbooks",
            name: "QuickBooks Online",
            description:
                "Sync your QuickBooks Online customer data with your Mailchimp audience to create targeted campaigns.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Finance & Accounting",
        },
        {
            id: "typeform",
            name: "Typeform",
            description: "Create beautiful, conversational forms and surveys that integrate seamlessly with Mailchimp.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Forms & Surveys",
        },
        {
            id: "shopify-spotlight",
            name: "Shopify",
            description: "Sync Shopify customers, products, and orders to create highly targeted campaigns.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Ecommerce",
        },
        {
            id: "vimeo",
            name: "Vimeo",
            description: "Add Vimeo videos directly to your Mailchimp campaigns and track engagement.",
            logo: "/placeholder.svg?height=40&width=40",
            category: "Content Management",
        },
    ]

    const popularCategories = [
        {
            id: "ecommerce-cat",
            name: "Ecommerce",
            description: "Sell your products online and sync customer data",
            icon: ShoppingCart,
            color: "bg-blue-100 text-blue-600",
            count: 22,
        },
        {
            id: "design-cat",
            name: "Design",
            description: "Create beautiful designs for your campaigns",
            icon: Palette,
            color: "bg-purple-100 text-purple-600",
            count: 7,
        },
        {
            id: "contact-cat",
            name: "Contact Management",
            description: "Manage and organize your contacts",
            icon: Users,
            color: "bg-green-100 text-green-600",
            count: 14,
        },
        {
            id: "forms-cat",
            name: "Forms & Surveys",
            description: "Collect data and feedback from your audience",
            icon: FileText,
            color: "bg-orange-100 text-orange-600",
            count: 11,
        },
    ]

    const blogPosts = [
        {
            id: "hire-expert",
            title: "Hire a Mailchimp Expert",
            description: "Get help from certified Mailchimp experts to grow your business.",
            image: "/placeholder.svg?height=150&width=200",
            category: "Expert Services",
        },
        {
            id: "about-integrations",
            title: "About Integrations",
            description: "Learn how integrations can help you connect your favorite tools with Mailchimp.",
            image: "/placeholder.svg?height=150&width=200",
            category: "Education",
        },
        {
            id: "ecommerce-marketing",
            title: "E-Commerce Marketing Strategies & Tips",
            description: "Discover proven strategies to grow your online store with email marketing.",
            image: "/placeholder.svg?height=150&width=200",
            category: "Marketing",
        },
    ]

    const filteredIntegrations = integrations.filter((integration) => {
        const matchesSearch =
            integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            integration.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory =
            selectedCategory === "all" || integration.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory
        return matchesSearch && matchesCategory
    })

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
        <div className="flex bg-gray-50 min-h-screen pt-16">
            {/* Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:block w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto"
            >
                <div className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Connect apps & integrations</h2>
                        <div className="space-y-1">
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === "all"
                                    ? "bg-gray-100 text-gray-900 font-medium"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                    }`}
                            >
                                Recent
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
                        <div className="space-y-1">
                            {categories.slice(2).map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${selectedCategory === category.id
                                        ? "bg-gray-100 text-gray-900 font-medium"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    <span>{category.name}</span>
                                    {category.count && <span className="text-xs text-gray-400">{category.count}</span>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6 pt-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <h1 className="text-2xl font-semibold text-gray-900">Discover</h1>
                        <div className="relative w-full sm:w-96">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                            <Input
                                type="search"
                                placeholder="Search for integrations and apps"
                                className="pl-10 bg-white border-gray-300"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Featured Integration */}
                {featuredIntegrations.map((integration) => (
                    <motion.div
                        key={integration.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-8"
                    >
                        <Card className="bg-white shadow-sm overflow-hidden">
                            <CardContent className="p-0">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <div className="w-8 h-8 bg-orange-500 rounded"></div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900">{integration.name}</h3>
                                                <p className="text-gray-600">{integration.description}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-6">{integration.longDescription}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {integration.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-medium">{integration.rating}</span>
                                            </div>
                                            <span className="text-sm text-gray-600">{integration.installs}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <Button className="bg-teal-600 hover:bg-teal-700 text-white">Connect</Button>
                                            <Button variant="outline">Learn more</Button>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 bg-gradient-to-br from-orange-100 to-yellow-100 p-6 lg:p-8 flex items-center justify-center">
                                        <div className="w-full max-w-sm aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-3"></div>
                                                <div className="text-sm font-medium text-gray-700">Website Preview</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}

                {/* Integration Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="mb-6">
                        <p className="text-gray-600">Bring your tools together to make the most of your data</p>
                        <p className="text-sm text-gray-500">
                            Sync contacts, collect engagement data, and track how your email does and doesn't convert.
                        </p>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {filteredIntegrations.map((integration, index) => (
                            <motion.div key={integration.id} variants={item}>
                                <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                {integration.id === "snapchat" && <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>}
                                                {integration.id === "meta" && <div className="w-6 h-6 bg-blue-600 rounded"></div>}
                                                {integration.id === "google-ads" && <div className="w-6 h-6 bg-red-500 rounded-full"></div>}
                                                {integration.id === "canva" && <div className="w-6 h-6 bg-purple-500 rounded"></div>}
                                                {integration.id === "zapier" && <div className="w-6 h-6 bg-orange-500 rounded"></div>}
                                                {integration.id === "woocommerce" && <div className="w-6 h-6 bg-purple-600 rounded"></div>}
                                                {integration.id === "shopify" && <div className="w-6 h-6 bg-green-500 rounded"></div>}
                                                {integration.id === "squarespace" && <div className="w-6 h-6 bg-black rounded"></div>}
                                                {integration.id === "instagram" && (
                                                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                                                )}
                                                {integration.id === "wordpress" && <div className="w-6 h-6 bg-blue-700 rounded"></div>}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-gray-900 mb-1 truncate">{integration.name}</h3>
                                                <p className="text-sm text-gray-600 line-clamp-3">{integration.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                <span className="text-xs text-gray-600">{integration.rating}</span>
                                            </div>
                                            <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 p-0 h-auto">
                                                Connect
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center mt-8 gap-2">
                        <Button variant="outline" size="sm" disabled>
                            1
                        </Button>
                        <Button variant="ghost" size="sm">
                            2
                        </Button>
                        <Button variant="ghost" size="sm">
                            3
                        </Button>
                        <span className="text-gray-400">...</span>
                        <Button variant="ghost" size="sm">
                            10
                        </Button>
                        <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>

                {/* Case Study Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-12"
                >
                    <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
                        <CardContent className="p-8">
                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                <div className="lg:w-2/3">
                                    <Badge className="bg-orange-100 text-orange-700 mb-4">Case Study</Badge>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        How Mailchimp & Soda Uses the Shopify Integration to Grow their Audience and Increase ROI
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        The soda store company grew the power of Mailchimp email marketing and Shopify together to grow
                                        their business and increase customer engagement.
                                    </p>
                                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">Learn more about it</Button>
                                </div>
                                <div className="lg:w-1/3">
                                    <div className="relative">
                                        <div className="w-full aspect-square bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="w-16 h-20 bg-orange-400 rounded-lg"></div>
                                                <div className="w-16 h-20 bg-red-400 rounded-lg"></div>
                                                <div className="w-16 h-20 bg-yellow-400 rounded-lg"></div>
                                                <div className="w-16 h-20 bg-green-400 rounded-lg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Integration Spotlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Integration Spotlight</h2>
                    <p className="text-gray-600 mb-6">
                        Expert-curated and data-driven tools that help you reach enhance and grow faster.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {spotlightIntegrations.map((integration, index) => (
                            <Card
                                key={integration.id}
                                className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                            {integration.id === "quickbooks" && <div className="w-6 h-6 bg-blue-600 rounded"></div>}
                                            {integration.id === "typeform" && <div className="w-6 h-6 bg-black rounded"></div>}
                                            {integration.id === "shopify-spotlight" && <div className="w-6 h-6 bg-green-500 rounded"></div>}
                                            {integration.id === "vimeo" && <div className="w-6 h-6 bg-blue-500 rounded"></div>}
                                        </div>
                                        <h3 className="font-medium text-gray-900">{integration.name}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                                    <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 h-auto text-sm">
                                        Learn more
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>

                {/* Popular Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Popular categories</h2>
                    <p className="text-gray-600 mb-6">Browse top integrated popular with our Mailchimp users.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularCategories.map((category) => (
                            <Card
                                key={category.id}
                                className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                                            <category.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{category.name}</h3>
                                            <span className="text-xs text-gray-500">{category.count} integrations</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{category.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>

                {/* Integration Tips and Inspiration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Integration tips and inspiration</h2>
                        <Link
                            href="/blog"
                            className="text-teal-600 hover:text-teal-700 flex items-center gap-1 text-sm font-medium"
                        >
                            View all articles
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <p className="text-gray-600 mb-6">Browse how-to articles with your connected tools and platforms.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <Card key={post.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                                <CardContent className="p-0">
                                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                {index === 0 && <Users className="h-12 w-12 text-gray-400 mx-auto mb-2" />}
                                                {index === 1 && <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />}
                                                {index === 2 && <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-2" />}
                                                <div className="text-xs text-gray-500">{post.category}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-medium text-gray-900 mb-2">{post.title}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                                        <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 h-auto text-sm">
                                            Read more
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}