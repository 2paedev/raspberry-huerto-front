import { NgModule } from '@angular/core';
import { TemperatureAirStatsRouterModule } from './temperature-air-stats-router.module';
import { TemperatureAirStatsComponent } from './temperature-air-stats.component';
import { SharedComponentsModule } from 'src/app/common/components/shared-components.module';

@NgModule({
  imports: [TemperatureAirStatsRouterModule, SharedComponentsModule],
  declarations: [TemperatureAirStatsComponent]
})
export class TemperatureAirStatsModule {}
