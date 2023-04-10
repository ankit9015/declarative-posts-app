import { NgModule } from '@angular/core';
import { PostsComponent } from '../pages/posts/posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { EditPostComponent } from './edit-post/edit-posts.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';
import { POSTS_STATE_NAME } from './state/posts.selector';

const routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostsComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild(routes),
    StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
  ],
  declarations: [
    PostsComponent,
    PostsListComponent,
    AddPostsComponent,
    EditPostComponent,
  ],
})
export class PostsModule {}
