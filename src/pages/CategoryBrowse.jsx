import { useParams, useNavigate } from 'react-router-dom'
import { categories, kingdoms } from '../data/species'
import CategoryCard from '../components/CategoryCard'

export default function CategoryBrowse() {
  const { kingdom } = useParams()
  const navigate = useNavigate()
  const kingdomInfo = kingdoms.find(k => k.id === kingdom)
  const cats = categories[kingdom] || []

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
        <h1 className="text-2xl font-bold text-white">{kingdomInfo?.name || 'Kingdom'}</h1>
        <p className="text-white/70 text-sm mt-1">Select a category to explore</p>
      </div>

      {/* Grid */}
      <div className="px-5 pt-6 pb-10">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {cats.map(cat => (
            <CategoryCard key={cat.id} category={cat} kingdom={kingdom} />
          ))}
        </div>
      </div>
    </div>
  )
}
