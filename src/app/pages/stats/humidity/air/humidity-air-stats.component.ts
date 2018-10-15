import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-humidity-air-stats',
  templateUrl: './humidity-air-stats.component.html',
  styleUrls: ['./humidity-air-stats.component.scss'],
  providers: []
})
export class HumidityAirStatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
  }

  initVariables() {}
}
