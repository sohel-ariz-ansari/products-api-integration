import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://dummyjson.com/products';

  private httpClient = inject(HttpClient);

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
