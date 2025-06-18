export default function Loading() {
  return (
    <div className="p-4 md:p-6 pt-6">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[500px] gap-8 lg:gap-16">
        <div className="flex-1 max-w-md space-y-4">
          <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="w-80 h-80 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}