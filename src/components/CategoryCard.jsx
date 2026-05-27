import { useNavigate } from 'react-router-dom'

const icons = {
  fish: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M6.5 12c0 0-2-4 2-7 0 0 4 3 4 7s-4 7-4 7c-4-3-2-7-2-7Z" />
      <path d="M6.5 12h8" />
      <circle cx="17" cy="12" r="3" />
      <path d="M20 12h2" />
      <circle cx="16" cy="10" r="0.5" fill="currentColor" />
    </svg>
  ),
  shark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M2 16c2-4 6-6 10-6h6l2-4-2 4v4l2 2-6-1H12c-4 0-7 2-10 5V16Z" />
      <path d="M12 10V6l2-2" />
    </svg>
  ),
  whale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M4 14c0-4 3-7 8-7 3 0 6 1.5 7 4l1 3-2-1c-1 2-3 3-5 3H8l-2 3-2-5Z" />
      <path d="M6 14c0 0 1-2 3-2" />
      <circle cx="16" cy="11" r="0.8" fill="currentColor" />
    </svg>
  ),
  turtle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <ellipse cx="12" cy="13" rx="6" ry="4.5" />
      <circle cx="12" cy="7" r="2.5" />
      <line x1="7" y1="14" x2="4" y2="16" />
      <line x1="17" y1="14" x2="20" y2="16" />
      <line x1="8" y1="16.5" x2="6" y2="19" />
      <line x1="16" y1="16.5" x2="18" y2="19" />
      <line x1="12" y1="17.5" x2="12" y2="20" />
    </svg>
  ),
  jellyfish: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M6 11a6 6 0 0 1 12 0" />
      <path d="M6 11c0 0 0 4 1 5" />
      <path d="M18 11c0 0 0 4-1 5" />
      <path d="M9 11c0 0 0.5 5 0 7" />
      <path d="M15 11c0 0-0.5 5 0 7" />
      <path d="M12 11v8" />
    </svg>
  ),
  coral: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 20V14" />
      <path d="M12 14c-2 0-4-2-4-4V8" />
      <path d="M12 14c2 0 4-2 4-4V8" />
      <path d="M8 8c0-2 1-3 2-4" />
      <path d="M16 8c0-2-1-3-2-4" />
      <path d="M8 8c-2 0-3-1-4-2" />
      <path d="M16 8c2 0 3-1 4-2" />
      <line x1="8" y1="20" x2="16" y2="20" />
    </svg>
  ),
  seagrass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M8 20c0-6 2-10 2-10S8 6 6 4" />
      <path d="M12 20c0-8 0-12 0-12" />
      <path d="M16 20c0-6-2-10-2-10s2-4 4-6" />
      <path d="M10 10c2-1 4 0 4 0" />
    </svg>
  ),
  mangrove: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 20v-8" />
      <path d="M12 12c-3-1-5-4-4-7 1 2 4 3 4 3" />
      <path d="M12 12c3-1 5-4 4-7-1 2-4 3-4 3" />
      <path d="M9 20c0-3 1-4 3-5" />
      <path d="M15 20c0-3-1-4-3-5" />
    </svg>
  ),
  algae: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M6 20c0-8 4-12 6-12s6 4 6 12" />
      <path d="M10 14c1-3 3-5 2-8" />
      <path d="M14 14c-1-3-3-5-2-8" />
    </svg>
  ),
}

export default function CategoryCard({ category, kingdom }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/kingdom/${kingdom}/category/${category.id}`)}
      className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md hover:border-turquoise/30 active:scale-95 transition-all text-center w-full"
    >
      <div className="text-turquoise">
        {icons[category.icon] || icons.fish}
      </div>
      <div>
        <p className="font-semibold text-oceannavy text-sm leading-tight">{category.name}</p>
        <p className="text-xs text-gray-400 mt-1">{category.count} species</p>
      </div>
    </button>
  )
}
