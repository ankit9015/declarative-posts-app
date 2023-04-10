import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostState } from '../state/posts.state';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost, updatePost } from '../state/posts.action';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById } from '../state/posts.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  postForm!: FormGroup;
  post!: PostState;
  postSubscription!: Subscription;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);

      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          console.log(data);
          this.createForm();
        });
    });
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  showDescriptionErrors() {
    const description = this.postForm.get('description');
    if (description?.touched && !description.valid) {
      return 'Description is required';
    }
    return;
  }

  updatePost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: PostState = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }
}
