import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { APP_ROUTES } from "../../common/domain/routes";
import { StatsComponent } from "./stats.component";
import { InitialTabStatsResolver } from "src/app/common/resolvers/initial-tab-stats-resolver";
import { DataStatsResolver } from "src/app/common/resolvers/data-stats-resolver";
import { HumidityService } from "src/app/common/domain/api/humidity.service";
import { TemperatureService } from "src/app/common/domain/api/temperature.service";

export const routesStatsModule: Routes = [
  {
    path: APP_ROUTES.STATS,
    component: StatsComponent,
    resolve: { currentTab: InitialTabStatsResolver, http: DataStatsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesStatsModule)],
  providers: [
    InitialTabStatsResolver,
    DataStatsResolver,
    HumidityService,
    TemperatureService
  ]
})
export class StatsRouterModule {}
