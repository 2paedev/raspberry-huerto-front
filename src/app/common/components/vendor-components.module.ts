import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import {
  NgbAlertModule,
  NgbModalModule,
  NgbTabsetModule
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    NgbTabsetModule,
    NgbAlertModule,
    NgbModalModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NgbTabsetModule,
    NgbAlertModule,
    NgbModalModule,
    NgxSpinnerModule,
    FormsModule
  ]
})
export class VendorComponentsModule {}
