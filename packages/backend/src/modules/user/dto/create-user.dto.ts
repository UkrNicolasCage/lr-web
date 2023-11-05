import { ApiProperty } from '@nestjs/swagger'

import { IsBoolean, IsEmail, IsString } from 'class-validator'
import { Gender, Role } from '../types'

export class CreateUserDto {
    @IsString()
    @ApiProperty()
    public groupId!: string

    @IsEmail()
    @ApiProperty()
    public email!: string

    @IsString()
    @ApiProperty()
    public firstName!: string

    @IsString()
    @ApiProperty()
    public lastName!: string

    @IsString()
    @ApiProperty()
    public gender!: Gender

    @IsString()
    @ApiProperty()
    public birthday!: string

    @IsBoolean()
    @ApiProperty()
    public privilege!: boolean

    @IsString()
    @ApiProperty()
    public role!: Role

    @IsString()
    @ApiProperty()
    public password!: string
}

