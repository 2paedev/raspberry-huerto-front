import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getLimitsHumidityValues, getLimitsTemperatureValues } from '../../helpers/config-values';
import { LimitsHumidity, LimitsTemperature } from '../../models/limits-values-card-info';
import { SYMBOLS } from '../../domain/constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PanelInfoModalComponent } from '../modals/panel-info-modal/panel-info-modal.component';
import { TEXTS } from '../../domain/texts';

const OPTIONS_PANEL_INFO_MODAL = {
  windowClass: 'card-info-panel-modal',
  backdrop: 'static' as 'static',
  keyboard: false,
};

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input()
  identificator: Number;
  @Input()
  title: string;
  @Input()
  iconTitle: string;
  @Input()
  symbol: string;
  @Input()
  numberInfo: string;
  @Input()
  panelMessage: string[];
  @Input()
  panelTitle: string;

  @Output()
  callbackStats = new EventEmitter();

  maximumMinimumHumidityValues: LimitsHumidity;
  maximumMinimumTemperatureValues: LimitsTemperature;
  isSymbolTemperature: boolean;
  panelInfoModal: any;
  texts: any;

  constructor(private serviceModal: NgbModal) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.maximumMinimumHumidityValues = getLimitsHumidityValues();
    this.maximumMinimumTemperatureValues = getLimitsTemperatureValues();
    this.isSymbolTemperature = this.symbol === SYMBOLS.TEMPERATURE;
    this.texts = TEXTS;
  }

  goToStats() {
    this.callbackStats.emit(this.identificator);
  }

  setColor() {
    const numberInfoParsed = parseFloat(this.numberInfo);
    return this.isSymbolTemperature
      ? this.getColorClassTemperature(numberInfoParsed)
      : this.getColorClassHumidity(numberInfoParsed);
  }

  getColorClassTemperature(numberInfo: Number) {
    return {
      'critical-value':
        (numberInfo >= this.maximumMinimumTemperatureValues.minHotCriticalTemperature &&
          numberInfo < this.maximumMinimumTemperatureValues.maxHotCriticalTemperature) ||
        (numberInfo >= this.maximumMinimumTemperatureValues.minColdCriticalTemperature &&
          numberInfo < this.maximumMinimumTemperatureValues.maxColdCriticalTemperature),
      'normal-value':
        numberInfo >= this.maximumMinimumTemperatureValues.minNormalTemperature &&
        numberInfo < this.maximumMinimumTemperatureValues.maxNormalTemperature,
      'warning-value':
        (numberInfo >= this.maximumMinimumTemperatureValues.minHotWarningTemperature &&
          numberInfo < this.maximumMinimumTemperatureValues.maxHotWarningTemperature) ||
        (numberInfo >= this.maximumMinimumTemperatureValues.minColdWarningTemperature &&
          numberInfo < this.maximumMinimumTemperatureValues.maxColdWarningTemperature),
    };
  }

  getColorClassHumidity(numberInfo: Number) {
    return {
      'critical-value':
        numberInfo > this.maximumMinimumHumidityValues.minCriticalHumidity &&
        numberInfo < this.maximumMinimumHumidityValues.maxCriticalHumidity,
      'normal-value':
        numberInfo > this.maximumMinimumHumidityValues.minNormalHumidity &&
        numberInfo <= this.maximumMinimumHumidityValues.maxNormalHumidity,
      'warning-value':
        numberInfo > this.maximumMinimumHumidityValues.minWarningHumidity &&
        numberInfo <= this.maximumMinimumHumidityValues.maxWarningHumidity,
    };
  }

  openPanelInfoModal() {
    this.panelInfoModal = this.serviceModal.open(PanelInfoModalComponent, OPTIONS_PANEL_INFO_MODAL);
    // tslint:disable-next-line:max-line-length
    this.panelInfoModal.componentInstance.messagesInfo = this.panelMessage;
    this.panelInfoModal.componentInstance.title = this.panelTitle;
  }
}
