import { Action, ActionCreator } from 'redux';
import { Author } from './author.model';

export const SET_CURRENT_AUTHOR = '[Author] Set Current';
export interface SetCurrentAuthorAction extends Action {
  author: Author;
}

export const setCurrentAuthor: ActionCreator<SetCurrentAuthorAction> = (author) => ({
  type: SET_CURRENT_AUTHOR,
  author: author
});
