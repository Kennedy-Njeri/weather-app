const cityForm = document.querySelector("form")
const card = document.querySelector(".card")
const details = document.querySelector(".details")
const time = document.querySelector("img.time")
const icon = document.querySelector(".icon img")
const forcast = new Forcast()



const UpdateUi = (data) => {

    // const cityDetails = data.cityDetails
    // const weather = data.weather


    // destructor properties

    const { cityDetails, weather } = data

    // update details template
    details.innerHTML = `
    
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
             
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}></span>
              <span>&deg;C</span>
          </div>
    `

    // update the night/day & icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`

    icon.setAttribute('src', iconSrc)


    // ternary operator
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'


    // let timeSrc = null

    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg'
    // } else {
    //     timeSrc = 'img/night.svg'
    // }

    time.setAttribute('src', timeSrc)


    // remove d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}




// const updateCity = async (city) => {
//
//     //console.log(city)
//
//     const cityDetails = await getCity(city)
//     const weather = await getWeather(cityDetails.Key)
//
//     // property: value
//     // return {
//     //     cityDetails: cityDetails,
//     //     weather: weather
//     // }
//
//     // object shorthand Notation
//     return { cityDetails, weather }
//
// }


cityForm.addEventListener("submit", e => {
    // prevent default action // do not refresh page
    e.preventDefault()

    // get city value from the form
    const city = cityForm.city.value.trim()
    cityForm.reset()


    // update the ui with the city
    forcast.updateCity(city).then(data => {
        UpdateUi(data)
        console.log(data)

    }).catch(err => {
        console.log(err)
    })

    // local storage
    localStorage.setItem('city', city)


})

// if item is already in the storage
if (localStorage.getItem('city')){
    forcast.updateCity(localStorage.getItem('city')).then(data => {
        return UpdateUi(data)
    }).catch(err => {
        console.log(err)
    })
}

// const result = true ? 'value 1' : 'value 2'
//
// console.log(result)