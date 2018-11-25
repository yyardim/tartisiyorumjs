import { Base } from '../core/base.model';
import { Author } from '../author/author.model';
import { Thread } from '../thread/thread.model';

export interface Article extends Base {
  articleId: string;
  parentArticleId: string;
  author: Author;
  thread: Thread;
  content: string;
  draftContent: string;
  isFlagged: boolean;
  isDeleted: boolean;
  isPosted: boolean;
}
