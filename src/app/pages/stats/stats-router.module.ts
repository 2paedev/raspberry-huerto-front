import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { APP_ROUTES } from "../../common/domain/routes";
import { StatsComponent } from "./stats.component";
import { StatsResolver } from "src/app/common/resolvers/stats-resolver";

export const routesStatsModule: Routes = [
  {
    path: APP_ROUTES.STATS,
    component: StatsComponent,
    resolve: { currentTab: StatsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesStatsModule)],
  providers: [StatsResolver]
})
export class StatsRouterModule {}
