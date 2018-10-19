import { Component, OnInit, Input } from '@angular/core';
import { SETTINGS_OPTIONS } from '../../domain/constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PanelInfoModalComponent } from '../modals/panel-info-modal/panel-info-modal.component';
import { TEXTS } from '../../domain/texts';

const OPTIONS_PANEL_INFO_MODAL = {
  windowClass: 'irrigation-panel-info-modal',
  backdrop: 'static' as 'static',
  keyboard: false,
};

@Component({
  selector: 'app-irrigation-settings',
  templateUrl: './irrigation-settings.component.html',
  styleUrls: ['./irrigation-settings.component.scss'],
})
export class IrrigationSettingsComponent implements OnInit {
  @Input()
  title: string;

  optionSelected: any;
  settingsOptions: any;
  texts: any;
  panelInfoModal: any;

  constructor(private serviceModal: NgbModal) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
  }

  initVariables() {
    this.settingsOptions = SETTINGS_OPTIONS;
    this.texts = TEXTS;
    this.selectOption(SETTINGS_OPTIONS.MANUAL.ID);
  }

  openPanelInfoModal() {
    this.panelInfoModal = this.serviceModal.open(PanelInfoModalComponent, OPTIONS_PANEL_INFO_MODAL);
    this.panelInfoModal.componentInstance.messagesInfo = ['Test Message 1', 'Test Message 2'];
    this.panelInfoModal.componentInstance.title = TEXTS.PANEL_INFO_MODAL_TITLE.IRRIGATION_SETTINGS;
  }

  selectOption(optionId: number) {
    this.optionSelected = optionId;
  }

  getClass(optionId) {
    return {
      actived: this.optionSelected === optionId,
      disabled: this.optionSelected !== optionId,
    };
  }
}
