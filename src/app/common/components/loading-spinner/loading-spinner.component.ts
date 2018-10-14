import { Component, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { isUndefinedOrNullOrEmpty } from '../../helpers/common';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnChanges {
  @Input()
  showSpinner: boolean;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnChanges(changes: SimpleChanges) {
    const showing: SimpleChange = changes.showSpinner;
    if (!isUndefinedOrNullOrEmpty(showing)) {
      if (showing.currentValue) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    }
  }
}
