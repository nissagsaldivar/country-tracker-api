import ContinentCard from '../components/ContinentCard/ContinentCard.jsx'

const continents = [
  {
    emoji: '🌎',
    to: '/NorthAmerica',
    name: 'North America',
    countryCount: 7,
    buttonClassName:
      'bg-blue-700 px-6 py-3 hover:bg-blue-200',
  },
  {
    emoji: '🌍',
    to: '/Europe',
    name: 'Europe',
    countryCount: 44,
    buttonClassName:
      'bg-purple-700 px-8 py-5 hover:bg-purple-200',
  },
  {
    emoji: '🌏',
    to: '/Asia',
    name: 'Asia',
    countryCount: 48,
    buttonClassName: 'bg-red-700 px-8 py-4 hover:bg-red-200',
  },
  {
    emoji: '🌏',
    to: '/Africa',
    name: 'Africa',
    countryCount: 54,
    buttonClassName:
      'bg-green-700 px-8 py-5 hover:bg-green-200',
  },
  {
    emoji: '🌏',
    to: '/SouthAmerica',
    name: 'South America',
    countryCount: 12,
    buttonClassName:
      'bg-pink-700 px-6 py-3 hover:bg-pink-200',
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Welcome Title */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <h1 className="text-xl font-bold text-gray-900">
          🌍 Welcome to Country Explorer 🌏
        </h1>
      </header>

      {/* Header */}
      <div className="text-center px-6 py-24 max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Discover countries, capitals, populations and more.
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-3 gap-4">
        {continents.map((continent) => (
          <ContinentCard key={continent.to} {...continent} />
        ))}
      </div>
    </div>
  )
}

export default Home
