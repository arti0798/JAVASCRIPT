export class WeatherData {

    constructor() {

        this.cityName = cityName;
        this.discription = description;
        this.temperature = '';
    }
}

export const WEATHER_PROXY_HANDLER = {

    get: function(targer, property) {

        return Reflect.get(target, property);
    },
    set: function(target, property, value) {

        const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
        return Reflect.set(target, property, newValue);
    }
};