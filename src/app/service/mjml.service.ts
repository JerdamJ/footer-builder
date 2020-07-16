import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MjmlService {

  constructor(private http: HttpClient) { }

  render(mjml) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(environment.mjmlApplicationKey + ':' + environment.mjmlPublicKey)
      })
    };
    return this.http.post(environment.mjmlApi + '/v1/render', {mjml}, httpOptions);
  }
}
