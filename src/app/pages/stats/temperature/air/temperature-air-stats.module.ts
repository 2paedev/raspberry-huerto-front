import { NgModule } from "@angular/core";
import { TemperatureAirStatsComponent } from "./temperature-air-stats.component";
import { SharedComponentsModule } from "src/app/common/components/shared-components.module";

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [TemperatureAirStatsComponent]
})
export class TemperatureAirStatsModule {}
