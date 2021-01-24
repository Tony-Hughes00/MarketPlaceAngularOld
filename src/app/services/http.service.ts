import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get (url) {
    return this.http.get(url);
  }
  public post(url: string, data: any) {
    return this.http.post(environment.apiUrl + url, data);
  }
}
