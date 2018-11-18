import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";

import { URLS_API } from "./api";
import { StatsDataModel } from "../../models/stats-data-model";
@Injectable()
export class HumidityService {
  protected readonly humidityAirURL = URLS_API.HUMIDITY.AIR;
  protected readonly humidityGroundURL = URLS_API.HUMIDITY.GROUND;

  constructor(private http: HttpClient) {}

  public historicHumidityAir(): Observable<StatsDataModel[]> {
    const queryParams = new HttpParams();

    return this.http
      .get<any>(this.humidityAirURL, { params: queryParams })
      .pipe(
        tap(() => {}, () => {}),
        finalize(() => {})
      );
  }

  public historicHumidityGround(): Observable<StatsDataModel[]> {
    const queryParams = new HttpParams();

    return this.http
      .get<any>(this.humidityGroundURL, { params: queryParams })
      .pipe(
        tap(() => {}, () => {}),
        finalize(() => {})
      );
  }
}
