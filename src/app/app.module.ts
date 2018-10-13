import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, NgbModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
