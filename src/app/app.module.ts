import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from "./app.component";
import { AppRouterModule } from "./app-router.module";
import { AllPagesModule } from "./pages/all-pages-module";
import { SpinnerService } from "./common/services/spinner.service";
import { SharedComponentsModule } from "./common/components/shared-components.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    AllPagesModule,
    SharedComponentsModule
  ],
  bootstrap: [AppComponent],
  providers: [SpinnerService, { provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppModule {}
