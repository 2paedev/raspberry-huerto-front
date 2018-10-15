import { NgModule } from '@angular/core';
import { HumidityGroundStatsRouterModule } from './humidity-ground-stats-router.module';
import { HumidityGroundStatsComponent } from './humidity-ground-stats.component';
import { SharedComponentsModule } from 'src/app/common/components/shared-components.module';

@NgModule({
  imports: [HumidityGroundStatsRouterModule, SharedComponentsModule],
  declarations: [HumidityGroundStatsComponent]
})
export class HumidityGroundStatsModule {}
