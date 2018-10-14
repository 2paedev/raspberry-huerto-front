import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { URLS_API } from './api';

@Injectable()
export class CardInfoService {
  protected readonly testURL = URLS_API.ALL_CARD_INFO;

  constructor(private clienteHttp: HttpClient) {}

  public getAllInfo(params: any): Observable<any> {
    const queryParams = new HttpParams();

    return this.clienteHttp.get<any>(this.testURL, { params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }
}
