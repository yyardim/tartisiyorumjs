import { Author } from './author.model';
import { Action } from 'redux';
import * as AuthorActions from './author.actions';

/*
  this branch of the state tree could hold information about all of the users,
  when they were last seens, their idle time, etc.
*/

export interface AuthorsState {
  currentAuthor: Author;
}

const initialState: AuthorsState = {
  currentAuthor: null
};

export const AuthorsReducer = (state: AuthorsState = initialState, action: Action): AuthorsState => {
  switch (action.type) {
    case AuthorActions.SET_CURRENT_AUTHOR:
      const author: Author = (<AuthorActions.SetCurrentAuthorAction>action).author;
      return {
        currentAuthor: author
      };
    default:
      return state;
  }
};
