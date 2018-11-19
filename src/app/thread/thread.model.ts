import { Author } from '../author/author.model';

export interface Thread {
  threadId: string;
  subject: string;
  author: Author;
}
