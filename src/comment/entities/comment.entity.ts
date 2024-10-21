import { User } from "src/user/entities/user.entity";
import { UserPost } from "src/user_post/entities/user_post.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '1000'})
    content: string;

    @Column({type: 'timestamp without time zone'})
    creationDate: Timestamp;

    @Column()
    userId: number;

    @Column()
    userPostId: number;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;

    @ManyToOne(() => UserPost, (userPost) => userPost.comments)
    userPost: UserPost;
}
