import type { IGetSchedulesParams } from './types'

export const getFilteredSchedule = ({search, limit, offset, sortBy: sort}: IGetSchedulesParams): any => {
    return {
        where: {
            OR: [
                {
                    name: {
                        contains: search,
                    },
                },
                {
                    start: {
                        name: {
                            contains: search,
                        }
                    },
                },
                {
                    end: {
                        name: {
                            contains: search,
                        }
                    },
                },
            ]
        },

    }
}