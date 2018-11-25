import { Reducer, combineReducers} from 'redux';


export interface AppState {
  authors: AuthorState;
  threads: ThreadState;
  articles: ArticleState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  authors: AuthorsReducer,
  threads: ThreadsReducer,
  articles: ArticlesReducer
});

export default rootReducer;
