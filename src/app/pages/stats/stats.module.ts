import { NgModule } from "@angular/core";
import { StatsRouterModule } from "./stats-router.module";
import { StatsComponent } from "./stats.component";
import { SharedComponentsModule } from "src/app/common/components/shared-components.module";
import { StatsTabsModule } from "./tabs/stats.tabs.module";
import { StatsTabsComponent } from "./tabs/stats-tabs.component";
import { VendorComponentsModule } from "src/app/common/components/vendor-components.module";

@NgModule({
  imports: [
    StatsRouterModule,
    StatsTabsModule,
    SharedComponentsModule,
    VendorComponentsModule
  ],
  declarations: [StatsComponent, StatsTabsComponent]
})
export class StatsModule {}
