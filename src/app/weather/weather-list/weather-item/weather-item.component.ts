import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../../weather.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html'
})
export class WeatherItemComponent implements OnInit {
  @Input() weather: Weather;
  constructor() { }

  ngOnInit() {
  }


}
