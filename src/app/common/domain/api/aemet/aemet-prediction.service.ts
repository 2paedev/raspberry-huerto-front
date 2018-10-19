import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { AEMET_API, AEMET_API_INFO } from './aemet-api';

@Injectable()
export class AemetPredictionService {
  constructor(private clienteHttp: HttpClient) {}

  public getDailyPrediction(params: any): Observable<any> {
    const dailyPredictionURL = `${AEMET_API.PREDICTION.DAILY}/${
      AEMET_API_INFO.SAN_VICENTE_RASPEIG.PROVINCIA_CODE
    }${AEMET_API_INFO.SAN_VICENTE_RASPEIG.MUNICIPIO_CODE}`;
    let headers = new HttpHeaders();
    headers = headers.append('api_key', AEMET_API_INFO.AEMET_API_KEY);
    const queryParams = new HttpParams();

    return this.clienteHttp.get<any>(dailyPredictionURL, { headers, params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }
}
