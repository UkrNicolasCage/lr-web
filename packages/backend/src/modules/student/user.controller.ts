/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { Controller, Delete, Get, Req, Res, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { USER_KEYS } from '../../constants/controlles-keys.const'
import { JwtAuthGuard } from '../../guards/auth.guard'
import { UserService } from './user.service'
import { IAuthenticatedRequest } from '../../typings/auth.types'

@UseGuards(JwtAuthGuard)
@ApiTags(USER_KEYS.USERS)
@Controller(USER_KEYS.USERS)
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('')
    public async getUser(@Req() req: IAuthenticatedRequest, @Res() res: Response): Promise<void> {
        res.send(
            await this.userService.getUser({
                id: req.user.id,
            }),
        )
    }

    @Delete(USER_KEYS.ME)
    public async deleteUser(@Req() req: IAuthenticatedRequest, @Res() res: Response): Promise<void> {
        res.send(await this.userService.deleteUser(req.user.id, res))
    }
}
