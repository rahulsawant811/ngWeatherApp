import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { WeatherComponent } from './weather/weather.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherItemComponent } from './weather/weather-list/weather-item/weather-item.component';
import { WeatherService } from './services/weather.service';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    WeatherListComponent,
    WeatherItemComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
