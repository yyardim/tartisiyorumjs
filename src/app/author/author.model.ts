import { Base } from '../core/base.model';

export interface Author extends Base {
  authorId: string;
  userName: string;
  email: string;
  phoneNumber: string;
  isSuspended: boolean;
  isActive: boolean;
}
