
class Forcast {
    constructor() {
        this.key = 'uyMxjkG2IdEv4VBCLkYcvvgGqBkK6XkU'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city)
        const weather = await this.getWeather(cityDetails.Key)

        return { cityDetails, weather }
    }
    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`

        const response = await fetch(this.cityURI + query)

        const data = await response.json()

        //console.log(data)

        return data[0]
    }
    async getWeather(id){



        const query = `${id}?apikey=${this.key}`

        const response = await fetch(this.weatherURI + query)



        if(response.status !==200){
            throw new Error("cannot fetch the data")
        }

        //console.log(response)


        const data = await response.json()

        return data[0]

        //console.log(data)


    }

    
}



// getCity('nyeri').then(data => {
//
//     console.log(data)
//     return getWeather(data.Key)
//
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err.message)
// })
//
// getCity("Nairobi").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })
//
// getWeather("224758").then(data => {
//     console.log(data)
// })