import {PrismaService,} from 'nestjs-prisma'
import type { OnModuleInit} from '@nestjs/common'
import {BadRequestException, Injectable} from '@nestjs/common'
import type {User, Prisma,} from '@prisma/client'
import type {Response,} from 'express'
import * as bcrypt from 'bcrypt'

import {TOKEN_TYPES,} from '../auth/strategy/jwt.strategy'
import {COOCKY_CONFIG,} from '../../constants'
import type {ICreateUser, TUsersListRes, } from './types'

@Injectable()
export class UserService implements OnModuleInit {
    constructor(
    private readonly prisma: PrismaService,
    ) {}

    public async getUser(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput
    ): Promise<User | null> {
        try {
            return this.prisma.user.findUnique({
                where:   userWhereUniqueInput,
            },)
        } catch (e) {
            return null
        }
    }

    public async getUserById(id: string,): Promise<User | null> {
        return this.prisma.user.findFirst({
            where:   {
                id,
            }
        },)
    }

    public async checkByEmail(email: string, userId: string,):Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where:   {
                email,
            },
        },)

        if (user && (user.id !== userId)) {
            throw new BadRequestException('User Already exist',)
        }

        return user
    }

    public async getUsers(params: {
    skip?: number;
    take?: number;
    group?: string;
  },): Promise<TUsersListRes> {
        const {skip = 0, take = 10,} = params

        const [total, list,] = await this.prisma.$transaction([
            this.prisma.user.count(),
            this.prisma.user.findMany({
                skip,
                take,
                where: {
                    groupId: params.group,
                },
                select: {
                    birthday: true,
                    email: true,
                    firstName: true,
                    gender: true,
                    lastName: true,
                    role: true,
                    groupId: true,
                    privilege: true,
                    id: true,
                }

            },),
        ],)
        return {
            total,
            list,
        }
    }

    public async createUser({birthday, ...data}: ICreateUser): Promise<Partial<User>> {
        const existUser = await this.prisma.user.findUnique({
            where: {
                email: data.email,
            },
        },)

        if (existUser) {
            throw new BadRequestException('User Already exist',)
        }

        const hash = await bcrypt.hash(data.password, 10,)

        const user = await this.prisma.user.create({
            data: {
                ...data,
                password: hash,
                birthday: new Date(birthday),

            },
        },
        )

        return this.returnWithoutHash(user)
    }

    public async updateUser(payload: Partial<User>): Promise<Partial<User>> {
        const {id, ...data} = payload

        const updatedUser = await this.prisma.user.update({
            where: {
                id,
            },
            data,
        },)

        return this.returnWithoutHash(updatedUser)
    }

    public async deleteUser(id: string, res?:Response,): Promise<void> {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id,
                },
            },)

            if (!user) {
                throw new BadRequestException('Not found',)
            }

            await this.prisma.user.delete({
                where: {
                    id,
                }
            })

            if (res) {
                res.clearCookie(TOKEN_TYPES.JWT, COOCKY_CONFIG,)
                res.clearCookie(TOKEN_TYPES.JWT_REFRESH, COOCKY_CONFIG,)
            }
        } catch (e) {
            await this.prisma.user.delete({
                where: {
                    id,
                },
            },)

            if (res) {
                res.clearCookie(TOKEN_TYPES.JWT, COOCKY_CONFIG,)
                res.clearCookie(TOKEN_TYPES.JWT_REFRESH, COOCKY_CONFIG,)
            }
        }
    }

    public async addToGroup(userId: string, groupId: string,): Promise<Partial<User>> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        },)

        if (!user) {
            throw new BadRequestException('User not found',)
        }

        if (user.groupId === groupId) {
            throw new BadRequestException('User already in group',)
        }

        const updatedUser =  await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                groupId,
            },
        },)

        return this.returnWithoutHash(updatedUser)
    }

    public returnWithoutHash = (user: User): Partial<User> => {
        // eslint-disable-next-line no-unused-vars
        const {password: pswd, ...result} = user

        return result
    }

    public async onModuleInit(): Promise<void> {
        const admin = await this.prisma.user.findFirst({
            where: {
                email: process.env['ADMIN_DEFAULT_EMAIL'],
            }
        })

        if (!admin) {
            await this.createUser({
                email: process.env['ADMIN_DEFAULT_EMAIL']!,
                password: process.env['ADMIN_DEFAULT_PASSWORD']!,
                firstName: process.env['ADMIN_DEFAULT_FIRST_NAME']!,
                lastName: process.env['ADMIN_DEFAULT_LAST_NAME']!,
                birthday: (new Date()).toDateString(),
                gender: 'MALE',
                role: 'ADMIN',
            })
        }
    }
}
