import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts',
    component: PostsListComponent,
    children: [{ path: 'add', component: AddPostsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
