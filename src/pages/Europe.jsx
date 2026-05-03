import { useState, useEffect } from 'react'

function Europe() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe')
      .then(res => res.json())
      .then((data) => {
        setCountries(data)
      })
  }, [])

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="text-4xl font-bold text-gray-900"> European Countries</h1>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
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

export default Europe