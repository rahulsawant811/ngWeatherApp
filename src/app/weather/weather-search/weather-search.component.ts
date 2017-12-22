import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html'
})
export class WeatherSearchComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm){
      this.weatherService.searchWeatherData(form.value.location)
                         .subscribe(
                           data => {
                             const weatherItem = new Weather(data.name, data.weather[0].description, data.main.temp);
                             this.weatherService.addWeatherItem(weatherItem);
                           }
                         );
  }
}
