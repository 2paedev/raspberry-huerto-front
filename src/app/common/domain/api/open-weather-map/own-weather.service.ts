import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { OWM_API } from './owm-api';

@Injectable()
export class OwnWeatherService {
  constructor(private clienteHttp: HttpClient) {}

  public getWeather(params: any): Observable<any> {
    const weatherURL = OWM_API.WEATHER;

    return this.clienteHttp.get<any>(weatherURL, {}).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }
}
