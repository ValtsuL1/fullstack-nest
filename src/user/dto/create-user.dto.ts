import { IsDate, IsEmail, IsNotEmpty, isString, IsString, Matches, MinLength } from "class-validator";
import { Timestamp } from "typeorm";

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Matches(passwordRegEx)
    password: string;

    @IsNotEmpty()
    @IsDate()
    creationDate: Timestamp;

    @IsNotEmpty()
    @IsString()
    role: string

    @IsNotEmpty()
    @IsString()
    state: string
}
