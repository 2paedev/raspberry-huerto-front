import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { URLS_API } from './api';
import { isUndefinedOrNullOrEmpty } from '../../helpers/common';

@Injectable()
export class TestService {
  protected readonly testURL = URLS_API.TEST;

  constructor(private clienteHttp: HttpClient) {}

  public getTest(params: any): Observable<any> {
    let queryParams = new HttpParams();

    if (!isUndefinedOrNullOrEmpty(params.testParam)) {
      queryParams = queryParams.set('testParam', params.testParam);
    }

    return this.clienteHttp.get<any>(this.testURL, { params: queryParams }).pipe(
      tap(() => {}, () => {}),
      finalize(() => {}),
    );
  }

  // public modificarBeneficiario(
  //   codigoPoliza: string,
  //   codigoCertificado: string,
  //   parametros: Beneficiario,
  // ): Observable<BasePost> {
  //   const queryParams = this.parametrosHttpBase.obtenerParametrosHttpBase();
  //   const opcionesHttp = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //     params: queryParams,
  //   };

  //   const modificarBeneficiarioUrlFormateada = `${
  //     this.beneficiarioModificarURL
  //   }/${codigoPoliza}/${codigoCertificado}`;
  //   return this.clienteHttp
  //     .post<BasePost>(modificarBeneficiarioUrlFormateada, parametros, opcionesHttp)
  //     .pipe(
  //       tap(respuesta => {}, error => {}),
  //       finalize(() => {}),
  //     );
  // }
}
