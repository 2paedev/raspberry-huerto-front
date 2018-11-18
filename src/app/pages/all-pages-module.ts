import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { StatsModule } from "./stats/stats.module";

@NgModule({
  imports: [HomeModule, StatsModule]
})
export class AllPagesModule {}
