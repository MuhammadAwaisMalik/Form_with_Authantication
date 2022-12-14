import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private url = environment.baseUrl;
  constructor(private htttp: HttpClient) {}
  getSpecialEvents() {
    return this.htttp.get<any>(`${this.url}/special`);
  }
  getEvents() {
    return this.htttp.get<any>(`${this.url}/events`);
  }
}
