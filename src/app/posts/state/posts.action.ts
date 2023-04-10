import { createAction, props } from '@ngrx/store';
import { PostState } from './posts.state';

export const ADD_POST_ACTION = `[posts page] add post`;
export const UPDATE_POST = `[posts page] update post`;
export const DELETE_POST = `[posts page] delete post`;

export const addPost = createAction(
  ADD_POST_ACTION,
  props<{ post: PostState }>()
);

export const updatePost = createAction(
  UPDATE_POST,
  props<{ post: PostState }>()
);

export const deletePost = createAction(DELETE_POST, props<{ id: number }>());
