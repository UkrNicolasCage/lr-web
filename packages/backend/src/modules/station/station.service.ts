import type { OnModuleInit } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import type { Station } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class StationService implements OnModuleInit {
    constructor(
      private readonly prisma: PrismaService,
    ) {}

    public async getStations(): Promise<Array<Station>> {
        return this.prisma.station.findMany()
    }

    public async getStationById(id: string): Promise<Station | null>  {
        return this.prisma.station.findFirst({
            where: {
                id,
            },
        })
    }

    public async onModuleInit(): Promise<void> {
        const stations = await this.prisma.station.findMany()

        if (stations.length > 0) {
            return
        }

        for (let i = 1; i < 8; i++) {
            await this.prisma.station.create(
                {
                    data: {
                        name: `Station ${i}`,
                    }
                }
            )
        }
    }
}
