import { Injectable } from "@angular/core";

import { Resolve } from "@angular/router";

import { Observable, of } from "rxjs";
import { StatsTabs } from "../services/stats-tabs.service";
import { HumidityService } from "../domain/api/humidity.service";
import { TemperatureService } from "../domain/api/temperature.service";
import { CARD_INFO } from "../domain/constants";

@Injectable()
export class DataStatsResolver implements Resolve<Observable<string>> {
  constructor(
    private statsTabs: StatsTabs,
    private humidityApi: HumidityService,
    private temperatureApi: TemperatureService
  ) {}

  resolve() {
    const dataHttp = {};
    const currentTab = this.statsTabs.current;
    dataHttp[CARD_INFO.HUMIDITY_AIR] = this.humidityApi.historicHumidityAir();
    dataHttp[
      CARD_INFO.HUMIDITY_GROUND
    ] = this.humidityApi.historicHumidityGround();
    dataHttp[
      CARD_INFO.TEMPERATURE_AIR
    ] = this.temperatureApi.historicTemperatureAir();
    return dataHttp[currentTab.toString()];
  }
}
