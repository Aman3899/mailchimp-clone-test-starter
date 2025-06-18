export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-4 md:p-6 pt-6">
                {/* Header Skeleton */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>

                {/* Content Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-12 w-48 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-12 w-48 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                    <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}