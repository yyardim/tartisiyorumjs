import { Base } from '../core/base.model';
import { Author } from '../author/author.model';
import { Article } from '../article/article.model';

export interface Thread extends Base {
  threadId: string;
  subject: string;
  author: Author;
  articles: Article[];
}
