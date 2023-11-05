import { Request, Response } from 'express'
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { AuthService } from './services/auth.service'
import { JWTService } from './services'
import { AuthCredsDto } from './dto'
import { AUTH_KEYS } from 'src/constants'

@ApiTags(AUTH_KEYS.AUTH)
@Controller(AUTH_KEYS.AUTH)
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JWTService,
    ) {}

    @Get(AUTH_KEYS.CHECK)
    public async check(@Res() res: Response, @Req() req: Request): Promise<void> {
        res.send(await this.authService.checkJWT(req))
    }

    @Post(AUTH_KEYS.SIGNIN)
    public async signIn(@Body() {email, password}: AuthCredsDto, @Res() res: Response): Promise<void> {
        res.send(await this.authService.signIn({
            email, password
        }, res))
    }

    @Post(AUTH_KEYS.LOGOUT)
    public async logout(@Res() res: Response): Promise<void> {
        await this.jwtService.clearAuthCookies(res)
        res.send({
            msg: 'Successfully logged out',
        })
    }
}
