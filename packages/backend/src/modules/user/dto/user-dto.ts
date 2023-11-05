import { ApiProperty } from '@nestjs/swagger'

import { IsEmail, IsString } from 'class-validator'

export class UserDto {
    @IsString()
    @ApiProperty()
    public id!: string

    @IsEmail()
    @ApiProperty()
    public email?: string

    @IsString()
    @ApiProperty()
    public firstName?: string

    @IsString()
    @ApiProperty()
    public lastName?: string

    @IsString()
    @ApiProperty()
    public gender?: string

    @IsString()
    @ApiProperty()
    public dateOfBirth?: string
}

