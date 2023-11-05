import { PrismaService } from 'nestjs-prisma'
import { Injectable, } from '@nestjs/common'
import type { Group } from '@prisma/client'
import type { CreateGroupDto } from './dto'

@Injectable()
export class GroupService {
    constructor(
    private readonly prisma: PrismaService,
    ) {}

    public async create(data: CreateGroupDto): Promise<Group> {
        return this.prisma.group.create({
            data,
        },)
    }

    public async getAll(): Promise<Array<Group>> {
        return this.prisma.group.findMany()
    }

    public async getOne(id: string): Promise<Group | null> {
        return this.prisma.group.findUnique({
            where: {
                id,
            },
        },)
    }

    public async updateLeader(id: string, leaderId: string): Promise<Group | null> {
        const leader = await this.prisma.user.findFirst({
            where: {
                id: leaderId,
                groupId: id,
            },
        },)

        if (!leader) {
            throw new Error('User is not a member of the group')
        }

        return this.prisma.group.update({
            where: {
                id,
            },
            data: {
                leaderId,
            },
        },)
    }
}
