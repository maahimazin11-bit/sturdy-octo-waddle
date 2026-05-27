import { useSearchParams, useNavigate } from 'react-router-dom'
import { searchSpecies } from '../data/species'
import SpeciesCard from '../components/SpeciesCard'
import SearchBar from '../components/SearchBar'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') || ''
  const results = searchSpecies(query)

  return (
    <div className="min-h-screen bg-warmwhite">
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg, #0891b2 0%, #067093 60%, #0c5070 100%)' }} className="px-5 pt-12 pb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-white/80 text-sm mb-5"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Home
        </button>
        <h1 className="text-2xl font-bold text-white">Results for "{query}"</h1>
        <p className="text-white/70 text-sm mt-1">
          {results.length === 0 ? 'No species found' : `${results.length} species found`}
        </p>
        <div className="mt-5">
          <SearchBar />
        </div>
      </div>

      {/* Results */}
      <div className="px-5 pt-5 pb-10 flex flex-col gap-3 max-w-sm mx-auto">
        {results.length === 0 ? (
          <div className="text-center pt-10">
            <p className="text-4xl mb-4">🌊</p>
            <p className="text-gray-500 text-sm">Nothing found for "{query}"</p>
            <p className="text-gray-400 text-xs mt-2">Try searching by common name or scientific name</p>
          </div>
        ) : (
          results.map(s => <SpeciesCard key={s.id} species={s} />)
        )}
      </div>
    </div>
  )
}
