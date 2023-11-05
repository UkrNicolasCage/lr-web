import { Injectable } from '@nestjs/common'
import type {User} from '@prisma/client'
import type { Response } from 'express'

import { JwtStrategy, TOKEN_TYPES } from '../strategy/jwt.strategy'
import { COOCKY_CONFIG } from '../../../constants'

@Injectable()
export class JWTService {
    constructor(
    ) {}

    public generateToken(user: User, res: Response): void {
        const { jwt, jwtRefresh } = JwtStrategy.generateTokens(user.id, user.role)
        if (jwt && jwtRefresh) {
            JwtStrategy.setAuthCookies(res, jwt, jwtRefresh)
        }
    }

    public async clearAuthCookies(res: Response): Promise<void> {
        res.clearCookie(TOKEN_TYPES.JWT, COOCKY_CONFIG)
        res.clearCookie(TOKEN_TYPES.JWT_REFRESH, COOCKY_CONFIG)
    }
}
