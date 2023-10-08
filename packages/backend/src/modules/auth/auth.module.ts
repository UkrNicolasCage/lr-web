import { PrismaService } from 'nestjs-prisma'
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerGuard} from '@nestjs/throttler'
import { PassportModule } from '@nestjs/passport'

import { JWTService, AuthService } from './services'
import { JwtStrategy } from './strategy/jwt.strategy'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'

@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
    })],
    providers: [AuthService,  PrismaService, JWTService, JwtStrategy, {
        provide: APP_GUARD,
        useClass: ThrottlerGuard,
    },],
    controllers: [AuthController,],
})
export class AuthModule {}
