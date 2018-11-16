import { NgModule } from "@angular/core";
import { HumidityAirStatsComponent } from "./humidity-air-stats.component";
import { SharedComponentsModule } from "src/app/common/components/shared-components.module";

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [HumidityAirStatsComponent]
})
export class HumidityAirStatsModule {}
