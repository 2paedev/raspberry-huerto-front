import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { getLimitsHumidityValues, getLimitsTemperatureValues } from '../../helpers/config-values';
import { LimitsHumidity, LimitsTemperature } from '../../models/limits-values-card-info';
import { SYMBOLS } from '../../domain/constants';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
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
  @Output()
  callbackStats = new EventEmitter();

  maximumMinimumHumidityValues: LimitsHumidity;
  maximumMinimumTemperatureValues: LimitsTemperature;
  isSymbolTemperature: boolean;

  constructor() {}

  ngOnInit() {
    this.maximumMinimumHumidityValues = getLimitsHumidityValues();
    this.maximumMinimumTemperatureValues = getLimitsTemperatureValues();
    this.isSymbolTemperature = this.symbol === SYMBOLS.TEMPERATURE;
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
          numberInfo < this.maximumMinimumTemperatureValues.maxColdWarningTemperature)
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
        numberInfo <= this.maximumMinimumHumidityValues.maxWarningHumidity
    };
  }
}
