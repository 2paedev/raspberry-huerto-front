import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PanelInfoModalComponent } from '../modals/panel-info-modal/panel-info-modal.component';
import { TEXTS } from '../../domain/texts';

const OPTIONS_PANEL_INFO_MODAL = {
  windowClass: 'camera-panel-info-modal',
  backdrop: 'static' as 'static',
  keyboard: false,
};

@Component({
  selector: 'app-camera-zone',
  templateUrl: './camera-zone.component.html',
  styleUrls: ['./camera-zone.component.scss'],
})
export class CameraZoneComponent implements OnInit {
  @Input()
  title: string;

  panelInfoModal: any;

  constructor(private serviceModal: NgbModal) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
  }

  initVariables() {}

  openPanelInfoModal() {
    this.panelInfoModal = this.serviceModal.open(PanelInfoModalComponent, OPTIONS_PANEL_INFO_MODAL);
    this.panelInfoModal.componentInstance.messagesInfo = ['Test Message 1', 'Test Message 2'];
    this.panelInfoModal.componentInstance.title = TEXTS.PANEL_INFO_MODAL_TITLE.CAMERA_ZONE;
  }
}
