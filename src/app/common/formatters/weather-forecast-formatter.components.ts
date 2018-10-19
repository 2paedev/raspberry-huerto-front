import { Injectable } from '@angular/core';
import { City } from '../models/city';
import {
  DailyWeather,
  Prediction,
  MaxMin,
  PeriodValues,
  WindValues,
} from '../models/daily-weather';
import { ValueTransformer } from '@angular/compiler/src/util';
import { isUndefinedOrNullOrEmpty } from '../helpers/common';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastFormatter {
  formatMunicipioInfo(data: any) {
    const dataFormatted: City = {
      id: data.id,
      name: data.nombre,
      latitude: data.latitud,
      latitudeDec: data.latitud_dec,
      longitude: data.longitud,
      longitudeDec: data.longitud_dec,
      altitude: data.altitud,
      residentsNumber: data.num_hab,
    };
    return dataFormatted;
  }

  formatPredictionDailyData(data: any) {
    const dataFormatted: DailyWeather = {
      id: data.id,
      municipioName: data.nombre,
      provinciaName: data.provincia,
      reportDate: data.elaborado,
      prediction: this.formatPredictionValues(data.prediccion),
    };
    return dataFormatted;
  }

  formatPredictionValues(predictionData: any) {
    const days = predictionData.dia;
    const predictionDays = [];
    days.forEach((day) => {
      const dayData: Prediction = {
        date: day.fecha,
        uvMax: day.uvMax,
        relativeHumidity: this.formatMaxMin(day.humedadRelativa),
        thermalSensation: this.formatMaxMin(day.sensTermica),
        temperature: this.formatMaxMin(day.temperatura),
        precipitationProbability: this.formatPeriodValues(day.probPrecipitacion),
        sky: this.formatPeriodValues(day.estadoCielo),
        wind: this.formatWindValues(day.viento),
      };
      predictionDays.push(dayData);
    });
    return predictionDays;
  }

  formatMaxMin(value: any) {
    const dataFormatted: MaxMin = {
      max: value.maxima,
      min: value.minima,
    };
    return dataFormatted;
  }

  formatPeriodValues(periods: any[]) {
    const dataFormatted: PeriodValues[] = [];
    periods.forEach((period) => {
      const periodValue: PeriodValues = {
        value: period.value,
        hoursDayPeriod: period.periodo,
      };
      if (!isUndefinedOrNullOrEmpty(period.descripcion)) {
        periodValue['description'] = period.descripcion;
      }
      dataFormatted.push(periodValue);
    });
    return dataFormatted;
  }

  formatWindValues(windPeriods: any[]) {
    const dataFormatted: WindValues[] = [];
    windPeriods.forEach((period) => {
      const periodValue: WindValues = {
        direction: period.direccion,
        speed: period.velocidad,
        period: period.periodo,
      };
      dataFormatted.push(periodValue);
    });
    return dataFormatted;
  }
}
