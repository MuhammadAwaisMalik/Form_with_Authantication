import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.baseUrl;
  constructor(private htttp: HttpClient, private _route: Router) {}
  registerUser(user: any) {
    return this.htttp.post<any>(`${this.url}/register`, user);
  }
  loginUser(user: any) {
    return this.htttp.post<any>(`${this.url}/login`, user);
  }
  LoggedIn() {
    return !!localStorage.getItem('token');
  }
  loggedOut() {
    localStorage.removeItem('token');
    this._route.navigate(['/events']);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
