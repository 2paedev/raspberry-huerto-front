import { NgModule } from "@angular/core";
import { StatsRouterModule } from "./stats-router.module";
import { StatsComponent } from "./stats.component";
import { SharedComponentsModule } from "src/app/common/components/shared-components.module";

@NgModule({
  imports: [StatsRouterModule, SharedComponentsModule],
  declarations: [StatsComponent]
})
export class StatsModule {}
