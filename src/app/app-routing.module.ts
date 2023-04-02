import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { CounterComponent } from './counter/counter/counter.component';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
