const baseURL = 'https://restcountries.com/v3.1/region'

const DEFAULT_TTL_MS = 30 * 60 * 1000

const resolvedCache = new Map()
const inFlight = new Map(
)

/** get json data w/ inflight dedupe and a short in-memory ttl */

function cacheJSON(url, ttlMS = DEFAULT_TTL_MS) {
    const currentTime = Date.now()
    const resolved = resolvedCache.get(url)
    if (resolved && resolved.expiresAt > currentTime) {
        return Promise.resolve(resolved.data)
    }

    const pending = inFlight.get(url)
    if (pending) return pending

    const promise = fetch(url)
        .then((res) => res.json())
        .then((data) => {
            resolvedCache.set(url, {data, expiresAt: Date.now() + ttlMS, })
            inFlight.delete(url)
            return data
            }) 
        .catch((err) => {
            inFlight.delete(url)
            throw err
        })

        inFlight.set(url, promise)
        return promise

}

/** remove all cached responses & pending dedupe entries so next fetch will get a new request */

export function clearCountriesCache() {
    resolvedCache.clear()
    inFlight.clear()
}



export const getNorthAmericanCountries = () => {
    return getAmericas()
}


export const getSouthAmericanCountries = () => {
    return getAmericas().then((res) =>
        res.filter((country) => country.subregion === 'South America'),
    )
}

export const getAmericas = () => {
    return cacheJSON(`${baseURL}/americas`)
}

export const getAsia = () => {
    return cacheJSON(`${baseURL}/asia`)
}

export const getAfrica = () => {
    return cacheJSON(`${baseURL}/africa`)
}

export const getEurope = () => {
    return cacheJSON(`${baseURL}/europe`)
}