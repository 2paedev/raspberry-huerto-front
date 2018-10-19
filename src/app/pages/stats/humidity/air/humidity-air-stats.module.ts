import { NgModule } from '@angular/core';
import { HumidityAirStatsRouterModule } from './humidity-air-stats-router.module';
import { HumidityAirStatsComponent } from './humidity-air-stats.component';
import { SharedComponentsModule } from 'src/app/common/components/shared-components.module';

@NgModule({
  imports: [HumidityAirStatsRouterModule, SharedComponentsModule],
  declarations: [HumidityAirStatsComponent],
})
export class HumidityAirStatsModule {}
