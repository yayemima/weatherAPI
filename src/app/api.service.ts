import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { Weather } from './interfaces/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient:HttpClient ) { }

  getWeather() :Observable<any> {
    var returnVar = this.httpClient.get<any>(environment.apiEndpoint);
  
    return returnVar;
  }
}
