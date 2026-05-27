import { useNavigate } from 'react-router-dom'

export default function SpeciesCard({ species }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/species/${species.id}`)}
      className="w-full text-left bg-white rounded-2xl px-4 py-4 flex items-start gap-3 shadow-sm border border-gray-100 hover:shadow-md hover:border-turquoise/30 active:scale-95 transition-all"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-turquoise/10 flex items-center justify-center mt-0.5">
        <svg className="w-5 h-5 text-turquoise" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" />
          <path d="M12 8v4l3 3" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-oceannavy text-sm">{species.common}</p>
        <p className="text-xs text-gray-400 italic mt-0.5">{species.scientific}</p>
        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">{species.teaser}</p>
      </div>
      <svg className="flex-shrink-0 w-4 h-4 text-gray-300 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  )
}
