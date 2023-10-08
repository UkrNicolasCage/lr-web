/* eslint-disable @typescript-eslint/unbound-method */

import { ExtractJwt, Strategy } from 'passport-jwt'
import type { CookieOptions, Request as RequestType, Response } from 'express'

import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { COOCKY_CONFIG } from '../../../constants'

export const enum TOKEN_TYPES {
    JWT = 'jwt',
    JWT_REFRESH = 'jwt-refresh',
}

const AUTH_COOKIE_EXP_TIME_IN_DAYS = 365

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWT]),
            ignoreExpiration: false,
            secretOrKey: `${process.env['PUBLIC_KEY']!.replace(/\\\\n/gm, '\\n')}`,
            algorithms: ['RS256'],
            passReqToCallback: true,
        })
    }

    private static extractJWT(req: RequestType): string | null {
        if (req.cookies && 'jwt' in req.cookies) {
            return req.cookies.jwt
        }

        return null
    }

    public async validate(req: RequestType, payload: any): Promise<any> {
        return {
            ...payload,
            req,
        }
    }

    public static generateTokens(
        id: string,
        role?: string,
        stripeCustomerId?: string,
    ): {
        jwt: string
        jwtRefresh: string
    } {
        const jwtService = new JwtService()

        const jwt = jwtService.sign(
            {
                id,
                role,
                stripeCustomerId,
            },
            {
                expiresIn: 60 * 10,
                algorithm: 'RS256',
                privateKey: process.env['PRIVATE_KEY']!.replace(/\\n/gm, '\n'),
            },
        )

        const jwtRefresh = jwtService.sign(
            {
                id,
            },
            {
                expiresIn: 60 * 60 * 24 * 7,
                algorithm: 'RS256',
                privateKey: process.env['PRIVATE_REFRESH_KEY']!.replace(/\\n/gm, '\n'),
            },
        )

        return {
            jwt,
            jwtRefresh,
        }
    }

    public static setAuthCookies(res: Response, jwt: string, jwtRefresh: string): void {
        const ed = new Date(new Date().setDate(new Date().getDate() + AUTH_COOKIE_EXP_TIME_IN_DAYS))

        const o: CookieOptions = {
            ...COOCKY_CONFIG,
            expires: ed,
        }

        res.cookie(TOKEN_TYPES.JWT, jwt, o)
        res.cookie(TOKEN_TYPES.JWT_REFRESH, jwtRefresh, o)
    }

    public static clearAuthCookies(res: Response): void {
        res.clearCookie(TOKEN_TYPES.JWT, COOCKY_CONFIG)
        res.clearCookie(TOKEN_TYPES.JWT_REFRESH, COOCKY_CONFIG)
    }

    public static extractAuthCookie(req: RequestType, k: TOKEN_TYPES): string | null {
        if (Boolean(req.cookies) && k in req.cookies) {
            return req.cookies[k]
        }

        return null
    }
}
