import { PrismaService } from 'nestjs-prisma'
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '../user/user.module'
import { StationService } from './station.service'
import { StationController } from './station.controller'

@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
    })],
    providers: [StationService,  PrismaService],
    controllers: [StationController],
})
export class StationModule {}
