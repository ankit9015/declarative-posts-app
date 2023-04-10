import { Action, State, createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import { addPost, deletePost, updatePost } from './posts.action';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post['id'] = state.posts.length + 1;
    return { ...state, posts: [...state.posts, post] };
  }),
  on(updatePost, (state, action) => {
    let updatedPost = state.posts.map((post) => {
      return post.id == action.post.id ? action.post : post;
    });

    return { ...state, posts: updatedPost };
  }),

  on(deletePost, (state, action) => {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id != action.id),
    };
  })
);

export function postsReducer(state: any, action: Action) {
  return _postsReducer(state, action);
}
