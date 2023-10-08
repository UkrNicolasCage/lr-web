import type { IUser } from './user.types';

export interface IAuthData {
    auth: boolean;
    user: null | IUser;
}

export interface IAuthCreds {
    email: string;
    password: string;
}

export interface ISignUpCreds extends IAuthCreds {
    confirmPassword: string;
}