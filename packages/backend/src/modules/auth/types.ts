export interface ICreateUser {
    email: string
    password: string
}

export interface ILoginRes {
    isAuth: boolean
}

export interface ISetNewPasswordRes  {
    isReset: boolean
}