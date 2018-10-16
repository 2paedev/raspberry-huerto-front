import { Injectable } from '@angular/core';
import { City } from 'src/app/common/models/city';
import { formatToMeter } from 'src/app/common/helpers/symbols';

@Injectable({
  providedIn: 'root',
})
export class DetailInfoModalFormatter {
  formatDetailInfoData(data: City) {
    const dataFormatted = [];
    dataFormatted.push({
      label: 'Name',
      text: data.name,
    });

    dataFormatted.push({
      label: 'Latitude',
      text: data.latitude,
    });

    dataFormatted.push({
      label: 'Longitude',
      text: data.longitude,
    });

    dataFormatted.push({
      label: 'Altitude',
      text: formatToMeter(data.altitude),
    });

    dataFormatted.push({
      label: 'Residents number',
      text: data.residentsNumber,
    });

    return dataFormatted;
  }
}
