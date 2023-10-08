import { PrismaService } from 'nestjs-prisma'
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '../user/user.module'
import { ScheduleService } from './schedule.service'
import { ScheduleController } from './schedule.controller'

@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
    })],
    providers: [ScheduleService,  PrismaService],
    controllers: [ScheduleController],
})
export class ScheduleModule {}
