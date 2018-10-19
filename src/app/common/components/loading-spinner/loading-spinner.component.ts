import { Component, Input, SimpleChanges, SimpleChange, OnChanges, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { isUndefinedOrNullOrEmpty } from '../../helpers/common';
import { TEXTS } from '../../domain/texts';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit, OnChanges {
  @Input()
  showSpinner: boolean;

  texts: any;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.init();
  }

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

  init() {
    this.texts = TEXTS;
  }
}
