import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { AllPagesModule } from './pages/all-pages-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, AllPagesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
