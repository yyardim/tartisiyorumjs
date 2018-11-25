import { Action, ActionCreator } from 'redux';
import * as uuid from 'uuid';
import { Thread } from './thread.model';
import { Article } from '../article/article.model';

export const ADD_THREAD = '[Thread] Add';
export interface AddThreadAction extends Action {
  thread: Thread;
}
export const addThread: ActionCreator<AddThreadAction> = (thread) => ({
  type: ADD_THREAD,
  thread: thread
});

export const ADD_ARTICLE = '[Thread] Add Article';
export interface AddArticleAction extends Action {
  thread: Thread;
  article: Article;
}
export const addArticle: ActionCreator<AddArticleAction> = (thread: Thread, articleArgs: Article): AddArticleAction => {
  const defaults = {
    articleId: uuid.v4(),
    created: new Date(),
    thread: thread,
    isFlagged: false,
    isDeleted: false,
    isPosted: false
  };
  const article: Article = Object.assign({}, defaults, articleArgs);

  return {
    type: ADD_ARTICLE,
    thread: thread,
    article: article
  };
};

export const SELECT_THREAD = '[Thread] Select';
export interface SelectThreadAction extends Action {
  thread: Thread;
}
export const selectThread: ActionCreator<SelectThreadAction> = (thread) => ({
  type: SELECT_THREAD,
  thread: thread
});
