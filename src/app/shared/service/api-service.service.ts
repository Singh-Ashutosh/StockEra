import { Observable } from 'rxjs';
import { HttpService } from './http-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) { }

  getFullStockInformation(): Observable<any> {
    return this.httpService.getStock('/fullData?ticker=%3CREQUIRED%3E')
  }
}
