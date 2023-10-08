import {PrismaService,} from 'nestjs-prisma'
import {BadRequestException, Injectable,} from '@nestjs/common'
import type {User, Prisma,} from '@prisma/client'
import type {Response,} from 'express'

import type {TUsersListRes,} from './types'
import {TOKEN_TYPES,} from '../auth/strategy/jwt.strategy'
import {COOCKY_CONFIG,} from '../../constants'

@Injectable()
export class UserService {
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
  },): Promise<TUsersListRes> {
        const {skip = 0, take = 10,} = params

        const [total, list,] = await this.prisma.$transaction([
            this.prisma.user.count(),
            this.prisma.user.findMany({
                skip,
                take,
            },),
        ],)
        return {
            total,
            list,
        }
    }

    public async createUser({ email, password}: Partial<User>): Promise<User> {
        const user = await this.prisma.user.create({
            data: {
                email: email!,
                password: password!,
            },

        },)

        return user
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
}
