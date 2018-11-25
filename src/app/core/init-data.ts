import * as Redux from 'redux';
import { AppState } from '../app.reducer';
import uuidv4 from 'uuid/v4';
import * as moment from 'moment';
import { Thread } from '../thread/thread.model';
import * as ThreadActions from '../thread/thread.actions';
import { Author } from '../author/author.model';
import * as AuthorActions from '../author/author.actions';
import { Article } from '../article/article.model';

const me: Author = {
  authorId: uuidv4(),
  userName: 'yy',
  email: 'yyardim@gmail.com',
  isActive: true,
  isSuspended: false,
  phoneNumber: '770.841.8909'
};

const guy1: Author = {
  authorId: uuidv4(),
  userName: 'guy1',
  email: 'guy1@gmail.com',
  isActive: true,
  isSuspended: false,
  phoneNumber: '770.841.8901'
};

const guy2: Author = {
  authorId: uuidv4(),
  userName: 'guy2',
  email: 'guy2@gmail.com',
  isActive: true,
  isSuspended: false,
  phoneNumber: '770.841.8902'
};

const tYy: Thread = {
  threadId: uuidv4(),
  subject: 'thread 1',
  author: me,
  articles: new Array as Array<Article>
};
const tGuy1: Thread = {
  threadId: uuidv4(),
  subject: 'thread 2',
  author: guy1,
  articles: new Array as Array<Article>
};
const tGuy2: Thread = {
  threadId: uuidv4(),
  subject: 'thread 3',
  author: guy2,
  articles: new Array as Array<Article>
};

export function InitData(store: Redux.Store<AppState>) {
  console.log('\'bout to start dispatch in InitData;');
  // set the current user
  store.dispatch(AuthorActions.setCurrentAuthor(me));

  // create a new thread and add messages
  store.dispatch(ThreadActions.addThread(tYy));
  store.dispatch(ThreadActions.addArticle(tYy, {
    author: me,
    content: 'so let\'s talk about everything and then nothing. This is a thing, no?',
    isPosted: true
  }));
  store.dispatch(ThreadActions.addArticle(tYy, {
    author: guy1,
    content: 'so let\'s talk about nothing. Absolutely nothing!!!',
    isPosted: true
  }));
  store.dispatch(ThreadActions.addArticle(tYy, {
    author: guy2,
    content: 'so let\'s talk about nothing. Absolutely nothing!!!',
    isPosted: true
  }));

  // create more threads
  store.dispatch(ThreadActions.addThread(tGuy1));
  store.dispatch(ThreadActions.addArticle(tGuy1, {
    author: me,
    content: 'so let\'s talk about nothing. This is a thing, no?',
    isPosted: true
  }));
  store.dispatch(ThreadActions.addArticle(tGuy1, {
    author: guy1,
    content: 'so let\'s talk about everything. Absolutely nothing!!!',
    isPosted: true
  }));
  store.dispatch(ThreadActions.addArticle(tGuy1, {
    author: guy2,
    content: 'so let\'s talk about nothing. Maybe nothing!!!',
    isPosted: true
  }));

  store.dispatch(ThreadActions.addThread(tGuy2));
  store.dispatch(ThreadActions.addArticle(tGuy2, {
    author: me,
    content: 'so let\'s talk about nothing. This is a thing, no?',
    isPosted: true
  }));
  store.dispatch(ThreadActions.addArticle(tGuy2, {
    author: tGuy1,
    content: 'so let\'s talk about. Absolutely!!!',
    isPosted: true
  }));
  store.dispatch(ThreadActions.addArticle(tGuy2, {
    author: tGuy2,
    content: 'so let\'s kill them all. All of them!!!',
    isPosted: true
  }));
  store.dispatch(ThreadActions.addArticle(tGuy2, {
    author: tGuy1,
    content: 'so let\'s talk about nothing. Absolutely everything!!!',
    isPosted: true
  }));

  //

}




