import { useState, useEffect, useCallback } from 'react'
import { getAfrica, clearCountriesCache } from '../api/countries.js'
import CountryCard from '../components/CountryCard/CountryCard.jsx'

function Africa() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  const loadCountries = useCallback(() => {
    setLoading(true)
    return getAfrica()
      .then((data) => {
        setCountries(data)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    void loadCountries()
  }, [loadCountries])

  function handleRefreshFromNetwork() {
    clearCountriesCache()
    void loadCountries()
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-4xl font-bold text-gray-900"> Countries in Africa </h1>
            <button
              type="button"
              onClick={handleRefreshFromNetwork}
              disabled={loading}
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Loading…' : 'Refresh'}
            </button>
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {countries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Africa
