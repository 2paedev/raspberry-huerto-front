import { Component, OnInit, Input } from '@angular/core';
import { Prediction } from '../../models/daily-weather';

@Component({
  selector: 'app-card-weather-forecast',
  templateUrl: './card-weather-forecast.component.html',
  styleUrls: ['./card-weather-forecast.component.scss'],
})
export class CardWeatherForecastComponent implements OnInit {
  @Input()
  predictionData: Prediction;

  constructor() {}

  ngOnInit() {}
}
