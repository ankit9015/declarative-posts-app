import { createAction, props } from '@ngrx/store';
import { PostState } from './posts.state';

export const ADD_POST_ACTION = `[posts page] add post`;

export const addPost = createAction(
  ADD_POST_ACTION,
  props<{ post: PostState }>()
);
