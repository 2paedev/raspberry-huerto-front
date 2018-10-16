import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbAlertModule, NgbModalModule, NgxSpinnerModule, HttpClientModule],
  exports: [NgbAlertModule, NgbModalModule, NgxSpinnerModule],
})
export class VendorComponentsModule {}
