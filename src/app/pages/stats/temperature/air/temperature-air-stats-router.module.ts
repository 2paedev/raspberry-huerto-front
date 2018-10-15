import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../../../common/domain/routes';
import { TemperatureAirStatsComponent } from './temperature-air-stats.component';

export const routesTemperatureAirStatsModule: Routes = [
  { path: APP_ROUTES.TEMPERATURE_AIR_STATS, component: TemperatureAirStatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routesTemperatureAirStatsModule)]
})
export class TemperatureAirStatsRouterModule {}
