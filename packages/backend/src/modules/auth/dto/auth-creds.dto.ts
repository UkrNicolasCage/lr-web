import { ApiProperty } from '@nestjs/swagger'

import { IsEmail, IsString } from 'class-validator'

export class AuthCredsDto {
    @IsEmail()
    @ApiProperty()
    public email!: string

    @ApiProperty()
    @IsString()
    public password!: string
}
