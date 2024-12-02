import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateChatMessageDto {
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
    receiverId: number;
}
