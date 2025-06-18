export default function Loading() {
    return (
        <div className="flex bg-gray-50 min-h-screen">
            {/* Sidebar Skeleton */}
            <div className="hidden lg:block w-80 bg-white border-r border-gray-200 p-6">
                <div className="space-y-6">
                    <div>
                        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                        <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div>
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-3"></div>
                        <div className="space-y-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="h-8 w-full bg-gray-200 rounded animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Skeleton */}
            <div className="flex-1 p-4 md:p-6 pt-6">
                {/* Header Skeleton */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-96 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Featured Integration Skeleton */}
                <div className="mb-8">
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                                    <div className="space-y-2">
                                        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="h-16 w-full bg-gray-200 rounded animate-pulse"></div>
                                <div className="flex gap-2">
                                    <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-6 w-28 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-10 w-28 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 h-64 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Integration Grid Skeleton */}
                <div className="mb-12">
                    <div className="h-16 w-full bg-gray-200 rounded animate-pulse mb-6"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Study Skeleton */}
                <div className="mb-12">
                    <div className="bg-orange-50 rounded-lg p-8">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-2/3 space-y-4">
                                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-16 w-full bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                            <div className="lg:w-1/3 h-64 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Spotlight Skeleton */}
                <div className="mb-12">
                    <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-6"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                                    <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div className="h-12 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
                                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}