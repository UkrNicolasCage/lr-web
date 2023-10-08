import {  HttpException, HttpStatus, Injectable } from '@nestjs/common'
import type { Request, Response } from 'express'
import type { User } from '@prisma/client'
import { JwtService as PassportService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import type { ICreateUser } from './../types'
import { JWTService } from './jwt.service'
import { UserService } from '../../user/user.service'
import { ERROR_MESSAGES } from '../../../constants'

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JWTService,
        private readonly passportService: PassportService,
    ) {}

    public async signUp({ email, password}: ICreateUser, res: Response): Promise<Partial<User>> {
        const oldUser = await this.userService.getUser({
            email,
        })

        if (oldUser) {
            throw new HttpException(
                {
                    email: ERROR_MESSAGES.USER_ALREADY_EXISTS,
                },
                HttpStatus.BAD_REQUEST,
            )
        }

        const hash = await bcrypt.hash(password, 10)

        const newUser = await this.userService.createUser({
            email,
            password: hash,
        })

        this.jwtService.generateToken(newUser, res)

        const { password: deletePswd, ...returnUser} = newUser

        return returnUser
    }

    public async signIn({ email, password }: ICreateUser, res: Response): Promise<Partial<User>> {
        const user = await this.userService.getUser({
            email,
        })

        if (!user) {
            throw new HttpException(
                {
                    email: ERROR_MESSAGES.EMAIL_NOT_EXISTS,
                },
                HttpStatus.NOT_FOUND,
            )
        }

        const isPasswordValid = await bcrypt.compare(password, user.password!)

        if (!isPasswordValid) {
            throw new HttpException(
                {
                    password: ERROR_MESSAGES.PASSWORD_INCORRECT,
                },
                HttpStatus.NOT_FOUND,
            )
        }

        this.jwtService.generateToken(user, res)

        const { password: deletePswd, ...returnUser} = user

        return returnUser
    }

    public async checkJWT(req: Request): Promise<{ auth: boolean; user: User | null }> {
        if (Boolean(req.cookies.jwt)) {
            const decodedJWT = this.passportService.decode(req.cookies.jwt) as { id: string }

            const user = await this.userService.getUser({
                id: decodedJWT.id,
            })
            return {
                auth: Boolean(user),
                user,
            }
        }
        return {
            auth: false,
            user: null,
        }
    }
}
