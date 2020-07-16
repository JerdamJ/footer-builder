import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlotiqService {

  constructor(private http: HttpClient) { }

  getModules() {
    return this.http.get(
      environment.flotiqApiUrl +
      '/api/v1/content/modules?limit=100&page=1&hydrate=1&auth_token=' +
      environment.flotiqApiKey
    );
  }
}
