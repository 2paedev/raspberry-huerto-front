import { NgModule } from '@angular/core';
import { HomeRouterModule } from './home-router.module';
import { HomeComponent } from './home.component';
import { SharedComponentsModule } from 'src/app/common/components/shared-components.module';

@NgModule({
  imports: [HomeRouterModule, SharedComponentsModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
