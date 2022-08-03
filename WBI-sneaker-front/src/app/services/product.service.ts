import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:3000';

  getAllProduct(): Observable<any>{
    return this.http.get(`${this.URL}/product`)
  }

  searchShoe({param}:any): Observable<any>{
    return this.http.get(`${this.URL}?param=${param}`)
  }

}
