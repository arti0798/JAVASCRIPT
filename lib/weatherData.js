alert('im in weatherData');

var CITY_NAME;
var description;
var temperature;

export class WeatherData {


    constructor() {

        console.log('in constructor in weatherdata.js')
        this.CITY_NAME = CITY_NAME;
        this.description = description;
        this.temperature = '';
    }
}

export const WEATHER_PROXY_HANDLER = {

    get: function(target, property) {

        return Reflect.get(target, property);
    },
    set: function(target, property, value) {

        const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
        return Reflect.set(target, property, newValue);
    }
};