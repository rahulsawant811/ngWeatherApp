import { Injectable } from '@angular/core';
import { Weather } from '../weather/weather.model';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

    weatherItems: Weather[] = [
      new Weather('Pune', 'Rainy', 4),
      new Weather('Mumbai', 'Cloudy', 10)
    ];

    constructor(private http: Http) { }

    getWeatherItems(){
      return this.weatherItems;
    }

    addWeatherItem(weatherItem: Weather){
      this.weatherItems.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any>{
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=59562c3be9ba2de668958b603374bff9&units=metric')
                      .map(response => response.json())
                      .catch(err => {
                        console.error(err);
                        return Observable.throw(err.json());
                      });
    }

}
