import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather.model';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html'
})
export class WeatherListComponent implements OnInit {
    weatherItems: Weather[];

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.weatherItems = this.weatherService.getWeatherItems();
    }

}
