export default function Loading() {
    return (
        <div className="p-4 md:p-6 pt-6 space-y-8">
            {/* Header Skeleton */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="h-10 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Hero Section Skeleton */}
            <div className="bg-green-50 rounded-lg p-8 md:p-12 text-center">
                <div className="h-10 w-3/4 max-w-md mx-auto bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-16 w-full max-w-lg mx-auto bg-gray-200 rounded animate-pulse mb-8"></div>

                <div className="flex justify-center">
                    <div className="relative max-w-xl w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg shadow-lg p-4 h-48"></div>
                            <div className="bg-white rounded-lg shadow-lg p-4 h-48"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Survey Templates Skeleton */}
            <div className="space-y-6">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div className="h-16 bg-gray-200 rounded animate-pulse mb-4"></div>
                            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Help Section Skeleton */}
            <div className="pt-8">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>

                <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="w-48 h-48 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-3"></div>
                        <div className="h-16 bg-gray-200 rounded animate-pulse mb-4"></div>
                        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}