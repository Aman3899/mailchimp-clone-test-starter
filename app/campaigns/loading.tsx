export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl p-4 md:p-6">
        {/* Header Skeleton */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-28 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-9 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* View Toggle Skeleton */}
        <div className="mb-6 flex items-center border-b border-gray-200">
          <div className="h-12 w-20 bg-gray-200 rounded-t animate-pulse mr-2"></div>
          <div className="h-12 w-24 bg-gray-200 rounded-t animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
