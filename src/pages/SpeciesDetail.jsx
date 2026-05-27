import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSpeciesById } from '../data/species'
import { fetchSpeciesInfo, parseSpeciesResponse } from '../api/claude'
import LoadingPulse from '../components/LoadingPulse'

const sectionConfig = [
  { key: 'whatItIs', label: 'What It Is', icon: '🔍', color: 'text-turquoise' },
  { key: 'whereItLives', label: 'Where It Lives', icon: '🌊', color: 'text-cyan-600' },
  { key: 'whyItMatters', label: 'Why It Matters', icon: '💚', color: 'text-emerald-600' },
  { key: 'surprisingFact', label: 'The Part Most People Don\'t Know', icon: '✨', color: 'text-coral' },
  { key: 'status', label: 'Status', icon: '📊', color: 'text-amber-600' },
]

export default function SpeciesDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const speciesData = getSpeciesById(id)
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!speciesData) return
    setLoading(true)
    setError(null)
    setInfo(null)
    fetchSpeciesInfo(speciesData.common)
      .then(text => setInfo(parseSpeciesResponse(text)))
      .catch(err => setError(err.message || 'Something went wrong. Please try again.'))
      .finally(() => setLoading(false))
  }, [id])

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: speciesData?.common,
        text: speciesData?.teaser,
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard?.writeText(window.location.href)
    }
  }

  if (!speciesData) {
    return (
      <div className="min-h-screen bg-warmwhite flex flex-col items-center justify-center px-6 gap-4">
        <p className="text-gray-500">Species not found.</p>
        <button onClick={() => navigate('/')} className="text-turquoise text-sm font-medium">
          Go home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warmwhite">
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg, #0891b2 0%, #067093 60%, #0c5070 100%)' }} className="px-5 pt-12 pb-8">
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-white/80 text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-white/80 text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share
          </button>
        </div>
        <h1 className="text-2xl font-bold text-white leading-tight">{speciesData.common}</h1>
        <p className="text-white/60 text-sm italic mt-1">{speciesData.scientific}</p>
        <p className="text-white/70 text-sm mt-3 leading-relaxed">{speciesData.teaser}</p>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-10 max-w-sm mx-auto">
        {loading && <LoadingPulse />}

        {error && (
          <div className="bg-coral/10 border border-coral/20 rounded-2xl p-5 text-center">
            <p className="text-coral text-sm font-medium mb-1">Couldn't load species info</p>
            <p className="text-gray-500 text-xs mb-4">{error}</p>
            <button
              onClick={() => {
                setLoading(true)
                setError(null)
                fetchSpeciesInfo(speciesData.common)
                  .then(text => setInfo(parseSpeciesResponse(text)))
                  .catch(err => setError(err.message))
                  .finally(() => setLoading(false))
              }}
              className="bg-coral text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {info && !loading && (
          <div className="flex flex-col gap-4">
            {sectionConfig.map(({ key, label, icon, color }) =>
              info[key] ? (
                <div key={key} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className={`flex items-center gap-2 mb-3 ${color}`}>
                    <span className="text-base">{icon}</span>
                    <h2 className="text-xs font-bold uppercase tracking-widest">{label}</h2>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{info[key]}</p>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  )
}
