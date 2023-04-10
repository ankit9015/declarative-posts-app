import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const POSTS_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>(POSTS_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => state.posts);

export const getPostById = createSelector(
  getPostsState,
  (state: any, props: any) => {
    console.log('props', props, state.posts);

    return state.posts.find((post: any) => post.id == props.id);
  }
);
