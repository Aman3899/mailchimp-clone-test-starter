export default function Loading() {
    return (
        <div className="p-4 md:p-6 pt-6 space-y-8">
            {/* Header Skeleton */}
            <div className="h-10 w-64 bg-gray-200 rounded animate-pulse"></div>

            {/* Hero Section Skeleton */}
            <div className="bg-gray-100 rounded-lg p-8 md:p-12 flex flex-col items-center">
                <div className="h-10 w-3/4 max-w-md bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-20 w-full max-w-lg bg-gray-200 rounded animate-pulse mb-6"></div>
                <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Cards Section Skeleton */}
            <div>
                <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="h-40 bg-gray-100 rounded animate-pulse mb-4"></div>
                            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-3"></div>
                            <div className="h-16 bg-gray-200 rounded animate-pulse mb-4"></div>
                            <div className="h-8 w-28 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* No Contacts Section Skeleton */}
            <div className="border-t border-gray-200 pt-8 mt-8">
                <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-6 w-full max-w-md bg-gray-200 rounded animate-pulse mb-8"></div>

                <div className="space-y-6">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-64 bg-gray-100 rounded-lg p-4 h-40"></div>
                            <div className="flex-1">
                                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-3"></div>
                                <div className="h-16 bg-gray-200 rounded animate-pulse mb-4"></div>
                                <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}