import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";

import { URLS_API } from "./api";
@Injectable()
export class HumidityService {
  protected readonly humidityAirURL = URLS_API.HUMIDITY.AIR;
  protected readonly humidityGroundURL = URLS_API.HUMIDITY.GROUND;

  constructor(private http: HttpClient) {}

  // TODO: quitar any
  public historicHumidityAir(): Observable<any> {
    const queryParams = new HttpParams();

    return this.http
      .get<any>(this.humidityAirURL, { params: queryParams })
      .pipe(
        tap(() => {}, () => {}),
        finalize(() => {})
      );
  }

  // TODO: quitar any
  public historicHumidityGround(): Observable<any> {
    const queryParams = new HttpParams();

    return this.http
      .get<any>(this.humidityGroundURL, { params: queryParams })
      .pipe(
        tap(() => {}, () => {}),
        finalize(() => {})
      );
  }
}
