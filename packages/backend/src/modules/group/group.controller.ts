/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { Body, Controller, Get, Query, Res, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { GROUP_KEYS } from '../../constants'
import { JwtAuthGuard } from '../../guards/auth.guard'
import { GroupService } from './group.service'
import { Response } from 'express'
import { CreateGroupDto } from './dto'

@UseGuards(JwtAuthGuard)
@ApiTags(GROUP_KEYS.GROUPS)
@Controller(GROUP_KEYS.GROUPS)
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @Get('/:id')
    public async create(@Res() res: Response, @Body() data: CreateGroupDto): Promise<void> {
        res.send(await this.groupService.create(data))
    }

    @Get('/:id')
    public async getAll(@Res() res: Response): Promise<void> {
        res.send(await this.groupService.getAll())
    }

    @Get('/:id')
    public async getOne(@Res() res: Response, @Query('id') id: string): Promise<void> {
        res.send(await this.groupService.getOne(id))
    }
}
