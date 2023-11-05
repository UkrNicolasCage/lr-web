import { PrismaService } from 'nestjs-prisma'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { GroupService } from './group.service'
import { GroupController } from './group.controller'

@Module({
    imports: [
        JwtModule.register({
        }),
    ],
    providers: [GroupService, PrismaService,],
    controllers: [GroupController],
    exports: [GroupService] ,
})
export class GroupModule {}
