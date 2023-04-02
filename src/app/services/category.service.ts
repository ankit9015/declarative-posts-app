import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CategoryModel } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http
      .get<{ [id: string]: CategoryModel }>(
        `https://posts-app-28855-default-rtdb.firebaseio.com/categories.json`
      )
      .pipe(
        map((categories) => {
          const categoriesData: CategoryModel[] = [];
          for (let id in categories) {
            categoriesData.push({ ...categories[id], id });
          }
          return categoriesData;
        })
      );
  }
}
