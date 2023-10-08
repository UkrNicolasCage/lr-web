import type { Schedule } from '@prisma/client'

export interface IGetSchedulesParams {
    search: string
    limit: string
    offset: string
    sortBy: keyof Schedule
    order: 'asc' | 'desc'
}

export interface IGetSchedulesRes {
    schedules: Array<Schedule>
    totalPages: number
    currentPage: number

}