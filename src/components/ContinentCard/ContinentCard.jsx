import { Link } from 'react-router-dom'

export default function ContinentCard({
  emoji,
  to,
  name,
  countryCount,
  buttonClassName,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
      <p className="text-3xl mb-2">{emoji}</p>
      <Link to={to}>
        <button
          type="button"
          className={`text-white rounded-lg text-sm font-medium transition-colors ${buttonClassName}`}
        >
          Click to explore {name}
        </button>
      </Link>
      <p className="text-sm text-gray-400 mt-1">{countryCount} countries</p>
    </div>
  )
}
