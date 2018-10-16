import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-info-modal',
  templateUrl: './detail-info-modal.component.html',
  styleUrls: ['./detail-info-modal.component.scss'],
})
export class DetailInfoModalComponent implements OnInit {
  @Input()
  infoData: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
