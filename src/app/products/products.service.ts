import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from '../models/IProducts';
import { ApiUrlConstants } from '../common/constants/apiUrl.constants';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(ApiUrlConstants.Products_All)
  }
}
