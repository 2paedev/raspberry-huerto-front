import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../../../common/domain/routes';
import { HumidityAirStatsComponent } from './humidity-air-stats.component';

export const routesHumidityAirStatsModule: Routes = [
  { path: APP_ROUTES.HUMIDITY_AIR_STATS, component: HumidityAirStatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routesHumidityAirStatsModule)]
})
export class HumidityAirStatsRouterModule {}
