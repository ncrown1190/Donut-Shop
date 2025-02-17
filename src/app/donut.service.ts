import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts';

  constructor(private http: HttpClient) { }

  getDonuts(): Observable<any>{
    return this.http.get(`${this.apiUrl}.json`);
  }

  getDonutDetails(id: number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}.json`);
  }
}
