import { Component, Input, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { TEXTS } from '../../domain/texts';

@Component({
  selector: 'app-panel-error',
  templateUrl: './panel-error.component.html',
  styleUrls: ['./panel-error.component.scss'],
  providers: [NgbAlertConfig],
})
export class PanelErrorComponent implements OnInit {
  @Input()
  message: string;

  texts: any;

  constructor(alertConfig: NgbAlertConfig) {
    alertConfig.type = 'custom';
    alertConfig.dismissible = false;
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.texts = TEXTS;
  }
}
