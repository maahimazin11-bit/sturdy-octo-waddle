import { useParams, useNavigate } from 'react-router-dom'
import { species, getCategoryById } from '../data/species'
import SpeciesCard from '../components/SpeciesCard'

export default function SpeciesList() {
  const { kingdom, categoryId } = useParams()
  const navigate = useNavigate()
  const category = getCategoryById(categoryId)
  const list = species[categoryId] || []

  return (
    <div className="min-h-screen bg-warmwhite">
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg, #0891b2 0%, #067093 60%, #0c5070 100%)' }} className="px-5 pt-12 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-white/80 text-sm mb-5"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
        <h1 className="text-2xl font-bold text-white">{category?.name || categoryId}</h1>
        <p className="text-white/70 text-sm mt-1">{list.length} species</p>
      </div>

      {/* List */}
      <div className="px-5 pt-5 pb-10 flex flex-col gap-3 max-w-sm mx-auto">
        {list.map(s => (
          <SpeciesCard key={s.id} species={s} />
        ))}
        {list.length === 0 && (
          <p className="text-center text-gray-400 text-sm mt-8">No species found in this category.</p>
        )}
      </div>
    </div>
  )
}
