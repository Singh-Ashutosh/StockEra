import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {

  private baseUrl = 'https://yh-finance-complete.p.rapidapi.com';

  constructor(private httpClient: HttpClient) { }

  getStock(url: string, params?: any): Observable<any> {
    const data = { params, header: this.getAuthHeader() };
    return this.httpClient.get(this.baseUrl + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  private getAuthHeader(): { [header: string]: string | string[]; } {
    return {
      'X-RapidAPI-Key': '4861eeb6e7msh0e1bccadff35cf1p11192ajsn1ebc44606bd7',
      'X-RapidAPI-Host': 'yh-finance-complete.p.rapidapi.com'
    };
  }

  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (response.status === 401) {
      // auth token delete
      // redirect login page
    }
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    if (key === 'isTrusted') {
      // this will occur when not connected to internet
    } else {
      message = key + ' : ' + message;
    }
    // call snackbar and show error with message
    return throwError({ messages: message, error });
  }

}
