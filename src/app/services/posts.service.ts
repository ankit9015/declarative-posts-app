import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../model/posts';
import { map, mergeMap } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  getPosts() {
    return this.http
      .get<{ [id: string]: PostModel }>(
        `https://posts-app-28855-default-rtdb.firebaseio.com/posts.json`
      )
      .pipe(
        map((posts) => {
          let postsData: PostModel[] = [];
          for (let id in posts) {
            postsData.push({ ...posts[id], id });
          }
          return postsData;
        })
      );
  }

  getPostsWithCategories() {
    return this.getPosts().pipe(
      mergeMap((posts) => {
        return this.categoryService.getCategories().pipe(
          map((categories) => {
            return posts.map((post) => {
              return {
                ...post,
                categoryname: categories.find(
                  (category) => category.id === post.category
                )?.name,
              };
            });
          })
        );
      })
    );
  }
}
