import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { AllPagesModule } from './pages/all-pages-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, AllPagesModule],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppModule {}
