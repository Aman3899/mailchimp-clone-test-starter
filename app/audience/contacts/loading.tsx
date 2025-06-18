export default function Loading() {
    return (
        <div className="p-4 md:p-6 pt-6">
            {/* Header Skeleton */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center gap-3">
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>

            {/* Filter Bar Skeleton */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                ))}
            </div>

            {/* Stats Skeleton */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="h-6 w-64 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Search and Controls Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
                <div className="h-10 w-full max-w-md bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center gap-3">
                    <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>

            {/* Table Skeleton */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 p-4">
                    <div className="flex gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                    </div>
                </div>
                <div className="divide-y divide-gray-200">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 flex gap-4">
                            {[1, 2, 3, 4, 5, 6].map((j) => (
                                <div key={j} className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}