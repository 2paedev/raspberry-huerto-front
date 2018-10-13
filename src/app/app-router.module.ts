import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES, APP_ROUTES_PAGES } from './common/domain/routes';

export const routesAppModule: Routes = [
  { path: '', redirectTo: APP_ROUTES.HOME, pathMatch: 'full' },
  {
    path: APP_ROUTES_PAGES.HOME,
    loadChildren: './pages/home/home.module#HomeModule',
    runGuardsAndResolvers: 'always',
  },
  // {
  //   path: PAGINAS_RUTAS.POLIZA,
  //   loadChildren: './caracteristicas/poliza/poliza.module#PolizaModulo',
  //   runGuardsAndResolvers: 'always',
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routesAppModule, {
      enableTracing: false,
      onSameUrlNavigation: 'reload',
    }),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRouterModule {}
