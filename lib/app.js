// alert('in app');

import * as ELEMENTS from 'lib/elements.js';
import { Http } from 'lib/http.js';
import { WeatherData, WEATHER_PROXY_HANDLER } from 'lib/weatherData.js';
// import { WEATHER_PROXY_HANDLER } from './weatherData';

const APP_ID = '376a5c0d9f7201c412165877865ef0dc';
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

// var CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();

function searchWeather() {

    // alert(CITY_NAME);
    var CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();

    if (CITY_NAME.length == 0) {

        return alert('Please Enter City Name');
    }
    alert(CITY_NAME);

    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;
    // const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&appid=' + APP_ID;
    // const URL = 'http://api.openweathermap.org/data/2.5/weather?q={London}&appid=' + APP_ID;
    alert(URL);
    Http.fetchData(URL)
        .then(responseData => {

            // alert('i m in ** ' + CITY_NAME);
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            alert('i m in app fetchData fun weather data' + WEATHER_DATA);
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            console.log('weather_proxy ' + WEATHER_PROXY);

            WEATHER_PROXY.temperature = responseData.main.temp;

            console.log('b4 updateWeather ');
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error));
}

function updateWeather(weatherData) {

    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}