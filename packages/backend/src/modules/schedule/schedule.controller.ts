import { Request, Response } from 'express'
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res } from '@nestjs/common'
import { ApiQuery, ApiTags } from '@nestjs/swagger'

import { SCHEDULE_KEYS } from 'src/constants'
import { ScheduleService } from './schedule.service'
import { IGetSchedulesParams } from './types'
import type { Schedule } from '@prisma/client'

@ApiTags(SCHEDULE_KEYS.SCHEDULES)
@Controller(SCHEDULE_KEYS.SCHEDULES)
export class ScheduleController {
    constructor(
        private readonly scheduleSeevice: ScheduleService,
    ) {}

    @Get('')
    @ApiQuery({
        name: 'limit',
        required: true,
    })
    @ApiQuery({
        name: 'offset',
        required: true,
    })
    @ApiQuery({
        name: 'search',
        required: false,
    })
    @ApiQuery({
        name: 'sortBy',
        required: true,
    })
    @ApiQuery({
        name: 'order',
        required: true,
    })
    public async getAll(@Res() res: Response, @Req() req: Request,  @Query() query: IGetSchedulesParams): Promise<void> {
        res.send(await this.scheduleSeevice.getSchedules(query))
    }

    @Get(SCHEDULE_KEYS.ONE)
    public async getById(@Res() res: Response, @Param() {id}: {id: string}): Promise<void> {
        res.send(await this.scheduleSeevice.getScheduleById(id))
    }

    @Post('')
    public async create(@Res() res: Response, @Body() data: Partial<Schedule>): Promise<void> {
        res.send(await this.scheduleSeevice.createSchedule(data))
    }

    @Patch(SCHEDULE_KEYS.ONE)
    public async update(@Res() res: Response,
    @Body() data: Partial<Schedule>, @Param() {id}: {id: string}): Promise<void> {
        res.send(await this.scheduleSeevice.updateSchedule(id, data))
    }

    @Delete(SCHEDULE_KEYS.ONE)
    public async delete(@Res() res: Response, @Param() {id}: {id: string}): Promise<void> {
        res.send(await this.scheduleSeevice.deleteSchedule(id))
    }
}
