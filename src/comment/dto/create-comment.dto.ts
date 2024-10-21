import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    @IsDate()
    creationDate: Timestamp;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    userPostId: number;
}
