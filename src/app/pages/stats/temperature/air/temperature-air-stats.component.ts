import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-air-stats',
  templateUrl: './temperature-air-stats.component.html',
  styleUrls: ['./temperature-air-stats.component.scss'],
  providers: []
})
export class TemperatureAirStatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
  }

  initVariables() {}
}
