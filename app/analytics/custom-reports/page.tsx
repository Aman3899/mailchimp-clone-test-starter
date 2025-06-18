"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function CustomReportsPage() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 pt-20">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Custom reports</h1>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 text-xs sm:text-sm">
                    New
                </Badge>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Text Section */}
                <div className="max-w-lg">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Get the answers you need to grow your business
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Custom reports let you build a personalized report so you can make data-driven decisions based on
                        your campaign performance.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                        <li>Campaign performance trends over time</li>
                        <li>Compare engagement across audiences</li>
                        <li>Performance metrics by channel</li>
                    </ul>
                    <div className="space-x-4">
                        <Button className="bg-teal-600 hover:bg-teal-700 text-white text-sm sm:text-base">
                            Upgrade to Standard plan
                        </Button>
                        <a
                            href="#"
                            className="text-teal-600 hover:text-teal-700 text-sm sm:text-base underline"
                        >
                            Learn more about custom reports
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 bg-teal-50 p-4 sm:p-6 rounded-lg shadow-md">
                    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-between mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Custom reports</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-1/3 space-y-2">
                                <div className="text-sm text-gray-600">Build your report</div>
                                <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                                    <option>Metrics</option>
                                    <option>Click rate</option>
                                    <option>Group by</option>
                                    <option>Day</option>
                                    <option>Audience</option>
                                    <option>West coast</option>
                                    <option>East coast</option>
                                </select>
                            </div>
                            <div className="w-full sm:w-2/3">
                                <Image
                                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/core-analytics/custom_reports_chart_v2.png"
                                    alt="Custom reports chart"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="py-2 text-left">Date</th>
                                        <th className="py-2 text-left">Tag</th>
                                        <th className="py-2 text-left">Click rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2">May 18</td>
                                        <td className="py-2">West coast</td>
                                        <td className="py-2">10%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">May 19</td>
                                        <td className="py-2">East coast</td>
                                        <td className="py-2">6%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}