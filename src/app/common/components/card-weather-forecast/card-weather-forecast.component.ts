import { Component, OnInit, Input } from '@angular/core';
import { Prediction } from '../../models/daily-weather';
import { SKY_WEATHER } from '../../domain/constants';

@Component({
  selector: 'app-card-weather-forecast',
  templateUrl: './card-weather-forecast.component.html',
  styleUrls: ['./card-weather-forecast.component.scss'],
})
export class CardWeatherForecastComponent implements OnInit {
  @Input()
  predictionData: Prediction;

  iconWeather: string;

  constructor() {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.iconWeather = this.getIconWeather();
  }

  getIconWeather() {
    if (this.predictionData.sky[0].description === SKY_WEATHER.CLOUDY.DESCRIPTION) {
      return SKY_WEATHER.CLOUDY.ICON;
    }
    if (this.predictionData.sky[0].description === SKY_WEATHER.CLOUDY_LIGHT_RAIN.DESCRIPTION) {
      return SKY_WEATHER.CLOUDY_LIGHT_RAIN.ICON;
    }
    if (this.predictionData.sky[0].description === SKY_WEATHER.CLOUDY_INTERVALS.DESCRIPTION) {
      return SKY_WEATHER.CLOUDY_INTERVALS.ICON;
    }
    if (this.predictionData.sky[0].description === SKY_WEATHER.CLOUDY_INTERVALS_RAIN.DESCRIPTION) {
      return SKY_WEATHER.CLOUDY_INTERVALS_RAIN.ICON;
    }
    if (
      this.predictionData.sky[0].description === SKY_WEATHER.CLOUDY_INTERVALS_LIGHT_RAIN.DESCRIPTION
    ) {
      return SKY_WEATHER.CLOUDY_INTERVALS_LIGHT_RAIN.ICON;
    }
    if (this.predictionData.sky[0].description === SKY_WEATHER.CLEAR.DESCRIPTION) {
      return SKY_WEATHER.CLEAR.ICON;
    }
    return '';
  }
}
