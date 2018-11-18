import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SETTINGS_OPTIONS } from "../../domain/constants";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PanelInfoModalComponent } from "../modals/panel-info-modal/panel-info-modal.component";
import { TEXTS } from "../../domain/texts";
import { SettingsService } from "../../domain/api/settings.service";
import { formatMessageError } from "../../helpers/errors";
import { SettingsInfo } from "../../models/settings-info";
import {
  getSettingsOptionsTitle,
  getSettingsValueText
} from "../../helpers/common";
import { SpinnerService } from "../../services/spinner.service";

const OPTIONS_PANEL_INFO_MODAL = {
  windowClass: "irrigation-panel-info-modal",
  backdrop: "static" as "static",
  keyboard: false
};

@Component({
  selector: "app-irrigation-settings",
  templateUrl: "./irrigation-settings.component.html",
  styleUrls: ["./irrigation-settings.component.scss"],
  providers: [SettingsService]
})
export class IrrigationSettingsComponent implements OnInit {
  @Input()
  title: string;

  optionSelected: any;
  settingsOptions: any;
  texts: any;
  panelInfoModal: any;
  currentSettings: SettingsInfo;
  currentState: string;
  messageError: string;
  errorInCurrentSettingsInfo: boolean;
  errorInManual: boolean;

  constructor(
    private serviceModal: NgbModal,
    private settingsApi: SettingsService,
    private spinner: SpinnerService
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
    this.getCurrentSettingsInfo();
  }

  initVariables() {
    this.settingsOptions = SETTINGS_OPTIONS;
    this.errorInManual = false;
    this.errorInCurrentSettingsInfo = false;
    this.texts = TEXTS;
    this.selectOption(SETTINGS_OPTIONS.MANUAL.ID);
    this.currentSettings = {
      settingId: 0,
      value: 0
    };
  }

  getCurrentSettingsInfo() {
    this.settingsApi.getCurrentSettingsInfo().subscribe(
      response => {
        this.errorInCurrentSettingsInfo = false;
        this.currentSettings = response;
        this.currentState = this.formatCurrentState(response);
      },
      error => {
        this.errorInCurrentSettingsInfo = true;
        this.messageError = formatMessageError(
          error,
          TEXTS.MESSAGE_ERRORS.CURRENT_SETTINGS
        );
      }
    );
  }

  formatCurrentState(data: SettingsInfo) {
    const settingTitle = getSettingsOptionsTitle(data.settingId);
    const valueText = getSettingsValueText(data.value);
    return `${settingTitle} (${valueText})`;
  }

  openPanelInfoModal() {
    this.panelInfoModal = this.serviceModal.open(
      PanelInfoModalComponent,
      OPTIONS_PANEL_INFO_MODAL
    );
    this.panelInfoModal.componentInstance.messagesInfo = [
      "Test Message 1",
      "Test Message 2"
    ];
    this.panelInfoModal.componentInstance.title =
      TEXTS.PANEL_INFO_MODAL_TITLE.IRRIGATION_SETTINGS;
  }

  selectOption(optionId: number) {
    this.optionSelected = optionId;
    this.errorInCurrentSettingsInfo = false;
  }

  getClass(optionId) {
    return {
      actived: this.optionSelected === optionId,
      disabled: this.optionSelected !== optionId
    };
  }

  setNewConfiguration(dataCheckbox: boolean) {
    this.spinner.activate();
    this.errorInManual = false;
    const currentSettingValue = this.formatResultChoice(dataCheckbox);
    const bodyParams = {
      settingId: this.optionSelected,
      value: currentSettingValue
    };

    this.settingsApi.setCurrentSettingsInfo(bodyParams).subscribe(
      response => {
        this.spinner.deactivate();
        this.errorInManual = false;
        this.setCurrentSettingAndState(bodyParams);
      },
      error => {
        this.spinner.deactivate();
        this.errorInManual = true;
        this.messageError = formatMessageError(
          error,
          TEXTS.MESSAGE_ERRORS.MANUAL_SETTINGS
        );
        this.setCurrentSettingAndState(bodyParams);
      }
    );
  }

  formatResultChoice(data: boolean) {
    if (this.optionSelected === SETTINGS_OPTIONS.MANUAL.ID) {
      return data === false
        ? SETTINGS_OPTIONS.MANUAL.VALUES.OFF
        : SETTINGS_OPTIONS.MANUAL.VALUES.ON;
    }
  }

  setCurrentSettingAndState(settings: SettingsInfo) {
    this.currentState = this.formatCurrentState(settings);
    this.currentSettings = settings;
  }

  existsErrors() {
    return this.errorInCurrentSettingsInfo;
  }
}
