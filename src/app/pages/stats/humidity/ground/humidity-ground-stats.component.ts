import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-humidity-ground-stats',
  templateUrl: './humidity-ground-stats.component.html',
  styleUrls: ['./humidity-ground-stats.component.scss'],
  providers: []
})
export class HumidityGroundStatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
  }

  initVariables() {}
}
