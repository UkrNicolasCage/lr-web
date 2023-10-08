import type { CookieOptions } from 'express'
import type { TSameSite } from '../typings/auth.types'

export const COOCKY_CONFIG = {
    path: '/',
    httpOnly: true,
    sameSite: process.env['SAME_SITE'] as TSameSite,
    secure: true,
} satisfies CookieOptions
