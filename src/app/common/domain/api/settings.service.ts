import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";

import { URLS_API } from "./api";
import { BasePost } from "../../models/base-post";

@Injectable()
export class SettingsService {
  protected readonly currentSettingsURL = URLS_API.SETTINGS.CURRENT;

  constructor(private http: HttpClient) {}

  public getCurrentSettingsInfo(): Observable<any> {
    const queryParams = new HttpParams();

    return this.http
      .get<any>(this.currentSettingsURL, { params: queryParams })
      .pipe(
        tap(() => {}, () => {}),
        finalize(() => {})
      );
  }

  public setCurrentSettingsInfo(params: any): Observable<BasePost> {
    const queryParams = new HttpParams();
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: queryParams
    };
    const bodyParams = params;
    return this.http
      .post<BasePost>(this.currentSettingsURL, bodyParams, httpOptions)
      .pipe(
        tap(() => {}, () => {}),
        finalize(() => {})
      );
  }
}
