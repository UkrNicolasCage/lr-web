import type { User } from '@prisma/client'

export type TUsersListRes = {
    total: number
    list: Array<User>
}
