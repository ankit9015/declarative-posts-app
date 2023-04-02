import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from 'src/app/model/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnDestroy {
  // posts: PostModel[] = [];
  postsSubscription!: Subscription;
  posts$ = this.postsService.getPostsWithCategories();

  constructor(
    private postsService: PostsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.posts$ = this.postsService.getPostsWithCategories();
    // .subscribe((data) => {
    //   this.posts = data;
    //   this.cd.detectChanges();
    // });
  }

  ngOnDestroy(): void {
    // this.postsSubscription.unsubscribe();
  }
}
