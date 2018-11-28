import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";

import { URLS_API } from "./api";
import { StatsDataModel } from "../../models/stats-data-model";
@Injectable()
export class AemetService {
  protected readonly cityInfoURL = URLS_API.AEMET.CITY_INFO;
  protected readonly predictionURL = URLS_API.AEMET.PREDICTION;

  constructor(private http: HttpClient) {}

  public getCityInfo(): Observable<StatsDataModel[]> {
    const queryParams = new HttpParams();

    return this.http.get<any>(this.cityInfoURL, { params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {})
    );
  }

  public getPredictionInfo(): Observable<StatsDataModel[]> {
    const queryParams = new HttpParams();

    return this.http.get<any>(this.predictionURL, { params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {})
    );
  }
}
