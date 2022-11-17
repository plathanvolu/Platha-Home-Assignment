import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  ApiUrl = environment.ApiUrl;

  constructor(private _http: HttpClient) { }

  getData(url: string) {
    return this._http.get(`${this.ApiUrl}${url}`)
  }

  getChartInfo() {
    return this._http.get("http://localhost:3000/charts")
  }
}
