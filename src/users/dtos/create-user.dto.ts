import { IsString, IsNotEmpty, IsEmail, MinLength, Matches } from 'class-validator';
import { MaxLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()   
    @MinLength(3)
    @MaxLength(20)
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(20)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: 'password must contain at least one uppercase letter, one lowercase letter, one number and one special character' })
    password: string;
}