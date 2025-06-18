export default function Loading() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Skeleton */}
                <div className="mb-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>

                {/* Hero Section Skeleton */}
                <div className="text-center mb-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Title */}
                        <div className="h-12 w-96 bg-gray-200 rounded animate-pulse mx-auto mb-6"></div>

                        {/* Description */}
                        <div className="space-y-3 mb-8">
                            <div className="h-6 w-full max-w-2xl bg-gray-200 rounded animate-pulse mx-auto"></div>
                            <div className="h-6 w-3/4 max-w-xl bg-gray-200 rounded animate-pulse mx-auto"></div>
                        </div>

                        {/* Features List */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                            ))}
                        </div>

                        {/* Integration Logos Grid */}
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 mb-12 max-w-4xl mx-auto">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 rounded-lg animate-pulse"></div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                            <div className="h-12 w-64 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* About Link */}
                        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mx-auto"></div>
                    </div>
                </div>

                {/* Recommendations Section Skeleton */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                                        <div className="space-y-2">
                                            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                                            <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                                        </div>
                                    </div>
                                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}