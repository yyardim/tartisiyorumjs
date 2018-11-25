import { Action } from 'redux';
import { Thread } from './thread.model';
import { Article } from '../article/article.model';
import * as ThreadActions from './thread.actions';

export interface ThreadsEntities {
  [id: string]: Thread;
}

export interface ThreadsState {
  ids: string[];
  entities: ThreadsEntities;
  currentThreadId?: string;
}

const initialState: ThreadsState = {
  ids: [],
  currentThreadId: null,
  entities: {}
};

export const ThreadsReducer = (state: ThreadsState = initialState, action: Action): ThreadsState => {
  switch (action.type) {

    // Add a new Thread to the list of entities
    case ThreadActions.ADD_THREAD: {
      const thread = (<ThreadActions.AddThreadAction>action).thread;

      if (state.ids.includes(thread.threadId)) {
        return state;
      }

      return {
        ids: [...state.ids, thread.threadId],
        currentThreadId: state.currentThreadId,
        entities: Object.assign({}, state.entities, {
          [thread.threadId]: thread
        })
      };
    }
    case ThreadActions.ADD_ARTICLE: {
      const thread = (<ThreadActions.AddArticleAction>action).thread;
      const article = (<ThreadActions.AddArticleAction>action).article;
      const newArticle = Object.assign({}, article, {});
      // grab the old thread from entities
      const oldThread = state.entities[thread.threadId];

      // create a new thread which has new Article
      const newThread = Object.assign({}, oldThread, {
        articles: [...oldThread.articles, newArticle]
      });

      return {
        ids: state.ids,
        currentThreadId: state.currentThreadId,
        entities: Object.assign({}, state.entities, {
          [thread.threadId]: newThread
        })
      };
    }
    case ThreadActions.SELECT_THREAD: {
      const thread = (<ThreadActions.SelectThreadAction>action).thread;
      const oldThread = state.entities[thread.threadId];

      const newThread = Object.assign({}, oldThread, {});

      return {
        ids: state.ids,
        currentThreadId: thread.threadId,
        entities: Object.assign({}, state.entities, {
          [thread.threadId]: newThread
        })
      };
    }
    default:
      return state;
  }
};
