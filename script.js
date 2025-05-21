const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

//API Usage
async function checkWeather(city){
    const api_key = "7865d7a05b40ddf473623d46f2517200";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const weather_data = await response.json();
        console.log(weather_data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }

    if(weather_data.cod == `404`)
    {
        location_not_found.style.display = "flex";
        weather_body.style.display="none";
        console.log("error");
        return;
    }
    weather_body.style.display="flex";
    location_not_found.style.display = "none";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    //console.log(weather_data);

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.sec = "/weather/Cloud.png";
            break;
        case 'Clear':
            weather_img.sec = "/weather/Clear.png";
            break;  
        case 'Rain':
            weather_img.sec = "/weather/Rain.png"; 
            break;  
        case 'Mist':
            weather_img.sec = "/weather/Mist.png";
            break;
        case 'Snow':
            weather_img.sec = "/weather/snow.png";
            break;  
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
    console.log("start");
    var abc = document.getElementsByClassName("input-box");
    console.log(abc);
   
});
