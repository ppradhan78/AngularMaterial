import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategories } from '../models/ICategories';
import { ApiUrlConstants } from '../common/constants/apiUrl.constants';
@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) {
  }
  getAllcategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(ApiUrlConstants.Categories_All)
  }
}
