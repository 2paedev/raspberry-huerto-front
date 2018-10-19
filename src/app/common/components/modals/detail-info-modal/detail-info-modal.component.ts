import { Component, OnInit, Input } from '@angular/core';
import { TEXTS } from 'src/app/common/domain/texts';

@Component({
  selector: 'app-detail-info-modal',
  templateUrl: './detail-info-modal.component.html',
  styleUrls: ['./detail-info-modal.component.scss'],
})
export class DetailInfoModalComponent implements OnInit {
  @Input()
  infoData: any;
  @Input()
  title: string;

  texts: any;

  constructor() {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.texts = TEXTS;
  }
}
