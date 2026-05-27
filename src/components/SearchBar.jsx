import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ placeholder = 'Search for a species…', className = '' }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const q = query.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <form onSubmit={handleSubmit} className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex-1">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-turquoise opacity-60"
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-white/30 bg-white/90 text-oceannavy placeholder-gray-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="bg-coral text-white px-5 py-3 rounded-2xl text-sm font-medium shadow-sm hover:bg-orange-600 active:scale-95 transition-all"
      >
        Search
      </button>
    </form>
  )
}
