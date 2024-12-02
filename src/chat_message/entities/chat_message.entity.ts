import { User } from "src/user/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

export class ChatMessage {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: '1000'})
    content: string;

    @Column({type: 'timestamp without time zone'})
    creationDate: Timestamp;

    @Column()
    userId: number;

    @Column()
    receiverId: number

    @ManyToOne(() => User, (user) => user.chatMessages)
    user: User
}
