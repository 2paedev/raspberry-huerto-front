import { Component, Input } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panel-error',
  templateUrl: './panel-error.component.html',
  styleUrls: ['./panel-error.component.scss'],
  providers: [NgbAlertConfig],
})
export class PanelErrorComponent {
  @Input()
  message: string;

  constructor(alertConfig: NgbAlertConfig) {
    alertConfig.type = 'custom';
    alertConfig.dismissible = false;
  }
}
