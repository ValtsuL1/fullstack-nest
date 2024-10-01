import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateUserPostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    @IsDate()
    creationDate: Timestamp;
}
