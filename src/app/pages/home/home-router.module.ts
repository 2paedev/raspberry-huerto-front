import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../common/domain/routes';
import { HomeComponent } from './home.component';

export const routesHomeModule: Routes = [{ path: APP_ROUTES.HOME, component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routesHomeModule)],
})
export class HomeRouterModule {}
