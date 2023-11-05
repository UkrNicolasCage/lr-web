import { ExtractJwt } from 'passport-jwt'
import type { Observable } from 'rxjs'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'
import type { CanActivate, ExecutionContext } from '@nestjs/common'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import type { Request } from 'express'

import { JwtStrategy, TOKEN_TYPES } from '../modules/auth/strategy/jwt.strategy'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
    constructor(private readonly jwtService: JwtService) {
        super()
        this.jwtService = new JwtService()
    }

    public async validateRequest(payload: string, req: Request): Promise<boolean> {
        const decodedData = this.jwtService.decode(payload)
        if (Boolean(decodedData)) {
            req.user = decodedData!
            return true
        }

        return false
    }

    public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req: Request = context.switchToHttp().getRequest()

        const res = context.switchToHttp().getResponse()

        const at = ExtractJwt.fromExtractors([
            (): string | null => {
                return JwtStrategy.extractAuthCookie(req, TOKEN_TYPES.JWT)
            },
        ])(req)

        try {
            this.jwtService.verify(String(at), {
                publicKey: process.env['PUBLIC_KEY']!.replace(/\\n/gm, '\n'),
            })

            return this.validateRequest(req.cookies.jwt, req)
        } catch {
            const rt = ExtractJwt.fromExtractors([
                (): string | null => {
                    return JwtStrategy.extractAuthCookie(req, TOKEN_TYPES.JWT_REFRESH)
                },
            ])(req)

            try {
                const d = this.jwtService.verify(String(rt), {
                    publicKey: process.env['PUBLIC_REFRESH_KEY']!.replace(/\\n/gm, '\n'),
                })

                const dc = this.jwtService.decode(String(at)) as Record<string, string>

                const { jwt, jwtRefresh } = JwtStrategy.generateTokens(d.id, dc['role'])

                JwtStrategy.setAuthCookies(res, jwt, jwtRefresh)
                return this.validateRequest(req.cookies.jwt, req)
            } catch (err) {
                JwtStrategy.clearAuthCookies(res)
                throw new UnauthorizedException()
            }
        }
    }
}
