import { Component, OnInit, Input } from '@angular/core';
import { TEXTS } from 'src/app/common/domain/texts';

@Component({
  selector: 'app-panel-info-modal',
  templateUrl: './panel-info-modal.component.html',
  styleUrls: ['./panel-info-modal.component.scss'],
})
export class PanelInfoModalComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  messagesInfo: string[];

  texts: any;

  constructor() {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.texts = TEXTS;
  }
}
