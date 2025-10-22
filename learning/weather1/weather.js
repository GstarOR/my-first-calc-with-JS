const apiKey = "2f6026032cb61262d6aef60ed8ccbfe5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

}

checkWeather();