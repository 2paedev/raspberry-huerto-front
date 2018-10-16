import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastFormatter {
  formatMunicipioInfo(data) {
    const dataFormatted = {
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
}
