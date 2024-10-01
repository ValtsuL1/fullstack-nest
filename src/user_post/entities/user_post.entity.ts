import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class UserPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '100'})
    title: string;

    @Column({type: 'varchar', length: '2000'})
    content: string;

    @Column()
    userId: number;

    @Column({type: 'timestamp without time zone'})
    creationDate: Timestamp;

    @ManyToOne(() => User, (user) => user.userPosts)
    user: User
}
