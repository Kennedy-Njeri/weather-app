const key = 'uyMxjkG2IdEv4VBCLkYcvvgGqBkK6XkU'


// get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'

    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)

    if(response.status !==200){
        throw new Error("cannot fetch the data")
    }

    //console.log(response)

    const data = await response.json()

    return data[0]

    //console.log(data)

}


// get city weather
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'

    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)

    const data = await response.json()

    console.log(data)

    return data[0]

}


getCity('nyeri').then(data => {

    console.log(data)
    return getWeather(data.Key)

}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err.message)
})

getCity("Nairobi").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

getWeather("224758").then(data => {
    console.log(data)
})