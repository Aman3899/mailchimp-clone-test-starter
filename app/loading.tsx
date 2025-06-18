export default function Loading() {
    return (
        <div className="p-4 md:p-6 pt-6 bg-gray-50 min-h-screen">
            {/* Header Skeleton */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center gap-3">
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>

            {/* Account Setup Skeleton */}
            <div className="mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/4">
                            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                            <div className="h-8 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
                            <div className="h-2 w-full bg-gray-200 rounded animate-pulse"></div>
                        </div>
                        <div className="lg:w-3/4">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-gray-100 rounded-lg p-4 h-32"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Templates Skeleton */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white rounded-lg shadow-sm">
                            <div className="aspect-[3/4] bg-gray-100 rounded-t-lg"></div>
                            <div className="p-4">
                                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
                                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup Forms Skeleton */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="h-6 w-64 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-full max-w-2xl bg-gray-200 rounded animate-pulse mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-lg shadow-sm">
                            <div className="aspect-[4/3] bg-gray-100 rounded-t-lg"></div>
                            <div className="p-6">
                                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-3"></div>
                                <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
                                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}