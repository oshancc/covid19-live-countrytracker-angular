import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http: HttpClient) { }

  getCountries():Observable<any>{
    const url = "https://api.covid19api.com/countries";
    return this.http.get<any>(url)
  }

  getRealtimeData(country: any):Observable<any>{
    const url = "https://api.covid19api.com/total/country/"+ country;
    return this.http.get<any>(url)
  }

}
