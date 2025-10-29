const apiKey = "2f6026032cb61262d6aef60ed8ccbfe5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchSpan = document.querySelector('.search span');


async function checkWeather(location) {
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
    
if (searchBox.status == 404){
    document.querySelector('#eror').style.display = "block";
    document.querySelector('.weather-icon').style.display = "none";
    document.querySelector('.middle').style.display = "none";
} else{

    var data = await response.json();

    console.log("edafe", data);
//now we will display the data in every needed space with respect to our api object display
    document.querySelector('.location').innerHTML = data.name;
    document.querySelector('.temperature span').innerHTML = Math.round(data.main.temp) + "u00B0C";
    document.querySelector('.humi').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    // document.querySelector('#weather')="weatherIcon";
    const weatherIcon = data.weather[0].icon
    const weatherUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    const weatherIcn = document.querySelector('#weather');
    weatherIcn.src= `${weatherUrl}`
    
//displaying the items
    document.querySelector('.error').style.display = "none";
    document.querySelector('.weather-icon').style.display = "block";
    document.querySelector('.middle').style.display = "block";
    

}}

searchSpan.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});

const searchField = document.getElementById("edafe")
console.log(searchField);

// searchField.addEventListener("onkeypress", )

searchField.onkeyup = (e)=>{
    if (e.code === "Enter") {
        
        checkWeather(searchBox.value);
    }
    
}

