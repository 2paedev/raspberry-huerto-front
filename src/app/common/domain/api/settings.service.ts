import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { URLS_API } from './api';
import { BasePost } from '../../models/base-post';

@Injectable()
export class SettingsService {
  protected readonly currentSettingsURL = URLS_API.SETTINGS.CURRENT;
  protected readonly manualSettingsURL = URLS_API.SETTINGS.MANUAL;
  protected readonly autoHoursSettingsURL = URLS_API.SETTINGS.AUTO_HOURS;
  protected readonly autoHumiditySettingsURL = URLS_API.SETTINGS.AUTO_HUMIDITY;

  constructor(private clientHttp: HttpClient) {}

  public getCurrentSettingsInfo(params: any): Observable<any> {
    const queryParams = new HttpParams();

    return this.clientHttp.get<any>(this.currentSettingsURL, { params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }

  public setManualSettings(params: any): Observable<BasePost> {
    const queryParams = new HttpParams();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: queryParams,
    };
    const bodyParams = params;
    return this.clientHttp.post<BasePost>(this.manualSettingsURL, bodyParams, httpOptions).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }

  public setAutoHoursSettings(params: any): Observable<BasePost> {
    const queryParams = new HttpParams();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: queryParams,
    };
    const bodyParams = params;
    return this.clientHttp.post<BasePost>(this.autoHoursSettingsURL, bodyParams, httpOptions).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }

  public setAutoHumiditySettings(params: any): Observable<BasePost> {
    const queryParams = new HttpParams();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: queryParams,
    };
    const bodyParams = params;
    return this.clientHttp
      .post<BasePost>(this.autoHumiditySettingsURL, bodyParams, httpOptions)
      .pipe(
        tap(() => {}, () => {}),
        finalize(() => {}),
      );
  }
}
