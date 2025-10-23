const apiKey = "2f6026032cb61262d6aef60ed8ccbfe5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchSpan = document.querySelector('.search span');
async function checkWeather(location) {
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
//now we will display the data in every needed space with respect to our api object display
    document.querySelector('.location').innerHTML = data.name;
    document.querySelector('.temperature span').innerHTML = Math.round(data.main.temp) + "&#176;C";
    document.querySelector('.humi').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
}

searchSpan.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});
