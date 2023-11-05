/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { Body, Controller, Delete, Get, Patch, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { USER_KEYS } from '../../constants/controlles-keys.const'
import { IAuthenticatedRequest } from '../../typings/auth.types'
import { JwtAuthGuard } from '../../guards/auth.guard'
import { UserService } from './user.service'
import { UserDto} from './dto/user-dto'
import { CreateGroupDto } from '../group/dto'
import { CreateUserDto } from './dto'

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

    @Post('')
    public async createUser(@Req() req: IAuthenticatedRequest, @Res() res: Response, @Body() body: CreateUserDto): Promise<void> {
        res.send(
            await this.userService.createUser(body),
        )
    }

    @Patch('')
    public async updateUser(@Req() req: IAuthenticatedRequest, @Res() res: Response, @Body() body: UserDto): Promise<void> {
        res.send(
            await this.userService.updateUser({
                ...body,
            }),
        )
    }

    @Delete('')
    public async deleteUser(@Req() req: IAuthenticatedRequest, @Res() res: Response): Promise<void> {
        res.send(await this.userService.deleteUser(req.user.id, res))
    }
}
