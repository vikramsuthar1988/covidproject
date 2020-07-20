import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_KEY: any;

  

  constructor(private httpClient: HttpClient) { }
  
  public getCovidData(){
    return this.httpClient.get(`https://api.covid19api.com/summary`);
  }
}
