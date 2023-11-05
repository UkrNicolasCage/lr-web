import type { Request } from 'express'

export interface ICookieParse {
    id: string
    role: string
}

export interface IAuthenticatedRequest extends Request {
    user: ICookieParse
}

export type TSameSite = 'none' | 'lax' | 'strict'
