export default function Loading() {
    return (
        <div className="p-4 md:p-6 pt-6 space-y-8">
            {/* Header Skeleton */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Main Content Skeleton */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                        <div className="flex gap-4 pt-4">
                            <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-2/5">
                        <div className="bg-white rounded-lg shadow-lg p-6 h-64"></div>
                    </div>
                </div>
            </div>

            {/* Pre-built Segments Section Skeleton */}
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-gray-100 rounded-full h-10 w-10"></div>
                                <div className="space-y-2 flex-1">
                                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section Skeleton */}
            <div className="border-t border-gray-200 pt-6">
                <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
    )
}