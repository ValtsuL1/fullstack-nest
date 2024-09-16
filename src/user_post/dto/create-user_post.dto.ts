import { IsNotEmpty } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateUserPostDto {
    @IsNotEmpty()
    title: string;

    content: string;

    userId: number;

    creationDate: Timestamp;
}
