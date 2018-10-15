import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../../../common/domain/routes';
import { HumidityGroundStatsComponent } from './humidity-ground-stats.component';

export const routesHumidityGroundStatsModule: Routes = [
  { path: APP_ROUTES.HUMIDITY_GROUND_STATS, component: HumidityGroundStatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routesHumidityGroundStatsModule)]
})
export class HumidityGroundStatsRouterModule {}
