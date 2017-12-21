import { Injectable } from '@angular/core';
import { Weather } from '../weather/weather.model';

@Injectable()
export class WeatherService {

    weatherItems: Weather[] = [
      new Weather('Pune', 'Rainy', 4),
      new Weather('Mumbai', 'Cloudy', 10)
    ];

    constructor() { }

    getWeatherItems(){
      return this.weatherItems;
    }

}
