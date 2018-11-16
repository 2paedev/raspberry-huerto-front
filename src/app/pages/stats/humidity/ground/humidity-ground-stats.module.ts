import { NgModule } from "@angular/core";
import { HumidityGroundStatsComponent } from "./humidity-ground-stats.component";
import { SharedComponentsModule } from "src/app/common/components/shared-components.module";

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [HumidityGroundStatsComponent]
})
export class HumidityGroundStatsModule {}
