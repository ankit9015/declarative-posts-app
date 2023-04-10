import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { PostState, PostsState } from '../state/posts.state';
import { getPosts } from '../state/posts.selector';
import { deletePost } from '../state/posts.action';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<PostState[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.posts$ = this.store.select(getPosts);
  }

  deletePost(id: number) {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
