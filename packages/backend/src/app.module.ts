import {PrismaModule, loggingMiddleware,} from 'nestjs-prisma'
import { Logger, Module,} from '@nestjs/common'
import {ConfigModule,} from '@nestjs/config'
import {ThrottlerModule,} from '@nestjs/throttler'
import { JwtModule, } from '@nestjs/jwt'
import { ScheduleModule } from '@nestjs/schedule'

import { AuthModule, } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { GroupModule } from './modules/group/group.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        },),
        PrismaModule.forRoot({
            isGlobal:             true,
            prismaServiceOptions: {
                middlewares: [
                    loggingMiddleware({
                        logger:   new Logger('PrismaMiddleware',),
                        logLevel: 'log',
                    },),
                ],
            },

        },),
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 10000,
        }),
        ScheduleModule.forRoot(),
        JwtModule.register({
        },),

        AuthModule,
        UserModule,
        GroupModule

    ],
},)
export class AppModule {}
