import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { LineChartModule, BarChartModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NgbAlertModule,
  NgbModalModule,
  NgbTabsetModule
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NgbTabsetModule,
    NgbAlertModule,
    NgbModalModule,
    NgxSpinnerModule,
    LineChartModule,
    BarChartModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NgbTabsetModule,
    NgbAlertModule,
    NgbModalModule,
    NgxSpinnerModule,
    LineChartModule,
    BarChartModule,
    FormsModule
  ]
})
export class VendorComponentsModule {}
