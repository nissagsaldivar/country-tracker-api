import { useState, useEffect, useCallback } from 'react'
import { getNorthAmericanCountries, clearCountriesCache } from '../api/countries.js'

function NorthAmerica() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  const loadCountries = useCallback(() => {
    setLoading(true)
    return getNorthAmericanCountries()
      .then((data) => {
        const northAmerica = data.filter(
          (country) => country.subregion === 'North America',
        )
        setCountries(northAmerica)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    void loadCountries()
  }, [loadCountries])

  /** Clears the in-memory API cache, then runs the same fetch path as on first mount. */
  function handleRefreshFromNetwork() {
    clearCountriesCache()
    void loadCountries()
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-4xl font-bold text-gray-900">
              North American Countries
            </h1>
            <button
              type="button"
              onClick={handleRefreshFromNetwork}
              disabled={loading}
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Loading…' : 'Refresh from network'}
            </button>
          </div>

          <div className="mt-6 space-y-12 lg:grid sm:grid sm:grid-cols-1 lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {countries.map((country) => (
              <div key={country.name.common} className="group relative">
                <img
                  alt={country.name.common}
                  src={country.flags.png}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  {country.name.common}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  Population: {country.population.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NorthAmerica