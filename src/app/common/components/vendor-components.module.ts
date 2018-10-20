import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbAlertModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NgbAlertModule, NgbModalModule, NgxSpinnerModule, HttpClientModule, FormsModule],
  exports: [NgbAlertModule, NgbModalModule, NgxSpinnerModule, FormsModule],
})
export class VendorComponentsModule {}
