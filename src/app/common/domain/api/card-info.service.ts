import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";

import { URLS_API } from "./api";

@Injectable()
export class CardInfoService {
  protected readonly cardInfoURL = URLS_API.ALL_CARD_INFO;

  constructor(private http: HttpClient) {}

  public getAllInfo(): Observable<any> {
    const queryParams = new HttpParams();

    return this.http.get<any>(this.cardInfoURL, { params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {})
    );
  }
}
