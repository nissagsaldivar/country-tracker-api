export default function CountryCard({ country }) {
  const name = country.name.common
  const flagSrc = country.flags.svg ?? country.flags.png

  return (
    <div className="group relative">
      <img
        alt={country.flags.alt ?? name}
        src={flagSrc}
        className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
      />
      <h3 className="mt-6 text-sm text-gray-500">{name}</h3>
      <p className="text-base font-semibold text-gray-900">
        Population: {country.population.toLocaleString()}
      </p>
    </div>
  )
}
