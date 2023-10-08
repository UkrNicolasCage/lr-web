/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Injectable, Logger } from '@nestjs/common'
import type { Schedule } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { Cron } from '@nestjs/schedule'

import type { IGetSchedulesParams, IGetSchedulesRes } from './types'
import { getFilteredSchedule } from './utils'

@Injectable()
export class ScheduleService {
    constructor(
      private readonly prisma: PrismaService,
    ) {}

    public async getSchedules(data: IGetSchedulesParams): Promise<IGetSchedulesRes> {
        const schedules =  await this.prisma.schedule.findMany({
            ...getFilteredSchedule(data),
            take: Number(data.limit),
            skip: Number(data.offset),
            orderBy: {
                [data.sortBy]: data.order,
            },

        })

        const count = await this.prisma.schedule.count(getFilteredSchedule(data))

        const totalPages = Math.ceil(count / Number(data.limit))

        return {
            schedules,
            totalPages,
            currentPage: (Number(data.offset) / Number(data.limit)) + 1,
        }
    }

    public async getScheduleById(id: string): Promise<Schedule | null>  {
        return this.prisma.schedule.findFirst({
            where: {
                id,
            },
        })
    }

    public async createSchedule(data: Partial<Schedule>): Promise<Schedule> {
        return this.prisma.schedule.create({
            data:{
                name: data.name!,
                arrival: data.arrival!,
                dispatch: data.dispatch!,
                start: {
                    connect: {
                        id: data.startStationId!,
                    },
                },
                end: {
                    connect: {
                        id: data.endStationId!,
                    },
                },
            }
        })
    }

    public async updateSchedule(id: string, data: Partial<Schedule>): Promise<Schedule> {
        return this.prisma.schedule.update({
            where: {
                id,
            },
            data,
        })
    }

    public async deleteSchedule(id: string): Promise<Schedule> {
        return this.prisma.schedule.delete({
            where: {
                id,
            },
        })
    }

    public async deleteAllSchedules(): Promise<void> {
        await this.prisma.schedule.deleteMany()
    }

    public async deleteExpiredSchedules(): Promise<void> {
        await this.prisma.schedule.deleteMany({
            where: {
                dispatch: {
                    lte: new Date(),
                },
            },
        })
    }

    private readonly logger = new Logger(ScheduleService.name)

    @Cron('* * 2 * * *')
    public async handleCron(): Promise<void> {
        await this.deleteExpiredSchedules()
    }
}
