import { NgModule } from "@angular/core";
import { HomeRouterModule } from "./home-router.module";
import { HomeComponent } from "./home.component";
import { SharedComponentsModule } from "src/app/common/components/shared-components.module";
import { StatsTabs } from "src/app/common/services/stats-tabs.service";

@NgModule({
  imports: [HomeRouterModule, SharedComponentsModule],
  declarations: [HomeComponent],
  providers: [StatsTabs]
})
export class HomeModule {}
