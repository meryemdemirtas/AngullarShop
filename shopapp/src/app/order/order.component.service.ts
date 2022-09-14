import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { order } from './order.interface';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  //https://localhost:7250/WeatherForecast/xxx
  baseUrl = 'https://localhost:7250/';

  constructor(private http: HttpClient) {}

  getOrder (): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'WeatherForecast/xxx');
    
  }

  getOrderList(): Observable<order[]>{
    return this.http.get<order[]>(this.baseUrl + 'WeatherForecast/getlist');
  }

  save(order: order) {
    return this.http.post(this.baseUrl + 'WeatherForecast/', order);
  }
}