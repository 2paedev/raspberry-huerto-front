import { Injectable } from '@angular/core';
import { City } from 'src/app/common/models/city';
import { formatToMeter } from 'src/app/common/helpers/symbols';
import { Prediction, WindValues } from '../models/daily-weather';
import { TEXTS } from '../domain/texts';

@Injectable({
  providedIn: 'root',
})
export class DetailInfoModalFormatter {
  formatDetailInfoData(data: City) {
    const dataFormatted = [];
    dataFormatted.push({
      label: TEXTS.LABELS.NAME,
      text: data.name,
    });

    dataFormatted.push({
      label: TEXTS.LABELS.LATITUDE,
      text: data.latitude,
    });

    dataFormatted.push({
      label: TEXTS.LABELS.LONGITUDE,
      text: data.longitude,
    });

    dataFormatted.push({
      label: TEXTS.LABELS.ALTITUDE,
      text: formatToMeter(data.altitude),
    });

    dataFormatted.push({
      label: TEXTS.LABELS.RESIDENTS_NUMBER,
      text: data.residentsNumber,
    });

    return dataFormatted;
  }

  formatDetailPredictionData(data: Prediction) {
    const dataFormatted = [];
    const wind = this.getMaxMinWind(data.wind);
    dataFormatted.push({
      label: TEXTS.LABELS.DATE,
      text: data.date,
    });

    dataFormatted.push({
      label: TEXTS.LABELS.UV_MAX,
      text: data.uvMax,
    });

    // dataFormatted.push({
    //   label: 'Sky',
    //   text: data.sky,
    // });

    dataFormatted.push({
      label: TEXTS.LABELS.WIND_MAX,
      text: wind.max,
    });

    dataFormatted.push({
      label: TEXTS.LABELS.WIND_MIN,
      text: wind.min,
    });

    return dataFormatted;
  }

  getMaxMinWind(windData: WindValues[]) {
    const wind = {
      max: 0,
      min: 10000,
    };
    windData.forEach((data: WindValues) => {
      if (data.speed > wind.max) {
        wind.max = data.speed;
      }
      if (data.speed < wind.min) {
        wind.min = data.speed;
      }
    });
    return wind;
  }
}
