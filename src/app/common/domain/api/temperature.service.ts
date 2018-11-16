import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";

import { URLS_API } from "./api";

@Injectable()
export class TemperatureService {
  protected readonly temperatureAirURL = URLS_API.TEMPERATURE.AIR;

  constructor(private http: HttpClient) {}

  // TODO: quitar any
  public historicTemperatureAir(): Observable<any> {
    const queryParams = new HttpParams();

    return this.http
      .get<any>(this.temperatureAirURL, { params: queryParams })
      .pipe(
        tap(() => {}, () => {}),
        finalize(() => {})
      );
  }
}
