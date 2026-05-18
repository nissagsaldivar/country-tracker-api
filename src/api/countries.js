const baseURL = 'https://restcountries.com/v3.1/region'

const cache = {} 

function cacheJSON(url) {
    if (cache[url]) {
        return Promise.resolve(cache[url])
    } else { 
       return fetch(url)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            cache[url] = data
            return data
        })
    }
}

export function clearCountriesCache() {
    Object.keys(cache).forEach((key) => delete cache[key])
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