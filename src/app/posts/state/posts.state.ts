export interface PostState {
  id: number;
  title: string;
  description: string;
}

export interface PostsState {
  posts: PostState[];
}

export const initialState = {
  posts: [
    { id: 1, title: 'Sample 1', description: 'Sample 1 Description' },
    { id: 2, title: 'Sample 2', description: 'Sample 2 Description' },
  ],
};
