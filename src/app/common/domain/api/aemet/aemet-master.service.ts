import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { AEMET_API, AEMET_API_INFO } from './aemet-api';

@Injectable()
export class AemetMasterService {
  constructor(private clienteHttp: HttpClient) {}

  public getMunicipios(params: any): Observable<any> {
    const getMunicipiosURL = AEMET_API.MASTER.MUNICIPIOS;
    let headers = new HttpHeaders();
    headers = headers.append('api_key', AEMET_API_INFO.AEMET_API_KEY);
    const queryParams = new HttpParams();

    return this.clienteHttp.get<any>(getMunicipiosURL, { headers, params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }

  public getMunicipio(params: any): Observable<any> {
    const getMunicipioURL = `${AEMET_API.MASTER.MUNICIPIO}/${
      AEMET_API_INFO.SAN_VICENTE_RASPEIG_ID
    }`;

    let headers = new HttpHeaders();
    headers = headers.append('api_key', AEMET_API_INFO.AEMET_API_KEY);
    const queryParams = new HttpParams();

    return this.clienteHttp.get<any>(getMunicipioURL, { headers, params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }
}
