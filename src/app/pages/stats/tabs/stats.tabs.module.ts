import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "src/app/common/components/shared-components.module";
import { StatsTabsComponent } from "./stats-tabs.component";
import { VendorComponentsModule } from "src/app/common/components/vendor-components.module";

@NgModule({
  imports: [SharedComponentsModule, VendorComponentsModule],
  declarations: []
})
export class StatsTabsModule {}
