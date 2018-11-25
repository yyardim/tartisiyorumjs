import { Reducer, combineReducers} from 'redux';
import { AuthorsState, AuthorsReducer } from './author/authors.reducer';
export * from './author/authors.reducer';

import { ThreadsState, ThreadsReducer } from './thread/threads.reducer';
export * from './thread/threads.reducer';

export interface AppState {
  authors: AuthorsState;
  threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  authors: AuthorsReducer,
  threads: ThreadsReducer,
});

export default rootReducer;
