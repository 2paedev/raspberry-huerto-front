import { NgModule } from '@angular/core';
import { HomeRouterModule } from './home-router.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HomeRouterModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
