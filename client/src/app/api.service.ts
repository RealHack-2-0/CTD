import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  login(authCredentials) {
    console.log(authCredentials);
    return this.http.post(this.url + '/authenticate', authCredentials);
  }
  
}
