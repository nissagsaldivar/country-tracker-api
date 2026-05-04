import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Welcome Title */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <h1 className="text-xl font-bold text-gray-900">🌍 Welcome to Country Explorer 🌏</h1>
      </header>

      {/* Header */}
      <div className="text-center px-6 py-24 max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Discover countries, capitals, populations and more.
        </h2>
      </div>

      {/* Regions */}
      <div className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
          <p className="text-3xl mb-2">🌎</p>
          <div></div>
          <Link to="/NorthAmerica">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
            Click to explore North America
          </button>
          </Link>
          <p className="text-sm text-gray-400 mt-1">7 countries</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
          <p className="text-3xl mb-2">🌍</p>
          <div></div>
          <Link to="/Europe">
          <button className="bg-purple-700 text-white px-8 py-5 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors">
            Click to explore Europe
          </button>
          </Link>
          <p className="text-sm text-gray-400 mt-1">44 countries</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
          <p className="text-3xl mb-2">🌏</p>
          <Link to="/Asia">
          <button className="bg-red-700 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors">
            Click to explore Asia
          </button>
          </Link>
          <p className="text-sm text-gray-400 mt-1">48 countries</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
          <p className="text-3xl mb-2">🌏</p>
          <Link to="/Africa">
          <button className="bg-green-700 text-white px-8 py-5 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
            Click to explore Africa
          </button>
          </Link>
          <p className="text-sm text-gray-400 mt-1">54 countries</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
            <p className="text-3xl mb-2">🌏</p>
            <Link to="/SouthAmerica">
            <button className="bg-pink-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-pink-200 transition-colors">
              Click to explore South America
            </button>
            </Link>
            <p className="text-sm text-gray-400 mt-1">12 countries</p>
        </div>
    </div>
    </div>
  )
}

export default Home