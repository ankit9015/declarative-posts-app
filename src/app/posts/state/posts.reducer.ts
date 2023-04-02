import { Action, State, createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';

const _postsReducer = createReducer(initialState);

export function postsReducer(state: any, action: Action) {
  return _postsReducer(state, action);
}
