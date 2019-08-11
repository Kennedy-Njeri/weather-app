const cityForm = document.querySelector("form")


const updateCity = async (city) => {

    //console.log(city)

    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)

    // property: value
    // return {
    //     cityDetails: cityDetails,
    //     weather: weather
    // }
    
    // object shorthand Notation
    return { cityDetails, weather }

}



cityForm.addEventListener("submit", e => {
    // prevent default action // do not refresh page
    e.preventDefault()

    // get city value from the form
    const city = cityForm.city.value.trim()
    cityForm.reset()


    // update the ui with the city
    updateCity(city).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })

})