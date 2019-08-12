const cityForm = document.querySelector("form")
const card = document.querySelector(".card")
const details = document.querySelector(".details")


const UpdateUi = (data) => {

    const cityDetails = data.cityDetails
    const weather = data.weather

    // update details template
    details.innerHTML = `
    
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
             
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}></span>
              <span>&deg;C</span>
          </div>
    `


    // remove d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}



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
        UpdateUi(data)
        console.log(data)

    }).catch(err => {
        console.log(err)
    })

})