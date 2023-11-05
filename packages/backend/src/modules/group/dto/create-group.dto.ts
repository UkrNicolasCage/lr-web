import { IsString, Length } from 'class-validator'
export class CreateGroupDto {
  @IsString()
  @Length(3, 20)
    public name!: string
}