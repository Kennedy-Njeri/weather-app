const key = 'uyMxjkG2IdEv4VBCLkYcvvgGqBkK6XkU'


const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'

    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)

    const data = await response.json()

    //console.log(data)

    return data[0]

}


getCity('nairobi').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})