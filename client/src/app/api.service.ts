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
    return this.http.post(this.url + '/logging', authCredentials);
  }

  register(formData){
    console.log(formData)
    return this.http.post(this.url + '/registerUser', formData);;
  }
  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

}
