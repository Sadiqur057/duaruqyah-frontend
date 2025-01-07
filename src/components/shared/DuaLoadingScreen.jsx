export default function DuaLoadingScreen() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
        <div className="h-5 w-64 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="space-y-3 mb-6">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-[90%] bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-[95%] bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="mb-6">
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex items-center justify-end gap-4">
        {[...Array(5)].map((_, index) => (
          <div 
            key={index}
            className="w-6 h-6 bg-gray-200 rounded animate-pulse"
          />
        ))}
      </div>
    </div>
  )
}

