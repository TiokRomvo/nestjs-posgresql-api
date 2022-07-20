import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class RegisterUserDto {
  readonly id: number;

  @IsString()
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @MaxLength(40)
  readonly username: string;

  @IsEmail()
  readonly email: string;
  
  @IsNumber()
  readonly phone: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  password: string;
}
