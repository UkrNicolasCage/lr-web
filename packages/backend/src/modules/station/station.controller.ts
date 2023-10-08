import { Body, Controller, Get, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { STATIONS_KEYS } from '../../constants'
import { StationService } from './station.service'

@ApiTags(STATIONS_KEYS.STATIONS)
@Controller(STATIONS_KEYS.STATIONS)
export class StationController {
    constructor(
        private readonly stationSeevice: StationService,
    ) {}

    @Get('')
    public async getAll(@Res() res: Response,): Promise<void> {
        res.send(await this.stationSeevice.getStations())
    }

    @Get('/:id')
    public async getById(@Res() res: Response, @Body() {id}: {id: string}): Promise<void> {
        res.send(await this.stationSeevice.getStationById(id))
    }
}
