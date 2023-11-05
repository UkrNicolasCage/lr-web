import { Gender, Role } from './common.types';

export interface IUser {
    id: string;
    createdAt: string;
    email: string;
    firstName: string;
    lastName: string;
    groupId: string;
    gender: Gender;
    role: Role;
    birthday: string;
    privilege: boolean;
}

export interface ICreateUser {
    email: string
    password: string
    firstName: string
    lastName: string
    gender: Gender
    birthday: string
    role: Role
    groupId: string
    privilege: boolean
}

export type IUpdateUser = Partial<ICreateUser>
