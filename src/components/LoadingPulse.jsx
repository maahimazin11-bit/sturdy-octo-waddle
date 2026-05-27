export default function LoadingPulse() {
  return (
    <div className="flex flex-col gap-5 animate-pulse">
      {[
        { label: 'WHAT IT IS', width: 'w-full' },
        { label: 'WHERE IT LIVES', width: 'w-full' },
        { label: 'WHY IT MATTERS', width: 'w-full' },
        { label: 'THE PART MOST PEOPLE DON\'T KNOW', width: 'w-full' },
        { label: 'STATUS', width: 'w-full' },
      ].map(({ label }) => (
        <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="h-3 bg-turquoise/20 rounded w-40 mb-3" />
          <div className="space-y-2">
            <div className="h-2.5 bg-gray-100 rounded w-full" />
            <div className="h-2.5 bg-gray-100 rounded w-5/6" />
            <div className="h-2.5 bg-gray-100 rounded w-4/6" />
          </div>
        </div>
      ))}
    </div>
  )
}
