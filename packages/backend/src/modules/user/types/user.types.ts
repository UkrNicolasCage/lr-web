import type { User } from '@prisma/client'

export type TUsersListRes = {
    total: number
    list: Array<Partial<User>>
}

export type Role = 'ADMIN' | 'USER' | 'GROUP_LEADER'

export type Gender = 'MALE' | 'FEMALE'

export interface ICreateUser {
    email: string
    password: string
    firstName: string
    lastName: string
    gender: Gender
    birthday: string
    role: Role
    groupId?: string
    privilege?: boolean
}

