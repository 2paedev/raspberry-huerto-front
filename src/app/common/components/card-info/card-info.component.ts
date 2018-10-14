import { Component, OnInit, Input } from '@angular/core';
import { getLimitsHumidityValues, getLimitsTemperatureValues } from '../../helpers/config-values';
import { LimitsHumidity, LimitsTemperature } from '../../models/limits-values-card-info';
import { SYMBOLS } from '../../domain/constants';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  symbol: string;
  @Input()
  numberInfo: string;

  maximumMinimumHumidityValues: LimitsHumidity;
  maximumMinimumTemperatureValues: LimitsTemperature;

  constructor() {}

  ngOnInit() {
    this.maximumMinimumHumidityValues = getLimitsHumidityValues();
    this.maximumMinimumTemperatureValues = getLimitsTemperatureValues();
  }

  setColor() {
    const numberInfoParsed = parseFloat(this.numberInfo);
    if (this.symbol === SYMBOLS.TEMPERATURE) {
      return this.getColorClassTemperature(numberInfoParsed);
    }
    if (this.symbol === SYMBOLS.HUMIDITY) {
      return this.getColorClassHumidity(numberInfoParsed);
    }
  }

  getColorClassTemperature(numberInfo: Number) {
    return {
      'critical-value':
        numberInfo > this.maximumMinimumTemperatureValues.minHotTemperature &&
        numberInfo < this.maximumMinimumTemperatureValues.maxHotTemperature,
      'normal-value':
        numberInfo > this.maximumMinimumTemperatureValues.minNormalTemperature &&
        numberInfo < this.maximumMinimumTemperatureValues.maxNormalTemperature,
      'warning-value':
        numberInfo > this.maximumMinimumTemperatureValues.minColdTemperature &&
        numberInfo < this.maximumMinimumTemperatureValues.maxColdTemperature,
    };
  }

  getColorClassHumidity(numberInfo: Number) {
    return {
      'critical-value':
        numberInfo > this.maximumMinimumHumidityValues.minCriticalHumidity &&
        numberInfo < this.maximumMinimumHumidityValues.maxCriticalHumidity,
      'normal-value':
        numberInfo > this.maximumMinimumHumidityValues.minNormalHumidity &&
        numberInfo < this.maximumMinimumHumidityValues.maxNormalHumidity,
      'warning-value':
        numberInfo > this.maximumMinimumHumidityValues.minWarningHumidity &&
        numberInfo < this.maximumMinimumHumidityValues.maxWarningHumidity,
    };
  }
}
