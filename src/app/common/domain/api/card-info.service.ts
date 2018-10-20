import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { URLS_API } from './api';

@Injectable()
export class CardInfoService {
  protected readonly cardInfoURL = URLS_API.ALL_CARD_INFO;

  constructor(private clientHttp: HttpClient) {}

  public getAllInfo(params: any): Observable<any> {
    const queryParams = new HttpParams();

    return this.clientHttp.get<any>(this.cardInfoURL, { params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }
}
