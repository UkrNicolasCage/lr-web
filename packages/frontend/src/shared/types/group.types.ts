import { IUser } from './user.types';

export interface IGroup {
  id: string;
  name: string;
  users?: Array<IUser>;
}

export interface ICreateGroup {
  name: string;
}

export type IUpdateGroup = Partial<ICreateGroup> & { leaderId: string };

