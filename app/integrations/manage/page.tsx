"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, Info } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

export default function ConnectionsPage() {
    const integrationLogos = [
        { id: "quickbooks", name: "QuickBooks", color: "bg-blue-600" },
        { id: "woocommerce", name: "WooCommerce", color: "bg-purple-600" },
        { id: "canva", name: "Canva", color: "bg-purple-500" },
        { id: "zapier", name: "Zapier", color: "bg-orange-500" },
        { id: "microsoft", name: "Microsoft", color: "bg-blue-500" },
        { id: "wix", name: "Wix", color: "bg-black" },
        { id: "instagram", name: "Instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { id: "stripe", name: "Stripe", color: "bg-blue-600" },
        { id: "facebook", name: "Facebook", color: "bg-blue-600" },
        { id: "linkedin", name: "LinkedIn", color: "bg-blue-700" },
        { id: "wordpress", name: "WordPress", color: "bg-blue-700" },
        { id: "photoshop", name: "Photoshop", color: "bg-blue-800" },
    ]

    const recommendations = [
        {
            id: "canva",
            name: "Canva",
            description: "Connect your Canva account",
            logo: "bg-purple-500",
            buttonText: "Connect to Canva",
        },
        {
            id: "squarespace",
            name: "Squarespace Commerce",
            description: "Connect your Squarespace Commerce account",
            logo: "bg-black",
            buttonText: "Connect to Squarespace Commerce",
        },
        {
            id: "google-analytics",
            name: "Google Analytics",
            description: "Connect your Google Analytics account",
            logo: "bg-orange-500",
            buttonText: "Connect to Google Analytics",
        },
        {
            id: "wix",
            name: "Wix",
            description: "Connect your Wix account",
            logo: "bg-black",
            buttonText: "Connect to Wix",
        },
    ]

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

    const logoItem = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    }

    return (
        <div className="min-h-screen bg-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-teal-600 text-sm font-medium mb-1">Integrations</p>
                            <h1 className="text-3xl font-bold text-gray-900">Connections</h1>
                        </div>
                        <Link
                            href="/discover"
                            className="text-teal-600 hover:text-teal-700 flex items-center gap-2 text-sm font-medium"
                        >
                            Discover more apps
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>

                {/* Main Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Let's connect your tools
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Connect apps and integrations you're already using to Mailchimp so you can market smarter with
                            data-driven insights.
                        </p>

                        {/* Features List */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                            <div className="flex items-center gap-2 text-gray-700">
                                <Check className="h-5 w-5 text-teal-600" />
                                <span className="font-medium">Sync contacts</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Check className="h-5 w-5 text-teal-600" />
                                <span className="font-medium">Import content</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Check className="h-5 w-5 text-teal-600" />
                                <span className="font-medium">300+ Integrations</span>
                            </div>
                        </div>

                        {/* Integration Logos Grid */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 mb-12 max-w-4xl mx-auto"
                        >
                            {integrationLogos.map((logo, index) => (
                                <motion.div
                                    key={logo.id}
                                    variants={logoItem}
                                    className="flex items-center justify-center"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shadow-sm border border-gray-200 bg-white hover:shadow-md transition-shadow duration-200">
                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded ${logo.color}`}>
                                            {/* Logo placeholders - in a real app, these would be actual logos */}
                                            {logo.id === "quickbooks" && (
                                                <div className="w-full h-full bg-green-500 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">QB</span>
                                                </div>
                                            )}
                                            {logo.id === "woocommerce" && (
                                                <div className="w-full h-full bg-purple-600 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">W</span>
                                                </div>
                                            )}
                                            {logo.id === "canva" && (
                                                <div className="w-full h-full bg-purple-500 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">C</span>
                                                </div>
                                            )}
                                            {logo.id === "zapier" && (
                                                <div className="w-full h-full bg-orange-500 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">Z</span>
                                                </div>
                                            )}
                                            {logo.id === "microsoft" && (
                                                <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">M</span>
                                                </div>
                                            )}
                                            {logo.id === "wix" && (
                                                <div className="w-full h-full bg-black rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">W</span>
                                                </div>
                                            )}
                                            {logo.id === "instagram" && (
                                                <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">I</span>
                                                </div>
                                            )}
                                            {logo.id === "stripe" && (
                                                <div className="w-full h-full bg-blue-600 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">S</span>
                                                </div>
                                            )}
                                            {logo.id === "facebook" && (
                                                <div className="w-full h-full bg-blue-600 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">f</span>
                                                </div>
                                            )}
                                            {logo.id === "linkedin" && (
                                                <div className="w-full h-full bg-blue-700 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">in</span>
                                                </div>
                                            )}
                                            {logo.id === "wordpress" && (
                                                <div className="w-full h-full bg-blue-700 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">W</span>
                                                </div>
                                            )}
                                            {logo.id === "photoshop" && (
                                                <div className="w-full h-full bg-blue-800 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">Ps</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-medium"
                            >
                                Browse apps & integrations
                            </Button>
                        </div>

                        {/* About Link */}
                        <div className="mt-6">
                            <Link
                                href="/about-integrations"
                                className="text-teal-600 hover:text-teal-700 flex items-center justify-center gap-2 text-sm font-medium"
                            >
                                <Info className="h-4 w-4" />
                                About integrations
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Recommendations Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Recommendations</h2>
                        <Link
                            href="/discover"
                            className="text-teal-600 hover:text-teal-700 flex items-center gap-2 text-sm font-medium"
                        >
                            Discover more apps
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-4"
                    >
                        {recommendations.map((recommendation, index) => (
                            <motion.div key={recommendation.id} variants={item}>
                                <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm border border-gray-200 bg-white">
                                                    <div className={`w-8 h-8 rounded ${recommendation.logo}`}>
                                                        {recommendation.id === "canva" && (
                                                            <div className="w-full h-full bg-purple-500 rounded flex items-center justify-center">
                                                                <span className="text-white text-xs font-bold">C</span>
                                                            </div>
                                                        )}
                                                        {recommendation.id === "squarespace" && (
                                                            <div className="w-full h-full bg-black rounded flex items-center justify-center">
                                                                <span className="text-white text-xs font-bold">S</span>
                                                            </div>
                                                        )}
                                                        {recommendation.id === "google-analytics" && (
                                                            <div className="w-full h-full bg-orange-500 rounded flex items-center justify-center">
                                                                <span className="text-white text-xs font-bold">G</span>
                                                            </div>
                                                        )}
                                                        {recommendation.id === "wix" && (
                                                            <div className="w-full h-full bg-black rounded flex items-center justify-center">
                                                                <span className="text-white text-xs font-bold">W</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{recommendation.name}</h3>
                                                    <p className="text-gray-600">{recommendation.description}</p>
                                                </div>
                                            </div>
                                            <Button
                                                className="bg-teal-600 hover:bg-teal-700 text-white whitespace-nowrap"
                                                size="sm"
                                            >
                                                {recommendation.buttonText}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}