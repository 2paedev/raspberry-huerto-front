import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  APP_ROUTES,
  APP_ROUTES_PAGES,
  APP_PAGES_CHILDREN
} from "./common/domain/routes";

export const routesAppModule: Routes = [
  { path: "", redirectTo: APP_ROUTES.HOME, pathMatch: "full" },
  {
    path: APP_ROUTES_PAGES.HOME,
    loadChildren: APP_PAGES_CHILDREN.HOME,
    runGuardsAndResolvers: "always"
  },
  {
    path: APP_ROUTES_PAGES.STATS,
    loadChildren: APP_PAGES_CHILDREN.STATS,
    runGuardsAndResolvers: "always"
  }
  // {
  //   path: APP_ROUTES_PAGES.HUMIDITY_GROUND_STATS,
  //   loadChildren:
  //     './pages/stats/humidity/ground/humidity-ground-stats.module#HumidityGroundStatsModule',
  //   runGuardsAndResolvers: 'always',
  // },
  // {
  //   path: APP_ROUTES_PAGES.TEMPERATURE_AIR_STATS,
  //   loadChildren:
  //     './pages/stats/temperature/air/temperature-air-stats.module#TemperatureAirStatsModule',
  //   runGuardsAndResolvers: 'always',
  // },
  // {
  //   path: APP_ROUTES_PAGES.HUMIDITY_AIR_STATS,
  //   loadChildren: './pages/stats/humidity/air/humidity-air-stats.module#HumidityAirStatsModule',
  //   runGuardsAndResolvers: 'always',
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routesAppModule, {
      enableTracing: false,
      onSameUrlNavigation: "reload"
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule {}
