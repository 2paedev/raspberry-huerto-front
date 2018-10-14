import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbAlertModule, NgxSpinnerModule, HttpClientModule],
  exports: [NgbAlertModule, NgxSpinnerModule],
})
export class VendorComponentsModule {}
