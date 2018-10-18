import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { HumidityGroundStatsModule } from './stats/humidity/ground/humidity-ground-stats.module';
import { HumidityAirStatsModule } from './stats/humidity/air/humidity-air-stats.module';
import { TemperatureAirStatsModule } from './stats/temperature/air/temperature-air-stats.module';

@NgModule({
  imports: [
    HomeModule,
    HumidityGroundStatsModule,
    HumidityAirStatsModule,
    TemperatureAirStatsModule,
  ],
})
export class AllPagesModule {}
